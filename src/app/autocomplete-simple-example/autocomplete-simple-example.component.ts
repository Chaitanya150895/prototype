import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-autocomplete-simple-example',
  templateUrl: './autocomplete-simple-example.component.html',
  styleUrls: ['./autocomplete-simple-example.component.css']
})
export class AutocompleteSimpleExampleComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  constructor() { }

  ngOnInit() {
  }

}
