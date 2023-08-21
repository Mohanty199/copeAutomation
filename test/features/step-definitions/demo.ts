import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";
Given(/^Google page is opened$/, async () => {
  await browser.url("https://www.google.com");
  //console.log(`>> BrowserObj:${JSON.stringify(browser)}`);
});
When(/^Search with(.*)$/, async (SearchItem) => {
  console.log(`SearchItem: ${SearchItem}`);
  let ele = await $(`#APjFqb`);
  await ele.setValue(SearchItem);
  await browser.keys("Enter");
  //console.log(`>> EleObj:${JSON.stringify(ele)}`);
});
Then(/^Click on first search result$/, async () => {
   let ele = await $(`//a[@href='https://webdriver.io/']`);
  //let ele = await $(`<h3>`);
  ele.click();
});
Then(/^URL should match(.*)$/, async (expectedURL) => {
  console.log(`>>>>>ExpectedURL: ${expectedURL}`);

  //await expect(browser).toHaveUrl(expectedURL);
  await browser.pause(3000);
  let actualURL = await browser.getUrl();
  console.log(`>>>>>>ActualURL: ${actualURL}`);
  //let eurl = `https://webdriver.io/`;
  //chai.expect(actualURL).to.eql(expectedURL);
  await browser.waitUntil(async () => {
    return (
      await browser.getTitle() ===
      `WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO`
    );
  },{timeout:20000,interval:500,timeoutMsg:`Failed to load WDIO Webpage:${await browser.getTitle()}`});
  let url = await browser.getUrl();
  console.log(`>>>>>>current URL: ${url}`);
});
// ExpectedURL:  https://webdriver.io/
// ActualURL: https://webdriver.io/

Given(/^A webpage is opened$/, async () => {
  await browser.url(`/frames`);
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
  /**
   * 2.DropDown
   * a. Assert default action is selected
   * b. select by attribute,Text, Index
   * c. get a list of options
   */
  // let dropDownText = await $(`[selected]`);
  // chai.expect(await dropDownText.getText()).to.eql(`Please select an option`);
  //let dropdown = await $(`#dropdown`);
  // await dropdown.selectByAttribute(`value`, `1`);
  // await browser.pause(2000)
  // await dropdown.selectByIndex(2);
  // await browser.pause(2000)
  // await dropdown.selectByVisibleText(`Option 1`);
  // await browser.pause(2000)
  //let allOptions = await $$(`select>option`);
  // for(let i=0;i<allOptions.length;i++ ){
  //   await dropdown.selectByIndex(i)
  //   await browser.pause(2000)
  // }
  // let arr: string[] = [];
  // allOptions.forEach(async (ele) => {
  //   let text = await ele.getText();
  //   console.log(text);
  //   arr.push(text);
  // });
  // await browser.pause(2000)
  // console.log(`>> options Array:${arr}`);
  /**
 * Windows handling
 * Steps:
 * a. Launch the browser
 * b. open another windows
 * c. switch to the window basd on the title
 * d. switch back to the main window 
 
 * Methods used:
 * getTitle()
 * getWindowHandle()
 * getWindowHandles()
 * switchToWindow()
 */
  // await $(`=Click Here`).click();
  // await $(`=Elemental Selenium`).click();
  // let parentWindowHandle = await browser.getWindowHandle();
  // let currentWindowTitle = await browser.getTitle();
  // console.log(`>> currentWindowTitle: ${currentWindowTitle}`);
  // let allWindows = await browser.getWindowHandles();
  // for (let i = 0; i < allWindows.length; i++) {
  //   await browser.switchToWindow(allWindows[i]);
  //   if (
  //     await browser.getTitle() === `Elemental Selenium | Elemental Selenium`
  //   ) {
  //     let childWinText = await $(`<h1>`).getText();
  //     console.log(`>> childWindowText:${childWinText}`);
  //     break;
  //   }
  // }
  // await browser.switchToWindow(parentWindowHandle);
  // let parentWinText = await $(`<h3>`).getText();
  // console.log(`parentWinText:${parentWinText}`);
  //await browser.switchWindow()
  /**
   * handling Alerts
   
   *Methods Used 
   * a. isAlertOpen()
   * b. acceptAlert()
   * c. dismissAlert()
   * d. getAlertText()
   * e. sendAlertText()
   */
  // await $(`button=Click for JS Alert`).click()
  // if(await browser.isAlertOpen()){
  //   await browser.acceptAlert()
  // }
  // await browser.debug()
  /**
   * Upload File
   */
  // await $(`#file-upload`).setValue(
  //   `${process.cwd()}/data/fileupload/dummy.txt`
  // );
  // await $(`#file-submit`).click();
  // await browser.debug()
  /**
   * Frmaes
   *
   *
   */
  //  await $(`=iFrame`).click()
  //  await browser.switchToFrame(await $(`#mce_0_ifr`))
  //  await $(`#tinymce`).click()
  //  //await browser.keys(['Key.ctrl','a'])
  //  await browser.keys(['meta','a'])
  //  await browser.keys('Backspace')
  //  await $(`#tinymce`).setValue(`12345`)
  //  await browser.pause(2000)
  //  await browser.switchToParentFrame()
  //  await browser.debug()
});
