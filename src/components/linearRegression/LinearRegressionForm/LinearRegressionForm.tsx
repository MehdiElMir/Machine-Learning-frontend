import React, { useEffect } from "react";
import type { GetProp } from "antd";
import {
  Button,
  Checkbox,
  Col,
  Form,
  Radio,
  Row,
  Select,
  Tooltip,
  type FormProps,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import {
  deletingSelectedColumns,
  imputateSelectedColumns,
} from "../../../store/slices/dataInfoSlice";
import {
  DeleteFilled,
  PlusCircleFilled,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { linearRegression2D } from "../../../store/slices/linearRegressionSlice";
import { AiFillPlayCircle } from "react-icons/ai";

type FieldType = {
  feature?: string;
  target?: string;
};

interface Props {
  setPlotData: React.Dispatch<any>;
}

const LinearRegressionForm: React.FC<Props> = ({ setPlotData }) => {
  const {
    data: { numeric_columns_names, dataset },
  } = useSelector((state: RootState) => state.dataInfo);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const dynamiqueOptions: any = [];

  Object.values(numeric_columns_names).forEach((o) => {
    dynamiqueOptions.push({ label: o, value: o });
  });

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    console.log(values);
    const requestBody = {
      dataset: dataset,
      selected_x: values.feature,
      selected_y: values.target,
    };
    const response = await dispatch(linearRegression2D(requestBody));
    setPlotData(response.payload.plot_data);
    form.resetFields();
  };
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const tooltipMessage =
    "This plot shows the relationship between the selected feature (X) and the target variable (Y) using linear regression. The scattered points represent the actual data, while the line represents the best fit linear model. This line helps us understand the trend and make predictions based on the input feature. Linear regression is a basic yet powerful tool for identifying relationships and trends in data.";

  return (
    <Form
      layout="horizontal"
      name="linearRegressionForm"
      style={{
        width: "100%",
        padding: "10px",
        background: `linear-gradient(white, white) padding-box,
      linear-gradient(to right, #11b8fc, #6047ed) border-box`,
        border: "3px dashed #ffffff",
        borderRadius: "7px",
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <p style={{ textAlign: "center", fontSize: "1.2rem", color: "#6047ed" }}>
        Linear Regression 2D{" "}
        <Tooltip
          color="#6047ed"
          overlayInnerStyle={{ width: "400px" }}
          title={tooltipMessage}
        >
          <QuestionCircleOutlined />
        </Tooltip>
      </p>
      <Row justify={"space-around"}>
        <Col span={6}>
          <Form.Item<FieldType>
            label="Feature"
            name="feature"
            rules={[{ required: true, message: "Please select a feature" }]}
          >
            <Select options={dynamiqueOptions} />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item<FieldType>
            label="Target"
            name="target"
            rules={[{ required: true, message: "Please select a target" }]}
          >
            <Select style={{ width: "100%" }} options={dynamiqueOptions} />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item wrapperCol={{ span: 24 }}>
        <Row justify={"end"}>
          <Button icon={<AiFillPlayCircle />} type="primary" htmlType="submit">
            Generate
          </Button>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default LinearRegressionForm;
