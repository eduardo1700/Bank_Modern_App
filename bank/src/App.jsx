import React from 'react'
import styles from './style'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div classname={`${styles.boxWidth}`}>
          Navbar
        </div>

      </div>
      <div className={`bg-primay ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Hero
        </div>
      </div>
    </div>
  )
}

export default App