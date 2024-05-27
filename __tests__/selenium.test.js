const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

let driver;

beforeAll(async () => {
  driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless())
    .build();
});

afterAll(async () => {
  await driver.quit();
});

test('Title should be correct', async () => {
  await driver.get('http://localhost:3000');
  const title = await driver.getTitle();
  expect(title).toBe('Expected Page Title');
});

test('Header should be visible', async () => {
  await driver.get('http://localhost:3000');
  const header = await driver.findElement(By.tagName('h1'));
  const isVisible = await header.isDisplayed();
  expect(isVisible).toBe(true);
});

test('Button click should work', async () => {
  await driver.get('http://localhost:3000');
  const button = await driver.findElement(By.id('myButton'));
  await button.click();
  const resultText = await driver.findElement(By.id('result')).getText();
  expect(resultText).toBe('Expected Result');
});

test('Form submission should work', async () => {
  await driver.get('http://localhost:3000');
  const input = await driver.findElement(By.id('myInput'));
  await input.sendKeys('Test Input');
  const form = await driver.findElement(By.id('myForm'));
  await form.submit();
  const successMessage = await driver.findElement(By.id('successMessage')).getText();
  expect(successMessage).toBe('Form submitted successfully!');
});

test('Navigation should work', async () => {
  await driver.get('http://localhost:3000');
  const link = await driver.findElement(By.id('navLink'));
  await link.click();
  const newPageTitle = await driver.getTitle();
  expect(newPageTitle).toBe('Expected New Page Title');
});
