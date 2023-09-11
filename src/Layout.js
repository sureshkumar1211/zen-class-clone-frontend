import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  UserOutlined,
  ProfileFilled,
  IdcardFilled,
  HomeFilled
} from "@ant-design/icons";
import { Layout, Menu, Button, Avatar, Row, theme } from "antd";
import ZenLogo from "./ZenLogo";
const HEADER_TITLE = {
  "/tasks": "Task Submissions",
  "/": "Class",
  "/dashboard": "Dashboard"
};
const { Header, Sider, Content } = Layout;
const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    token: { colorBgContainer }
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        style={{
          background: "#f7f5fc",
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 100
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        {!collapsed ? (
          <Row
            style={{
              width: "100%",
              padding: "10px",
              alignItems: "center"
            }}
          >
            <div style={{ marginLeft: "10px" }}>
              <ZenLogo />
            </div>

            <h4 style={{ marginLeft: "20px", fontSize: "16px" }}>Student</h4>
          </Row>
        ) : (
          <Row
            style={{
              width: "100%",
              padding: "10px",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <ZenLogo />
          </Row>
        )}

        <Menu
          style={{ background: "var(--title-background)" }}
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <IdcardFilled />,
              label: "Class",
              onClick: () => {
                navigate("/");
              }
            },
            {
              key: "2",
              icon: <HomeFilled />,
              label: "Dashboard",
              onClick: () => {
                navigate("/dashboard");
              }
            },
            {
              key: "3",
              icon: <ProfileFilled />,
              label: "Tasks",
              onClick: () => {
                navigate("/tasks");
              }
            }
          ]}
        />
      </Sider>
      <Layout
        style={{
          marginLeft: collapsed ? 80 : 200
        }}
      >
        <Row
          style={{
            padding: "0 20px",
            height: "96px",
            width: "100%",
            position: "fixed",
            top: "0",
            left: 0,
            right: 0,
            zIndex: 0,
            background: colorBgContainer,
            alignItems: "center"
          }}
        >
          <h2
            style={{
              fontSize: "40px",
              fontStyle: "normal",
              color: "#2a2a2a",
              marginLeft: "200px",
              fontWeight: "500"
            }}
          >
            {HEADER_TITLE[location.pathname]}
          </h2>
          <Row
            style={{ marginLeft: "auto", alignItems: "center", gap: "20px" }}
          >
            <h4 style={{ fontSize: "20px" }}>Reka</h4>
            <Avatar size={46} icon={<UserOutlined />} />
          </Row>
        </Row>
        <Content
          style={{
            marginTop: "100px",
            padding: 24,
            minHeight: "80vh"
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
