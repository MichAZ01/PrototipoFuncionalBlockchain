import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

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
  constructor() { }

  ngOnInit(): void {
  }

}
