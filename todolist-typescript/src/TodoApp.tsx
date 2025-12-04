import React, { useState } from "react";
import "./Todo.css";

interface TodoItem {
  text: string;
  completed: boolean;
}

function TodoApp() {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const addTask = () => {
    const trimmed = task.trim();

    if (trimmed === "") {
      alert("Please enter a valid task");
      return;
    }

    // Prevent duplicate entry
    if (todoList.some((t) => t.text === trimmed && editIndex === null)) {
      alert("Task already exists!");
      return;
    }

    if (editIndex !== null) {
      // Update existing task
      const updatedList = [...todoList];
      updatedList[editIndex].text = trimmed;
      setTodoList(updatedList);
      setEditIndex(null);
    } else {
      // Add new task
      setTodoList([...todoList, { text: trimmed, completed: false }]);
    }

    setTask("");
  };

  const deleteTask = (index: number) => {
    const newList = todoList.filter((_, i) => i !== index);
    setTodoList(newList);
  };

  const completeTask = (index: number) => {
    const updated = [...todoList];
    updated[index].completed = !updated[index].completed;
    setTodoList(updated);
  };

  const editTask = (index: number) => {
    setTask(todoList[index].text);
    setEditIndex(index);
  };

  return (
    <div className="todo-container">
      <h2 className="title">React Todo App</h2>

      <div className="input-section">
        <input
          type="text"
          value={task}
          placeholder="Enter task..."
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask} className="add-btn">
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <ul className="todo-list">
        {todoList.map((item, index) => (
          <li key={index} className="todo-item">
            <span
              className={item.completed ? "completed" : ""}
              onClick={() => completeTask(index)}
            >
              {item.text}
            </span>

            <div className="actions">
              <button onClick={() => editTask(index)} className="edit-btn">
                ✏️ Edit
              </button>

              <button onClick={() => deleteTask(index)} className="delete-btn">
                🗑️ Delete
              </button>
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
