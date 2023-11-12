const PopupMenu = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    const [listBus, listbus] = useState(
        <div className={homecss.showBus} onClick={() => click(mainbox)}>
            <div className={homecss.bus3}>
                <img className={homecss.bus} src="/img/icon _car outline_.png" alt=" " />
            </div>
            <ul>
                <ol>
                    <div className={homecss.listOfBus} id='listOfStep'>
                        
                    </div>

                </ol>
            </ul>
        </div>
    );

    const [mainbox, setmain] = useState(
        <div>
            <button className={homecss.busClick} onClick={() => click(listBus)}>
                <img className={homecss.bus1} src="/img/icon _car outline_.png" alt=" " />
            </button>
        </div>
    );

    const click = listBus => {
        setmain(listBus);
    };

    const click1 = mainbox => {
        setmain(mainbox);
    };

    useEffect(() => {
        initMaps();
    }, []);

    const onPlaceChanged = () => {
        const place = searchBar.getPlace();
        console.log(place.name);

        if (!place.geometry) {
            //User did not select a prediction; reset the input field
            document.getElementById('searchBar').value = '';
        } else {
            //Display details about the valid place
            // document.getElementById('details').innerHTML = place.geometry.location.lat() + ", " + place.geometry.location.lng()
            directionsRenderer.set('directions', null);
            calcRoute(place.name, setListStep);
        }
    };

    function setListStep(transitDetails) {
        const listStep = document.getElementById('listOfStep');
        const homecss = {
            number: 'number-class',
            busToBus: 'bus-to-bus-class',
            whiteLine: 'white-line-class',
        };
        listStep.innerHTML = '';
        transitDetails.forEach(step => {
            const p1 = document.createElement('p');
            p1.className = homecss.number;
            p1.innerText = transitDetails[0].instructions;

            const p2 = document.createElement('p');
            p2.className = homecss.busToBus;
            p2.innerHTML = 'A &rarr; B <div className=${homecss.whiteLine}></div>';

            // Assuming you have a parent element to append these to:
            listStep.appendChild(p1);
            listStep.appendChild(p2);
        });
        listbus(listStep.children);
    }

    let searchBar = null;
    const initAutocomplete = () => {
        searchBar = new google.maps.places.Autocomplete(document.getElementById('searchBar'), {
            types: ['bus_station', 'transit_station'],
            componentRestrictions: { country: ['TH'] },
            fields: ['place_id', 'geometry', 'name'],
        });
        searchBar.addListener('place_changed', onPlaceChanged);
    };

    return (
        <div className={homecss.App}>
            <div className={homecss.bg}>
                <div className={homecss.map} id='map'></div>
            </div>
            <div class={homecss.dp}>
                <button className={homecss.bbb} onClick={togglePopup}>
                    <img className={homecss.bt} src='/img/icon _menu_.png'></img>
                </button>
                {isPopupVisible && (
                    <div className={homecss.popup_menu}>
                        <ul>
                            <ol>
                                <div>
                                    <div className={homecss.pic}>
                                        <button className={homecss.back} onClick={togglePopup}>
                                            <img className={homecss.bbb1} src='/img/leading-icon.png'></img>
                                        </button>
                                        <img class={homecss.man} src='/img/disabled-guy.png'></img>
                                    </div>
                                    <button class={homecss.login}>เข้าสู่ระบบ</button>
                                </div>
                            </ol>
                        </ul>
                    </div>
                )}
                <div className={homecss.header}>
                    <input className={homecss.txt} id='searchBar' placeholder='ต้องการจะไปที่ไหน ?' />
                    {mainbox}
                </div>
            </div>
        </div>
    );
};

export default PopupMenu;