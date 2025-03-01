const { getId } = require('./utils');
/** FEEDBACK: Great job! Amazing work with this! */
class ToDoItem {
  constructor(description, priorityLevel, mood) {
    this.id = getId(),
      this.description = description,
      this.priorityLevel = priorityLevel,
      this.isDone = false
    this.mood = mood
  }
  feeling() {
    console.log(`You're feeling ${this.mood} about ${this.description}`)
  }

}


class ToDoList {
  items = []
  static allItems = []
  constructor(name) {
    this.name = name
    this.id = getId();

    ToDoList.allItems.push(this)
  }
  createItem(description, priorityLevel) {
    const item = new ToDoItem(description, priorityLevel)
    this.items.push(item)
    return item
  }
  getItems() {
    return [...this.items]
  }
  getCompletedCount() {
    let count = 0
    for (let item of this.items) {
      if (item.isDone) count++
    }
    return count
  }
  yippeeeee() {
    console.log(`hurrayy`)
  }
  static list() {
    return [...ToDoList.allItems];
  }
  static findBy(id) {
    return ToDoList.allItems.find((item) => item.id === id)
  }


}

module.exports = {
  ToDoItem,
  ToDoList
};