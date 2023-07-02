import React, { useContext, useState } from "react";
import "./Main.css";
import { GlobalContext } from "./context/GlobalState";
import Event from "./Event/Event";

const Main = () => {
  //Hooks
  const [event, setEvent] = useState("");
  const [time, setTime] = useState("");

  const { addEvent } = useContext(GlobalContext);
  const { events } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      id: Math.floor(Math.random() * 100000000),
      event,
      time,
    };

    addEvent(newEvent);

    //reset on clicking add event
    setEvent("");
    setTime("");
  };

  return (
    <div className="container">
      <div className="header">
        <div className="layer">Event Connect</div>
      </div>
      <div className="body">
        <ul className="events">
          {events.map((item) => (
            <Event key={item.id} item={item} />
          ))}
        </ul>
        <div className="addEvent">
          <form onSubmit={onSubmit}>
            <input
              className="eventName"
              value={event}
              onChange={(e) => setEvent(e.target.value)}
              type="text"
              placeholder="event name"
            ></input>
            <input
              className="eventTime"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              type="text"
              placeholder="event time"
            ></input>
            <button className="eventButton">Add Event</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Main;
