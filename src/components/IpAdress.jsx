import { useState, useEffect } from "react";
import { browserName, browserVersion } from "react-device-detect";

function IpAddress() {
  const [ip, setIp] = useState("");
  useEffect(() => {
    fetch("https://geolocation-db.com/json/")
      .then((res) => res.json())
      .then((ip) => setIp(ip));
  }, []);
  // let agent = navigator.userAgent;
  return (
    <div>
      <h2 style={{ color: "aqua" }}>User Agent: <b style={{ color: "white" }}>{navigator.userAgent}</b></h2>
      <h2 style={{ color: "aqua" }}>İP: <b style={{ color: "white" }}>{ip.IPv4}</b></h2>
      <h2 style={{ color: "aqua" }}>Browser:{" "}<b style={{ color: "white" }}>{browserName}{browserVersion}</b></h2>
      <h2 style={{ color: "aqua" }}>Platform: <b style={{ color: "white" }}>{navigator.platform}</b></h2>
      <h2 style={{ color: "aqua" }}>Language: <b style={{ color: "white" }}>{navigator.language}</b></h2>
    </div>
  );
  
}

export default IpAddress;
