import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { disconnect } from 'process';
import { callbackify } from 'util';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }