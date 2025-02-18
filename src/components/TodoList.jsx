import { useState } from 'react'

function TodoList() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  const handleAddTodo = (e) => {
    e.preventDefault()
    if (!newTodo.trim()) return
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }])
    setNewTodo('')
  }

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '40px auto',
      padding: '30px',
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
    },
    form: {
      display: 'flex',
      gap: '12px',
      marginBottom: '24px'
    },
    input: {
      flex: 1,
      padding: '12px',
      border: '2px solid #e2e8f0',
      borderRadius: '8px',
      fontSize: '16px'
    },
    button: {
      padding: '12px 24px',
      backgroundColor: '#4f46e5',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer'
    },
    todoItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '12px',
      backgroundColor: '#f8fafc',
      borderRadius: '8px',
      marginBottom: '8px'
    }
  }

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: 'center', color: '#1a365d', marginBottom: '24px' }}>
        My Todo List
      </h2>
      
      <form onSubmit={handleAddTodo} style={styles.form}>
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="What needs to be done?"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Add</button>
      </form>

      {todos.map(({ id, text, completed }) => (
        <div key={id} style={styles.todoItem}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => setTodos(todos.map(todo => 
              todo.id === id ? { ...todo, completed: !completed } : todo
            ))}
            style={{ marginRight: '12px' }}
          />
          <span style={{ 
            flex: 1,
            textDecoration: completed ? 'line-through' : 'none',
            color: completed ? '#94a3b8' : '#1e293b'
          }}>
            {text}
          </span>
          <button
            onClick={() => setTodos(todos.filter(todo => todo.id !== id))}
            style={{ ...styles.button, backgroundColor: '#ef4444', padding: '8px 16px' }}
          >
            Delete
          </button>
        </div>
      ))}

      {!todos.length && (
        <p style={{ textAlign: 'center', color: '#64748b' }}>

          No todos yet. Add one above!
        </p>
      )}
    </div>
  )
}

export default TodoList 



