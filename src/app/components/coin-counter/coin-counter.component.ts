import { Component, OnInit, ViewChild } from '@angular/core';
import { Currency } from 'src/app/models/Currency';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-coin-counter',
  templateUrl: './coin-counter.component.html',
  styleUrls: ['./coin-counter.component.scss']
})
export class CoinCounterComponent implements OnInit {

  // currency lookup values
  currencies: Currency[] = [
    { id: 'rsa', name: 'R - Rands' },
    { id: 'usd', name: '$ - US Dollars' },
    { id: 'eur', name: '€ - Euros' },
    { id: 'gbp', name: '£ - GB Pounds' },
  ];

  // product lookup values
  products: Product[] = [
    { id: '1', name: 'Coca-Cola', price: 45 },
    { id: '2', name: 'Lays Chips', price: 35 },
    { id: '3', name: 'Aero Chocolate', price: 60 },
    { id: '4', name: 'Caramel Biscuits', price: 30 },
  ];

  product: Product = {};
  @ViewChild('currencyValue') currencyValue: any;
  @ViewChild('productValue') productValue: any;
  amount = 0;
  total = 0;

  constructor() { }

  ngOnInit(): void {
  }

  calculateCoin(): void {
    const rsaCoins = [50 , 20, 10, 5, 1];
    const usdCoins = [25, 10, 5, 1];
    const eurGbpCoins = [50, 20, 10, 5, 2, 1];

    // RSA
    if (this.currencyValue.value === 'rsa') {
      console.log('Minimum coin change in RSA is: -->', this.vendingMachineCalculation(rsaCoins, this.amount),
      'Coin array order: [0] -> 50 cents, [1] -> 20 cents, [2] -> 10 cents, [3] -> 5 cents, [4] -> 1 cents');
    }
    // USD
    if (this.currencyValue.value === 'usd') {
      console.log('Minimum coin change in USD is: -->', this.vendingMachineCalculation(usdCoins, this.amount),
      'Coin array order: [0] -> 25 cents, [1] -> 10 cents, [2] -> 5 cents, [3] -> 1 cent');
    }
    // EUR + GBP
    if (this.currencyValue.value === 'eur' || this.currencyValue.value === 'gbp') {
      console.log('Minimum coin change in EUR or GBP is: -->', this.vendingMachineCalculation(eurGbpCoins, this.amount),
      'Coin array order: [0] -> 50 cents, [1] -> 20 cents, [2] -> 10 cents, [3] -> 5 cents, [4] -> 2 cents, [5] -> 1 cent');
    }
  }

  vendingMachineCalculation(coins: number[], total: any): any {
    const coinDenominations: number[] = [];
    total = this.amount - this.productValue.value;

    for (let i = 0; i < coins.length; i++) {
      coinDenominations[i] = 0;
    }

    for (let c = 0;  total > 0;  c++ ) {
      coinDenominations[c] = Math.floor( total / coins[c] );
      total -= coinDenominations[c] * coins[c];
  }
    // Note to see outcome of coin result please check console
    return coinDenominations;
  }
}
