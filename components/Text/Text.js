import React from 'react'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

const defaultStyles = {
  color: '#1d1d1d',
  margin: 6,
}

const extraStyles = {
  ultralight: { fontWeight: 100 },
  thin: { fontWeight: 200 },
  light: { fontWeight: 300 },
  regular: { fontWeight: 400 },
  medium: { fontWeight: 500 },
  semibold: { fontWeight: 600 },
  bold: { fontWeight: 700 },
  heavy: { fontWeight: 800 },
  black: { fontWeight: 900 },
  italic: { fontStyle: 'italic' },
  white: { color: '#FFFFFF' },
  lightgrey: { color: '#EEEEEE' },
  lightgray: { color: '#EEEEEE' },
  grey: { color: '#6E6E6E' },
  gray: { color: '#6E6E6E' },
  magenta: { color: '#D81E5B' },
  blue: { color: '#0D6EFD' },
  bluegradient: { backgroundImage: 'url(blue.jpeg)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
}

const getExtraStyles = (props) => {
  const styles = { ...defaultStyles }
  for (const key in props) {
    if (extraStyles[key]) {
      Object.assign(styles, extraStyles[key])
    }
  }
  return styles
}

export const Title = React.forwardRef(({ children, style, className, size=16, ...props }, ref) => {
  const extraStyles = getExtraStyles(props)

  return (
    <div ref={ref} style={{fontSize: size, ...style, ...extraStyles}} className={`${className} ${inter.className}`}>
      {children}
    </div>
  )
})

export function Body({ children, style, className, size=16, ...props }) {
  const extraStyles = getExtraStyles(props)

  return (
    <div style={{fontSize: size, ...style, ...extraStyles}} className={`${className} ${inter.className}`}>
      {children}
    </div>
  )
}


export function H6({ children, style, className, size=12, ...props }) {
  const extraStyles = getExtraStyles(props)

  return (
    <h6 style={{fontSize: size, ...style, ...extraStyles}} className={`${className} ${inter.className}`}>
      {children}
    </h6>
  )
}

export function H5({ children, style, className, size=14, ...props }) {
  const extraStyles = getExtraStyles(props)

  return (
    <h5 style={{fontSize: size, ...style, ...extraStyles}} className={`${className} ${inter.className}`}>
      {children}
    </h5>
  )
}

export function H4({ children, style, className, size=20, ...props }) {
  const extraStyles = getExtraStyles(props)

  return (
    <h4 style={{fontSize: size, ...style, ...extraStyles}} className={`${className} ${inter.className}`}>
      {children}
    </h4>
  )
}

export function H3({ children, style, className, size=22, ...props }) {
  const extraStyles = getExtraStyles(props)

  return (
    <h3 style={{fontSize: size, ...style, ...extraStyles}} className={`${className} ${inter.className}`}>
      {children}
    </h3>
  )
}

export const H2 = React.forwardRef(({ children, style, className, size=26, ...props }, ref) => {
  const extraStyles = getExtraStyles(props)

  return (
    <h2 ref={ref} style={{fontSize: size, ...style, ...extraStyles}} className={`${className} ${inter.className}`}>
      {children}
    </h2>
  )
})

export function H1({ children, style, className, size=32, ...props }) {
  const extraStyles = getExtraStyles(props)

  return (
    <h1 style={{fontSize: size, ...style, ...extraStyles}} className={`${className} ${inter.className}`}>
      {children}
    </h1>
  )
}