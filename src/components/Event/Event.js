import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Event = ({ item }) => {
  const { deleteEvent } = useContext(GlobalContext);
  return (
    <li>
      <span className="event">{item.event}</span>
      <span className="time">{item.time}</span>
      <span className="action" onClick={() => deleteEvent(item.id)}>
        &#10007;
      </span>
    </li>
  );
};
export default Event;
