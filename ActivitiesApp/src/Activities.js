import React from 'react';
import { useFitness } from "DataStore/Store";
import HeartRate from "./assets/profile/Heart-1.svg";
import HeartRateBg from "./assets/profile/01.svg";
import StepsBg from "./assets/profile/02.svg";
import CaloriesBg from "./assets/profile/03.svg";
import SleepBg from "./assets/profile/04.svg";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { ChartProps } from "./ChartProps";
// import Profile from "./ProfileApp/Profile";
// import("Profile/Profile").then((Profile) => {
//     // <Profile />
//   });
const Profile = React.lazy( () => import("Profile/Profile"));

import {
    ChartComponent,
    SeriesCollectionDirective,
    SeriesDirective,
    Inject,
    Crosshair,
    SplineSeries,
    DateTime,
    Legend,
    Tooltip,
    SplineAreaSeries
} from "@syncfusion/ej2-react-charts";
import {
    ColumnDirective,
    ColumnsDirective,
    GridComponent,
} from "@syncfusion/ej2-react-grids";

export default function Activities(props) {
    const { fitnessData } = useFitness();
    const dropDownData = ["Weekly", "Monthly"];

    function chartTooltipRender(args) {
        args.text.splice(2, 2);
    }

    function onLegendClick(args) {
        if (args.legendText === "Diet") {
            this.series[2].visible = !this.series[2].visible;
        } else if (args.legendText === "Workout") {
            this.series[3].visible = !this.series[3].visible;
        }
    }

    function customizeCell(args) {
        if (args.column.field === "Completion") {
            args.cell.classList.add("completion-color");
        }
    }

    function onDateChange(args) {
        fitnessData.changeDate(args);
    }

    function onDropDownChange(args) {
        fitnessData.dropdownChange(args);
    }

    return (
        <div className="e-dashboardlayout-container e-activity-dashboardlayout-container">
            <div className="col-md-9">
                <div className="col-md-12 col-sm-12">
                    <div className="e-panel e-my-activities-panel">
                        <div className="e-panel-container">
                            <div className="e-panel-header col-md-12 col-sm-12 col-xs-12 col-lg-12">
                                <div className="col-md-3 col-sm-6 col-xs-6 col-lg-3 e-my-activities-header">
                                    My Activities
                                    <div className="e-my-activities-date col-md-3 col-sm-6 col-xs-6 col-lg-3">
                                    <DatePickerComponent
                                        value={fitnessData.actData.activityDate}
                                        onChange={onDateChange}
                                        max={new Date()}
                                        placeholder="Enter a date"
                                    />
                                </div>
                                </div>
                                
                            </div>
                            <div className="e-panel-content e-activity-card container">
                                <div className="e-card e-heart-rate-card" style={{ backgroundImage: `url(${HeartRateBg})` }}>
                                    <div className="e-card-header" style={{ width: "100%" }}>
                                        <div className="e-card-header-image icon-Heart e-card-corner"></div>
                                        <div className="e-card-header-caption">
                                            <div>
                                                <div className="e-card-header-title e-activity-card-title">
                                                    Heart Rate
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="e-card-content">
                                        <div className="e-bpm-value">
                                            {fitnessData.actData.heartRate} <span>bpm</span>
                                            <div className="e-activity-goal">60-100 bpm</div>
                                        </div>
                                        <div className="e-progress-annotation">
                                            <img src={HeartRate} alt="HeartRate" />
                                        </div>
                                    </div>
                                </div>
                                <div className="e-card e-steps-card" style={{ backgroundImage: `url(${StepsBg})` }}>
                                    <div className="e-card-header" style={{ width: "100%" }}>
                                        <div className="e-card-header-image icon-Steps e-card-corner"></div>
                                        <div className="e-card-header-caption" style={{ width: "100%" }}>
                                            <div className="e-card-header-title e-steps-card-title">
                                                Steps
                                            </div>
                                        </div>
                                    </div>
                                    <div className="e-card-content">
                                        <div className="e-activity-actual">
                                            {fitnessData.actData.steps.mWalk + fitnessData.actData.steps.eWalk}
                                        </div>
                                        <div className="e-activity-goal">6000</div>
                                    </div>
                                </div>
                                <div className="e-card e-calories-card" style={{ backgroundImage: `url(${CaloriesBg})` }}>
                                    <div className="e-card-header" style={{ width: "100%" }}>
                                        <div className="e-card-header-image icon-Calories e-card-corner"></div>
                                        <div className="e-card-header-caption">
                                            <div className="e-card-header-title e-calories-card-title">Calories</div>
                                        </div>
                                    </div>
                                    <div className="e-card-content">
                                        <div className="e-activity-actual">{fitnessData.actData.calories} kcal</div>
                                        <div className="e-activity-goal">3000 kcal</div>
                                    </div>
                                </div>
                                <div className="e-card e-sleep-card" style={{ backgroundImage: `url(${SleepBg})` }}>
                                    <div className="e-card-header" style={{ width: "100%" }}>
                                        <div className="e-card-header-image icon-Sleep e-card-corner"></div>
                                        <div className="e-card-header-caption">
                                            <div className="e-card-header-title e-sleep-card-title">Sleep</div>
                                        </div>
                                    </div>
                                    <div className="e-card-content">
                                        <div className="e-activity-actual">{fitnessData.actData.sleep}</div>
                                        <div className="e-activity-goal">8h</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-sm-12">
                    <div className="e-panel e-activity-panel">
                        <div className="e-panel-container">
                            <div className="e-panel-header col-md-12 col-sm-12 col-xs-12 col-lg-12">
                                <div className="col-md-5 col-sm-6 col-xs-8 col-lg-4 e-activity-chart-header-text">
                                    Activity Statistics
                                </div>
                                <div className="e-chart-dropdown col-md-3 col-sm-5 col-xs-3 col-lg-3">
                                    <DropDownListComponent
                                        dataSource={dropDownData}
                                        change={onDropDownChange}
                                        index={1}
                                    />
                                </div>
                            </div>
                            <div className="e-panel-content">
                                <ChartComponent
                                    className="e-activity-chart"
                                    chartArea={ChartProps.chartArea}
                                    width={"100%"}
                                    primaryXAxis={ChartProps.primaryXAxis}
                                    primaryYAxis={ChartProps.primaryYAxis}
                                    height={ChartProps.activityChartHeight}
                                    legendSettings={ChartProps.legendSettings}
                                    tooltip={ChartProps.tooltip}
                                    crosshair={ChartProps.crosshair}
                                    sharedTooltipRender={chartTooltipRender}
                                    legendClick={onLegendClick}
                                >
                                    <Inject
                                        services={[
                                            SplineSeries,
                                            DateTime,
                                            Legend,
                                            Tooltip,
                                            Crosshair,
                                            SplineAreaSeries,
                                        ]}
                                    />
                                    <SeriesCollectionDirective>
                                        <SeriesDirective
                                            dataSource={fitnessData.chartData.diet}
                                            legendShape="Circle"
                                            type="Spline"
                                            fill="#afd4db"
                                            xName="x"
                                            yName="y"
                                            name="diet"
                                            marker={ChartProps.marker}
                                            width={4}
                                        />
                                        <SeriesDirective
                                            dataSource={fitnessData.chartData.workout}
                                            legendShape="Circle"
                                            type="Spline"
                                            fill="#F547AB"
                                            xName="x"
                                            yName="y"
                                            name="workout"
                                            marker={ChartProps.marker}
                                            width={4}
                                        />
                                        <SeriesDirective
                                            dataSource={fitnessData.chartData.diet}
                                            type="SplineArea"
                                            fill="url(#gradient-diet-chart)"
                                            xName="x"
                                            yName="y"
                                        />
                                        <SeriesDirective
                                            dataSource={fitnessData.chartData.workout}
                                            type="SplineArea"
                                            fill="url(#gradient-activity-chart)"
                                            xName="x"
                                            yName="y"
                                        />
                                    </SeriesCollectionDirective>
                                </ChartComponent>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-sm-12">
                    <div className="e-panel e-workout-panel" data-row={2} data-col={0}>
                        <div className="e-panel-container">
                            <div className="e-panel-header" style={{ paddingBottom: "28px !important" }}>
                                <div>Recent Workout</div>
                            </div>
                            <div style={{ height: "100%" }}>
                                <GridComponent
                                    dataSource={fitnessData.gridData}
                                    queryCellInfo={customizeCell}
                                    gridLines="None"
                                    rowHeight={60}
                                    width={"100%"}
                                    height={"100%"}
                                >
                                    <ColumnsDirective>
                                        <ColumnDirective
                                            field="Workout"
                                            headerText="Workout"
                                            textAlign="Left"
                                            width={200}
                                        />
                                        <ColumnDirective
                                            field="Distance"
                                            headerText="Distance (kms)"
                                            textAlign="Left"
                                            width={200}
                                            format="###.# km"
                                        />
                                        <ColumnDirective
                                            field="Duration"
                                            headerText="Duration (mins)"
                                            textAlign="Left"
                                            width={200}
                                            format="### mins"
                                        />
                                        <ColumnDirective
                                            field="Date"
                                            headerText="Date & Time"
                                            textAlign="Left"
                                            width={250}
                                            type="dateTime"
                                            format="dd/mm/yyyy hh:mm a"
                                        />
                                        <ColumnDirective
                                            field="Completion"
                                            headerText="Completion"
                                            textAlign="Left"
                                            width={100}
                                            format="### '%'"
                                        />
                                    </ColumnsDirective>
                                </GridComponent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div
                    style={{
                    background: "#fff",
                    border: "1px solid #e0e0e0",
                    borderRadius: "10px",
                    padding: "60px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    marginTop:"100px",
                    textAlign:"center",
                    position:"fixed"
                    }}
                >
                    <div className="profile-image">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScVWdpSX0xv-SPTJEGBorXQzdtwZuCh-XdyA&usqp=CAU"
                        alt="User Profile"
                        style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        }}
                    />
                    </div>
                    <div className="profile-details" style={{ marginTop: "20px" }}>
                    <h2 style={{ fontSize: "24px", margin: "0" }}>Welcome Akki</h2>
                    <p style={{ fontSize: "16px", margin: "5px 0" }}>Age: 18 Yrs</p>
                    <p style={{ fontSize: "16px", margin: "5px 0" }}>Weight: 57 kg</p>
                    <p style={{ fontSize: "16px", margin: "5px 0" }}>Height: 170 cm</p>
                    <p style={{ fontSize: "16px", margin: "5px 0" }}>Goal: 51 kg </p>
                    <p style={{ fontSize: "16px", margin: "5px 0" }}>Location: Hyderabad</p>
                    
                    </div>
                </div>
    </div>
</div>
    );
}
