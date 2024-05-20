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
import { LuLineChart } from "react-icons/lu";
import { FaWandMagicSparkles } from "react-icons/fa6";

const items: MenuProps["items"] = [
  {
    label: <NavLink to={"preprocessing"}>Pre-processing</NavLink>,
    key: "mail",
    icon: <FaWandMagicSparkles />,
  },
  {
    label: "Machine Learning Models",
    key: "SubMenu",
    icon: <LuLineChart />,
    children: [
      {
        label: "Linear Regression",
        key: "linear-regression",
        children: [
          {
            label: (
              <Link to={"2d-linear-regression"}>Simple linear regression</Link>
            ),
            key: "2D",
          },
          {
            label: (
              <Link to={"3d-linear-regression"}>3D linear regression</Link>
            ),
            key: "3D",
          },
          {
            label: (
              <Link to={"multiple_linear_regression"}>
                Multiple linear regression
              </Link>
            ),
            key: "multiple_linear_regression",
          },
        ],
      },
      {
        label: "Knn",
        key: "Knn",
        children: [
          {
            label: <Link to={"KnnClassification"}>Knn classification</Link>,
            key: "Knn Classification",
          },
          {
            label: <Link to={"KnnRegression"}>Knn Regression</Link>,
            key: "KnnRegression",
          },
          {
            label: <Link to={"KnnMix"}>Knn regression comparaison</Link>,
            key: "KnnMix",
          },
        ],
      },
      {
        label: "DecisionTree",
        key: "DecisionTree",
        children: [
          {
            label: (
              <Link to={"DecisionTreeVizualisation"}>
                Decision tree vizualisation
              </Link>
            ),
            key: "DecisionTreeVizualisation",
          },
          {
            label: <Link to={"DecisionTree"}>Decision tree result</Link>,
            key: "DecisionTreeResult",
          },
        ],
      },
      {
        label: <Link to={"CrossValidation"}>Cross validation</Link>,
        key: "CrossValidation",
      },

      {
        label: <Link to={"testing"}>Test</Link>,
        key: "testing",
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
