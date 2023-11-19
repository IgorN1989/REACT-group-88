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

export const { increment, decrement, incrementByAmount } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
