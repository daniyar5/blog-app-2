import React from 'react';
import HeaderSection from '../components/HeaderSection';
import MainContent from '../components/MainContent';
function Dashboard(){
    console.log("Dashboard is rendering")
    return(
        <>
        <div className="main">
        <MainContent />
        </div>
        </>
    )


}

export default Dashboard