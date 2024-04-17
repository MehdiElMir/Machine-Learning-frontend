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
    label: "ML Regression",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        label: "Linear Regression",
        key: "linear-regression",
        children: [
          {
            label: <Link to={"2d-linear-regression"}>2D</Link>,
            key: "2D",
          },
        ],
      },
      {
        label: "Option 2",
        key: "setting:2",
      },
    ],
  },
  {
    label: <NavLink to={"testing"}>Testing</NavLink>,
    key: "test",
    icon: <ImFilter />,
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
