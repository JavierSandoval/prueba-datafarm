import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PeopleFormComponent } from './components/people-form/people-form.component';
import { EmployeesFormComponent } from './components/employees-form/employees-form.component';
import { FarmsFormComponent } from './components/farms-form/farms-form.component';
import { LandingImageComponent } from './components/landing-image/landing-image.component';


const appRoutes: Routes =[
    {path: '', component: LandingImageComponent},
    {path: 'Personas', component: PeopleFormComponent},
    {path: 'Trabajadores', component: EmployeesFormComponent},
    {path: 'Fincas', component: FarmsFormComponent},
    {path: '**', component: LandingImageComponent}
];

export const appRoutingProviders: any[] =[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);