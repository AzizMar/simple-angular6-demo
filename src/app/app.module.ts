import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {AdminAreaComponent} from './admin-area/admin-area.component';

const routes: Routes =
  [
    {path: '', component: AuthComponent},
    {path: 'adminArea', component: AdminAreaComponent},
  ];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AdminAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
