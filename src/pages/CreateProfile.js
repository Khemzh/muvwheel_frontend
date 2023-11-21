import createprofilecss from './CreateProfile.module.css';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { getuser, setuser, signout } from '../back/user_api'

function CreateProfile() {
    const navigate = useNavigate()
    const [uid, setUid] = useState('')
    const [ph, setPh] = useState('')

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [date, setDate] = useState('')
    const [gender, setGender] = useState('male')

    const onFormSubmit = (e) => {
        e.preventDefault()

        let payload = {
            name: name,
            surname: surname,
            date: date,
            gender: gender,
            ph: ph,
            uid: uid,
        }

        let url = "http://127.0.0.1:3001" + '/register'

        axios
            .post(url, payload)
            .then((res) => {
                if (res.status == 200) {
                    setuser({ key: 'token', value: res.data.token })
                    setuser({ key: 'name', value: name })
                    setuser({ key: 'surname', value: surname })
                    setuser({ key: 'date', value: date })
                    setuser({ key: 'gender', value: gender })
                    setuser({ key: 'isLogin', value: true })
                    navigate('/')
                }
            })
            .catch((e) => {
                alert('cant connect to server\n' + e.message)
            })
    }
    function cancle() {
        signout()
        navigate('/')
    }

    useEffect(() => {
        let uid = getuser('uid')
        let ph = getuser('ph')
        if (uid && ph) {
            setUid(uid)
            setPh(ph)
        }
    }, [])

    return (

        <div className={createprofilecss.App}>
            <p class={createprofilecss.body}>
                <div class={createprofilecss.bg} >
                    <div className={createprofilecss.head}>
                        <button class={createprofilecss.goback} onClick={() => { navigate('/signin') }}>
                            <img src="/picture/Back-Button-PNG-Pic.png"></img>
                        </button>
                        <p className={createprofilecss.create}>สร้างบัญชี</p>
                    </div>
                    <form className={createprofilecss.info} onSubmit={onFormSubmit}>
                        <img className={createprofilecss.user} src="/picture/User image.png"></img>
                        <div>
                            <input className={createprofilecss.name} type='text' placeholder='ชื่อจริง' onChange={(e) => { setName(e.target.value) }} required></input>
                            <img className={createprofilecss.line} src="/picture/Line 20.png"></img>
                        </div>
                        <div>
                            <input className={createprofilecss.surname} type='text' placeholder='นามสกุล' onChange={(e) => { setSurname(e.target.value) }} required></input>
                            <img className={createprofilecss.line} src="/picture/Line 20.png"></img>
                        </div>
                        <div>
                            <input className={createprofilecss.phone} type='number' value={ph} placeholder='เบอร์โทร' readonly></input>
                            <img className={createprofilecss.line} src="/picture/Line 20.png"></img>
                        </div>
                        <div>
                            <input className={createprofilecss.date} type='date' placeholder='วันเกิด' onChange={(e) => { setDate(e.target.value) }} required></input>
                            <img className={createprofilecss.line} src="/picture/Line 20.png"></img>
                        </div>
                        <div>
                            <select
                                id="gender"
                                className={createprofilecss.sex}
                                onChange={(e) => {
                                    setGender(e.target.value)
                                }}
                            >
                                <option value="male" defaultChecked>male</option>
                                <option value="female">female</option>
                            </select>
                            <img className={createprofilecss.line} src="/picture/Line 20.png"></img>
                        </div>
                        <div className={createprofilecss.cc}>
                            <button className={createprofilecss.confirm} type='submit'>ยืนยันเพื่อลงทะเบียน</button>
                            <button className={createprofilecss.cancle} type='button' onClick={cancle}>ยกเลิก</button>
                        </div>
                    </form>
                </div>
            </p >
        </div >
    )
}
export default CreateProfile;