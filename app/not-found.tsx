export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#080D18', color: '#F5F3EF', fontFamily: 'sans-serif' }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '14px', opacity: 0.5, marginBottom: '12px' }}>404</p>
        <a href="/" style={{ color: '#B8C6FF', textDecoration: 'underline' }}>Back to home</a>
      </div>
    </div>
  )
}
