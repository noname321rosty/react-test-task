import { useNavigate } from 'react-router';

function Todo({todo}) {
    const navigate = useNavigate()
    const {id, title, completed} = todo
    return (
        todo && 
        <input 
            type='text'
            value={title}
            className={completed ? 'complete': null}
            onChange={(e) => e.preventDefault()}
            onClick={() => navigate(id)}
        /> 
    );
}

export default Todo;