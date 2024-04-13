import { Card, Col, Row, Statistic } from "antd";
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

export const PreprocessingPage: React.FC = () => {
  const { data } = useSelector((state: RootState) => state.dataInfo);

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={6} sm={12} xs={24} md={6}>
          <Card
            bordered={false}
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Statistic
              title="Number of rows"
              value={data.num_rows}
              valueStyle={{ color: "#11b8fc" }}
              prefix={<AiOutlineColumnHeight style={{ marginRight: "1rem" }} />}
            />
          </Card>
        </Col>
        <Col span={6} sm={12} xs={24} md={6}>
          <Card
            bordered={false}
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Statistic
              title="Number of features"
              value={data.num_columns}
              valueStyle={{ color: "#6047ed" }}
              prefix={<AiOutlineColumnWidth style={{ marginRight: "1rem" }} />}
            />
          </Card>
        </Col>
        <Col span={6} sm={12} xs={24} md={6}>
          <Card
            bordered={false}
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Statistic
              title="Percentage of missing values"
              value={data.total_missing_percentage}
              valueStyle={{ color: "#d75740" }}
              prefix={<AiFillQuestionCircle style={{ marginRight: "1rem" }} />}
              suffix="%"
            />
          </Card>
        </Col>
        <S.ButtonCol span={6} sm={12} xs={24} md={6}>
          <ButtonModal />
        </S.ButtonCol>
      </Row>

      <Row>
        <Col span={12}>
          <DeleteRowsButton />
        </Col>
        <Col span={12}>
          <BarPlotChart
            title="Missing values"
            data={data.missing_percentage}
          ></BarPlotChart>
        </Col>
      </Row>
    </>
  );
};
