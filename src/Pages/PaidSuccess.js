import './PaidSuccess.css';

function PaidSuccess() {
    return (
        <div className="App">
            <p class="body1">
                {/* กล่องข้างใน */}
                <div class="bg" >
                    {/* พื้นหลัง */}
                </div>
            </p>


            <p class="howtopay1">
                <button class="goback1">
                    <img src="/picture/Back-Button-PNG-Pic.png"></img>
                </button>
                เลือกวิธีการชำระเงิน
            </p>
            <p >
                <img class="success1" src="/picture/Untitled.png"></img>
            </p>
            <p class="pay1">
                ชำระเงินสำเร็จ
            </p>


        </div>

    );
}

export default PaidSuccess;