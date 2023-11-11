import './Paid.css';
import React, { useState } from 'react';

const Paid = ({ changePage }) => {
    
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
            <p class="pay">
                ชำระเงินผ่านพร้อมเพย์
            </p>
            <p class="qrcode">
                {/* qr */}
            </p>

            <button class="done" onClick={() => changePage('/PaidSuccess')} >ชำระเงินเรียบร้อย</button>
                

            <p>
                <button class="cancle">
                    ยกเลิก
                </button>
            </p>




        </div>

    );
}

export default Paid;