<<<<<<< HEAD
import paidsuccesscss from'./PaidSuccess.module.css';
=======
import paidsuccesscss from './PaidSuccess.module.css';
>>>>>>> origin/dev

function PaidSuccess() {
    return (
        <div className={paidsuccesscss.App}>
<<<<<<< HEAD
            <p class={paidsuccesscss.body1}>
=======
            <p class={paidsuccesscss.body}>
>>>>>>> origin/dev
                {/* กล่องข้างใน */}
                <div class={paidsuccesscss.bg} >
                    {/* พื้นหลัง */}
                </div>
            </p>


<<<<<<< HEAD
            <p class={paidsuccesscss.howtopay1}>
                <button class={paidsuccesscss.goback1}>
=======
            <p class={paidsuccesscss.howtopay}>
                <button class={paidsuccesscss.goback}>
>>>>>>> origin/dev
                    <img src="/picture/Back-Button-PNG-Pic.png"></img>
                </button>
                ชำระเงิน
            </p>
<<<<<<< HEAD
            <p >
                <img class={paidsuccesscss.success1} src="/picture/Untitled.png"></img>
            </p>
            <p class={paidsuccesscss.pay1}>
                ชำระเงินสำเร็จ
            </p>

=======
            <p class={paidsuccesscss.success}>
                        <img src="/picture/Untitled.png"></img>
                    </p>
            <p class={paidsuccesscss.pay}>
                    ชำระเงินสำเร็จ
                </p>
           
>>>>>>> origin/dev

        </div>

    );
}

export default PaidSuccess;