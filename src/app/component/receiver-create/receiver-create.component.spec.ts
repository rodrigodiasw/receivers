import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ReceiverCreateComponent } from './receiver-create.component';

describe('ReceiverCreateComponent', () => {
  let component: ReceiverCreateComponent;
  let fixture: ComponentFixture<ReceiverCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiverCreateComponent],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(ReceiverCreateComponent); 
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the toggleModal event', () => {
    let emitted = false;
    component.toggleModal.subscribe(() => {
      emitted = true;
    });

    component.onToggleModal();

    expect(emitted).toBeTruthy();
  });
});
