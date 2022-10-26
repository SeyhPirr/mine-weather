import { useState, useEffect } from "react";
export default function Clock({ time_zone }) {
  const [currentTime, setTime] = useState("");

  let options = {
      timeZone: time_zone,
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    },
    formatter = new Intl.DateTimeFormat([], options);

  function updateTime() {
    let time = formatter.format(new Date());

    setTime(time);
  }
  useTime(500, updateTime, time_zone);

  if (time_zone) {
    return <div>{currentTime}</div>;
  }
  return <></>;
}
function useTime(ms, callback, timeZone) {
  useEffect(() => {
    const interval = setInterval(callback, ms);
    return () => {
      clearInterval(interval);
    };
  }, [timeZone]);
}
