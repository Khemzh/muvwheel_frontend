import paidcss from'./Paid.module.css';
import React, { useState } from 'react';

const Paid = ({ changePage }) => {
    
    return (
        <div className={paidcss.App}>
            <p class={paidcss.body}>
                {/* กล่องข้างใน */}
                <div class={paidcss.bg} >
                    {/* พื้นหลัง */}
                </div>
            </p>


            <p class={paidcss.howtopay}>
                <button class={paidcss.goback}>
                    <img src="/picture/Back-Button-PNG-Pic.png"></img>
                </button>
                ชำระเงิน
            </p>
            <p class={paidcss.pay}>
                ชำระเงินผ่านพร้อมเพย์
            </p>
            <p class={paidcss.qrcode}>
                {/* qr */}
            </p>

            <button class={paidcss.done} onClick={() => changePage('/PaidSuccess')} >ชำระเงินเรียบร้อย</button>
                

            <p>
                <button class={paidcss.cancle}>
                    ยกเลิก
                </button>
            </p>




        </div>

    );
}

export default Paid;