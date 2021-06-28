import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { MyPageComponent } from './my-page/my-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {path: 'my-page', component: MyPageComponent},
        {path: '',   redirectTo: '/my-page', pathMatch: 'full'},
        {path: '**', component: PageNotFoundComponent}
      ],
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
