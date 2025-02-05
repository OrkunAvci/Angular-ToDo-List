import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistitemComponent } from './todolistitem.component';

describe('TodolistitemComponent', () => {
  let component: TodolistitemComponent;
  let fixture: ComponentFixture<TodolistitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodolistitemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodolistitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
