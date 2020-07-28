import { Component, OnInit } from '@angular/core';
import * as Web3 from 'web3';

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

  var CoursetroContract = this.web3.eth.contract([
    {
      "constant": false,
      "inputs": [
        {
          "name": "_nameCompetition",
          "type": "string"
        },
        {
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "setCompetition",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
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
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "Competition",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getCompetition",
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
    }
  ]);
  console.log(' years old)');
  var Coursetro = CoursetroContract.at('0x05591A8898224771050e82620082a404341BeDb8');
  var competitionEvent = Coursetro.Competition();
 
       Coursetro.setCompetition("Python",5);
   }
   
// Nombre competencia, Identificacion
}
