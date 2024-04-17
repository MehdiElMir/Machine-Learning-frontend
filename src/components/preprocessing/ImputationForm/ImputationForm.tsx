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
  type FormProps,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import {
  deletingSelectedColumns,
  imputateSelectedColumns,
} from "../../../store/slices/dataInfoSlice";
import { DeleteFilled, PlusCircleFilled } from "@ant-design/icons";

type FieldType = {
  column_to_imputate?: string;
  option?: string;
};

const ImputationForm: React.FC = () => {
  const {
    data: { missing_percentage, dataset },
  } = useSelector((state: RootState) => state.dataInfo);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const dynamiqueOptions: any = [];

  Object.keys(missing_percentage).forEach((o) => {
    dynamiqueOptions.push({ label: o, value: o });
  });

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log(values);
    const requestBody = {
      dataset: dataset,
      selected_columns: values.column_to_imputate,
      option: values.option,
    };
    dispatch(imputateSelectedColumns(requestBody));
    form.resetFields();
  };
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      layout="vertical"
      name="imputation"
      style={{
        width: "100%",
        padding: "10px",
        background: `linear-gradient(white, white) padding-box,
      linear-gradient(to right, #11b8fc, #6047ed) border-box`,
        border: "3px dashed #ffffff",
        borderRadius: "7px",
      }}
      initialValues={{
        ["option"]: "Mean",
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <p style={{ textAlign: "center", fontSize: "1.2rem", color: "#6047ed" }}>
        Imputate missing values
      </p>
      <Row>
        <Col span={12}>
          <Form.Item<FieldType>
            label="Column to imputate"
            name="column_to_imputate"
            rules={[{ required: true, message: "Please select some columns" }]}
          >
            <Radio.Group options={dynamiqueOptions} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item<FieldType>
            label="Method of imputation"
            name="option"
            rules={[{ required: true, message: "Please select a method" }]}
          >
            <Select
              style={{ width: "100%" }}
              options={[
                { value: "Mean", label: "Mean" },
                { value: "Mode", label: "Mode" },
                { value: "Mediane", label: "Mediane" },
              ]}
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item wrapperCol={{ span: 24 }}>
        <Row justify={"end"}>
          <Button icon={<PlusCircleFilled />} type="primary" htmlType="submit">
            Imputate
          </Button>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default ImputationForm;
