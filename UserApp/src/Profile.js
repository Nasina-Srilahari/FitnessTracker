import React from "react";
import ProfilePicture from "./assets/profile/02.png";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import "./index.css";
import { useFitness } from 'DataStore/Store';

export default function Profile(props) {
    const { fitnessData } = useFitness();
    let profileData = fitnessData;
    let profileInfo = {
        name: "Person 1",
        age: 26,
        location: "Hyderabad",
        weight: 78,
        height: 174,
        goal: 70,
        email: "person.1@gmail.com",
        weightMes: "kg",
        goalMes: "kg",
        heightMes: "cm",
    };
    let maxDate = new Date();
    let currentDate = new Date(); // Initialize currentDate

    function onProfileDateChange(args) {
        fitnessData.changeDate(args);
    }

    function getFullDetails(dietJournal, index) {
        return (
            <div key={index} tabIndex={0} className="e-card e-diet-card">
                <div className="e-card-header" style={{ width: "100%" }}>
                    <div className="e-card-header-caption">
                        <div className="e-card-header-title">{dietJournal.activity}</div>
                        <div>
                            <div
                                className="e-card-header-sub-title"
                                style={{ float: "left" }}
                            >
                                {dietJournal.amount ? dietJournal.amount + " | " : ""}
                                {dietJournal.duration ? dietJournal.duration + " | " : ""}
                                {dietJournal.distance ? dietJournal.distance + " | " : ""}
                                <span className="e-activity-highlight">
                                    {dietJournal.percentage}
                                </span>
                            </div>
                            <div
                                className="e-card-header-sub-title"
                                style={{ float: "right" }}
                            >
                                {dietJournal.time}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Check if profileData is defined before mapping over it
    const dietDetails = profileData ? profileData.map((dietJournal, index) => (
        getFullDetails(dietJournal, index)
    )) : null;

    return (
        <div className="profile-container">
            <div className="profile-info">
                <img src={ProfilePicture} alt="Profile" />
                <div className="profile-details">
                    <h2>{profileInfo.name}</h2>
                    <p>Age: {profileInfo.age}</p>
                    <p>Location: {profileInfo.location}</p>
                    <p>Weight: {profileInfo.weight} {profileInfo.weightMes}</p>
                    <p>Height: {profileInfo.height} {profileInfo.heightMes}</p>
                    <p>Goal: {profileInfo.goal} {profileInfo.goalMes}</p>
                    <p>Email: {profileInfo.email}</p>
                </div>
            </div>
            <div className="profile-calendar">
                <DatePickerComponent
                    value={currentDate}
                    onChange={onProfileDateChange}
                    max={maxDate}
                />
            </div>
            <div className="diet-details">
                {dietDetails} {/* Render dietDetails only if profileData is defined */}
            </div>
        </div>
    );
}


// import React from "react";
// import ProfilePicture from "./assets/profile/02.png";
// import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
// import "./index.css";
// import { useFitness } from 'DataStore/store';


// export default function Profile(props) {
//     const { fitnessData } = useFitness();
//     let profileData = fitnessData;
//     let profileInfo = {
//         name: "Person 1",
//         age: 26,
//         location: "Hyderabad",
//         weight: 78,
//         height: 174,
//         goal: 70,
//         email: "person.1@gmail.com",
//         weightMes: "kg",
//         goalMes: "kg",
//         heightMes: "cm",
//     };
//     let maxDate = new Date();

//     function onProfileDateChange(args) {
//         fitnessData.changeDate(args);
//     }

//     function getFullDetails(dietJournal, index) {
//         return (
//             <div key={index} tabIndex={0} className="e-card e-diet-card">
//                 <div className="e-card-header" style={{ width: "100%" }}>
//                     <div className="e-card-header-caption">
//                         <div className="e-card-header-title">{dietJournal.activity}</div>
//                         <div>
//                             <div
//                                 className="e-card-header-sub-title"
//                                 style={{ float: "left" }}
//                             >
//                                 {dietJournal.amount ? dietJournal.amount + " | " : ""}
//                                 {dietJournal.duration ? dietJournal.duration + " | " : ""}
//                                 {dietJournal.distance ? dietJournal.distance + " | " : ""}
//                                 <span className="e-activity-highlight">
//                                     {dietJournal.percentage}
//                                 </span>
//                             </div>
//                             <div
//                                 className="e-card-header-sub-title"
//                                 style={{ float: "right" }}
//                             >
//                                 {dietJournal.time}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="profile-container">
//             <div className="profile-info">
//                 <img src={ProfilePicture} alt="Profile" />
//                 <div className="profile-details">
//                     <h2>{profileInfo.name}</h2>
//                     <p>Age: {profileInfo.age}</p>
//                     <p>Location: {profileInfo.location}</p>
//                     <p>Weight: {profileInfo.weight} {profileInfo.weightMes}</p>
//                     <p>Height: {profileInfo.height} {profileInfo.heightMes}</p>
//                     <p>Goal: {profileInfo.goal} {profileInfo.goalMes}</p>
//                     <p>Email: {profileInfo.email}</p>
//                 </div>
//             </div>
//             <div className="profile-calendar">
//                 <DatePickerComponent
//                     value={currentDate}
//                     onChange={onProfileDateChange}
//                     max={maxDate}
//                 />
//             </div>
//             <div className="diet-details">
//                 {profileData.map((dietJournal, index) => (
//                     getFullDetails(dietJournal, index)
//                 ))}
//             </div>
//         </div>
//     );
// }
