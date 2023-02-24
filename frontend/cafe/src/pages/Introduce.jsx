import React from 'react'
import style from '../pages/Introduce.module.css'
import MenuArea from '../component/MenuArea'
import Footer from '../component/Footer'

const Introduce = () => {
  return (
    <div>
        <MenuArea/>
        <div className={style['Introduce']}>
            This Introduce
        </div>
        <Footer/>
    </div>
  )
}

export default Introduce