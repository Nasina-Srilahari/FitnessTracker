import React, {lazy} from 'react';
import {TabComponent} from "@syncfusion/ej2-react-navigations";


const Activities = React.lazy(()=>import("Activities/Activities"));

export default function Tab() {

    const tabHeader = [
    
    { text: "ACTIVITIES", iconCss: "icon-Activities", iconPosition: "top"},
    { text: "DIET", iconCss: "icon-Diet", iconPosition: "top" },
    { text: "FASTING", iconCss: "icon-Fasting", iconPosition: "top" },

    ];
    
    const header = tabHeader.map((item) => {
        return ( // Add 'return' here
            <div key={item.text} className={item.iconCss}>
                {item.text}
             </div>
  );
    });
    
    function onCreated() {
        let iconDiv = document.createElement("div");
        iconDiv.className = "e-tab-header-icon-div";
        let iconSpan = document.createElement("span"); 
        iconSpan.className = "e-tab-header-icon icon-Logo"; // Corrected the variable name
        iconDiv.appendChild(iconSpan); 
        let titleDiv = document.createElement("div");
        titleDiv.className = "e-tab-title";
        titleDiv.innerText = "Fitness";
        let titleSpan = document.createElement("span");
        titleSpan.innerText = "Tracker"; // Corrected the variable name
        titleDiv.appendChild(titleSpan);
        let containerDiv = document.createElement("div");
      
        containerDiv.className = "e-tab-header-icon-container";
      
        containerDiv.appendChild(iconDiv);
        containerDiv.appendChild(titleDiv);
      
        this.element.querySelector(".e-tab-header").prepend(containerDiv);
      }
      

    return (

        <TabComponent created={onCreated}>
        
            <div className="e-tab-header">{header}</div>
            <div className="e-content">
                <div>
                    <Activities />
                </div>
                <div>
                <div className="diet-image">
                    <img
                        src="https://diet2nourish.com/blog/wp-content/uploads/2022/01/Balanced-diet-chart.png"
                        alt="Diet Image"
                        style={{
                        width: "250px",
                        height: "250px",
                        borderRadius: "10%",
                        boxShadow: "0 2px 4px rgba(0,0,0,10)",
                        marginTop:"100px",
                        marginLeft:"50px"
                        
                        }}
                    />
                    <img
                        src="https://diet2nourish.com/blog/wp-content/uploads/2022/01/Balanced-diet-chart.png"
                        alt="Diet Image"
                        style={{
                        width: "250px",
                        height: "250px",
                        borderRadius: "10%",
                        boxShadow: "0 2px 4px rgba(0,0,0,10)",
                        marginTop:"100px",
                        marginLeft:"50px"
                        }}
                    />
                    <img
                        src="https://diet2nourish.com/blog/wp-content/uploads/2022/01/Balanced-diet-chart.png"
                        alt="Diet Image"
                        style={{
                        width: "250px",
                        height: "250px",
                        borderRadius: "10%",
                        boxShadow: "0 2px 4px rgba(0,0,0,10)",
                        marginTop:"100px",
                        marginLeft:"50px"
                        }}
                    />
                    <img
                        src="https://diet2nourish.com/blog/wp-content/uploads/2022/01/Balanced-diet-chart.png"
                        alt="Diet Image"
                        style={{
                        width: "250px",
                        height: "250px",
                        borderRadius: "10%",
                        boxShadow: "0 2px 4px rgba(0,0,0,10)",
                        marginTop:"100px",
                        marginLeft:"50px"
                        }}
                    />
                </div>

                </div>
                <div>
                    <h1>Design the UI for Fasting Page !!!</h1>
                </div>
            
            </div>

        </TabComponent>
    );
}