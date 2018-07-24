import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatroomTopComponent } from './chatroom-top.component';

describe('ChatroomTopComponent', () => {
  let component: ChatroomTopComponent;
  let fixture: ComponentFixture<ChatroomTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatroomTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatroomTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
