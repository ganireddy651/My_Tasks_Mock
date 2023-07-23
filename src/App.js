import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Tags from './components/Tags'
import Tasks from './components/Tasks'
import './App.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class App extends Component {
  state = {userInput: '', category: '', activeTab: tagsList, tasks: []}

  onChangeUserInput = e => {
    this.setState({userInput: e.target.value})
  }

  onChangeDropDown = e => {
    this.setState({category: e.target.value})
  }

  onTaskSubmit = e => {
    e.preventDefault()
    const {userInput, category} = this.state

    const newTask = {
      id: uuidv4(),
      userInput,
      category,
    }

    this.setState(prevState => ({
      tasks: [...prevState.tasks, newTask],
    }))
  }

  isActive = optionId => {
    const {tasks} = this.state
    const filter = tasks.filter(each => each.category === optionId)
    this.setState({tasks: filter})
  }

  render() {
    const {userInput, activeTab, tasks, category} = this.state

    return (
      <div className="app-container">
        <div className="create-task-container">
          <h1 className="create-task-heading">Create a Task</h1>
          <form onSubmit={this.onTaskSubmit}>
            <div className="task-input-container">
              <label className="label-task" htmlFor="task">
                Task
              </label>
              <br />
              <input
                className="task-input"
                type="text"
                id="task"
                placeholder="Enter the task here"
                onChange={this.onChangeUserInput}
                value={userInput}
              />
            </div>
            <div className="dropdown-container">
              <label className="label-tags" htmlFor="tags">
                Tags
              </label>
              <select
                className="option"
                id="tags"
                onChange={this.onChangeDropDown}
              >
                <option name="activity" value={tagsList[0].displayText}>
                  {tagsList[0].displayText}
                </option>
                <option name="activity">{tagsList[1].displayText}</option>
                <option name="activity">{tagsList[2].displayText}</option>
                <option name="activity">{tagsList[3].displayText}</option>
                <option name="activity">{tagsList[4].displayText}</option>
                <option name="activity">{tagsList[5].displayText}</option>
              </select>
            </div>
            <div className="add-task-btn-container">
              <button className="add-task-btn" type="submit">
                Add Task
              </button>
            </div>
          </form>
        </div>
        <div className="tags-container">
          <h1 className="tags-heading">Tags</h1>
          <ul className="list-container">
            {tagsList.map(each => (
              <Tags each={each} key={each.optionId} isActive={this.isActive} />
            ))}
          </ul>
          <h1 className="label-task">Tasks</h1>
          {tasks.length === 0 ? (
            <div className="no-task-container">
              <p className="no-tasks-text">No Tasks Added Yet</p>
            </div>
          ) : (
            <ul className="task-list-container">
              {tasks.map(eachTask => (
                <Tasks eachTask={eachTask} key={eachTask.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
