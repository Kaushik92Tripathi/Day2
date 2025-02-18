import { useState } from 'react'

function Counter2() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div style={{ 
      maxWidth: '300px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      textAlign: 'center'
    }}>
      <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Counter: {count}</h2>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button 
          onClick={handleDecrement}
          disabled={count === 0}
          style={{
            backgroundColor: count === 0 ? '#cbd5e1' : '#3b82f6',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '4px',
            border: 'none',
            cursor: count === 0 ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          Decrement
        </button>
        <button 
          onClick={handleIncrement}
          style={{
            backgroundColor: '#8b5cf6',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          Increment
        </button>
      </div>
    </div>
  )
}

export default Counter2



