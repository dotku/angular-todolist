import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular TodoList";
  todoList = ["Todo 1", "todo 2"];
  newTodo = "newTodo";
  addTodo() {
    // console.log("todo", todo);
    let ifFound = this.todoList.find(item => item === this.newTodo);
    if (!ifFound) {
      this.todoList.push(this.newTodo);
    } else {
      alert("same item exits");
    }
    this.newTodo = "";
  }
  deleteTodo(todo) {
    console.log(todo);
    this.todoList = this.todoList.filter(item => item !== todo);
  }
  updateTodo(todo) {}
}
