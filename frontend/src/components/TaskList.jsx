// import React from 'react';
import useTodoList from '../../hooks/UseTodoList';
import TaskRow from './TaskRow';

function TaskList() {
    const {
        taskList,
        editableId,
        editedTask,
        editedDescription,
        editedDueDate,
        toggleEditable,
        setEditedTask,
        setEditedDescription,
        setEditedDueDate,
        saveEditedTask,
        deleteTask
    } = useTodoList();

    return (
        <div className="table-responsive">
           
                
                {Array.isArray(taskList) ? (
                    <tbody>
                        {/* {console.log(taskList)} */}
                        
                        {taskList.map((data) => (
                            
                            <TaskRow
                                key={data._id}
                                data={data}
                                editableId={editableId}
                                editedTask={editedTask}
                                editedDescription={editedDescription}
                                editedDueDate={editedDueDate}
                                toggleEditable={toggleEditable}
                                setEditedTask={setEditedTask}
                                setEditedDescription={setEditedDescription}
                                setEditedDueDate={setEditedDueDate}
                                saveEditedTask={saveEditedTask}
                                deleteTask={deleteTask}
                            />
                        ))}
                    </tbody>
                ) : (
                    <tbody>
                        <tr>
                            <td colSpan="4">Loading tasks...</td>
                        </tr>
                    </tbody>
                )}
           
        </div>
    );
}

export default TaskList;
