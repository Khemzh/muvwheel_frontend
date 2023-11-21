import signincss from './Signin.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'
import './Signin_im.css'
import 'react-phone-input-2/lib/style.css'
import { toast, Toaster } from 'react-hot-toast'
import { auth } from '../firebase.config'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { getuser, setuser } from '../back/user_api'

function Signin() {
    const navigate = useNavigate()
    const [ph, setPh] = useState('')

    useEffect(() => {
        let isLogin = getuser("isLogin")
        if (isLogin) {
            navigate('/home')
        }
    }, [])

    function onCaptchVerify() {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(
                'recaptcha-container',
                {
                    size: 'invisible',
                    callback: (response) => {
                        // onSignup();
                    },
                    'expired-callback': () => { },
                },
                auth,
            )
        }
    }

    async function onSignup() {
        await onCaptchVerify()

        const appVerifier = window.recaptchaVerifier

        const formatPh = '+' + ph

        signInWithPhoneNumber(auth, formatPh, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult
                toast.success('ส่ง otp แล้ว')
                setuser({ key: 'ph', value: ph })
                navigate('/confirmotp')
            })
            .catch((error) => {
                console.log(error)
                alert('ไม่สามารถส่ง OTP ได้\nerror: ' + error.message)
            })
    }


    return (
        <div className={signincss.App}>
            <Toaster toastOptions={{ duration: 4000 }} />
            <div class={signincss.body}>
                <div class={signincss.bg} >
                    <button className={signincss.gbb}>
                        <img className={signincss.gb} src="/picture/Arrow 2.png" onClick={() => { navigate('/') }}></img>
                    </button>
                    <p className={signincss.login}>เข้าสู่ระบบ</p>
                    <div className={signincss.box}>
                        <PhoneInput inputClass={signincss.phnumber}
                            dropdownClass={signincss.country}
                            buttonClass={signincss.btn}
                            containerClass={signincss.container}
                            country={'th'} value={ph} onChange={setPh} />
                        <button className={signincss.lb} onClick={onSignup}>เข้าสู่ระบบ</button>
                    </div>
                </div>
                <button className={signincss.change} onClick={() => { navigate('/signup') }}>ลงทะเบียน</button>
            </div>
        </div>
    )
}
export default Signin;