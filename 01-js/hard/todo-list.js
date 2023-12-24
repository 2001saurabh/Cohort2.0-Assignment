/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todo= [];
  }
  getAll(){
    return this.todo;
  }
  clear(){
    this.todo=[];
  }
  get(idx){
    if(idx>= this.todo.length) return null;
    return this.todo[idx];
  }
  remove(idx){
    this.todo.splice(idx,1);
  }
  add(todos){
    this.todo.push(todos);
  }
  update(idx, todos){
    if(idx>=0 && idx < this.todo.length) {
      this.todo[idx] = todos;
    }
  }
}

module.exports = Todo;
