import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { fakeAsync } from '@angular/core/testing';
import { tick } from '@angular/core/testing';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [TodosComponent],
      providers: [TodoService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should load todos from the server (async)', async(() => {
    // let service = TestBed.get(TodoService); // return dependecies register at module level

    let service = fixture.debugElement.injector.get(TodoService); // return from component directly
    // spyOn(service, 'getTodos').and.returnValue(Observable.from([[1, 2, 3]]));
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.todos.length).toBe(3);
    })
  }));

  it('should load todos from the server (fakeAsync)', fakeAsync(() => {
    // let service = TestBed.get(TodoService); // return dependecies register at module level

    let service = fixture.debugElement.injector.get(TodoService); // return from component directly
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));

    fixture.detectChanges();

    tick();
    
    expect(component.todos.length).toBe(3);

  }));
});
