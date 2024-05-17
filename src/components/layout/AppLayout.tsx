import React from "react";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  DownloadOutlined,
  FileAddFilled,
  UploadOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { resetBalanceValues } from "../../store/slices/dataInfoSlice";

const { Header, Content, Footer } = Layout;

const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));

const AppLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
          justifyContent: "space-between",
          paddingBottom: "10px",
          marginTop: "10px",
        }}
      >
        <HeaderMenu />
        <div>
          <Button
            type="primary"
            icon={<UploadOutlined />}
            onClick={() => {
              dispatch(resetBalanceValues());
              navigate("/");
            }}
            style={{ marginRight: "1rem" }}
          >
            Upload new file
          </Button>
        </div>
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
            overflowY: "scroll",
          }}
        >
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
};

export default AppLayout;
