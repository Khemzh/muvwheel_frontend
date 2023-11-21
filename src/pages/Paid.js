import paidcss from './Paid.module.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Paid = () => {
    const navigate = useNavigate()

    return (
        <div className={paidcss.App}>
            <p class={paidcss.body}>

                <div class={paidcss.bg} >

                </div>
            </p>
            <button class={paidcss.goback} onClick={() => { navigate('/showpath') }}>
                <img src="/picture/Back-Button-PNG-Pic.png"></img>
            </button>
            <p class={paidcss.howtopay}>

                ชำระเงิน
            </p>
            <p class={paidcss.pay}>
                ชำระเงินผ่านพร้อมเพย์
            </p>
            <p class={paidcss.qrcode}>
                <img class={paidcss.qrcode} src="/picture/promptpay.jpg"></img>
            </p>

            <button class={paidcss.done} onClick={() => navigate('/PaidSuccess')} >ชำระเงินเรียบร้อย</button>


            <p>
                <button class={paidcss.cancle}>
                    ยกเลิก
                </button>
            </p>




        </div>

    );
}

export default Paid;