import { Component, OnInit, ViewChild } from '@angular/core';
import { Coin } from 'src/app/models/Coin';
import { Currency } from 'src/app/models/Currency';

@Component({
  selector: 'app-coin-counter',
  templateUrl: './coin-counter.component.html',
  styleUrls: ['./coin-counter.component.scss']
})
export class CoinCounterComponent implements OnInit {

  // hard coded, as no api lookup call
  currencies: Currency[] = [
    { id: 'rsa', name: 'R - Rands' },
    { id: 'usd', name: '$ - US Dollars' },
    { id: 'eur', name: '€ - Euros' },
    { id: 'gbp', name: '£ - GB Pounds' },
  ];

  coin: Coin = {};

  // parse currency selected value using view child (if need be)
  @ViewChild('currencyValue') currencyValue: any;

  constructor() { }

  ngOnInit(): void {
  }

  calculateCoin(): void {
    // this is where you call rest service, in order to perform function.
  }
}
