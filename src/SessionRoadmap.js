import { Row, Button } from "antd";
const SessionRoadMap = ({ sessions, onClickSessionHandler }) => {
  const renderSessions = () => {
    if (!sessions.length) {
      return <p>No sessions found</p>;
    }
    return sessions.map((item) => {
      return (
        <Button
          onClick={() => onClickSessionHandler(item.serialNumber)}
          key={item.serialNumber}
          className="primary-background-color"
          shape="circle"
        >
          {item.serialNumber}
        </Button>
      );
    });
  };

  return (
    <Row
      style={{
        flexDirection: "column",
        gap: "20px",
        width: "30%",
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "4px 8px 8px #eee",
      }}
    >
      <div style={{ padding: "20px", background: "#f7f5fc", fontSize: "20px" }}>
        <h4>Sessions Roadmap</h4>
      </div>
      <Row
        style={{
          width: "100%",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
        }}
      >
        {renderSessions()}
      </Row>
    </Row>
  );
};

export default SessionRoadMap;
