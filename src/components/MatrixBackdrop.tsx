interface MatrixBackdropProps {
  density?: 'low' | 'medium' | 'high'
}

/**
 * Renders the animated Matrix tactical backdrop layers.
 */
const MatrixBackdrop = ({ density = 'medium' }: MatrixBackdropProps) => {
  const rainOpacity = density === 'high' ? 'opacity-70' : density === 'low' ? 'opacity-30' : 'opacity-50'

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="matrix-gradient absolute inset-0" />
      <div className={`matrix-rain absolute inset-0 ${rainOpacity}`} />
      <div className="matrix-scanline absolute inset-0" />
      <div className="matrix-grid absolute inset-0" />
    </div>
  )
}

export default MatrixBackdrop
