import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCheckboxModule } from '@angular/material';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { CompanyService } from './shared/company/company.service';
import { CompanyListComponent } from './company-list/company-list.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { GiphyService } from './shared/giphy/giphy.service';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/company-list', pathMatch: 'full' },
  {
    path: 'company-list',
    component: CompanyListComponent
  },
  {
    path: 'company-add',
    component: CompanyEditComponent
  },
  {
    path: 'company-edit/:id',
    component: CompanyEditComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
     MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [CompanyService, GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
