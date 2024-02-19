import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import moment from 'moment';
import { formatData } from '../utility/formatData';

const useServicesData = (runTest) => {

    const URL = process.env.REACT_APP_HOST;
    const [allServiceData, setAllServiceData] = useState({});
    const [interval, setIntervalString] = useState("");
    const [index, setIndex] = useState(1);
    const [hasRendered, setHasRendered] = useState(false);

    const runTestWithFrequency = async () => {
        console.log(runTest)
        const duration = moment.duration(runTest.frequency);
        if (duration.toISOString() === 'P0D') {
            toast.error("Frequency format is not valid");
            console.log("runTestWithFrequency error")
        }
        else if (runTest.startTest) {
            clearTimeout(interval);
            let milliseconds = duration.asMilliseconds();
            let message = `Running test for every ${milliseconds / 1000} s , test count : ${index}`;
            toast.loading(message, { duration: null });
            await getAllServicesTestResults(message);
            const currInterval = setTimeout(() => {
                setIndex(prev => prev + 1);
            }, milliseconds);
            setIntervalString(currInterval)
        } else {
            clearTimeout(interval);
            setIntervalString("");
            setIndex(1);
            toast.success("Aborted future tests")
        }
    }

    const getAllServicesTestResults = async () => {
        toast.loading("Running test");
        try {
            const response = await fetch(URL + '/mobius-service/v1/run/apis');
            if (!response.ok) {
                throw new Error("Error getting data" + response.statusText);
            }
            const data = await response.json();
            // console.log(data)
            const servicesData = formatData(data);
            console.log("servicedata", servicesData);
            setAllServiceData(servicesData);
            toast.dismiss();
            toast.success("Loaded all results")
        } catch (error) {
            toast.dismiss();
            toast.error(error.message)
            console.log(error);
        } finally {
            setTimeout(() => {
                toast.remove()
            }, 5000)
        }
    }

    useEffect(() => {
        if (hasRendered) {
            runTestWithFrequency();
        } else {
            setHasRendered(true)
        }
        return () => {
            clearTimeout(interval);
        }
    }, [runTest.startTest, index])


    useEffect(() => {
        getAllServicesTestResults()
    }, [])


    return {
        allServiceData,
        runTestWithFrequency,
    };
}
export default useServicesData;