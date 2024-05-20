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
  multipleLinearRegression,
} from "../../../store/slices/linearRegressionSlice";
import { AiFillPlayCircle } from "react-icons/ai";

type FieldType = {
  features?: string;
  target?: string;
};

interface Props {
  setPlotData: React.Dispatch<any>;
}

const MultipleLinearRegressionForm: React.FC<Props> = ({ setPlotData }) => {
  const {
    data: { missing_percentage, dataset },
  } = useSelector((state: RootState) => state.dataInfo);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const dynamiqueOptions: any = [];

  Object.keys(missing_percentage).forEach((o) => {
    dynamiqueOptions.push({ label: o, value: o });
  });

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    console.log(values);
    const requestBody = {
      dataset: dataset,
      features: values.features,
      target: values.target,
    };
    const response = await dispatch(multipleLinearRegression(requestBody));
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
      name="MultiplelinearRegressionForm"
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
        Multiple Linear Regression{" "}
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
            label="Features"
            name="features"
            rules={[{ required: true, message: "Please select a feature" }]}
          >
            <Select mode="multiple" options={dynamiqueOptions} />
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

export default MultipleLinearRegressionForm;
