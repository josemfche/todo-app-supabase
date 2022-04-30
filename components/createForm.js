import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { resetIsUpdate, taskState, setLoading } from '../redux/reducers/taskSlice'

const CreateTaskForm = ({ user }) => {

  let { task: taskToUpdate, isUpdate } = useSelector(
    taskState)
  const dispatch = useDispatch()

  const [task, setTask] = useState({ completed: false })

  useEffect(() => {
    isUpdate ? setTask(taskToUpdate) : setTask({})
  }, [taskToUpdate, isUpdate])

  const handleSubmit = (e) => {
    dispatch(setLoading())
    if (isUpdate) {
      e.preventDefault()
      axios.put(`/api/todo/update/${task.id}`, task)
        .then(res => {
          dispatch(setLoading())
          setTask({})
          dispatch(resetIsUpdate())
        }).catch(err => {
          alert(err)
          dispatch(setLoading())
        })
    } else {
      e.preventDefault()
      axios.post('/api/todo/create', { task, user })
        .then(res => {
          setTask({})
          dispatch(setLoading())
        }).catch(err => {
          alert(err)
          dispatch(setLoading())
        })
    }
  }

  const handleChange = (e) => {
    e.target.name === 'completed' ? setTask({
      ...task,
      completed: !task.completed
    }) : setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <div className='' style={{ marginTop: "70px"}}>
        <h2 className="my-3" >Keep track of your activities with this simple todo app!</h2>
      </div>
      <Form className="border rounded p-2" onSubmit={handleSubmit}>
        <h5>Add Task</h5>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control onChange={handleChange} value={task.title ?? ''} name="title" type="text" placeholder="Title of the task" />
          <Form.Text className="text-muted">
            We ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control onChange={handleChange} name="description" value={task.description ?? ''} type="text" placeholder="Description of the task" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onChange={handleChange} name="completed" checked={task.completed} type="checkbox" label="Completed" />
        </Form.Group>

        <Button variant="primary" type="submit">
          {isUpdate ? "Update" : "Save"}
        </Button>
        {isUpdate ? <Button variant="danger" className="mx-2" onClick={() => dispatch(resetIsUpdate())}>Cancel Update</Button> : <></>}
      </Form>
    </div>
  )
}

export default CreateTaskForm