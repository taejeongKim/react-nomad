import { useEffect, useRef, useState } from 'react';
import Button from './Button';

function Todos() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<string[]>([]);
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      const storageTodos = localStorage.getItem('todos');
      if (storageTodos) {
        setTodos(JSON.parse(storageTodos));
      }
      isInitialRender.current = false;
    }
    console.log('I run only once');
  }, []);

  useEffect(
    () => localStorage.setItem('todos', JSON.stringify(todos)),
    [todos]
  );

  const deleteTodo = (index: number) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTodo(event.target.value);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (todo === '') return;
    setTodos((prev) => [todo, ...prev]);
    setTodo('');
  };
  return (
    <div>
      <h1>My Todos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="Write your todo"
        />
        <button>Add Todo</button>
      </form>
      <hr />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <Button onClick={() => deleteTodo(index)} text="x" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
