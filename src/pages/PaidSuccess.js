import paidsuccesscss from'./PaidSuccess.module.css';

function PaidSuccess() {
    return (
        <div className={paidsuccesscss.App}>
            <p class={paidsuccesscss.body1}>
                {/* กล่องข้างใน */}
                <div class={paidsuccesscss.bg1} >
                    {/* พื้นหลัง */}
                </div>
            </p>


            <p class={paidsuccesscss.howtopay1}>
                <button class={paidsuccesscss.goback1}>
                    <img src="/picture/Back-Button-PNG-Pic.png"></img>
                </button>
                ชำระเงิน
            </p>
            <p >
                <img class={paidsuccesscss.success1} src="/picture/Untitled.png"></img>
            </p>
            <p class={paidsuccesscss.pay1}>
                ชำระเงินสำเร็จ
            </p>

        </div>

    );
}

export default PaidSuccess;