import React, { ChangeEvent } from 'react';
import { css } from '@emotion/react';
import { useState } from 'react';

// https://freshdesignweb.com/css-registration-form-templates/
// https://www.begindot.com/best-css-registration-form-templates/
// https://www.bypeople.com/css-form/
// https://designsrock.org/free-css-sign-up-registration-form/

const style = css`
  width: 500px;
  margin: 10px auto;
  padding: 10px;
  border: 7px solid $green-border;
  border-radius: 10px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #444;
  background-color: $back-color;
  box-shadow: 0 0 20px 0 #000000;

  h3 {
    margin: 0 15px 20px;
    border-bottom: 2px solid $green-border;
    padding: 5px 10px 5px 0;
    font-size: 1.1em;
	}

	div{
		margin: 0 0 15px 0;
    border : none;
	}

	label {
    display: inline-block;
    width: 25%;
    text-align: right;
    margin: 10px
	}

	input[type=text], input[type=password] {
    width: 65%;
    font-family: "Lucida Grande","Lucida Sans Unicode",Tahoma,Sans-Serif;
    padding: 5px;
    font-size: 0.9em;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.07);
	}

  input[type=text]:focus, input[type=password]:focus {
		background: #FFFFFF;
	}

	.button {
    font-size: 1em;
    border-radius: 8px;
    padding: 10px;
    border: 1px solid #59B969;
    box-shadow: 0 1px 0 0 #60BD49 inset;
	}
`;

// configuration
const defaultExchangeRate = 0.33;
const defaultShippingCost = 0;

export default function YahooActionJapanCalculator() {

  const [productPrice, setProductPrice] = useState(0);
  const [shippingCost, setShippingCost] = useState(defaultShippingCost);
  const [yahooAuctionFee, setYahooActionFee] = useState(100);
  const [billingFee, setBillingFee] = useState(250);
  const [exchangeRate, setExchangeRate] = useState(defaultExchangeRate)

  const handleProductPriceChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setNumberValue(e.target.value, numberValue => setProductPrice(numberValue));

  const handleShippingCostChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setNumberValue(e.target.value, numberValue => setShippingCost(numberValue));

  const handleYahooAuctionFeeChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setNumberValue(e.target.value, numberValue => setYahooActionFee(numberValue));

  const handleBillingFeeChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setNumberValue(e.target.value, numberValue => setBillingFee(numberValue));

  const handleExchangeRateChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setNumberValue(e.target.value, numberValue => setExchangeRate(numberValue));

  const getTotalPrice = () => ((productPrice + shippingCost + yahooAuctionFee + billingFee) * exchangeRate).toFixed(2);

  return (
    <div>
      <form css={style}>
        <div>
          <label htmlFor="productPrice">* Product price</label>
          <input
            type="text"
            id="productPrice"
            spellCheck="false"
            placeholder="Product price (Highest bidding price)"
            onChange={handleProductPriceChanged}
          />
        </div>
        <div>
          <label htmlFor="shippingCost">Shipping cost</label>
          <input
            type="text"
            id="shippingCost"
            spellCheck="false"
            placeholder={`Optional, default to ${defaultShippingCost}`}
            onChange={handleShippingCostChanged}
          />
          <span className="hint">Shipping cost (In Japan only), search a number in <em>配送方法と送料</em> section</span>
        </div>
        <div>
          <label htmlFor="yahooAuctionFee">Yahoo auction free</label>
          <input
            type="text"
            id="yahooAuctionFree"
            spellCheck="false"
            placeholder="Optional, default to 100 Yen"
            onChange={handleYahooAuctionFeeChanged} />
        </div>
        <div>
          <label htmlFor="billingFee">Billing free</label>
          <input
            type="text"
            id="billingFee"
            spellCheck="false"
            placeholder="Optional, default to 250 Yen"
            onChange={handleBillingFeeChanged} />
          <span className="hint">Billing fee from a provider who deliveries an item from Japan to Thailand</span>
        </div>
        <div>
          <label htmlFor="exchangeRate">Exchange Rate (1 YEN to THB)</label>
          <input
            type="text"
            id="exchangeRate"
            spellCheck="false"
            placeholder={`Optional, default to ${defaultExchangeRate} Yen/THB`}
            onChange={handleExchangeRateChanged}
          />
        </div>
        <div>
          Total price: ({productPrice} + {shippingCost} + {yahooAuctionFee} + {billingFee}) x {exchangeRate} = {getTotalPrice()}
        </div>
      </form>
    </div>
  );
}

function setNumberValue(inputValue: string, setValueState: (numberValue: number) => void) {
  const numberValue = Number(inputValue);
  if (!isNaN(numberValue)) {
    setValueState(numberValue)
  }
}
