import React from 'react'
import style from '../pages/ForgotPassword.module.css'
import MenuArea from '../component/MenuArea'

const ForgotPassword = () => {
    return (
        <div>
            <MenuArea />
            <div className={style['ForgotPassword']}>
                <div className={style['ForgotPasswordInner']}>
                    <h2> Quên mật khẩu </h2>
                    <div className={style['Acc']}>
                        <h4>Tài khoản: </h4>
                        <input type="text" />
                    </div>
                    <div className={style['Acc']}>
                        <h4>Email: </h4>
                        <input type="text" />
                    </div>
                    <div className={style['Acc']}>
                        <h4>Số điện thoại: </h4>
                        <input type="text" />
                    </div>
                    <div className={style['ForgotPasswordButton']}>
                        <a href=""> Gửi mật khẩu </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword