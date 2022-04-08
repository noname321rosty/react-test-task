import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react'

const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) => {
            return todo.id === id ? {title, id ,completed} : todo
        })
        setTodos(newTodo)
        setEditTodo('')
    }

    useEffect(() => {
        if(editTodo){
            setInput(editTodo.title)
        } else {
            setInput('')
        }
    }, [setInput, editTodo]);
    
    const onInputChange = (e) => {
        setInput(e.target.value);
    }

    const onFormsubmit = (e) => {
        e.preventDefault();
        if(!editTodo) {
            setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
            setInput('');
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    }

    return (
        <form onSubmit={onFormsubmit}>
            <input
             type='text'
             placeholder="add todo..."
             value={input}
             required
             onChange={onInputChange}
            />
            <button type='submit'>add</button> 
        </form>
    );
}

export default Form;
