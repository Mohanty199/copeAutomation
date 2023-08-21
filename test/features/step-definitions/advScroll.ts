import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";
Given(/^Enter the URL$/, async () => {
  await browser.url(`/`);
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});

Then(/^Scroll to the specific elements$/, async () => {
  /**
     * SCROLLING
     * VISIBLE PORTION
     * windows object
     * 1. scrollBy
     * y->To scroll down one page:
           window.scrollBy(0, window.innerHeight)
        To scroll up:
        window.scrollBy(0, -window.innerHeight);
Using options:
window.scrollBy({
  top: 100,
  left: 100,
  behavior: "smooth",
});
     */
  /**
   * INVISIBLE PORTION
     * 2.scrollTo
     * scrollTo(x-coord, y-coord)
scrollTo(options)
window.scrollTo(0, 1000);
window.scrollTo({
  top: 100,
  left: 100,
  behavior: "smooth",
});
     * document.body.scrollTop/scrollHeight
     */
  //   await browser.execute(() => {
  //     window.scrollBy(0, 1000);
  //     window.scrollBy(0, window.innerHeight);
  //   });
  //   await browser.pause(2000);
  //   await browser.execute(() => {
  //     window.scrollBy(0, -1000);
  //     window.scrollBy(0, -window.innerHeight);
  //   });
  //   await browser.pause(2000);
  //   await browser.execute(() => {
  //     window.scrollTo(0, document.body.scrollHeight);
  //   });
  //   await browser.pause(3000);
  //   await browser.execute(() => {
  //     window.scrollTo(0, document.body.scrollTop);
  //   });
  //   await browser.pause(3000);
  await $(`//a[text()='Amazon Music']`).scrollIntoView();
  await browser.pause(3000);
  await browser.execute(() => {
    window.scrollTo(0, document.body.scrollTop);
  });
  await browser.pause(3000);
  await $(`//span[text()='International top sellers']`).scrollIntoView(false);
  await browser.pause(3000);
});
