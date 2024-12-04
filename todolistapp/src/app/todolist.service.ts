import { Injectable } from '@angular/core';

import { Todolistitem } from './todolistitem';

@Injectable({
	providedIn: 'root'
})
export class TodolistService {
	private readonly db_url: string = "http://localhost:3000/todolistitems";
	protected todolistitems: Todolistitem[] = [];

	constructor() {
		this.getTodolistitems();
	}

	async getTodolistitems(): Promise<Todolistitem[]> {
		if (this.todolistitems.length == 0) {
			const data = await fetch(this.db_url);
			this.todolistitems = (await data.json()) ?? [];
		}
		return this.todolistitems;
	}

	async getTodolistitemsById(id: number): Promise<Todolistitem | undefined> {
		if (this.todolistitems.length == 0) {
			const data = await fetch(this.db_url);
			this.todolistitems = (await data.json()) ?? [];
		}
		return this.todolistitems[id];
	}

	async updateTodolistitem(item: Todolistitem) {
		this.todolistitems[item.id] = item;
	}

	async deleteTodolistitem(item: Todolistitem) {
		const index = this.todolistitems.indexOf(item);
		if (index != -1) {
			this.todolistitems.splice(index, 1);
		}
		console.log(this.todolistitems);
	}

}
