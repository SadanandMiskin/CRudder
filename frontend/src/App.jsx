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
                      color: 'white',
                  maxWidth: '100%'
                    }}>CRUDDER<br></br></h2>
                    <p className='text-center'>(A Task App)</p>
                    <TaskList />
                </div>
                <div className="col-md-5" style={{
            maxWidth: "100%"
        }}>
                    <h2 className="text-center">Add Task</h2>
                    <AddTaskForm />
                </div>
            </div>
            <h6 style={{color:'white', display: 'flex', justifyContent:'center', marginTop: '20px'}}>😄Sadanand Miskin</h6>
        </div>
        
    );
}

export default App;
