import usercss from './User.module.css';
import { useEffect, useState } from 'react'
import { getuser, setuser, signout } from '../back/user_api'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function User() {
    const navigate = useNavigate();
    const [ngender, setnGender] = useState(getuser('gender'))
    const [nname, setnName] = useState(getuser('name'))
    const [nsurname, setnSurname] = useState(getuser('surname'))
    const [ndate, setnDate] = useState(getuser('date'))

    function onFormSubmit(e) {
        e.preventDefault()

        let payload = {
            name: nname,
            surname: nsurname,
            date: ndate,
            gender: ngender,
            uid: getuser('uid'),
            token: getuser('token'),
        }

        let url = "http://127.0.0.1:3001" + '/userupdate'

        axios
            .post(url, payload)
            .then((res) => {
                if (res.status == 200) {
                    setuser({ key: 'token', value: res.data.token })
                    setuser({ key: 'name', value: nname })
                    setuser({ key: 'surname', value: nsurname })
                    setuser({ key: 'date', value: ndate })
                    setuser({ key: 'gender', value: ngender })
                    navigate('/')
                }
            })
            .catch((e) => {
                alert('cant connect to server\n' + e.message)
            })
    }

    return (

        <div className={usercss.App}>
            <p class={usercss.body}>

                <div class={usercss.bg} >
                    <div className={usercss.head}>
                        <button class={usercss.goback} onClick={() => { navigate(-1) }}>
                            <img src="/picture/Back-Button-PNG-Pic.png"></img>
                        </button>
                        <p className={usercss.create}>ข้อมูลบัญชีผู้ใช้</p>
                    </div>
                    <form className={usercss.info} onSubmit={onFormSubmit}>

                        <img className={usercss.user} src="/picture/User image.png"></img>
                        <div>
                            <input className={usercss.name} type='text' placeholder='ชื่อจริง' defaultValue={getuser('name')} onChange={(e) => { setnName(e.target.value) }} required></input>
                            <img className={usercss.line} src="/picture/Line 20.png"></img>
                        </div>
                        <div>
                            <input className={usercss.surname} type='text' placeholder='นามสกุล' defaultValue={getuser('surname')} onChange={(e) => { setnSurname(e.target.value) }} required></input>
                            <img className={usercss.line} src="/picture/Line 20.png"></img>
                        </div>
                        <div>
                            <input className={usercss.phone} type='number' placeholder='เบอร์' value={getuser('ph')} readOnly></input>
                            <img className={usercss.line} src="/picture/Line 20.png"></img>
                        </div>
                        <div>
                            <input className={usercss.date} type='date' placeholder='วันเกิด' defaultValue={getuser('date')} onChange={(e) => { setnDate(e.target.value) }} required></input>
                            <img className={usercss.line} src="/picture/Line 20.png"></img>
                        </div>
                        <div>
                            <select
                                id="gender"
                                className={usercss.sex}
                                onChange={(e) => {
                                    setnGender(e.target.value)
                                }}
                                defaultValue={getuser('gender')}
                            >
                                <option value="male" defaultChecked>
                                    male
                                </option>
                                <option value="female">female</option>
                            </select>
                            <img className={usercss.line} src="/picture/Line 20.png"></img>
                        </div>
                        <div className={usercss.cc}>
                            <button className={usercss.confirm} type='submit'>บันทึก</button>
                            <button className={usercss.cancle} type='button' onClick={() => { signout(); navigate(-1) }}>ออกจากระบบ</button>
                        </div>
                    </form>
                </div>
            </p>
        </div>
    )
}
export default User;