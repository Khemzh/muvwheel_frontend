import paidsuccesscss from './PaidSuccess.module.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PaidSuccess() {
    const navigate = useNavigate()
    return (
        <div className={paidsuccesscss.App}>
            <p class={paidsuccesscss.body1}>
                {/* กล่องข้างใน */}
                <div class={paidsuccesscss.bg1} >
                    {/* พื้นหลัง */}
                </div>
            </p>

            <button class={paidsuccesscss.goback1} onClick={() => { navigate('/travel') }}>
                <img src="/picture/Back-Button-PNG-Pic.png"></img>
            </button>
            <p class={paidsuccesscss.howtopay1}>
                ชำระเงิน
            </p>
            <img class={paidsuccesscss.success1} src="/picture/Untitled.png"></img>
            <p class={paidsuccesscss.pay1}>
                ชำระเงินสำเร็จ
            </p>

        </div>

    );
}

export default PaidSuccess;