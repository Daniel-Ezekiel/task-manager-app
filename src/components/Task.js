import { FaTimes } from 'react-icons/fa';

const Task = ( {task, onDelete, onToggle} ) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`}
    onDoubleClick={ () => onToggle(task.id) } >
        <h3>{task.text}</h3>
        <p>{task.day}</p>
        <FaTimes className="delBtn"
                 onClick={ () => onDelete(task.id) }
                 style={{ color: 'red', cursor: 'pointer' }}
                />
    </div>
  )
}

export default Task