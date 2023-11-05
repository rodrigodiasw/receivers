import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceiverListComponent } from './component/receiver-list/receiver-list.component';
import { ModalComponent } from './component/utils/modal/modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { CustomerCreateComponent } from './component/customer-create/customer-create.component';
import { CustomerDetailComponent } from './component/customer-detail/customer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceiverListComponent,
    ModalComponent,
    CustomerCreateComponent,
    CustomerDetailComponent
  ],
  imports: [
    HttpClientModule, 
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
