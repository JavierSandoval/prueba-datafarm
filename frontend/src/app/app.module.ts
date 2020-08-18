import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { PeopleFormComponent } from './components/people-form/people-form.component';
import { LandingImageComponent } from './components/landing-image/landing-image.component';
import { EmployeesFormComponent } from './components/employees-form/employees-form.component';
import { FarmsFormComponent } from './components/farms-form/farms-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    PeopleFormComponent,
    LandingImageComponent,
    EmployeesFormComponent,
    FarmsFormComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
