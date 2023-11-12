import confirmotpcss from './Confirmotp.module.css';
import { useState } from 'react'
import OtpInput from 'otp-input-react'
function Confirmotp() {
    const [otp, setOtp] = useState('')
    return (

        <div className={confirmotpcss.App}>
            <p class={confirmotpcss.body}>

                <div class={confirmotpcss.bg} >
                    <div className={confirmotpcss.head}>
                        <button class={confirmotpcss.goback}>
                            <img src="/picture/Back-Button-PNG-Pic.png"></img>
                        </button>
                        <p className={confirmotpcss.create}>ยืนยันรหัส OTP</p>
                    </div>

                    <p className={confirmotpcss.t}>ตรวจสอบอุปกรณ์มือถือของคุณ</p>
                    <p className={confirmotpcss.text}>เราได้ทำการส่ง SMS พร้อมรหัสยืนยัน 6 หลักไปที่
                        XXXXXXX091 รหัสยืนยันจะหมดอายุภายใน 5 นาที</p>
                    <div className={confirmotpcss.otp}>
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
                    <div className={confirmotpcss.bottom}>
                        <button className={confirmotpcss.again}>ส่งรหัส OTP อีกครั้ง</button>
                        <button className={confirmotpcss.next}>ถัดไป</button>
                        <button className={confirmotpcss.editphone}>แก้ไขเบอร์โทรศัพท์</button>
                    </div>



                </div>
            </p>
        </div>
    )
}
export default Confirmotp;