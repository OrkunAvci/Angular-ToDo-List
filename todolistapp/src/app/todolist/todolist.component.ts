import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodolistService } from '../todolist.service';
import { Todolistitem } from '../todolistitem';
import { TodolistitemComponent } from '../todolistitem/todolistitem.component';

@Component({
	selector: 'app-todolist',
	standalone: true,
	imports: [CommonModule, TodolistitemComponent],
	templateUrl: './todolist.component.html',
	styleUrl: './todolist.component.css'
})
export class TodolistComponent {
	protected todolist: Todolistitem[] = [];
	protected completedlist: Todolistitem[] = [];
	todoservice: TodolistService = inject(TodolistService);

	constructor() {
		this.getTodolist();
	}

	getTodolist() {
		this.todoservice.getTodolistitems().then(
			(todolistitems: Todolistitem[]) => {
				this.todolist = todolistitems.filter((item) => !(item.completed));
				this.completedlist = todolistitems.filter((item) => (item.completed));
			}
		)
	}

}
