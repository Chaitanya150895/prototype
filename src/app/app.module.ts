import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCheckboxModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatSlideToggleModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AutocompleteSimpleExampleComponent } from './autocomplete-simple-example/autocomplete-simple-example.component';
import { MatAutocompleteModule } from '@angular/material';
import { AutocompletePlainInputExampleComponent } from './autocomplete-plain-input-example/autocomplete-plain-input-example.component';
import { AutocompleteOptgroupExampleComponent } from './autocomplete-optgroup-example/autocomplete-optgroup-example.component';
import { SliderButtonComponent } from './slider-button/slider-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteSimpleExampleComponent,
    AutocompletePlainInputExampleComponent,
    AutocompleteOptgroupExampleComponent,
    SliderButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
  ],
})
export class AppModule { }
