import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper } from './Todo.styled';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from 'redux/todoSlice';

export const Todo = ({ text, counter, id }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteTodo(id));
  };

  const handleEditClick = () => {
    const text = prompt('Enter new text...');
    dispatch(editTodo({ id, text }));
  };
  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={handleDeleteClick}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
        <button type="button" onClick={handleEditClick}>
          Edit
        </button>
      </TodoWrapper>
    </>
  );
};
