import useGetEvents from "../../hooks/useGetEvents";
import { Routes, Route } from "react-router-dom";
import Events from "../Pages/Sessions";
import PageHeader from "../../Components/PageHeader";
import DriverDetails from "../Pages/DriverDetails";

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
