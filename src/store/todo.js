import { makeAutoObservable } from "mobx";

const LS_KEY = "todo-items";

class Store {
  todos = JSON.parse(localStorage.getItem(LS_KEY)) ?? {};

  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }

  addTodo({
    id,
    isChecked,
    title,
    description,
    projectName = "Outside of project",
  }) {
    this.todos = {
      ...this.todos,
      [projectName]: {
        [id]: { title, description, isChecked },
        ...this.todos[projectName],
      },
    };
    localStorage.setItem(LS_KEY, JSON.stringify(this.todos));
  }

  addProject(projectName) {
    this.todos = {
      ...this.todos,
      [projectName]: {},
    };
    localStorage.setItem(LS_KEY, JSON.stringify(this.todos));
  }

  deleteTodo(todoId, project) {
    const newList = { ...this.todos };
    delete newList[project][todoId];
    this.todos = newList;
    localStorage.setItem(LS_KEY, JSON.stringify(this.todos));
  }

  updateTodoStatus(todoId, project) {
    const currentProject = this.todos[project];
    this.todos = {
      ...this.todos,
      [project]: {
        ...currentProject,
        [todoId]: {
          ...currentProject[todoId],
          isChecked: !currentProject[todoId].isChecked,
        },
      },
    };
    localStorage.setItem(LS_KEY, JSON.stringify(this.todos));
  }
}

const TodoStore = new Store();

export default TodoStore;
