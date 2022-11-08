import { useState } from "react";

const Form = ( { onAdd } ) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const addTask = (e) => {
    e.preventDefault();

    if(!text){
      alert('Remember to add a task!')
      return;
    }
    
    onAdd( {text, day, reminder} )

    setText('');
    setDay('');
    setReminder(false);
  }

  return (
    <form onSubmit={addTask}>
        <div className="form-control">
            <label>Task Description</label>
            <input type="text" name="description" placeholder="Enter the task description" value={text} onChange={(e) => setText(e.target.value )} />
        </div>

        <div className="form-control">
            <label>Day and Time</label>
            <input type="text" name="day and time" placeholder="Enter the day & time" value={day} onChange={(e) => setDay(e.target.value )} />
        </div>

        <div className="form-control form-control-check">
            <label>Reminder</label>
            <input type="checkbox" name="reminder" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked )} />
        </div>

        <input className='btn btn_submit' type="submit" value="submit" />
    </form>
  )
}

export default Form