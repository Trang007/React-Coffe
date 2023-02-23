import React from 'react'
import style from '../component/Footer.module.css'

const Footer = () => {
    return (
        <div className={style['Footer']}>
            <div className={style['FooterInner']}>
                <div className={style['FooterRow']}>
                    <h4>Giờ mở cửa</h4>
                    <div className={style['FooterRowInner']}>
                        <div className={style['FooterCalender']}>
                            <h5>Monday</h5>
                            <div></div>
                            <p>Close</p>
                        </div>
                        <div className={style['FooterCalender']}>
                            <h5>Tuesday</h5>
                            <div></div>
                            <p>9:00 - 22:00</p>
                        </div>
                        <div className={style['FooterCalender']}>
                            <h5>Wednesday</h5>
                            <div></div>
                            <p>9:00 - 22:00</p>
                        </div>
                        <div className={style['FooterCalender']}>
                            <h5>THURSDAY</h5>
                            <div></div>
                            <p>9:00 - 22:00</p>
                        </div>
                        <div className={style['FooterCalender']}>
                            <h5>FRIDAY *</h5>
                            <div></div>
                            <p>9:00 - 1:00</p>
                        </div>
                        <div className={style['FooterCalender']}>
                            <h5>SATURDAY *</h5>
                            <div></div>
                            <p>12:00 - 01:00</p>
                        </div>
                        <div className={style['FooterCalender']}>
                            <h5>SUNDAY</h5>
                            <div></div>
                            <p>9:00 - 22:00</p>
                        </div>
                    </div>
                </div>
                <div className={style['FooterRow']}>
                    <h4>Bài viết</h4>
                    <div className={style['FooterRowInner']}>
                        <div >
                            <a href="" className={style['Row2Title']}>EXPAND YOUR MIND, CHANGE EVERYTHING</a>
                            <p className={style['Row2Time']}>14.02.2017</p>
                        </div>
                        <div >
                            <a href="" className={style['Row2Title']}>EXPAND YOUR MIND, CHANGE EVERYTHING</a>
                            <p className={style['Row2Time']}>14.02.2017</p>
                        </div>
                        <div >
                            <a href="" className={style['Row2Title']}>EXPAND YOUR MIND, CHANGE EVERYTHING</a>
                            <p className={style['Row2Time']}>14.02.2017</p>
                        </div>
                        <div >
                            <a href="" className={style['Row2Title']}>EXPAND YOUR MIND, CHANGE EVERYTHING</a>
                            <p className={style['Row2Time']}>14.02.2017</p>
                        </div>
                    </div>
                </div>
                <div className={style['FooterRow']}>
                    <h4>Liên hệ</h4>
                    <div className={style['FooterRowInner']}>
                        <a href="" className={style['FooterMail']}>roccat.nguyentuan@gmail.com</a>
                        <p className={style['FooterPhone']}>0862386801</p>
                        <p className={style['FooterAddress']}>Đức Thắng, Bắc Từ Liêm, Hà Nội</p>
                        <a href="" className={style['FooterMail']}>TrangDang@gmail.com</a>
                        <p className={style['FooterPhone']}>0862386801</p>
                        <p className={style['FooterAddress']}>Đức Thắng, Bắc Từ Liêm, Hà Nội</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer