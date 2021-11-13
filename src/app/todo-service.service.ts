import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TodoServiceService {
  public todolist = [
    {"sno":1,"Task":"Die"},
    {"sno":2,"Task":"Cry"},
    {"sno":3,"Task":"Eat"},
    {"sno":4,"Task":"Dance"},
  ]
  getlist(){
    return this.todolist
  }
  constructor() { }
}
