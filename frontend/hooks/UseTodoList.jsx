import { useState ,useEffect } from "react"


const UseTodoList = () => {


    const [taskList, setTaskList] = useState([])
    const [editableId, setEditableId] = useState(null)
    const [editedTask, setEditedTask] = useState("")
    const [editedDescription, setEditedDescription] = useState("")
    const [editedDueDate, setEditedDueDate] = useState("")

    useEffect(()=>{
        fetch.get('http://localhost:3000/display')
            .then((tasks)=> {
                setTaskList(tasks.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])

    const toggleEditable = (id) => {
        const rowData = taskList.find((data) => data._id === id) 
        if (rowData) {
            setEditableId(id) 
            setEditedTask(rowData.taskTitle) 
            setEditedDescription(rowData.taskDescription) 
            setEditedDueDate(rowData.dueDate || "") 
        } else {
            setEditableId(null) 
            setEditedTask("") 
            setEditedDescription("") 
            setEditedDueDate("") 
        }
    }

    const saveEditedTask = (id) => {
        const editedData = {
            title: editedTask,
            description: editedDescription,
            dueDate: editedDueDate,
        } 

        if (!editedTask || !editedDescription || !editedDueDate) {
            alert("All fields must be filled out.") 
            return 
        }

        fetch.post(`${process.env.REACT_APP_BACKEND}/update/` + id, editedData)
            .then(result => {
                console.log(result) 
                setEditableId(null) 
                setEditedTask("") 
                setEditedDescription("") 
                setEditedDueDate("") 
                window.location.reload() 
            })
            .catch(err => console.log(err)) 
    }

    const deleteTask = (id) => {
        fetch.delete(`${process.env.REACT_APP_BACKEND}/delete/` + id)
            .then(result => {
                console.log(result);
                window.location.reload();
            })
            .catch(err => console.log(err));
    };

    return {
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
    };
}

export default useTodoList;

