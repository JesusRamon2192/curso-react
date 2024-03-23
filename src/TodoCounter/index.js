import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  return total == completed ? (
    <h1 className="TodoCounter">
      Felicitaciones, has completado todos los TODOS 🎈🎉🎊
    </h1>
  ) : (
    <h1 className="TodoCounter">
      Has completado <span>{completed} </span>
      de <span>{total}</span> TODOS
    </h1>
  );
}

export { TodoCounter };
