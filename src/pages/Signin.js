import signincss from './Signin.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'
import './Signin_im.css'

function Signin() {
    const [otp, setOtp] = useState('')
    const [ph, setPh] = useState('')
    const [loading, setLoading] = useState(false)
    const [showOTP, setShowOTP] = useState(false)
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    return (
        <div className={signincss.App}>
            <div class={signincss.body}>

                <div class={signincss.bg} >
                    <button className={signincss.gbb}>
                        <img className={signincss.gb} src="/picture/Arrow 2.png" onClick={()=>{navigate('/')}}></img>
                    </button>
                    <p className={signincss.login}>เข้าสู่ระบบ</p>
                    <div className={signincss.box}>
                        <PhoneInput inputClass={signincss.phnumber}
                            dropdownClass={signincss.country}
                            buttonClass={signincss.btn}
                            containerClass={signincss.container}
                            country={'th'} value={ph} onChange={setPh} />
                        <button className={signincss.lb}>เข้าสู่ระบบ</button>
                    </div>
                </div>
                <button className={signincss.change}>ลงทะเบียน</button>
            </div>
        </div>
    )
}
export default Signin;