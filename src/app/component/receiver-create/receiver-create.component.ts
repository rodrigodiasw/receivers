import { Component, EventEmitter, Output } from '@angular/core';
import { IReceiver } from "./../receiver-list/receiver.interface";

@Component({
  selector: 'app-receiver-create',
  templateUrl: './receiver-create.component.html',
  styleUrls: ['./receiver-create.component.scss']
})
export class ReceiverCreateComponent {

  @Output() toggleModal = new EventEmitter();
  @Output() registerReceiver = new EventEmitter();

  mockBranch = [null, '7926', '4169', '1492', '7404'];
  mockBankCode = [null, '033', '341', '001', '260'];
  mockAccount = ['849384', '691748', '73283', '93036', '02836'];
  mockStatus = ['rascunho', 'validado'];

  receiver:IReceiver = {
    id: '',
    name: '',
    email: '',
    tax_id: '',
    branch: this.mockBranch[Math.floor(Math.random() * 5)],
    account: this.mockAccount[Math.floor(Math.random() * 5)],
    account_type: '',
    bank_name: '',
    bank_code: this.mockBankCode[Math.floor(Math.random() * 5)],
    pix_key: '',
    pix_key_type: '',
    status: this.mockStatus[Math.floor(Math.random() * 2)],
    created_at: '',
    updated_at: '',
    selected: ''
  }

  onToggleModal() {
    this.toggleModal.emit();
  }

  onRegisterReceiver(){
    this.registerReceiver.emit(this.receiver);
  }


}
