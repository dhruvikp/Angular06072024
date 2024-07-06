import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { ChildComponent } from './child/child.component';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { FormsComponent } from './forms/forms.component';

const appRoute: Routes = [
  {path: 'bindings', component: BindingComponent},
  {path: 'directives', component: DirectivesComponent},
  {path:'pipes', component: PipesComponent},
  {path:'forms', component: FormsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectivesComponent,
    ChildComponent,
    PipesComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
