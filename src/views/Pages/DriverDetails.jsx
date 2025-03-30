import { useState } from "react";
import CarsData from "../../Components/CarsData";
import MeetDrivers from "./MeetDrivers";
import useGetDrivers from "../../hooks/useGetDrivers";

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

export default DriverDetails;
