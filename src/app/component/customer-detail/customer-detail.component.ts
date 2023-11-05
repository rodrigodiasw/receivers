import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent {
  
  @Input() receiver: any = false;
  @Output() toggleModal = new EventEmitter();
  @Output() removeReceiver = new EventEmitter();
  @Output() updateReceiver = new EventEmitter();

  originalValue:string = '';


  faTrashCan = faTrashCan;

  ngOnInit() {
    this.originalValue = this.receiver.name
    console.log(this.receiver);
  }

  onRemoveReceiver() {
    this.removeReceiver.emit(this.receiver.id);
  }

  onUpdateReceiver() {
    this.updateReceiver.emit(this.receiver);
  }

  onToggleModal() {
    this.toggleModal.emit();
  }

}
