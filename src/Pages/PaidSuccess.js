import paidsuccesscss from './PaidSuccess.module.css';

function PaidSuccess() {
    return (
        <div className={paidsuccesscss.App}>
            <p class={paidsuccesscss.body}>
                {/* กล่องข้างใน */}
                <div class={paidsuccesscss.bg} >
                    {/* พื้นหลัง */}
                </div>
            </p>


            <p class={paidsuccesscss.howtopay}>
                <button class={paidsuccesscss.goback}>
                    <img src="/picture/Back-Button-PNG-Pic.png"></img>
                </button>
                เลือกวิธีการชำระเงิน
            </p>
            <p class={paidsuccesscss.success}>
                        <img src="/picture/Untitled.png"></img>
                    </p>
            <p class={paidsuccesscss.pay}>
                    ชำระเงินสำเร็จ
                </p>
           

        </div>

    );
}

export default PaidSuccess;