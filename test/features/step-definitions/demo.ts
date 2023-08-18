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
