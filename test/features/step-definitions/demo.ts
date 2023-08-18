import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";
Given(/^Google page is opened$/, async () => {
  await browser.url("https://www.google.com");
});
When(/^Search with(.*)$/, async (SearchItem) => {
  console.log(`SearchItem: ${SearchItem}`);
  let ele = await $(`#APjFqb`);
  await ele.setValue(SearchItem);
  await browser.keys("Enter");
});
Then(/^Click on first search result$/, async () => {
  let ele = await $(`//a[@href='https://webdriver.io/']`);
  ele.click();
});
Then(/^URL should match(.*)$/, async (expectedURL) => {
  console.log(`ExpectedURL: ${expectedURL}`);

  //await expect(browser).toHaveUrl(expectedURL);
  await browser.pause(3000);
  let actualURL = await browser.getUrl();
  console.log(`ActualURL: ${actualURL}`);
  let eurl = `https://webdriver.io/`;
  chai.expect(actualURL).to.equal(eurl);
});
// ExpectedURL:  https://webdriver.io/
// ActualURL: https://webdriver.io/

Given(/^A webpage is opened$/, async () => {
  await browser.url(`/inputs`);
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});

When(/^Perform web Interactios$/, async () => {
  /**
   * 1.Input box
   * Actions:
   * a. Type into input box
   * b. Clear the field and type or just add value
   * c. Click and Type
   * d. Slow Typing
   *
   */
  //let textField = await $(`[type='number']`);
  //await textField.setValue(`12345`);
  //await textField.clearValue();
  /**addValue()-> It will not clear the value before entering any new value to any input field
   * but setValue() will clear the previous value and enter the value which is provided
   */
  //slow typing
  // let strNum = `12345`;
  // await textField.click();
  // for (let i = 0; i <= strNum.length; i++) {
  //   await textField.addValue(strNum.charAt(i));
  //   await browser.keys(strNum.charAt(i))
  //   await browser.pause(1000);
  // }

  // await browser.debug();
});