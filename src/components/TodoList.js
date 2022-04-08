import Todo from './Todo';
import '../App.css';

const TodoList = ({todos, setTodos, setEditTodo, todoId}) => {
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id) {
                    return {...item, completed: !item.completed}
                }
                return item
            })
        )
    }

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id)
        setEditTodo(findTodo)
    }

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    };

    return (
        <div>
            {todos && todos.map(todo => (
                <li key={todo.id}>
                    <Todo todo={todo}/>
                    <button onClick={() => handleComplete(todo)}> check </button>
                    <button onClick={() => handleEdit(todo)}> edit </button>
                    <button onClick={() => handleDelete(todo)}> delete </button>
                </li>
            ))}
        </div>
    );
}

export default TodoList;