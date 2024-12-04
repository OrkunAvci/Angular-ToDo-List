import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Todolistitem } from '../todolistitem';
import { TodolistService } from '../todolist.service';


@Component({
	selector: 'app-todolistitem',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './todolistitem.component.html',
	styleUrl: './todolistitem.component.css'
})
export class TodolistitemComponent {
	@Input() todolistitem!: Todolistitem;
	todolistservice: TodolistService = inject(TodolistService);

	public completeTodoListItem() {
		this.todolistitem.completed = true;
		this.todolistservice.updateTodolistitem(this.todolistitem);
	}

	public deleteTodoListItem() {
		this.todolistservice.deleteTodolistitem(this.todolistitem);
	}

}
