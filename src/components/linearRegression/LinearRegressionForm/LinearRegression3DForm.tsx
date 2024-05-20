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
import {
  linearRegression2D,
  linearRegression3D,
} from "../../../store/slices/linearRegressionSlice";
import { AiFillPlayCircle } from "react-icons/ai";

type FieldType = {
  feature1?: string;
  feature2?: string;
  target?: string;
};

interface Props {
  setPlotData: React.Dispatch<any>;
}

const LinearRegression3DForm: React.FC<Props> = ({ setPlotData }) => {
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
      selected_x1: values.feature1,
      selected_x2: values.feature2,
      selected_y: values.target,
    };
    const response = await dispatch(linearRegression3D(requestBody));
    setPlotData(response.payload.plot_data);
    form.resetFields();
  };
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const tooltipMessage = "";

  return (
    <Form
      layout="horizontal"
      name="linearRegression3DForm"
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
        Linear Regression 3D{" "}
        <Tooltip
          color="#6047ed"
          overlayInnerStyle={{ width: "400px" }}
          title={tooltipMessage}
        >
          <QuestionCircleOutlined />
        </Tooltip>
      </p>
      <Row justify={"space-around"}>
        <Col span={8}>
          <Form.Item<FieldType>
            label="Feature 1"
            name="feature1"
            rules={[{ required: true, message: "Please select a feature" }]}
          >
            <Select options={dynamiqueOptions} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item<FieldType>
            label="Feature 2"
            name="feature2"
            rules={[{ required: true, message: "Please select a feature" }]}
          >
            <Select options={dynamiqueOptions} />
          </Form.Item>
        </Col>
        <Col span={8}>
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

export default LinearRegression3DForm;
