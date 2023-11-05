import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() customModal: string = 'modal-default';
  @Output() toggleModal = new EventEmitter();
  @Output() handleAction = new EventEmitter();
  
  svgProperties: { width: string, height: string, viewBox: string, fill: string, rects: { x: string, y: string, width: string, height: string, transform: string, fill: string }[] } = {
    width: '30',
    height: '30',
    viewBox: '0 0 30 30',
    fill: 'white',
    rects: [
      {
        x: '20.5061',
        y: '6.36395',
        width: '4',
        height: '20',
        transform: 'rotate(45 20.5061 6.36395)',
        fill: 'white'
      },
      {
        x: '23.3345',
        y: '20.5061',
        width: '4',
        height: '20',
        transform: 'rotate(135 23.3345 20.5061)',
        fill: 'white'
      }
    ]
  };

  ngOnInit() {
    if(this.customModal == 'modal-default') this.setSvgProperties();
  }

  setSvgProperties() {
    this.svgProperties = {
      width: '14',
      height: '15',
      viewBox: '0 0 14 15',
      fill: 'black',
      rects: [
        {
          x: '2.65332',
          y: '0.532898',
          width: '16',
          height: '3.70588',
          transform: 'rotate(45 2.65332 0.532898)',
          fill: 'black'
        },
        {
          x: '13.967',
          y: '3.15338',
          width: '16',
          height: '3.70588',
          transform: 'rotate(135 13.967 3.15338)',
          fill: 'black'
        }
      ]
    };
    
  }

  onToggleModal() {
    this.toggleModal.emit();
  }

  onHandleAction() {
    this.handleAction
  }
}
