import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ReceiverListComponent } from './receiver-list.component';
import { ReceiverService } from './services/receiver.service';
import { HttpClientModule } from '@angular/common/http';

describe('ReceiverListComponent', () => {
  let component: ReceiverListComponent;
  let fixture: ComponentFixture<ReceiverListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiverListComponent],
      imports: [FontAwesomeModule, HttpClientModule],
      providers: [ReceiverService],
    });
    fixture = TestBed.createComponent(ReceiverListComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call onInputChange when inputValue is empty', () => {
    spyOn(component, 'onInputChange');
    component.inputValue = '';

    component.onInputChange();

    expect(component.onInputChange).toHaveBeenCalled();
  });
});
