import { useEffect, useState } from "react";
import logo from "../images/gaian_logo.png";
import startBtn from '../images/play-button.png';
import stopBtn from '../images/video-pause-button.png';
import { Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import "./header.css";
const Header = ({ runTest, setRunTest,allServiceData }) => {
    const [toggle, setToggle] = useState({ menu: false, btn: true });

    const [services, setServices] = useState([]);

    useEffect(() => {
        // console.log("allServiceData from header" , allServiceData)

        if (allServiceData && typeof allServiceData === "object") {
            // Extract unique keys from allServiceData object
            const uniqueKeys = Object.keys(allServiceData);
            setServices(uniqueKeys);
            // console.log("uniqueKeys", uniqueKeys);
        }

    }, [allServiceData]);

    const location = useLocation();

    const handleStart = () => {
        setToggle({ ...toggle, btn: false });
        setRunTest({ ...runTest, startTest: true });
    }

    const handleStop = () => {
        setRunTest({ ...runTest, startTest: false });
        setToggle({ menu: false, btn: true });
    }

    return (
        <>
            <header>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="dasboard-text">
                    QA - Dashboard
                </div>
                <button className="actions" onClick={() => setToggle({ ...toggle, menu: true })}><span></span><span></span><span></span></button>
                <div className={`menu ${toggle.menu ? 'open' : ''}`}>
                    <div className="frequency-input">
                        <label htmlFor="frequency-input">Frequeny :</label>
                        <input type="text" id="frequency-input" value={runTest.frequency} onChange={(e) => { setRunTest({ ...runTest, frequency: e.target.value }) }} disabled={!toggle.btn} />
                        <small><span>*</span> Format : P(n)Y(n)M(n)DT(n)H(n)M(n)S <br /><span>*</span> Note that the n is replaced by the value for each of the date and time elements that follow the n.
                        </small>
                    </div>
                    <div className="start-btn">
                        {toggle.btn ? <button className="start" onClick={handleStart}>
                            <img src={startBtn} alt="" />
                        </button>
                            :
                            <button className="stop" onClick={handleStop}>
                                <img src={stopBtn} alt="" />
                            </button>}
                    </div>
                    <span className="close" style={{ color: 'black' }} onClick={() => setToggle({ ...toggle, menu: false })}>✖️</span>
                </div>
            </header>

            <article className="all-services">
                {
                    services?.map((service, i) => {
                        const isSelected = location.pathname === (service === 'market-place' ? '/' : `/${service}`);
                        return (
                            <>
                                <Link to={service === 'market-place' ? '/' : `/${service}`} className={` link-style`}>
                                    <div className={`service ${isSelected ? 'selected' : ''}`} key={uuidv4()} ><span>{service}</span><span className="line"></span></div>
                                </Link>
                            </>
                        )
                    })
                }
            </article>
        </>
    )
}

export default Header