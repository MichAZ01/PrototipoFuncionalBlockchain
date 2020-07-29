import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Web3 from 'web3';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  questionNumber: Number;

  web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
  quiz: [
    {question: 1,
    title: "¿Cuál es un algoritmo de búsqueda?",
    options: [
      {number:1,
        title: "Algoritmo de burbuja"
      }
    ]
    }
  ];
  constructor(private router: Router,private activeRoute :ActivatedRoute) {
    this.questionNumber = 0;
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    
  }
  endTest(){
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
 
       Coursetro.setCompetition("Programación básica python",8888888);
       this.router.navigate(['verificator/88888888']);
  }
}
