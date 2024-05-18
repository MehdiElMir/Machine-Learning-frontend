import React from "react";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  DownloadOutlined,
  FileAddFilled,
  UploadOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { resetBalanceValues } from "../../store/slices/dataInfoSlice";
import ButtonModal from "../preprocessing/ButtonModal/ButtonModal";
import { FaFileUpload } from "react-icons/fa";
import { convertToCSV } from "../../utils/convertToCsv";
import { RootState } from "../../store/store";
import { FaCloudDownloadAlt } from "react-icons/fa";
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
  const { dataset } = useSelector((state: RootState) => state.dataInfo.data);

  const handleDownload = () => {
    const csv = convertToCSV(dataset);
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "dataset.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

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
          <ButtonModal />
          <Button
            type="primary"
            icon={<FaCloudDownloadAlt />}
            onClick={handleDownload}
            style={{
              marginRight: "1rem",
              backgroundColor: "#7aad62",
              width: "8rem",
            }}
          >
            Download
          </Button>
          <Button
            type="primary"
            icon={<FaFileUpload />}
            onClick={() => {
              dispatch(resetBalanceValues());
              navigate("/");
            }}
            style={{ marginRight: "1rem", width: "8rem" }}
          >
            New upload
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
