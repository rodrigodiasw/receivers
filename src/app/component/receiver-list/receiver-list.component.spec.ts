import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverListComponent } from './receiver-list.component';

describe('ReceiverListComponent', () => {
  let component: ReceiverListComponent;
  let fixture: ComponentFixture<ReceiverListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiverListComponent]
    });
    fixture = TestBed.createComponent(ReceiverListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
