const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Session = ({
  country_name,
  country_code,
  session_name,
  session_type,
  date_start,
  year,
  location,
}) => (
  <div
    style={{
      backgroundColor: getRandomColor(),
      padding: "10px",
      borderRadius: "8px",
      width: "380px",
      margin: "8px 16px 8px 0",
    }}
  >
    <h2>
      {country_code} - {session_type}
    </h2>
    <div>
      <div>Country: {country_name}</div>
      <div>Session:{session_name}</div>
      <div>Type: {session_type}</div>
      <div>Date: {new Date(date_start).toLocaleString()}</div>
      <div>Year: {year}</div>
      <div>Location: {location}</div>
    </div>
  </div>
);

export default Session;
