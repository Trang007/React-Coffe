import React from 'react'
import style from '../pages/Login.module.css'
import MenuArea from '../component/MenuArea'
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
            <a href="/pages/Home"> Đăng nhập </a>
          </div>
          <div className={style['More']}>
            <a href="" className={style['register']}>Đăng ký</a>
            <a href="" className={style['Forgot']}>Quên mật khẩu</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login