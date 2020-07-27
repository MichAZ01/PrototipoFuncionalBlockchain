import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery/dist/jquery.min.js';
import Web3 from 'web3';

@Component({
  selector: 'app-verificator',
  templateUrl: './verificator.component.html',
  styleUrls: ['./verificator.component.scss']
})
export class VerificatorComponent implements OnInit {
  web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    if (typeof this.web3 !== 'undefined') {
      this.web3 = new Web3(this.web3.currentProvider);
  } else {
    this.web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
  }

  this.web3.eth.defaultAccount = this.web3.eth.accounts[0];

  var CoursetroContract =  this.web3.eth.contract([
    {
      "constant": false,
      "inputs": [
        {
          "name": "_fName",
          "type": "string"
        },
        {
          "name": "_age",
          "type": "uint256"
        }
      ],
      "name": "setInstructor",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getInstructor",
      "outputs": [
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "age",
          "type": "uint256"
        }
      ],
      "name": "Instructor",
      "type": "event"
    }
  ]);
console.log('oh no');
  var Coursetro = CoursetroContract.at('0xB2b567B650290Fd9AF7f2Ff7DDe40B80fd309493');

  var instructorEvent = Coursetro.Instructor();

       Coursetro.setInstructor("Pedro",5);
   }

}
