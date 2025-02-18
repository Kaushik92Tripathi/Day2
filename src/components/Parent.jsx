import { useState } from 'react'

function Parent() {
  const [message, setMessage] = useState('Hello from Parent!')

  return (
    <div style={{ padding: '20px' }}>
      <h1>{message}</h1>
    </div>
  )
}

export default Parent 





