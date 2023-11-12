import { CgSpinner } from 'react-icons/cg'
import OtpInput from 'otp-input-react'
import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { auth } from '../firebase.config'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { toast, Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Authen = () => {
  const [otp, setOtp] = useState('')
  const [ph, setPh] = useState('')
  const [loading, setLoading] = useState(false)
  const [showOTP, setShowOTP] = useState(false)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        'recaptcha-container',
        {
          size: 'invisible',
          callback: (response) => {
            // onSignup();
          },
          'expired-callback': () => {},
        },
        auth,
      )
    }
  }

  function onSignup() {
    setLoading(true)
    onCaptchVerify()

    const appVerifier = window.recaptchaVerifier

    const formatPh = '+' + ph

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult
        setLoading(false)
        setShowOTP(true)

        toast.success('ส่ง otp แล้ว')
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)

        alert('request เยอะไปรอแปป')
      })
  }

  async function onOTPVerify() {
    setLoading(true)
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res)
        setUser(res.user)
        setLoading(false)
        localStorage.setItem('ph', ph)
        localStorage.setItem('user', res.user.uid)
        localStorage.setItem('firebase_token', res.user.accessToken)

        let payload = {
          uid: res.user.uid,
          firebaseToken: res.user.accessToken,
        }

        axios
          .post('http://127.0.0.1:3001/getuid', payload)
          .then((res) => {
            navigate('/')
            localStorage.setItem('token', res.data.token)
          })
          .catch((error) => {
            if (error.response.status == 404) {
              navigate('/create')
            } else {
              alert('server error')
            }
          })
      })
      .catch((err) => {
        console.log(err)

        setLoading(false)
      })
  }

  return (
    <>
      <div className="m-5">
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <div>
            <p>login แล้ว</p>
            <p>uid : {user.uid}</p>
            <p>phone number : {user.uid}</p>
          </div>
        ) : (
          <div>
            <p>เบอ</p>
            {showOTP ? (
              <>
                <label htmlFor="otp">ใส่ otp</label>
                <div className="p-2 bg-blue-400">
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    autoFocus
                    className="opt-container"
                  ></OtpInput>
                </div>
                <button
                  onClick={onOTPVerify}
                  className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>ยืนยัน</span>
                </button>
              </>
            ) : (
              <>
                <PhoneInput country={'th'} value={ph} onChange={setPh} />
                <button
                  onClick={onSignup}
                  className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>ส่ง otp</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default Authen
