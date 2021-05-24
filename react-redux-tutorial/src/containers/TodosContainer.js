import React, { useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import todos, { changeInput, insert, toggle, remove } from '../modules/todos'; 
import Todos from '../components/Todos';

const TodosContainer = () => {
    const {input, todos } = useSelector(({todos}) => ({
        input: todos.input,
        todos: todos.todos
    }));
    const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
        [changeInput, insert, toggle, remove],
        []
    );

    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    );
};

export default React.memo(TodosContainer);
//hook을 사용하면 최적화가 자동으로 이루어지지 않기 때문에, React.memo를 사용하여 성능을 최적화시켜준다.