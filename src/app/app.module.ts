import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCheckboxModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AutocompleteSimpleExampleComponent } from './autocomplete-simple-example/autocomplete-simple-example.component';
import { MatAutocompleteModule } from '@angular/material';
import { AutocompletePlainInputExampleComponent } from './autocomplete-plain-input-example/autocomplete-plain-input-example.component';

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteSimpleExampleComponent,
    AutocompletePlainInputExampleComponent
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
