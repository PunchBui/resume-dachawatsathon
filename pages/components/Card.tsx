import React from 'react'
import styles from '../../styles/Card.module.scss'
import clsx from 'clsx'

export const Card: React.VFC<{ children: JSX.Element, style?: string, onClick?: () => void }> = ({ children, style, onClick }) => {
  return (
    <div onClick={onClick} className={clsx(styles.card, style)}>
      {children}
    </div>
  )
}