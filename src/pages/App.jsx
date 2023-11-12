import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import axios from 'axios'

const App = () => {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(false)
  const [uid, setUid] = useState('')

  useEffect(() => {
    let user = localStorage.getItem('user')
    if (user) {
      setIsLogin(true)
      setUid(user)
    }
  }, [])

  const handleBtnClick = () => {
    navigate('/authen')
  }

  if (isLogin) {
    return (
      <div className="p-4">
        <p>muvwheel</p>
        <br />
        <p>id ของคุณคือ {uid}</p>
        <p>ด้านล่างคือแผนที่</p>
      </div>
    )
  } else {
    return (
      <div className="p-4">
        <p>muvwheel</p>
        <button
          onClick={handleBtnClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          เข้าสู่ระบบ
        </button>
      </div>
    )
  }
}

export default App
