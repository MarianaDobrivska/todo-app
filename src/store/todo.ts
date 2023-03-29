import { makeAutoObservable } from "mobx";
import { ITodo } from "../types/interface";

const LS_KEY = "todo-items";
const TRASH_KEY = "trash";
const DONE_KEY = "done";

class Store {
  todos = JSON.parse(localStorage.getItem(LS_KEY) as string) ?? {};
  deletedTodos = JSON.parse(localStorage.getItem(TRASH_KEY) as string) ?? [];
  doneTodos = JSON.parse(localStorage.getItem(DONE_KEY) as string) ?? {};

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

  addToTrash(todo: ITodo) {
    this.deletedTodos.push(todo);
    localStorage.setItem(TRASH_KEY, JSON.stringify(this.deletedTodos));
  }

  addProject(projectName: string) {
    this.todos = {
      ...this.todos,
      [projectName]: {},
    };
    localStorage.setItem(LS_KEY, JSON.stringify(this.todos));
  }

  deleteTodo(todoId: string, project: string) {
    const newList = { ...this.todos };
    delete newList[project][todoId];
    this.todos = newList;
    localStorage.setItem(LS_KEY, JSON.stringify(this.todos));
  }

  updateTodoStatus(todoId: string, project: string) {
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

  handleDoneTodos(todo: ITodo, project: string) {
    const currentProject = this.doneTodos[project];
    this.doneTodos = {
      ...this.doneTodos,
      [project]: {
        ...currentProject,
        [todo.id]: { ...todo },
      },
    };
    localStorage.setItem(DONE_KEY, JSON.stringify(this.doneTodos));
  }

  get countOfCompleted() {
    const projects = Object.keys(this.doneTodos);

    const todosByProject = projects.map((project) =>
      Object.values(this.doneTodos[project])
    );

    const doneTodos = todosByProject.flat().length;

    return doneTodos;
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
