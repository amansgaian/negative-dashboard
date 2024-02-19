import './App.css';
import { Toaster } from 'react-hot-toast';
import Header from './components/header/Header';
import ServicesContainer from './components/services-container/services';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, UseNavigate, Navigate } from 'react-router-dom';
import { formatData } from "./components/utility/formatData";
import toast from 'react-hot-toast';
import moment from "moment";
import useServicesData from './components/custom-Hook/allServicesData';

function App() {
  const [runTest, setRunTest] = useState({ frequency: "PT1M", startTest: false });
  const { allServiceData, runTestWithFrequency } = useServicesData(runTest);

   // Dynamically generate routes based on allServiceData keys
  //  console.log("allServiceData", allServiceData);
   const dynamicRoutes = Object.keys(allServiceData).map((serviceKey) => (
    <Route
      key={serviceKey}
      path={`/${serviceKey.toLowerCase()}`}  // Assuming serviceKey is in camelCase
      element={<ServicesContainer runTest={runTest} setRunTest={setRunTest} urls={allServiceData[serviceKey]} key={serviceKey} />}
    />
  ));
  // console.log("dynamicRoutes" ,dynamicRoutes)

  return (
    <>
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false}
          toastOptions={{
            className: '',
            style: { position: 'relative', top: '135px', right: '20px', padding: '20px' },
            success: { theme: { primary: 'red', secondary: 'black', }, }
          }}
        />
        <div className="App">
          <Header runTest={runTest} setRunTest={setRunTest} allServiceData={allServiceData} />
          {/* <ServicesContainer runTest={runTest} setRunTest={setRunTest} /> */}
          <Routes>
          <Route
              path="/"
              element={<ServicesContainer runTest={runTest} setRunTest={setRunTest} urls={allServiceData['Holacracy']} key={'Holacracy'} />}
            />
          {dynamicRoutes}
            <Route path='*' element={<Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
