
const todoList = require("../todo");
const { all, add, markAsComplete, overdue, dueToday, dueLater } = todoList();

describe("Todo List Tests", () => {
  // Before starting all tests
  beforeAll(() => {
    add({
      title: "Test L4",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
  });

  //add function
  test("Adding task", () => {
    const todo_len = all.length;
    add({
      title: "Todo test",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(all.length).toBe(todo_len + 1);
  });

  //markAsComplete function
  test("succesful todo", () => {
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  //overdue function
  test("pending todo", () => {
    add({
      title: "Pending test",
      dueDate: new Date(
        new Date().setDate(new Date().getDate() - 1)
      ).toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(overdue().length).toBe(1);
  });

  //dueToday function
  test("Todays pendings", () => {
    
    expect(dueToday().length).toBe(2);
  });

  //dueLater function
  test("All pendings", () => {
    add({
      title: "Pending tests",
      dueDate: new Date(
        new Date().setDate(new Date().getDate() + 1)
      ).toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(dueLater().length).toBe(1);
  });
});