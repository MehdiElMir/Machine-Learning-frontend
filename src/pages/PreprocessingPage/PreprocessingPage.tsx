import { Card, Col, Row, Select, Space, Statistic } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { AiOutlineColumnWidth } from "react-icons/ai";
import { AiOutlineColumnHeight } from "react-icons/ai";
import { AiFillQuestionCircle } from "react-icons/ai";
import ButtonModal from "../../components/preprocessing/ButtonModal/ButtonModal";
import * as S from "./Preprocessing.styles";
import { BarPlotChart } from "../../components/preprocessing/BarPlotChart/BarPlotChart";
import DeleteRowsButton from "../../components/preprocessing/deleteRowsButton/DeleteRowsButton";
import ColumnsForm from "../../components/preprocessing/ColumnsForm/ColumnsForm";
import ImputationForm from "../../components/preprocessing/ImputationForm/ImputationForm";
import DataBalancingForm from "../../components/preprocessing/DataBalancingForm/DataBalancingForm";
import { PieChart } from "../../components/preprocessing/PieChart/PieChart";
import { fetchValuesCount } from "../../store/slices/dataInfoSlice";

export const PreprocessingPage: React.FC = () => {
  const { data, dataBalancing } = useSelector(
    (state: RootState) => state.dataInfo
  );
  const dispatch = useDispatch();
  const {
    data: { categorical_columns_names, dataset },
  } = useSelector((state: RootState) => state.dataInfo);

  const dynamiqueOptions: any = [];

  categorical_columns_names.forEach((o) => {
    dynamiqueOptions.push({ label: o, value: o });
  });

  const handleChange = (value: string) => {
    const requestData = {
      dataset: dataset,
      target: value,
    };
    dispatch(fetchValuesCount(requestData));
  };

  return (
    <>
      <Row gutter={[16, 16]} style={{ marginBottom: "30px", width: "100%" }}>
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
              title="Rows with missing values"
              value={`${data.total_missing_percentage} / ${data.num_rows}`}
              valueStyle={{ color: "#d75740" }}
              prefix={<AiFillQuestionCircle style={{ marginRight: "1rem" }} />}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ width: "100%" }}>
        <Col span={12} sm={24} xs={24} md={12}>
          {data.total_missing_percentage > 0 ? (
            <BarPlotChart
              title="Missing values in each feature (%)"
              data={data.missing_percentage}
            ></BarPlotChart>
          ) : (
            <Card
              bordered={false}
              style={{
                boxShadow: "rgba(21, 27, 102, 0.2) 0px 2px 8px 0px",
                height: "380px",
              }}
            >
              <S.MessageInfo>
                There is no missing values to display 👌
              </S.MessageInfo>
            </Card>
          )}
        </Col>
        <Col span={12} sm={24} xs={24} md={12}>
          <Card
            bordered={false}
            style={{
              boxShadow: "rgba(21, 27, 102, 0.2) 0px 2px 8px 0px",
              height: "380px",
            }}
          >
            <Row>
              <Col span={12}>
                <Select
                  options={dynamiqueOptions}
                  placeholder="Select a column to view its balance "
                  style={{ width: "90%" }}
                  onChange={handleChange}
                ></Select>
                <PieChart title="Data Balance" data={dataBalancing.values} />
              </Col>
              <Col span={12}>
                <DataBalancingForm />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ width: "100%", marginTop: "1rem" }}>
        {/* Components group */}
        <Col sm={24} xs={24} md={12} span={12}>
          <Card
            bordered={false}
            style={{
              boxShadow: "rgba(21, 27, 102, 0.2) 0px 2px 8px 0px",
            }}
          >
            <Space
              direction="vertical"
              size="middle"
              style={{ display: "flex" }}
            >
              {data.total_missing_percentage > 0 ? (
                <ImputationForm />
              ) : (
                <Card
                  bordered={false}
                  style={{
                    boxShadow: "rgba(21, 27, 102, 0.2) 0px 2px 8px 0px",
                  }}
                >
                  <S.MessageInfo style={{ height: "190px" }}>
                    There is no missing values to imputate 👌
                  </S.MessageInfo>
                </Card>
              )}

              <ButtonModal />
            </Space>
          </Card>
        </Col>
        <Col sm={24} xs={24} md={12} span={12}>
          <Card
            bordered={false}
            style={{ boxShadow: "rgba(21, 27, 102, 0.2) 0px 2px 8px 0px" }}
          >
            <Space
              direction="vertical"
              size="middle"
              style={{ display: "flex" }}
            >
              <ColumnsForm />
              <DeleteRowsButton />
            </Space>
          </Card>
        </Col>
      </Row>
    </>
  );
};
