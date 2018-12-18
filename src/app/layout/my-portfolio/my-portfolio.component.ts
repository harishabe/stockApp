import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-portfolio',
  templateUrl: './my-portfolio.component.html',
  styleUrls: ['./my-portfolio.component.scss']
})
export class MyPortfolioComponent implements OnInit {
  displayedColumns: string[] = ['funds', 'daySIP', 'SIPAmount', 'totalInvestment', 'currentValue', 'totalReturn', 'action'];
  dataSource = ELEMENT_DATA;
  upcomingSIPJSON = [{ "bankName": "HDFC small cap fund", "dueDate": "19 SEP 18", "amount": "Rs.500" },
  { "bankName": "HDFC small cap fund", "dueDate": "19 SEP 18", "amount": "Rs.500" }]
  constructor() { }

  ngOnInit() {
  }



}

export interface PeriodicElement {
  funds: string;
  daySIP: string;
  SIPAmount: number;
  totalInvestment: string;
  currentValue: number;
  totalReturn: number;
  action: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { funds: 'SBI Focused Equity Fund', daySIP: '2nd of every month Started 2 JUL 18', SIPAmount: 500, totalInvestment: '1500 | 3 Months', currentValue: 2000, totalReturn: +500, action: '...' },
  { funds: 'SBI Focused Equity Fund', daySIP: '10th of every month Started 2 SEP 18', SIPAmount: 1000, totalInvestment: '10000 | 10 Months', currentValue: 3000, totalReturn: -200, action: '...' }
];
