import React from 'react'
import style from '../component/Header.module.css'
import MenuArea from "./MenuArea"

const Header = () => {
  return (
    <div className={style['Header']}>
      <MenuArea className={style['HeaderMenu']} />
      <div className={style['HeadreInner']}>
        <div className={style['HeaderContent']}>
          <h1>BARISTA Coffe</h1>
          <h4>Cafe là thứ gắn kết tinh thần mạnh mẽ nhất <br /> 
          xuất hiện từ góc khuất vỉa hè cho đến những quán sang trọng. <br /> 
          Tuy giống nhau về vị giác nhưng khác nhau về tâm hồn.
          </h4>
        </div>
      </div>
    </div>
  )
}

export default Header