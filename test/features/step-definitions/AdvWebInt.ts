import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";
Given(/^Login into inventory webapp$/, () => {
	return true;
});

Then(/^Inventory page should list <NumberOfProducts> products$/, () => {
	return true;
});

Then(/^Validate all products have valid price$/, () => {
	return true;
});
