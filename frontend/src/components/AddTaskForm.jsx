import React, { useState } from 'react';
import axios from 'axios';

function AddTaskForm() {
    const [newTask, setNewTask] = useState("");
    const [newDescription, setnewDescription] = useState("");
    const [newDueDate, setnewDueDate] = useState("");

    const addTask = (e) => {
        e.preventDefault();
        if (!newTask || !newDescription || !newDueDate) {
            alert("All fields must be filled out.");
            return;
        }

         axios.post('http://localhost:3000/create', { title: newTask, description: newDescription, dueDate: newDueDate })
            .then(res => {
                console.log(res);
                window.location.reload();
            })
            .catch(err => console.log(err));
    }

    return (
        <form className="bg-dark p-4" style={{
            backgroundColor: 'black'
        }} onSubmit={addTask}>
            <div className="mb-3">
                <label>Title</label>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Task Title"
                    onChange={(e) => setNewTask(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>Description</label>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Description"
                    onChange={(e) => setnewDescription(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>Due-Date</label>
                <input
                    className="form-control"
                    type="datetime-local"
                    onChange={(e) => setnewDueDate(e.target.value)}
                />
            </div>
            <button className="btn btn-success btn-sm" type="submit">
                Add-Task
            </button>
        </form>
    );
}

export default AddTaskForm;
