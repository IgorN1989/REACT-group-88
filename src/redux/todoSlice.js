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
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
