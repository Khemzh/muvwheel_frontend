import signupcss from './Signup.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'

function Signup() {
    const [otp, setOtp] = useState('')
    const [ph, setPh] = useState('')
    const [loading, setLoading] = useState(false)
    const [showOTP, setShowOTP] = useState(false)
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    return (
        <div className={signupcss.App}>
            <div class={signupcss.body}>

                <div class={signupcss.bg} >
                    <button className={signupcss.gbb}>
                        <img className={signupcss.gb} src="/picture/Arrow 2.png" onClick={()=>{navigate('/')}}></img>
                    </button>
                    <p className={signupcss.login}>ลงทะเบียน</p>
                    <div className={signupcss.box}>
                        <PhoneInput inputClass={signupcss.phnumber}
                            dropdownClass={signupcss.country}
                            buttonClass={signupcss.btn}
                            containerClass={signupcss.container}
                            country={'th'} value={ph} onChange={setPh} />
                        <button className={signupcss.lb} onClick={()=>{navigate('/confirmotp')}}>ลงทะเบียน</button>
                    </div>
                </div>
                <button className={signupcss.change} onClick={()=>{navigate('/signin')}}>เข้าสู่ระบบ</button>
            </div>
        </div>
    )
}
export default Signup;