import Drivers from "../../Components/Drivers";
import { SectionStyle } from "../../utils/utils";

const MeetDrivers = ({ drivers, selectDriver }) =>
  drivers?.length ? (
    <div style={SectionStyle}>
      <h2>Meet drivers</h2>
      <div style={{ display: "inline-flex", flexWrap: "wrap" }}>
        {drivers.map((driver) => (
          <Drivers
            key={driver.driver_number}
            selectDriver={selectDriver}
            {...driver}
          />
        ))}
      </div>
    </div>
  ) : null;

export default MeetDrivers;
