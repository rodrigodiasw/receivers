import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-receiver-detail',
  templateUrl: './receiver-detail.component.html',
  styleUrls: ['./receiver-detail.component.scss']
})
export class ReceiverDetailComponent {
  
  @Input() receiver: any = false;
  @Output() toggleModal = new EventEmitter();
  @Output() confirmRemoveReceiver = new EventEmitter();
  @Output() updateReceiver = new EventEmitter();

  originalValue:string = '';


  faTrashCan = faTrashCan;

  ngOnInit() {
    this.originalValue = this.receiver.name
  }

  onConfirmRemoveReceiver() {
    this.confirmRemoveReceiver.emit(this.receiver);
  }

  onUpdateReceiver() {
    this.updateReceiver.emit(this.receiver);
  }

  onToggleModal() {
    this.toggleModal.emit();
  }

}
