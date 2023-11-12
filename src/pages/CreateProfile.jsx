import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Error from './Error'
import axios from 'axios'

const CreateProfile = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [uid, setUid] = useState('')
    const [ph, setPh] = useState('')

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [date, setDate] = useState('')
    const [gender, setGender] = useState('male')

    const navigate = useNavigate()

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

        axios
            .post('http://127.0.0.1:3001/register', payload)
            .then((res) => {
                if (res.status == 200) {
                    localStorage.setItem('token', res.data.token)
                    navigate('/')
                }
            })
            .catch((e) => {
                alert('cant connect to server')
            })
    }

    useEffect(() => {
        let user = localStorage.getItem('user')
        let ph = localStorage.getItem('ph')
        if (user) {
            setIsLogin(true)
            setUid(user)
        }
        if (ph) {
            setPh(ph)
        }
    }, [])

    if (isLogin) {
        return (
            <div className="p-5">
                <p>กรอกข้อมูล</p>
                <p>uid : {uid}</p>
                <p>เบอ +{ph}</p>
                <form className="mt-4" onSubmit={onFormSubmit}>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            name
                        </label>
                        <input
                            value={name}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="name"
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="surname"
                        >
                            surname
                        </label>
                        <input
                            value={surname}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="surname"
                            type="text"
                            placeholder="surname"
                            onChange={(e) => {
                                setSurname(e.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="date"
                        >
                            date
                        </label>
                        <input
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="date"
                            type="date"
                            placeholder="date"
                            onChange={(e) => {
                                setDate(e.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="gender"
                        >
                            gender
                        </label>

                        <select
                            id="gender"
                            className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                            onChange={(e) => {
                                setGender(e.target.value)
                            }}
                        >
                            <option value="male" defaultChecked>
                                male
                            </option>
                            <option value="female">female</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                        <span>สมัคร</span>
                    </button>
                </form>
            </div>
        )
    } else {
        return <Error></Error>
    }
}

export default CreateProfile
