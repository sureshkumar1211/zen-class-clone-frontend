import { useEffect, useState } from "react";
import { Row } from "antd";
import SessionDetails from "./SessionDetails";
import SessionRoadMap from "./SessionRoadmap";
import { axiosInstance } from "./apiUtils";

const Class = () => {
  const [sessions, setSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);

  const getSessions = async () => {
    try {
      const response = await axiosInstance.get("/session/all");
      setSessions(response.data.data);
      setSelectedSession(response.data.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickSessionHandler = (serialNumber) => {
    const findSession = sessions.find(
      (item) => item.serialNumber === serialNumber
    );
    setSelectedSession(findSession);
  };

  useEffect(() => {
    getSessions();
  }, []);
  return (
    <Row style={{ gap: "10px" }}>
      <SessionDetails selectedSession={selectedSession} />
      <SessionRoadMap
        sessions={sessions}
        onClickSessionHandler={onClickSessionHandler}
      />
    </Row>
  );
};

export default Class;
