import { Component  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faCirclePlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-receiver-list',
  templateUrl: './receiver-list.component.html',
  styleUrls: ['./receiver-list.component.scss']
})
export class ReceiverListComponent  {

  faCirclePlus = faCirclePlus;
  faMagnifyingGlass = faMagnifyingGlass;


  openModal(type:string = '') {
    if(type) {
      const myModal = document.getElementById(type);
      if(myModal != null) myModal.style.display = 'block';
    }
  }

  closeModal() {
    const myModal = document.getElementById('creareReceiver');
    if(myModal != null) myModal.style.display = 'none';
  }
}
