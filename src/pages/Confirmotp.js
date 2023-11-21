import confirmotpcss from './Confirmotp.module.css';
import { useState } from 'react'
import OtpInput from 'otp-input-react'
import { useNavigate } from 'react-router-dom'
import './Confirmotp_im.css'
import axios from 'axios'
import { getuser, setuser } from '../back/user_api'

function Confirmotp() {
    const navigate = useNavigate()
    const [otp, setOtp] = useState('')
    const [user, setUser] = useState(null)

    async function onOTPVerify() {
        window.confirmationResult
            .confirm(otp)
            .then(async (res) => {
                console.log(res)
                setUser(res.user)
                setuser({ key: 'uid', value: res.user.uid })
                setuser({ key: 'firebaseToken', value: res.user.accessToken })
                let payload = {
                    uid: res.user.uid,
                    firebaseToken: res.user.accessToken,
                }

                let url = "http://127.0.0.1:3001" + '/getuid'
                axios
                    .post(url, payload)
                    .then((res) => {
                        setuser({ key: 'token', value: res.data.token })
                        setuser({ key: 'name', value: res.data.name })
                        setuser({ key: 'surname', value: res.data.surname })
                        setuser({ key: 'date', value: res.data.date })
                        setuser({ key: 'gender', value: res.data.gender })
                        setuser({ key: 'isLogin', value: true })
                        navigate('/')
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
                alert('รหัส OTP ไม่ถูกต้อง')
            })
    }

    return (

        <div className={confirmotpcss.App}>
            <p class={confirmotpcss.body}>

                <div class={confirmotpcss.bg} >
                    <div className={confirmotpcss.head}>
                        <button class={confirmotpcss.goback} onClick={() => { navigate('/signin') }}>
                            <img src="/picture/Back-Button-PNG-Pic.png"></img>
                        </button>
                        <p className={confirmotpcss.create}>ยืนยันรหัส OTP</p>
                    </div>

                    <p className={confirmotpcss.t}>ตรวจสอบอุปกรณ์มือถือของคุณ</p>
                    <p className={confirmotpcss.text}>เราได้ทำการส่ง SMS พร้อมรหัสยืนยัน 6 หลักไปที่ <br></br>
                        <span style={{ color: '#E6145A' }}>XXXXXXX091</span> รหัสยืนยันจะหมดอายุภายใน 5 นาที</p>
                    <div className={confirmotpcss.otp}>
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            OTPLength={6}
                            otpType="number"
                            disabled={false}
                            autoFocus
                            className={`opt-container ${confirmotpcss.otp}`}

                        ></OtpInput>
                    </div>
                    <div className={confirmotpcss.bottom}>
                        <button className={confirmotpcss.again}>ส่งรหัส OTP อีกครั้ง</button>
                        <button className={confirmotpcss.next} onClick={onOTPVerify}>ถัดไป</button>
                        <button className={confirmotpcss.editphone} onClick={() => { navigate('/signin') }}>แก้ไขเบอร์โทรศัพท์</button>
                    </div>



                </div>
            </p>
        </div>
    )
}
export default Confirmotp;