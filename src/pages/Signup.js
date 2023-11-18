import signupcss from './Signup.module.css';


function Signup() {
    return (
        <div className={signupcss.App}>
            <div class={signupcss.body}>

                <div class={signupcss.bg} >
                    <button className={signupcss.gbb}> <img className={signupcss.gb} src="/picture/Arrow 2.png"></img> </button>
                    <p className={signupcss.login}>ลงทะเบียน</p>
                    <div className={signupcss.box}>
                        <input className={signupcss.phone} type='number' placeholder='เบอร์โทรศัพท์'></input>
                        <button className={signupcss.lb}>เข้าสู่ระบบ</button>
                    </div>
                </div>
                <button className={signupcss.change}>เข้าสู่ระบบ</button>
            </div>
        </div>
    )
}
export default Signup;