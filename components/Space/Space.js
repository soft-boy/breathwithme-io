import styles from './Space.module.css'

const dirs = {
  vertical: 'column',
  horizontal: 'row'
}

const sizes = {
  small: 8,
  medium: 16,
  large: 24
}

export default function Space({ direction, size, justifyContent, alignItems, children, className, style }) {
  const spaceStyle = {
    flexDirection: dirs[direction],
    justifyContent,
    alignItems,
    gap: sizes[size],
    ...style
  }

  return (
    <div style={spaceStyle} className={`${className} ${styles.space}`}>
      {children}
    </div>
  )
}
