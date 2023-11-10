import './PaidSuccess.css';

function PaidSuccess() {
    return (
        <div className="App">
            <p class="body">
                {/* กล่องข้างใน */}
                <div class="bg" >
                    {/* พื้นหลัง */}
                </div>
            </p>


            <p class="howtopay">
                <button class="goback">
                    <img src="/picture/Back-Button-PNG-Pic.png"></img>
                </button>
                เลือกวิธีการชำระเงิน
            </p>
            <p >
                <img class="success" src="/picture/Untitled.png"></img>
            </p>
            <p class="pay">
                ชำระเงินสำเร็จ
            </p>


        </div>

    );
}

export default PaidSuccess;