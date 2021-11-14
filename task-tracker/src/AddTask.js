import { useState } from "react"

const AddTask = ({ addTask}) => {
  const [text, setText] = useState('')
  const [day, setday] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text){
      alert("Please enter a task")
      return
    }

    addTask({ text, day, reminder})

    setReminder(false)
    setText('')
    setday('')
  }

  return(
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text' 
          placeholder='Add Tasks' 
          value={text} 
          onChange={(e)=> setText(e.target.value) }
        />
      </div>
      <div className='form-control'>
        <label>Day and Time</label>
        <input 
          type='text' 
          placeholder='Add Day and Time'
          value={day}
          onChange={(e) => setday(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input 
          type='checkbox'
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type='submit' value='Save' className='btn btn-block'/>
    </form>
  )
}

export default AddTask