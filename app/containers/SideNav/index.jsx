import React    from 'react'

// import { NavLink } from 'react-router-dom'
// import { Link } from 'react-router-dom'

import {
  SmallLogo,
  LargeLogo
} from '$ICONS'

/* eslint-disable */
import styles from './styles.css'

export function value(a, b) {
  return a + b
}

export default function SideNav() {
  return (
    <div className={styles.navBar}>
      <div className={`col-12 ${styles.logoCont}`}>
        <SmallLogo classes={`${styles.smallLogo} ${styles.logo}`} />
        <LargeLogo classes={`${styles.largeLogo} ${styles.logo}`} />
      </div>
    </div>
  )
}

