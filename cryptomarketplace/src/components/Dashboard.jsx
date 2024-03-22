import React from "react";
import "./Dashboard.css";
import img from "../assets/dashboard-dark.jpg";

function Dashboard(){
    return(
        <section className="gridSection">
            <div className="sectionDesc dashboardDesc">
                <h1 className="sectionHeader">Trade crypto in seconds</h1>
                <p className="sectionPara">
                    But with prouple, you can mine bitcoin from your own phone!
                    You no longer have to worry about costly transactions.
                </p>
                <button className="btn">Explore Now</button>
            </div>

            <div className="sectionPic dashboardPic">
                <img src={ img } alt=""/>
            </div>

        </section>
    );
}

export default Dashboard;