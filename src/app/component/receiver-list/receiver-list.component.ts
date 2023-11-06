import { Component, OnInit  } from '@angular/core';
import { faCirclePlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { ReceiverService } from './services/receiver.service';
import { IReceiver } from "./receiver.interface";
import { SweetAlertOptions } from 'sweetalert2';

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
  receiverRemoveData: IReceiver | undefined;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  showModal: boolean = false;
  showModalConfirmRemove: boolean = false;
  contentModal:string = '';
  showAlert:boolean = false;
  dataAlert: SweetAlertOptions = {}
  paginationLinks: any = [];
  currentlyPage: string | number = 1;


  constructor(private receiverService: ReceiverService) { }

  /**
   * init
   */
  ngOnInit() {
    this.loadReceivers();
  }

  /**
   * load receivers
   */
  loadReceivers(page: number = 1) {

    this.currentlyPage = page;
    this.receiverService.getReceivers('', page).subscribe((response) => {
      
      // Processar os dados da página atual
      this.receivers = response.body;

      // Extrair os links do cabeçalho "Link"
      let linkHeader = response.headers.get('Link');
      this.paginationLinks = this.parseLinkHeader(linkHeader);
    });
  }

  parseLinkHeader(header: string|null): any {
    
    let links:any = {};
    let pageValues:any = {};

    if (header) {
      const parts = header.split(', ');
      for (const part of parts) {
        const section = part.split(';');
        const url = section[0].replace(/<(.*)>/, '$1').trim();
        const name = section[1].replace(/rel="(.*)"/, '$1').trim();
        links[name] = url;
      }

      

      for (const key in links) {
        if (links.hasOwnProperty(key)) {
          const url = links[key];
          const match = url.match(/_page=(\d+)/);
          if (match && match[1]) {
            pageValues[key] = parseInt(match[1], 10);
          }
        }
      }
    }
    return pageValues;
  }

 
  /**
   * handle input change
   */
  onInputChange() {
    if (this.inputValue === '') {
      this.loadReceivers();
    }
  }
  
  /**
   * select all receiver
   */
  selectAllReceivers() {
    this.receivers.forEach(item => {
      item.selected = !this.selectedAll;
    });
  }

  /**
   * 
   * @returns 
   */
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

  /**
   * 
   * @param content 
   */
  toggleModal(content:string = '') {
    
    this.contentModal = content;
    this.showModal = !this.showModal;
  }
  
  /**
   * 
   * @param receiver 
   */
  updateReceiver(receiver:IReceiver) {
    
    this.receiverService.updateReceiver(receiver).subscribe( _ => {
      this.dataAlert.icon = 'info';
      this.dataAlert.title = 'Favorecido atualizado com sucesso';
      this.toggleAlert(true);
      this.toggleModal();
    });
  }

  /**
   * remove receiver
   */
  massiveRemoveReceiver() {
    this.receivers.map((receiver) => {
      if(receiver?.selected) {
        this.removeReceiver(receiver.id, true)
      }
    })

    this.dataAlert.icon = 'info';
    this.dataAlert.title = 'Favorecidos removidos com sucesso';
    this.toggleAlert(true);

    this.loadReceivers();
  }

  confirmRemoveReceiver(receiver:IReceiver) {
    this.receiverRemoveData = receiver;
    this.toggleConfirmModal();
  }

  toggleConfirmModal() {
    this.showModalConfirmRemove = !this.showModalConfirmRemove;
  }

  /**
   * 
   * @param receiverId 
   */
  removeReceiver(receiverId:string = '', isMassive:boolean = false) {

    this.receiverService.deleteReceiver(receiverId).subscribe( _ => {
      if(this.showModal && !isMassive) {
        this.toggleModal();
        this.toggleConfirmModal();
      }
      
      this.loadReceivers();
      if(!isMassive) {
        this.dataAlert.icon = 'info';
        this.dataAlert.title = 'Favorecido removido com sucesso';
        this.toggleAlert(true);
      }
    });
  }
  
  /**
   * 
   * @param receiverData 
   */
  registerReceiver(receiverData:IReceiver) {
    
    this.receiverService.postReceiver(receiverData).subscribe( _ => {
      this.loadReceivers();
      this.dataAlert.icon = 'info';
      this.dataAlert.title = 'Favorecido cadastrado com sucesso';
      this.toggleAlert(true);
      this.toggleModal();
    })
  }

  toggleAlert(showAlert:boolean) {
    this.showAlert = showAlert;
    setTimeout(()=>{
      this.showAlert = false;
    },3000)
  }

  /**
   * 
   * @param receiver 
   */
  detailReceiver(receiver:IReceiver) {

    this.receiverDetail = receiver;
    this.toggleModal('detail-receiver');
  }

}
