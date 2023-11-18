import signincss from './Signin.module.css';


function Signin() {
    return (
        <div className={signincss.App}>
            <div class={signincss.body}>

                <div class={signincss.bg} >
                    <button className={signincss.gbb}> <img className={signincss.gb} src="/picture/Arrow 2.png"></img> </button>
                    <p className={signincss.login}>เข้าสู่ระบบ</p>
                    <div className={signincss.box}>
                        <input className={signincss.phone} type='number' placeholder='เบอร์โทรศัพท์'></input>
                        <button className={signincss.lb}>เข้าสู่ระบบ</button>
                    </div>
                </div>
                <button className={signincss.change}>ลงทะเบียน</button>
            </div>
        </div>
    )
}
export default Signin;