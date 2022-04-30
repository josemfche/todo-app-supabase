import axios from "axios"
import { useEffect, useState } from "react"
import { Card, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import { setTaskState, taskState, setLoading } from '../redux/reducers/taskSlice'
import Swal from 'sweetalert2'

const TodoList = ({ user }) => {
  const { isUpdate, taskLoading } = useSelector(taskState)
  const dispatch = useDispatch()

  const [todos, setTodos] = useState([])

  const fetchData = () => axios.get(`/api/todo/get-todo-list?user=${user.nickname}`).then(res => {
    setTodos(res.data.todos)
  })

  useEffect(() => {
    fetchData()
  }, [isUpdate, taskLoading])

  const handleUpdate = (todo) => {
    dispatch(setLoading())
    axios.patch(`/api/todo/update/${todo.id}`, todo)
      .then(res => {
        dispatch(setLoading())
      })
      .catch(err => {
        dispatch(setLoading())
        console.log(err)
      })
  }
  const handleDelete = (todo) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone',
      icon: 'warning',
      confirmButtonText: 'Delete',
      confirmButtonColor: '#bb2d3b',
      showDenyButton: true,
      denyButtonColor: 'green'
    }).then(SweetAlertResult => {
      SweetAlertResult.isConfirmed ? (
        axios.delete(`/api/todo/delete/${todo.id}`)
          .then(res => {
            fetchData()
          })
          .catch(err => alert(err))

      ) : null
    }).catch(err => alert(err))

  }

  const checkbox = 'checkbox'
  return (
    <div className="my-3 row d-flex justify-content-center p-3">
      {todos.map((todo, index) => (
        <Card className="align-self-center my-1" key={`todo-${todo.id}`}>
          <Card.Header>{`Task number: ${index + 1}`}</Card.Header>
          <Card.Body>
            <Card.Title>{todo.title}</Card.Title>
            <Card.Text>
              {todo.description}
            </Card.Text>
            <Form.Check
              type={checkbox}
              id={`default-${checkbox}`}
              label={'Completed'}
              checked={todo.completed}
              onChange={() => handleUpdate(todo)}
              disabled={taskLoading}
              className="my-3"
            />
            <Button className="px-3" onClick={() => {
              dispatch(setTaskState(todo))
              window.scrollTo(0, 0)
            }} >Edit</Button>
            <Button className="mx-2" variant="danger" onClick={() => handleDelete(todo)} >Delete</Button>
          </Card.Body>
        </Card>

      ))}
    </div>

  )
}

export default TodoList