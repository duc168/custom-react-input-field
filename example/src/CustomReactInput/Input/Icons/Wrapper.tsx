import React from 'react'
import { IconProps } from '../interface'
import styles from './styles.module.scss'
export const IconWrapper: React.FC<IconProps> = (props) => (
  <span
    {...props}
    className={`${styles.iconContainer} ${props.className || ''}`}
    style={{ width: props.width, height: props.height, ...(props.style || {}) }}
  >
    {props.children}
  </span>
)
