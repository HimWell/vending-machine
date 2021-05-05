import { Component, OnInit, ViewChild } from '@angular/core';
import { Coin } from 'src/app/models/Coin';
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
  // products: Product[] = [
  //   { id: '1', name: 'Coca-Cola', price: 45 },
  //   { id: '2', name: 'Lays Chips', price: 35 },
  //   { id: '3', name: 'Aero Chocolate', price: 60 },
  //   { id: '4', name: 'Caramel Biscuits', price: 30 },
  // ];

  coin: Coin = {};
  @ViewChild('currencyValue') currencyValue: any;
  // @ViewChild('productValue') productValue: any;

  constructor() { }

  ngOnInit(): void {
  }

  calculateCoin(): void {
    // RSA
    if (this.currencyValue.value === 'rsa') {
      console.log('Minimum RSA coins required is: -->', this.vendingMachineCalculation([50 , 20, 10, 5, 1], this.coin.amount));
    }
    // USD
    if (this.currencyValue.value === 'usd') {
      console.log('Minimum USD coins required is: -->', this.vendingMachineCalculation([25, 10, 5, 1], this.coin.amount));
    }
    // EUR + GBP
    if (this.currencyValue.value === 'eur' || this.currencyValue.value === 'gbp') {
      console.log('Minimum EUR coins required is: -->', this.vendingMachineCalculation([50, 20, 10, 5, 2, 1], this.coin.amount));
    }
  }

  // tslint:disable-next-line:typedef
  vendingMachineCalculation(coins: number[], total: any) {
    const coinDenominations: number[] = [];
    this.coin.total = coinDenominations;

    for (let i = 0; i < coins.length; i++) {
      coinDenominations[i] = 0;
    }

    for (let c = 0;  total > 0;  c++ ) {
      coinDenominations[c] = Math.floor( total / coins[c] );
      total -= coinDenominations[c] * coins[c];
  }
    return coinDenominations;
  }
}
