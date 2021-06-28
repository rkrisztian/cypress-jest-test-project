import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { MyPageComponent } from "./my-page/my-page.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
  {path: 'my-page', component: MyPageComponent},
  {path: '', redirectTo: '/my-page', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
