const { getId } = require('./utils');

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
    /** FEEDBACK: The goal for this question is to count how many items have been marked complete from the toDoList.
     * In your code you are setting a counter which is a great start! 
     * After that you are creating a new item however, we should instead iterate through the items we already have in our array. 
     * You are really close!
     */
    let count = 0
    const item = new ToDoItem()
    if (item.isDone === true) {
      count++
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