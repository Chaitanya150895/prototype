import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCheckboxModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { AutocompleteSimpleExampleComponent } from './autocomplete-simple-example/autocomplete-simple-example.component';
import { MatAutocompleteModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteSimpleExampleComponent
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
    ReactiveFormsModule
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
