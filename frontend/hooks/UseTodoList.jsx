import { useState ,useEffect } from "react"
import axios from 'axios'

const UseTodoList = () => {


    const [taskList, setTaskList] = useState([])
    const [editableId, setEditableId] = useState(null)
    const [editedTask, setEditedTask] = useState("")
    const [editedDescription, setEditedDescription] = useState("")
    const [editedDueDate, setEditedDueDate] = useState("")

    useEffect(()=>{
        axios.get('http://localhost:3000/display')
            .then((tasks)=> {
                // console.log(tasks.data)
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

         axios.post(`http://localhost:3000/update/` + id, editedData)
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
         axios.delete(`http://localhost:3000/delete/` + id)
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

export default UseTodoList;

