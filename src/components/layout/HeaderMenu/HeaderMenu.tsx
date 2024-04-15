import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { Link, NavLink } from "react-router-dom";
import { ImFilter } from "react-icons/im";

const items: MenuProps["items"] = [
  {
    label: <NavLink to={"preprocessing"}>Pre-processing</NavLink>,
    key: "mail",
    icon: <ImFilter />,
  },
  {
    label: "Analyse",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        label: <Link to={"linear-regression"}>Linear Regression</Link>,
        key: "setting:1",
      },
      {
        label: "Option 2",
        key: "setting:2",
      },
    ],
  },
];

const HeaderMenu: React.FC = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      style={{
        paddingLeft: "30px",
        paddingRight: "30px",
        borderRadius: "7px",
      }}
    />
  );
};

export default HeaderMenu;
