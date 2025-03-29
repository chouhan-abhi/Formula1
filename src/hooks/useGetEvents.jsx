import { useEffect, useState } from "react";

const fetchEvents = async ({ year, setEvents }) => {
  const SESSIONS_API = `https://api.openf1.org/v1/sessions`;
  return await fetch(`${SESSIONS_API}?year=${year}`)
    .then((res) => res.json())
    .then((res) => setEvents(res));
};

const useGetEvents = ({ year = "2025", isSorted = true }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents({ year, setEvents });
  }, [year]);

  if (isSorted) {
    return events.sort((a, b) => b.date_start.localeCompare(a.date_start));
  }

  return events;
};

export default useGetEvents;
