function NavButton({ name, current, onClick, children }) {
  return (
    <button 
      onClick={onClick}
      style={{
        padding: '8px 16px',
        backgroundColor: current === name ? '#4f46e5' : '#fff',
        color: current === name ? '#fff' : '#1e293b',
        border: '1px solid #e2e8f0',
        borderRadius: '6px',
        cursor: 'pointer'
      }}
    >
      {children}
    </button>
  )
}

export default NavButton 