const Drivers = ({
  selectDriver,
  full_name,
  team_colour,
  team_name,
  driver_number,
  country_code,
  headshot_url,
  name_acronym,
}) => (
  <div
    style={{
      backgroundColor: `#${team_colour}`,
      margin: "8px 16px 8px 0",
      padding: "8px",
      borderRadius: "8px",
      display: "flex",
      flexDirection: "column",
      opacity: "0.7",
      color: "white",
      width: "260px",
    }}
    onClick={() =>
      selectDriver?.({
        full_name,
        team_colour,
        team_name,
        driver_number,
        country_code,
        headshot_url,
        name_acronym,
      })
    }
  >
    <h2
      style={{
        height: "280px",
        backgroundImage: `url(${headshot_url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        textAlign: "center",
        fontSize: "9rem",
        margin: "10px 0",
      }}
    >
      {driver_number}
    </h2>
    <div style={{ padding: "0 2px", borderRadius: "8px" }}>
      <div>
        {full_name} ({name_acronym})
      </div>
      <div>{team_name}</div>
      <div>{country_code}</div>
    </div>
  </div>
);
export default Drivers;
