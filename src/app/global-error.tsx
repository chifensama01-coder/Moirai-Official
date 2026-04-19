'use client'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#050407' }}>
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#050407', color: '#B8A9C9', textAlign: 'center', padding: '2rem', fontFamily: 'sans-serif' }}>
          <h2 style={{ fontSize: '2rem', color: '#F0EBF8', marginBottom: '1rem' }}>
            Something went wrong.
          </h2>
          <p style={{ fontSize: '14px', marginBottom: '2rem', maxWidth: '400px' }}>
            Please try again.
          </p>
          <button
            onClick={() => reset()}
            style={{ padding: '1rem 2.75rem', background: '#2D1B69', color: '#FAFAFA', border: 'none', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '11px' }}
          >
            Reload Page
          </button>
        </div>
      </body>
    </html>
  )
}
