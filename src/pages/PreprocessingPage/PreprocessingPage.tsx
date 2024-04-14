import { Card, Col, Row, Space, Statistic } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { AiOutlineColumnWidth } from "react-icons/ai";
import { AiOutlineColumnHeight } from "react-icons/ai";
import { AiFillQuestionCircle } from "react-icons/ai";
import ButtonModal from "../../components/preprocessing/ButtonModal/ButtonModal";
import * as S from "./Preprocessing.styles";
import { BarPlotChart } from "../../components/preprocessing/BarPlotChart/BarPlotChart";
import DeleteRowsButton from "../../components/preprocessing/deleteRowsButton/DeleteRowsButton";
import ColumnsForm from "../../components/preprocessing/ColumnsForm/ColumnsForm";

export const PreprocessingPage: React.FC = () => {
  const { data } = useSelector((state: RootState) => state.dataInfo);

  return (
    <>
      <Row gutter={[16, 16]} style={{ marginBottom: "30px" }}>
        <Col span={8} sm={12} xs={24} md={8}>
          <Card
            bordered={false}
            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          >
            <Statistic
              title="Number of rows"
              value={data.num_rows}
              valueStyle={{ color: "#11b8fc" }}
              prefix={<AiOutlineColumnHeight style={{ marginRight: "1rem" }} />}
            />
          </Card>
        </Col>
        <Col span={8} sm={12} xs={24} md={8}>
          <Card
            bordered={false}
            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          >
            <Statistic
              title="Number of features"
              value={data.num_columns}
              valueStyle={{ color: "#6047ed" }}
              prefix={<AiOutlineColumnWidth style={{ marginRight: "1rem" }} />}
            />
          </Card>
        </Col>
        <Col span={8} sm={12} xs={24} md={8}>
          <Card
            bordered={false}
            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          >
            <Statistic
              title="Missing values"
              value={Number(data.total_missing_percentage.toFixed(2))}
              valueStyle={{ color: "#d75740" }}
              prefix={<AiFillQuestionCircle style={{ marginRight: "1rem" }} />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={12} sm={24} xs={24} md={12}>
          <BarPlotChart
            title="Missing values in each feature (%)"
            data={data.missing_percentage}
          ></BarPlotChart>
        </Col>
        <Col span={12} sm={24} xs={24} md={12}>
          <Card
            bordered={false}
            style={{ boxShadow: "rgba(21, 27, 102, 0.2) 0px 2px 8px 0px" }}
          >
            <Space
              direction="vertical"
              size="middle"
              style={{ display: "flex" }}
            >
              {/* Components group */}
              <ButtonModal />

              <DeleteRowsButton />
              <ColumnsForm />
            </Space>
          </Card>
        </Col>
      </Row>
    </>
  );
};
