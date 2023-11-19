import { createSlice } from '@reduxjs/toolkit';

const initialState = { todos: [] };

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    deleteTodo(state, action) {
      const id = action.payload;
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
    editTodo(state, action) {
      state.todos = state.todos.map(item =>
        item.id === action.payload.id
          ? { ...item, text: action.payload.text }
          : item
      );
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
