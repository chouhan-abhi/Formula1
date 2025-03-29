import { useEffect, useState } from "react";

const useGetDrivers = () => {
  const [drivers, setDrivers] = useState([]);

  const DRIVERS_API = `https://api.openf1.org/v1/drivers`;

  const fetchDrivers = async () => {
    return await fetch(`${DRIVERS_API}?&session_key=latest`)
      .then((res) => res.json())
      .then((res) => setDrivers(res));
  };

  useEffect(() => {
    fetchDrivers();
  }, []);

  return drivers;
};

export default useGetDrivers;
