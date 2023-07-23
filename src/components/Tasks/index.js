import './index.css'

const Tasks = props => {
  const {eachTask} = props
  const {userInput, category} = eachTask

  return (
    <li>
      <div className="task-card">
        <p className="user-input">{userInput}</p>
        <div className="category-input">
          <p className="para">{category}</p>
        </div>
      </div>
    </li>
  )
}

export default Tasks
