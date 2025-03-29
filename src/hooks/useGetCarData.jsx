import { useEffect, useState } from "react";

const CARS_DATA_API = `https://api.openf1.org/v1/car_data`;

const fetchCarsData = async ({ sessionKey, speed, setCarsData }) => {
  return await fetch(
    `${CARS_DATA_API}?session_key=${sessionKey}&speed%3E=${speed}`
  )
    .then((res) => res.json())
    .then((res) => setCarsData(res));
};

const useGetCarsData = ({ sessionKey = "latest", speed = "315" }) => {
  const [carsData, setCarsData] = useState([]);

  useEffect(() => {
    fetchCarsData({ sessionKey, speed, setCarsData });
  }, [sessionKey, speed]);

  let dataMap = {};
  carsData.forEach((car) => {
    dataMap[car.driver_number]
      ? dataMap[car.driver_number].push(car)
      : (dataMap[car.driver_number] = [car]);
  });

  return dataMap;
};

export default useGetCarsData;
