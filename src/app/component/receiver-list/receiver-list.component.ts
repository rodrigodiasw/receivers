import { Component, OnInit  } from '@angular/core';
import { faCirclePlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { ReceiverService } from './services/receiver.service';
import { IReceiver } from "./receiver.interface";

@Component({
  selector: 'app-receiver-list',
  templateUrl: './receiver-list.component.html',
  styleUrls: ['./receiver-list.component.scss']
})

export class ReceiverListComponent implements OnInit {

  faCirclePlus = faCirclePlus;
  faMagnifyingGlass = faMagnifyingGlass;

  selectedAll: any;
  
  inputValue: string = '';
  receivers: IReceiver[] = [];
  receiverDetail: IReceiver | undefined;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  showModal: boolean = true;
  contentModal:string = 'create-receiver';


  constructor(private receiverService: ReceiverService) { }

  ngOnInit() {
    this.loadReceivers();
  }

  loadReceivers() {

    let filterParam = this.identifyFilterType();
    
    this.receiverService.getReceivers(filterParam).subscribe(data => {
      this.receivers = data;
    });
  }

  onInputChange() {
    if (this.inputValue === '') {
      this.loadReceivers();
    }
  }
  
  selectAllReceivers() {
    this.receivers.forEach(item => {
      item.selected = !this.selectedAll;
    });
  }

  identifyFilterType(): string {
    
    let filterValue = this.inputValue;
    
    if (/^\d{11,14}$/.test(filterValue)) {

      return `tax_id=${this.inputValue}`;
    } else if (/^\d{6,8}$/.test(filterValue)) {

      return `account=${this.inputValue}`;
    } else if (/^[A-Za-z ]+$/.test(filterValue)) {

      return `name=${this.inputValue}`;
    } else if (/^\d{3}$/.test(filterValue)) {

      return `bank_code=${this.inputValue}`;
    } 

    return '';
  }

  toggleModal(content:string = '') {
    
    this.contentModal = content;
    console.log(this.contentModal);
    this.showModal = !this.showModal;
  }
  
  updateReceiver(receiver:IReceiver) {
    
    this.receiverService.updateReceiver(receiver).subscribe(updatedReceiver => {
      console.log('updatedReceiver: ', updatedReceiver)
      this.toggleModal();
    });
  }

  deleteReceiver() {
    this.receivers.map((item, index) => {
      if(item?.selected) {
        console.log(item.name);
        // to do: deletar receiver
      }
    })
  }

  removeReceiver(receiverId:string = '') {

    this.receiverService.deleteReceiver(receiverId).subscribe(() => {
      this.loadReceivers();
      this.toggleModal();
    });
  }
  
  /**
   * 
   * @param receiverData 
   */
  registerReceiver(receiverData:IReceiver) {
    
    this.receiverService.postReceiver(receiverData).subscribe((response) => {
      this.loadReceivers();
      this.toggleModal();
    })
  }

  detailReceiver(receiver:IReceiver) {

    this.receiverDetail = receiver;
    this.toggleModal('detail-receiver');
  }

}
