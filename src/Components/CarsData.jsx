import useGetCarsData from "../hooks/useGetCarData";
import * as React from "react";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";

const getSelectedDriverDriveData = (driverNumber, carsData, key = "speed") => {
  if (!Object.entries(carsData).length) {
    return [];
  }
  return carsData?.[driverNumber]?.map((car) => car[key]);
};

const getGraph = (heading, data) => (
  <div
    style={{
      width: "46%",
      margin: "8px 1% 8px 0",
      border: "1px solid rgb(36, 36, 36)",
      padding: "1%",
      borderRadius: "8px",
    }}
  >
    <h3>{heading}</h3>
    <SparkLineChart data={data} height={200} />
  </div>
);

const CarsData = ({ selectedDriver, driverNumber = 1 }) => {
  const carsData = useGetCarsData({ sessionKey: "latest", speed: "315" });

  return selectedDriver ? (
    <div style={{ color: `#${selectedDriver.team_colour}` }}>
      <h2>
        Drive analysis: {selectedDriver.full_name} {selectedDriver.team_name}
      </h2>
      <div
        style={{
          display: "inline-flex",
          flexDirection: "row",
          flexWrap: "wrap",
          paddingBottom: "32px",
        }}
      >
        {getGraph("Speed", getSelectedDriverDriveData(driverNumber, carsData))}
        {getGraph(
          "RPM",
          getSelectedDriverDriveData(driverNumber, carsData, "rpm")
        )}
        {getGraph(
          "Brakes",
          getSelectedDriverDriveData(driverNumber, carsData, "brake")
        )}
        {getGraph(
          "DRS",
          getSelectedDriverDriveData(driverNumber, carsData, "drs")
        )}
      </div>
    </div>
  ) : null;
};

export default CarsData;
