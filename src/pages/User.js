import usercss from './User.module.css';
import { useEffect, useState } from 'react'

function User() {
    const [gender, setGender] = useState('male')
    return (

        <div className={usercss.App}>
            <p class={usercss.body}>

                <div class={usercss.bg} >
                    <div className={usercss.head}>
                        <button class={usercss.goback}>
                            <img src="/picture/Back-Button-PNG-Pic.png"></img>
                        </button>
                        <p className={usercss.create}>ข้อมูลบัญชีผู้ใช้</p>
                    </div>
                    <div className={usercss.info}>

                        <img className={usercss.user} src="/picture/User image.png"></img>
                        <div>
                            <input className={usercss.name} type='text' placeholder='ชื่อจริง'></input>
                            <img className={usercss.line} src = "/picture/Line 20.png"></img>
                        </div>
                        <div>
                            <input className={usercss.surname} type='text' placeholder='นามสกุล'></input>
                            <img className={usercss.line} src = "/picture/Line 20.png"></img>
                        </div>
                        <div>
                            <input className={usercss.phone} type='number' placeholder='เบอร์'></input>
                            <img className={usercss.line} src = "/picture/Line 20.png"></img>
                        </div>
                        <div>
                            <input className={usercss.date} type='date' placeholder='วันเกิด'></input>
                            <img className={usercss.line} src = "/picture/Line 20.png"></img>
                        </div>
                        <div>
                            <select
                                id="gender"
                                className={usercss.sex}
                                onChange={(e) => {
                                    setGender(e.target.value)
                                }}
                            >
                                <option value="male" defaultChecked>
                                    male
                                </option>
                                <option value="female">female</option>
                            </select>
                            <img className={usercss.line} src = "/picture/Line 20.png"></img>
                            </div>
                    </div>




                    <div className={usercss.cc}>
                        <button className={usercss.confirm}>บันทึก</button>
                        <button className={usercss.cancle}>ออกจากระบบ</button>
                    </div>

                </div>
            </p>
        </div>
    )
}
export default User;