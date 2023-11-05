import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceiverListComponent } from './component/receiver-list/receiver-list.component';
import { ModalComponent } from './component/utils/modal/modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ReceiverCreateComponent } from './component/receiver-create/receiver-create.component';
import { ReceiverDetailComponent } from './component/receiver-detail/receiver-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceiverListComponent,
    ModalComponent,
    ReceiverCreateComponent,
    ReceiverDetailComponent
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
