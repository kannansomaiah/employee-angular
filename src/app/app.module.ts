import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeCrudComponent } from './employee-crud/employee-crud.component';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCrudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
