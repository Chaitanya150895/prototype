import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete-simple-example',
  templateUrl: './autocomplete-simple-example.component.html',
  styleUrls: ['./autocomplete-simple-example.component.css']
})
export class AutocompleteSimpleExampleComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['Ashish', 'Akash', 'Azarbezan', 'Algeria', 'Allahabad', 'Mary', 'Shally', 'Igor'];
  filteredOptions: Observable<string[]>;

  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe( // need to remember
      startWith(''),
      map(value => this._filter(value)) //does mapping to find the data
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}
