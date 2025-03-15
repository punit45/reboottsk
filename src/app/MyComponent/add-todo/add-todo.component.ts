import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';
declare var bootstrap: any;
@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
title!: string
desc!: string
@Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

onSubmit(){
if (!this.title) {
  this.showToast();
  return;
}

  const todo ={
    no: 0,
    title: this.title,
    description: this.desc,
    isDone: false
  }
  this.todoAdd.emit(todo)
  this.closeModal();
  this.showSuccess();
}
closeModal() {
  const modalElement = document.getElementById('exampleModal');
  if (modalElement) {
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    if (modalInstance) {
      modalInstance.hide();
    }
  }
}
showToast() {
  const toastElement = document.getElementById('liveToast');
  if (toastElement) {
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
  }
}

showSuccess() {
  const toastElement = document.getElementById('liveToastSubmit');
  if (toastElement) {
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
  }
}
}
