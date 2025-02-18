import { useState } from 'react'

function AuthToggle() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleToggle = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <div style={{
      maxWidth: '400px',
      margin: '40px auto',
      padding: '30px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      textAlign: 'center'
    }}>
      <h2 style={{
        fontSize: '24px',
        color: '#1a365d',
        marginBottom: '24px',
        fontWeight: '600'
      }}>
        {isLoggedIn ? 'Welcome back, Kaushik Tripathi!' : 'Welcome to Our App'}
      </h2>
      
      <p style={{
        color: '#4a5568',
        marginBottom: '24px',
        fontSize: '16px'
      }}>
        {isLoggedIn 
          ? 'You are currently logged in to your account' 
          : 'Please log in to access your account'}
      </p>
      
      <button 
        onClick={handleToggle}
        style={{
          backgroundColor: isLoggedIn ? '#7c3aed' : '#4f46e5',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: '500',
          transition: 'all 0.2s ease',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          transform: 'scale(1)',
          ':hover': {
            transform: 'scale(1.02)'
          }
        }}
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  )
}

export default AuthToggle 