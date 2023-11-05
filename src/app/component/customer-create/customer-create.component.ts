import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent {

  @Output() toggleModal = new EventEmitter();

  onToggleModal() {
    this.toggleModal.emit();
  }
}
