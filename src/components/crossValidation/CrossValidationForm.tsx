import React, { useEffect } from "react";
import type { GetProp } from "antd";
import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
  type FormProps,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  deletingSelectedColumns,
  imputateSelectedColumns,
} from "../../store/slices/dataInfoSlice";
import { DeleteFilled, PlusCircleFilled } from "@ant-design/icons";
import {
  crossValidation,
  linearRegression2D,
} from "../../store/slices/linearRegressionSlice";
import { AiFillPlayCircle } from "react-icons/ai";

type FieldType = {
  features?: string;
  target?: string;
  N_FOLD?: number;
};

interface Props {
  setPlotData: React.Dispatch<any>;
}

const CrossValidationForm: React.FC<Props> = ({ setPlotData }) => {
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
      N_FOLD: values.N_FOLD,
    };
    console.log(requestBody);
    const response = await dispatch(crossValidation(requestBody));
    setPlotData(response.payload.plot_data);
    form.resetFields();
  };
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      layout="horizontal"
      name="crossValidationForm"
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
        Cross Validation
      </p>
      <Row gutter={16} justify={"space-between"}>
        <Col span={8}>
          <Form.Item<FieldType>
            label="Features"
            name="features"
            rules={[{ required: true, message: "Please select a feature" }]}
          >
            <Select mode="multiple" options={dynamiqueOptions} allowClear />
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
        <Col span={8}>
          <Form.Item<FieldType>
            label="N_FOLD"
            name="N_FOLD"
            rules={[{ required: true, message: "Please select NFold" }]}
          >
            <InputNumber />
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

export default CrossValidationForm;
