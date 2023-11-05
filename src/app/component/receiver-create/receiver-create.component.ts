import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-receiver-create',
  templateUrl: './receiver-create.component.html',
  styleUrls: ['./receiver-create.component.scss']
})
export class ReceiverCreateComponent {

  @Output() toggleModal = new EventEmitter();

  onToggleModal() {
    this.toggleModal.emit();
  }
}
