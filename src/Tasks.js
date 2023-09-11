import React, { useState, useEffect } from "react";
import { List } from "antd";
import { axiosInstance } from "./apiUtils";
const TaskList = () => {
  const [tasks, setTasks] = useState();

  const getTasks = async () => {
    try {
      const response = await axiosInstance.get("/task/all");
      setTasks(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <List
      itemLayout="horizontal"
      dataSource={tasks}
      renderItem={(item, index) => (
        <List.Item
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <List.Item.Meta
            title={<a href="https://ant.design">{item.name}</a>}
            description="Test"
          />
          <p
            style={{
              color: "var(--primary-font-color)",
            }}
          >
            Yet to be graded
          </p>
        </List.Item>
      )}
    />
  );
};
export default TaskList;
