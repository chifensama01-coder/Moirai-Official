'use client'

import { useEffect } from 'react'

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // We swallow technical errors inherently, but log them silently
    console.error(error)
  }, [error])

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#050407', color: '#B8A9C9', textAlign: 'center', padding: '2rem' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: '#F0EBF8', marginBottom: '1rem' }}>
        Something went wrong.
      </h2>
      <p style={{ fontSize: '14px', marginBottom: '2rem', maxWidth: '400px' }}>
        Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="btn-primary"
      >
        Reload Page
      </button>
    </div>
  )
}
