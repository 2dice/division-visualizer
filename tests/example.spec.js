// @ts-check
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.waitForURL('http://localhost:5173/');
});

test('page loads successfully', async ({ page }) => {
  await expect(page).toHaveTitle(/割り算学習アプリ/);
});

test('no console errors or warnings', async ({ page }) => {
  const consoleLogs = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error' || msg.type() === 'warning') {
      consoleLogs.push(msg.text());
    }
  });
  expect(consoleLogs).toEqual([]);
});

test('tabs are visible', async ({ page }) => {
  await expect(
    page.getByRole('button', { name: 'グループ分け' })
  ).toBeVisible();
  await expect(page.getByRole('button', { name: '等分' })).toBeVisible();
  await expect(page.getByRole('button', { name: '数直線' })).toBeVisible();
});

test('switch tabs', async ({ page }) => {
  await page.getByRole('button', { name: 'グループ分け' }).click();
  await page.getByRole('button', { name: '等分' }).click();
  await page.getByRole('button', { name: '数直線' }).click();
});

test('sliders are visible and update calculation', async ({ page }) => {
  const dividendSlider = page.locator('input[type="range"]').first();
  const divisorSlider = page.locator('input[type="range"]').nth(1);

  // スライダーが表示されていること
  await expect(dividendSlider).toBeVisible();
  await expect(divisorSlider).toBeVisible();

  // スライダーの初期値が正しいこと
  await expect(dividendSlider).toHaveValue('12');
  await expect(divisorSlider).toHaveValue('3');

  // 割られる数のスライダーを変更
  await dividendSlider.fill('20');
  await expect(dividendSlider).toHaveValue('20');

  // 割る数のスライダーを変更
  await divisorSlider.fill('5');
  await expect(divisorSlider).toHaveValue('5');
});

test('group division tab', async ({ page }) => {
  // グループ分けタブをクリック
  await page.getByRole('button', { name: 'グループ分け' }).click();

  const dividendSlider = page.locator('input[type="range"]').first();
  const divisorSlider = page.locator('input[type="range"]').nth(1);
  const calculation = page.getByText(/÷/);
  const balls = page.locator('.ball');

  // スライダーの初期値が正しいこと
  await expect(dividendSlider).toHaveValue('12');
  await expect(divisorSlider).toHaveValue('3');
  await expect(calculation).toHaveText('12 ÷ 3 = 4 あまり 0');

  // ボールの数が正しいこと
  await expect(balls).toHaveCount(12);

  // 割られる数を変更
  await dividendSlider.fill('20');
  await expect(dividendSlider).toHaveValue('20');
  await expect(calculation).toHaveText('20 ÷ 3 = 6 あまり 2');
  await expect(balls).toHaveCount(20);

  // 割る数を変更
  await divisorSlider.fill('5');
  await expect(divisorSlider).toHaveValue('5');
  await expect(calculation).toHaveText('20 ÷ 5 = 4 あまり 0');
  await expect(balls).toHaveCount(20);

  // 割る数を変更。余りのボールもカウントする
  await divisorSlider.fill('7');
  await expect(divisorSlider).toHaveValue('7');
  await expect(calculation).toHaveText('20 ÷ 7 = 2 あまり 6');
  const groupedBalls = await page.locator('.group > .ball').count();
  const remainderBalls = await page.locator('.remainder > .ball').count();
  expect(groupedBalls + remainderBalls).toBe(20);
});
