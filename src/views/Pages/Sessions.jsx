import { SectionStyle } from "../../utils/utils";
import Session from "../../Components/Session";

const Events = ({ sessions }) =>
  sessions?.length ? (
    <div style={SectionStyle}>
      <h2>Events</h2>
      <div style={{ display: "inline-flex", flexWrap: "wrap" }}>
        {sessions.map((session) => (
          <Session key={session.session_name} {...session} />
        ))}
      </div>
    </div>
  ) : null;

export default Events;
