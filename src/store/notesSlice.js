import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducer: {
    addNote: (state, action) => {
      state.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.filter((note) => note.id !== action.payload);
    },
    updateNote: (state, action) => {
      const { id, title, content, summary } = action.payload;
      const note = state.find((note) => note.id === id);

      if (note) {
        note.title = title;
        note.content = content;
        note.summary = summary;
      }
    },
  },
});

export const { addNote, deleteNote, updateNote } = notesSlice.actions;
export default notesSlice.reducer;
