import { useState, useEffect } from "react";
import "./services.css";
import Cards from "../card-container/cards";
import { Response } from '../utility/testResult';
import { formatData } from "../utility/formatData";
import toast from 'react-hot-toast';
import moment from "moment";
import { v4 as uuidv4 } from 'uuid';
import { Navigate, Link, useParams } from "react-router-dom";

const ServicesContainer = ({ runTest, setRunTest, urls }) => {

    const [message, setMessage] = useState("Running Initial tests");

    // console.log("urls", urls);

    return (
        <>
            <section className="container">

                {urls?.length > 0 ?
                    <article className="card-container">
                        {urls?.filter(res => res?.testcaseType === 'Negative' )
                            ?.sort((a, b) => a.name.localeCompare(b.name))
                            ?.map((item, i) => {
                                return (
                                    <Cards key={uuidv4()} item={item} />
                                )
                            })
                        }
                    </article>
                    : (<>
                        {message === "Running Initial tests"
                            ? ""
                            : <h2 className="no_data"
                                style={{ color: '#B70404', height: "100%", 'text-align': 'center', display: "flex", justifyContent: "center", alignItems: "center" }}>
                                No data available for this service</h2>
                        }
                    </>)
                }
            </section>
        </>
    )
}
export default ServicesContainer;