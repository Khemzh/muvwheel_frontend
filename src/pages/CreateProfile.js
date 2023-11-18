import createprofilecss from './CreateProfile.module.css';
import { useEffect, useState } from 'react'

function CreateProfile2() {
    const [gender, setGender] = useState('male')
    return (

        <div className={createprofilecss.App}>
            <p class={createprofilecss.body}>

                <div class={createprofilecss.bg} >
                    <div className={createprofilecss.head}>
                        <button class={createprofilecss.goback}>
                            <img src="/picture/Back-Button-PNG-Pic.png"></img>
                        </button>
                        <p className={createprofilecss.create}>สร้างบัญชี</p>
                    </div>
                    <div className={createprofilecss.info}>
                    <img className={createprofilecss.user} src="/picture/User image.png"></img>
                        <div>
                            <input className={createprofilecss.name} type='text' placeholder='ชื่อจริง'></input>
                            <img className={createprofilecss.line} src = "/picture/Line 20.png"></img>
                        </div>
                        <div>
                            <input className={createprofilecss.surname} type='text' placeholder='นามสกุล'></input>
                            <img className={createprofilecss.line} src = "/picture/Line 20.png"></img>
                        </div>
                        <div>
                            <input className={createprofilecss.phone} type='number' placeholder='เบอร์'></input>
                            <img className={createprofilecss.line} src = "/picture/Line 20.png"></img>
                        </div>
                        <div>
                            <input className={createprofilecss.date} type='date' placeholder='วันเกิด'></input>
                            <img className={createprofilecss.line} src = "/picture/Line 20.png"></img>
                        </div>
                        <div>
                            <select
                                id="gender"
                                className={createprofilecss.sex}
                                onChange={(e) => {
                                    setGender(e.target.value)
                                }}
                            >
                                <option value="male" defaultChecked>
                                    male
                                </option>
                                <option value="female">female</option>
                            </select>
                            <img className={createprofilecss.line} src = "/picture/Line 20.png"></img>
                            </div></div>
                    <div className={createprofilecss.cc}>
                        <button className={createprofilecss.confirm}>ยืนยันเพื่อลงทะเบียน</button>
                        <button className={createprofilecss.cancle}>ยกเลิก</button>
                    </div>

                </div>
            </p>
        </div>
    )
}
export default CreateProfile2;