import React from 'react'
import style from '../component/MenuArea.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Logo1 from '../assets/logo-1.png'
import Logo2 from '../assets/logo-2.png'

const MenuArea = () => {
  return (
    <div className={style['MenuArea']}>
      <div className={style['MenuInner']}>
        <div className={style['Logo']}>
          <a href="../pages/Home.jsx">
            <img src={Logo1} className={style['LogoMobile']} />
            <img src={Logo2} className={style['LogoWeb']} />
          </a>
        </div>
        <div className={style['humburger']}>
          <MenuIcon className={style['line']}/>
        </div>
        <nav className={style['nav-bar']}>
          <ul>
            <li>
              <a href="../pages/Home.jsx">Home</a>
            </li>
            <li>
              <a href="">Menu</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="../pages/Login.jsx">Login</a>
            </li>
          </ul>
        </nav>
        {/* <div className='buttonMenu'>
            <a href="" className={style['ShoppingCart']}>
              <ShoppingCartOutlinedIcon sx={{ fontSize: 20 }} />
            </a>
          </div> */}
      </div>
    </div>
  )
}

export default MenuArea