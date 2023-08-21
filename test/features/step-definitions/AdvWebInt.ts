import { Given, When, Then } from "@wdio/cucumber-framework";
//import chai from "chai";
import { expect as expectChai } from "chai";
Given(/^Login into inventory webapp$/, async () => {
  await browser.url(`/tables`);
  // let loginFormTag=await $$(`//form//input`)
  // await loginFormTag[0].setValue(`standard_user`)
  // await loginFormTag[1].setValue(`secret_sauce`)
  // await loginFormTag[2].click()
  //await browser.pause(3000)
});

Then(/^Inventory page should list (.*) products$/, async (NumberOfProducts) => {
  // await browser.waitUntil(async()=>{
  // return await browser.getTitle() === `Swag Labs`
  // },{
  // 	timeout:10000,interval:500,timeoutMsg:`>>> Invalid Title:${await browser.getTitle()}`
  // })
  // console.log(`>>>>>>Title: ${await browser.getTitle()}`);
  // console.log(`>>>>>>>NumberOfProducts:${NumberOfProducts}`);
  // let fetchedProduct = await $$(`div.inventory_list>div`).length
  // console.log(`>>>>>>>fetchedProductCount:${fetchedProduct}`);
  // if(!fetchedProduct) throw Error(`Invalid Entry:${NumberOfProducts}`)
  // expectChai(fetchedProduct).to.equal(parseInt(NumberOfProducts))
});

Then(/^Validate all products have valid price$/, async () => {
  // let itemPrices=await $$(`div.inventory_item_price`)
  // let arrPrice:number[] =[]
  // for(let price of itemPrices ){
  // 	const numericPrice = Number((await price.getText()).replace('$', ''));
  // 	if(numericPrice>0){
  // 		arrPrice.push(numericPrice)
  // 	}
  // }
  // console.log(arrPrice);
  // let invaldPriceArray = arrPrice.filter(ele => ele<=0)
  // expectChai(invaldPriceArray.length).to.equal(0)
  //console.log(arrPrice.map(str=>Number(str.replace('$',''))));
  //console.log(arrPrice.map(str=>+str));console.log(arrPrice.map(str=>parseInt(str)))===> For whole Number
  // const pricesAsNumbers = arrPrice.map(priceStr => {
  // 	// Extract the numeric part of the string and convert it to a number
  // 	const numericValue = Number(priceStr.replace('$', ''));
  // 	return numericValue;
  //   });

  //   console.log(pricesAsNumbers);
  /**WEB TABLE */
  /**1.Check no. of rows and columns */
  let numberOfColumns = await $$(`table#table1>thead>tr>th`).length;
  console.log(`>>>>>>>>>nuberOfColumns:${numberOfColumns}`);
  let numberOfRows = await $$(`table#table1>tbody>tr`).length;
  console.log(`>>>>>>>>>nuberOfRows:${numberOfRows}`);

  /**2.Get Whole Table data */
  // let arrCol = await $$(`table#table1>thead>tr>th`)
  // console.log(`>>ColumnData:${await Promise.all(arrCol.map(async str=> await str.getText()))}`)
  // let arrRow = await $$(`table#table1>tbody>tr>td`)
  // console.log(`>>RowData:${await Promise.all (arrRow.map(async str=> await str.getText()))}`);
//   let arr = [];
//   for (let i = 0; i < numberOfRows; i++) {
//     let personObj = {
//       lastname: "",
//       firstname: "",
//       email: "",
//       due: "",
//       web: "",
//       Action: "",
//     };
//     for (let j = 0; j < numberOfColumns; j++) {
//       let cellValue = await $(
//         `//table[@id='table1']/tbody/tr[${i + 1}]/td[${j + 1}]`
//       ).getText();
//       if (j === 0) personObj.lastname = cellValue;
//       if (j === 1) personObj.firstname = cellValue;	
//       if (j === 2) personObj.email = cellValue;
//       if (j === 3) personObj.due = cellValue;
//       if (j === 4) personObj.web = cellValue;
//       if (j === 5) personObj.Action = cellValue;
//     }
//     arr.push(personObj);
//   }

//   console.log(`Whole Table: ${JSON.stringify(arr)}`);

  /**3.Get single row based on a condition */

  let arr = [];
  for (let i = 0; i < numberOfRows; i++) {
    let personObj = {
      lastname: "",
      firstname: "",
      email: "",
      due: "",
      web: "",
      Action: "",
    };
    for (let j = 0; j < numberOfColumns; j++) {
      let cellValue = await $(
        `//table[@id='table1']/tbody/tr[${i + 1}]/td[${j + 1}]`
      ).getText();
	  let firstname = await $(
        `//table[@id='table1']/tbody/tr[${i + 1}]/td[2]`
      ).getText();
	  if(firstname===`Jason`){
      if (j === 0) personObj.lastname = cellValue;
      if (j === 1) personObj.firstname = cellValue;	
      if (j === 2) personObj.email = cellValue;
      if (j === 3) personObj.due = cellValue;
      if (j === 4) personObj.web = cellValue;
      if (j === 5) personObj.Action = cellValue;
	  }
    }if(personObj.firstname) arr.push(personObj);
    
  }
  console.log(`Single Row values: ${JSON.stringify(arr)}`);
  /**4.Get a single column */

  /**5.Get single cell based on another cell */
});
