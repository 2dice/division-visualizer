// @ts-check
import { test, expect } from '@playwright/test';

test('page loads successfully', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await expect(page).toHaveTitle(/.*割り算学習アプリ/);
});

test('no console errors or warnings', async ({ page }) => {
  const consoleLogs = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error' || msg.type() === 'warning') {
      consoleLogs.push(msg.text());
    }
  });
  await page.goto('http://localhost:5173/');
  expect(consoleLogs).toEqual([]);
});
