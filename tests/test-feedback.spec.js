import { test, expect } from '@playwright/test';

test('test-see-feedback', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('textbox', { name: 'Input Field' }).click();
  await page.getByRole('textbox', { name: 'Input Field' }).fill('b6510405351');
  await page.getByRole('textbox', { name: 'Input Field' }).press('Tab');
  await page.getByRole('textbox', { name: 'Input Password' }).fill('210746_Ttt');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('div').filter({ hasText: /^-1 รายละเอียด$/ }).getByRole('button').click();
  await page.getByText('ไม่ระบุตัวตนjjjjjjjjjaaaaaaajajajjajajaj').click();
  const targetElement = await page.getByText('ไม่ระบุตัวตนjjjjjjjjjaaaaaaajajajjajajaj');
  await expect(targetElement).toBeVisible();
});

test('test-send-feedback-anonymously', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('textbox', { name: 'Input Field' }).click();
  await page.getByRole('textbox', { name: 'Input Field' }).fill('b6510405351');
  await page.getByRole('textbox', { name: 'Input Field' }).press('Tab');
  await page.getByRole('textbox', { name: 'Input Password' }).fill('210746_Ttt');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('div').filter({ hasText: /^-1 รายละเอียด$/ }).getByRole('button').click();
  await page.getByRole('textbox', { name: 'เขียน Feedback' }).click();
  await page.getByRole('textbox', { name: 'เขียน Feedback' }).fill('commetn feedback brrab arrasdra');
  
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  await page.getByRole('button', { name: 'ส่ง Feedback แบบไม่ระบุตัวตน' }).click();
  
  // ตรวจสอบว่า element ที่มีข้อความตรงกับที่ต้องการมีอยู่หรือไม่
  const feedbackElement = await page.getByText('ไม่ระบุตัวตนcommetn feedback');
  await expect(feedbackElement).toBeVisible();  // ตรวจสอบว่า element นั้นมีอยู่บนหน้า

  // คลิกที่ element หากมันมีอยู่
  await feedbackElement.click();
});


test('test-send-feedback', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('textbox', { name: 'Input Field' }).click();
  await page.getByRole('textbox', { name: 'Input Field' }).fill('b6510405351');
  await page.getByRole('textbox', { name: 'Input Field' }).press('Tab');
  await page.getByRole('textbox', { name: 'Input Password' }).fill('210746_Ttt');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('div').filter({ hasText: /^-1 รายละเอียด$/ }).getByRole('button').click();
  await page.getByRole('textbox', { name: 'เขียน Feedback' }).click();
  await page.getByRole('textbox', { name: 'เขียน Feedback' }).fill(';saldflaskdfjs;lfslfsadfjslksssfffsjdlksfjlksfjl');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'ส่ง Feedback', exact: true }).click();
  
  // ตรวจสอบว่า element ที่มีข้อความตรงกับที่ต้องการมีอยู่หรือไม่
  const feedbackElement = await page.getByText('Kriengkai;saldflaskdfjs;');
  await expect(feedbackElement).toBeVisible();  // ตรวจสอบว่า element นั้นมีอยู่บนหน้า

  // คลิกที่ element หากมันมีอยู่
  await feedbackElement.click();
});

