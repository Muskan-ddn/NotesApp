

import React, { useState } from 'react';
import './App.css'; // Import your previous styles
import AddNoteForm from './AddNoteForm'; // Assuming these components are defined elsewhere
import NotesList from './NotesList'; // Assuming these components are defined elsewhere
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const App = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [notes, setNotes] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleAddNote = () => {
        if (title.trim() !== '' && content.trim() !== '') {
            const newNote = { title, content };
            setNotes([...notes, newNote]);
            setTitle('');
            setContent('');
        }
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode'); // Toggle dark-mode class on body
    };

    return (
        <div className={darkMode ? 'App dark-mode' : 'App'}>
            <header className={darkMode ? 'dark-mode' : ''}>
                <h1>Simple Notes App</h1>
            </header>
            <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
                <div>
                    <h2>Add New Note</h2>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={handleTitleChange}
                    />
                    <textarea
                        placeholder="Content"
                        value={content}
                        onChange={handleContentChange}
                    />
                    <button onClick={handleAddNote}>Add Note</button>
                </div>
                <div>
                    <h2>Notes</h2>
                    {notes.map((note, index) => (
                        <div key={index} className="note">
                            <h3>{note.title}</h3>
                            <ul>
                                {note.content.split('\n').map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="fab-container">
                <div className="fab" onClick={toggleDarkMode}>
                    <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                </div>
                {/* Add more FABs here if needed */}
            </div>
        </div>
    );
};

export default App;
