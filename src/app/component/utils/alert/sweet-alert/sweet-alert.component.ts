import { Component, Input } from '@angular/core';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'app-sweet-alert',
  templateUrl: './sweet-alert.component.html',
  styleUrls: ['./sweet-alert.component.scss']
})
export class SweetAlertComponent {

  @Input() dataAlert:SweetAlertOptions = {};
  

  ngOnInit() {
    this.showAlert();
  }

  async showAlert() {

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-right',
      iconColor: 'white',
      customClass: {
        popup: `colored-toast bg-icon-${this.dataAlert.icon}`,
      },
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    })
    
    await Toast.fire({
      title: this.dataAlert.title
    })

    this.dataAlert = {};
    
  }
}
