import { createSlice } from '@reduxjs/toolkit';

const initialState = { todos: [] };

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
