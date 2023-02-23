import React from 'react'
import MenuArea from '../component/MenuArea'
import style from '../pages/Register.module.css'

const Register = () => {
    return (
        <div>
            <MenuArea />
            <div className={style['Register']}>
                <div className={style['RegisterInner']}>
                    <h2> Đăng ký </h2>
                    <div className={style['Acc']}>
                        <h4>Tài khoản: </h4>
                        <input type="text" />
                    </div>
                    <div className={style['Acc']}>
                        <h4>Mật khẩu: </h4>
                        <input type="password" />
                    </div>
                    <div className={style['Acc']}>
                        <h4>Số điện thoại: </h4>
                        <input type="text" />
                    </div>
                    <div className={style['Acc']}>
                        <h4>Email: </h4>
                        <input type="text" />
                    </div>
                    <div className={style['RegisterButton']}>
                        <a href=""> Đăng ký </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register