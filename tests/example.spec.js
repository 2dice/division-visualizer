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
  await expect(page.getByText('グループ分けタブの内容')).toBeVisible();

  await page.getByRole('button', { name: '等分' }).click();
  await expect(page.getByText('等分タブの内容')).toBeVisible();

  await page.getByRole('button', { name: '数直線' }).click();
  await expect(page.getByText('数直線タブの内容')).toBeVisible();
});
