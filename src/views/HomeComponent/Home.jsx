import useGetDrivers from "../../hooks/useGetDrivers";
import useGetEvents from "../../hooks/useGetEvents";
import { Routes, Route, Link } from "react-router-dom";
import MeetDrivers from "../Pages/MeetDrivers";
import Events from "../Pages/Sessions";
import CarsData from "../../Components/CarsData";
import { useState } from "react";

const PageHeader = () => (
  <>
    <h1 style={{ color: "red" }}>
      <i>F1 Details</i>
    </h1>
    <Link to="/">Events </Link>
    <Link to="/drivers">Drivers</Link>
  </>
);

const DriverDetails = () => {
  const drivers = useGetDrivers();
  const [selectedDriver, setSelectedDriver] = useState(1);

  return (
    <>
      <MeetDrivers drivers={drivers} selectDriver={setSelectedDriver} />
      <CarsData
        selectedDriver={selectedDriver}
        driverNumber={selectedDriver.driver_number}
      />
    </>
  );
};

const Home = () => {
  const sessions = useGetEvents({ year: "2025" });

  return (
    <>
      <PageHeader />
      <Routes>
        <Route path="/" element={<Events sessions={sessions} />} />
        <Route path="/drivers" element={<DriverDetails />} />
      </Routes>
    </>
  );
};

export default Home;
