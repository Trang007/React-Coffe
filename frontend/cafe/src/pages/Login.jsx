import React from 'react'
import style from '../pages/Login.module.css'
import MenuArea from '../component/MenuArea'
import Footer from '../component/Footer'

const Login = () => {
  return (
    <div>
      <MenuArea />
      <div class={style['Login']}>
        <div className={style['LoginInner']}>
          <h2>Đăng nhập</h2>
          <div className={style['Acc']}>
            <h4>Tài khoản: </h4>
            <input type="text" />
          </div>
          <div className={style['Acc']}>
            <h4>Mật khẩu: </h4>
            <input type="password" />
          </div>
          <div className={style['LoginButton']}>
            <a href="/"> Đăng nhập </a>
          </div>
          <div className={style['More']}>
            <a href="/Register" className={style['register']}>Đăng ký</a>
            <a href="/ForgotPassword" className={style['Forgot']}>Quên mật khẩu</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login