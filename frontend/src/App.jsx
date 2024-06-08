// import React from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import './App.css';

function App() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="text-center" style={{
                      color: 'white'
                    }}>CRUDDER:<br></br> A Task App</h2>
                    <TaskList />
                </div>
                <div className="col-md-5" style={{
            maxWidth: "100%"
        }}>
                    <h2 className="text-center">Add Task</h2>
                    <AddTaskForm />
                </div>
            </div>
        </div>
    );
}

export default App;
