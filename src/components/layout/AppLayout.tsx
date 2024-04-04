import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));

const AppLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          backgroundColor: "#f5f9ff",
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          height: "60px",
          justifyContent: "center",
          paddingBottom: "10px",
          marginTop: "10px",
        }}
      >
        <div className="demo-logo" />
        <HeaderMenu />
      </Header>
      <Content
        style={{
          padding: "0 48px",
          backgroundColor: "#f5f9ff",
          paddingTop: "10px",
        }}
      >
        <div
          style={{
            padding: 24,
            height: "calc(100vh - 80px)",
            background: colorBgContainer,

            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
};

export default AppLayout;
