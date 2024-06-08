// import React from 'react';

function TaskRow({
    data,
    editableId,
    editedTask,
    editedDescription,
    editedDueDate,
    toggleEditable,
    setEditedTask,
    setEditedDescription,
    setEditedDueDate,
    saveEditedTask,
    deleteTask,
}) {
    return (
        <div className="displayed" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            padding: '20px', 
            margin: '10px 0', 
            borderRadius: '5px', 
        }}>
            <div >
                {editableId === data._id ? (
                    <input
                        type="text"
                        className="form-control"
                        value={editedTask}
                        onChange={(e) => setEditedTask(e.target.value)}
                        style={{ marginBottom: '10px' }}
                    />
                ) : (
                    <h4 style={{ marginBottom: '10px' }}>{data.taskTitle}</h4>
                )}
            </div>
            <div>
                {editableId === data._id ? (
                    <input
                        type="text"
                        className="form-control"
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                        style={{ marginBottom: '10px' }}
                    />
                ) : (
                    <p style={{ marginBottom: '10px' }}>{data.taskDescription}</p>
                )}
            </div>
            <div>
                {editableId === data._id ? (
                    <input
                        type="datetime-local"
                        className="form-control"
                        value={editedDueDate}
                        onChange={(e) => setEditedDueDate(e.target.value)}
                        style={{ marginBottom: '10px' }}
                    />
                ) : (
                    <p style={{ marginBottom: '10px' }}>{data.dueDate ? new Date(data.dueDate).toLocaleString() : ''}</p>
                )}
            </div>
            <div>
                {editableId === data._id ? (
                    <button className="btn btn-success btn-sm" onClick={() => saveEditedTask(data._id)}>
                        Save
                    </button>
                ) : (
                    <button className="btn btn-primary btn-sm" onClick={() => toggleEditable(data._id)}>
                        Update
                    </button>
                )}
                <button className="btn btn-danger btn-sm ml-1" onClick={() => deleteTask(data._id)}>
                    Remove
                </button>
            </div>
        </div>
    );
}

export default TaskRow;
