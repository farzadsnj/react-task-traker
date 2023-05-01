import React from 'react'
import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    
    const onSubmit = (e) =>{
        e.preventDefault()
        if(!text){
            alert("please Add a Task name")
            return
        }
        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Tasks</label>
            <input type='text' placeholder='Add Task' value={text} onChange={(e)=>{
                setText(e.target.value)
            }} />
        </div>
        <div className='form-control'>
            <label>Days $ Times</label>
            <input type='text' placeholder='Add Days & Times' value={day} onChange={(e)=>{
                setDay(e.target.value)
            }} />
        </div>
        <div className='form-control form-control-checkbox'>
            <label>Set Reminder</label>
            <input type='checkbox' checked={reminder} value={reminder} onChange={(e)=>{
                setReminder(e.currentTarget.checked)
            }} />
        </div>
        <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddTask