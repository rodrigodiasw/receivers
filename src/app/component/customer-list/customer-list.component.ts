import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent {


  openModal() {
    const myModal = document.getElementById('myModal');
    if(myModal != null) myModal.style.display = 'block';
  }

  closeModal() {
    const myModal = document.getElementById('myModal');
    if(myModal != null) myModal.style.display = 'none';
  }
}
