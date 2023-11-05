import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverCreateComponent } from './receiver-create.component';

describe('ReceiverCreateComponent', () => {
  let component: ReceiverCreateComponent;
  let fixture: ComponentFixture<ReceiverCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiverCreateComponent]
    });
    fixture = TestBed.createComponent(ReceiverCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
