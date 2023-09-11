import { Divider, Row } from "antd";

const SessionDetails = ({ selectedSession }) => {
  console.log("selectedSession", selectedSession);
  return (
    <Row
      style={{
        flexDirection: "column",
        gap: "10px",
        padding: "20px",
        width: "65%",
        background: "#fff",
        border: "1px solid #eee",
        borderRadius: "8px",
      }}
    >
      {!selectedSession ? (
        <p>Loading....</p>
      ) : (
        <>
          <h2 className="session-heading__primary">
            {selectedSession.serialNumber} - {selectedSession.title}
          </h2>
          <h4 className="session-heading__secondary product-font-color">
            {selectedSession.content}
          </h4>
          <Divider style={{ margin: 0 }} />
          <h4 className="session-heading__secondary">Contents:</h4>
          <p className="session-paragraph">{selectedSession.content}</p>
          <h4 className="session-heading__secondary">Pre-read:</h4>
          <p className="session-paragraph">{selectedSession.preRead}</p>
        </>
      )}
    </Row>
  );
};

export default SessionDetails;
