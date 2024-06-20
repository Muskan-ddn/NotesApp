
import React, { useState } from 'react';
import axios from 'axios';

const AddNoteForm = ({ fetchNotes }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddNote = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post('http://localhost:5000/api/notes', {
        title,
        content,
      });
      console.log('Note added:', response.data);
      fetchNotes(); // Refresh notes list after adding a new note
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  return (
    <div>
      <h2>Add New Note</h2>
      <form onSubmit={handleAddNote}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default AddNoteForm;
