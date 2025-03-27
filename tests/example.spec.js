import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('textbox', { name: 'Input Field' }).click();
  await page.getByRole('textbox', { name: 'Input Field' }).fill('b6510405351');
  await page.getByRole('textbox', { name: 'Input Field' }).press('Tab');
  await page.getByRole('textbox', { name: 'Input Password' }).fill('210746_Ttt');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('select[name="location"]').selectOption('11');
  await page.locator('div').filter({ hasText: '1โดย Kriengkai Seethong2025-' }).nth(3).click();
  const targetDiv = await page.locator('div').filter({ hasText: '1โดย Kriengkai Seethong2025-' }).nth(3);
  
  // ตรวจสอบว่า element ที่มีข้อความตรงกับที่ต้องการมีอยู่
  await expect(targetDiv).toBeVisible(); 
});