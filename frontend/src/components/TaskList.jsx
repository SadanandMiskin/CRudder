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
           
                
                {Array.isArray(taskList) && taskList.length>0 ? (
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
                        <h6 style={{
                            color: 'red',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>No Tasks yet, Please Add it :)</h6>
                    </tbody>
                )}
           
        </div>
    );
}

export default TaskList;
