import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCheckboxModule } from '@angular/material';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { CompanyService } from './shared/company/company.service';
import { CraService } from './shared/cra/cra.service';
import { BillService } from './shared/bill/bill.service';
import { ContractService } from './shared/contract/contract.service';
import { CompanyListComponent } from './company-list/company-list.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatSidenavModule, MatIconModule } from '@angular/material';
import { GiphyService } from './shared/giphy/giphy.service';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CraListComponent } from './cra-list/cra-list.component';
import { HomeComponent } from './home/home.component';
import { CraEditComponent } from './cra-edit/cra-edit.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { BillEditComponent } from './bill-edit/bill-edit.component';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractEditComponent } from './contract-edit/contract-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
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
  },
  {
    path: 'cra-list',
    component: CraListComponent
  },
 {
    path: 'cra-add',
    component: CraEditComponent
  },
  {
    path: 'cra-edit/:id',
    component: CraEditComponent
  },
  {
    path: 'bill-list',
    component: BillListComponent
  },
  {
    path: 'bill-add',
    component: BillEditComponent
  },
  {
    path: 'bill-edit/:id',
    component: BillEditComponent
  },
   {
    path: 'contract-list',
    component: ContractListComponent
  },
  {
    path: 'contract-add',
    component: ContractEditComponent
  },
  {
    path: 'contract-edit/:id',
    component: ContractEditComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyEditComponent,
    CraListComponent,
    HomeComponent,
    CraEditComponent,
    BillListComponent,
    BillEditComponent,
    ContractListComponent,
    ContractEditComponent
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
    MatSidenavModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes,{useHash: true}),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [CompanyService, GiphyService, CraService, HomeComponent, BillService, ContractService],
  bootstrap: [AppComponent]
})
export class AppModule { }
