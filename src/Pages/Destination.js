import destinationcss from'./Destination.module.css';
function Destination() {
    return (
        <div className={destinationcss.App}>
            <div class={destinationcss.bg}>
                <div class={destinationcss.pathbox}>
                    <p><button class={destinationcss.goback}>
                        <img class ={destinationcss.gb} src="/picture/Arrow 2.png"></img>
                    </button>
                        <text class={destinationcss.findway}>ค้นหาเส้นทาง</text></p>
                    <div class={destinationcss.pu}><img class={destinationcss.up} src="/picture/up.png"></img>
                        <input class={destinationcss.position} type='text' placeholder='ตำแหน่งปัจจุบัน'></input></div>
                    <div class={destinationcss.df}><img class={destinationcss.flag} src="/picture/flag.png"></img>
                        <input class={destinationcss.destination} type='text' placeholder='ปลายทาง'></input>
                    </div>

                </div>
            
                <button class={destinationcss.search}>
                    ค้นหา
                </button>
                
            </div>

        </div>

    );
}
export default Destination;