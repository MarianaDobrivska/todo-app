import { makeAutoObservable } from "mobx";

const LS_KEY = "todo-items";
const TRASH_KEY = "trash";

class Store {
  todos = JSON.parse(localStorage.getItem(LS_KEY)) ?? {};
  deletedTodos = JSON.parse(localStorage.getItem(TRASH_KEY)) ?? [];

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
        [id]: { title, description, isChecked, id, project: projectName },
        ...this.todos[projectName],
      },
    };
    localStorage.setItem(LS_KEY, JSON.stringify(this.todos));
  }

  addToTrash(todo) {
    this.deletedTodos.push(todo);
    localStorage.setItem(TRASH_KEY, JSON.stringify(this.deletedTodos));
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

  get getDoneTodos() {
    const projects = Object.keys(this.todos);

    const todosByProject = projects.map((project) =>
      Object.values(this.todos[project])
    );

    const doneTodos = todosByProject
      .flat()
      .filter((todo) => todo.isChecked === true);
    return { todos: [...doneTodos], countOfCompleted: doneTodos.length };
  }

  get allTodosCount() {
    const projects = Object.keys(this.todos);

    const todosByProject = projects.map((project) =>
      Object.values(this.todos[project])
    );
    return todosByProject.flat().length;
  }
}

const TodoStore = new Store();

export default TodoStore;
