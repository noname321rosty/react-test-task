import Form from "../components/Form";
import TodoList from "../components/TodoList";
import { useState, useEffect } from "react";

const Todos = () => {
    const initialState = JSON.parse(localStorage.getItem("todos")) || [];
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState(initialState);
    const [editTodo, setEditTodo] = useState(null);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    return (
        <div>
            <h2>Todos</h2>
            <Form
                input={input}
                setInput={setInput}
                todos={todos}
                setTodos={setTodos}
                editTodo={editTodo}
                setEditTodo={setEditTodo}
            />
            <TodoList
                todos={todos}
                setTodos={setTodos}
                setEditTodo={setEditTodo}
            />
        </div>
    );
}

export default Todos;
