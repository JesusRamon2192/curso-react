import {TodoCounter} from "./TodoCounter.js";
import {TodoSearch} from "./TodoSearch.js";
import {TodoList} from "./TodoList.js";
import {TodoItem} from "./TodoItem.js";
import {CreateTodoButton} from "./CreateTodoButton.js";
import "./App.css";

const defaultTodos = [
    {text: 'Cortar Cebolla', completed: true},
    {text: 'Tomar el curso de react', completed: false},
    {text: 'Llorar con la llorona', completed: false},
    {text: 'LALALALA', completed: false},
]

function App() {
  return (
    <>

      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
            <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}/>
        ))}
      </TodoList>

        <CreateTodoButton/>
    </>
  );
}

export default App;