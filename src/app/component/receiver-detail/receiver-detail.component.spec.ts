import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ReceiverDetailComponent } from './receiver-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ReceiverDetailComponent', () => {
  let component: ReceiverDetailComponent;
  let fixture: ComponentFixture<ReceiverDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiverDetailComponent],
      imports: [FormsModule,FontAwesomeModule, HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(ReceiverDetailComponent); 
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the ReceiverDetailComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should emit toggleModal event', () => {
    const emitSpy = spyOn(component.toggleModal, 'emit');
    component.onToggleModal();
    expect(emitSpy).toHaveBeenCalled();
  });

  it('should emit confirmRemoveReceiver event', () => {
    const emitSpy = spyOn(component.confirmRemoveReceiver, 'emit');
    component.onConfirmRemoveReceiver();
    expect(emitSpy).toHaveBeenCalledWith(component.receiver);
  });

  it('should emit updateReceiver event', () => {
    const emitSpy = spyOn(component.updateReceiver, 'emit');
    component.onUpdateReceiver();
    expect(emitSpy).toHaveBeenCalledWith(component.receiver);
  });
});
