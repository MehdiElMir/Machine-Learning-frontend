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
import { deletingSelectedColumns } from "../../../store/slices/dataInfoSlice";
import { DeleteFilled } from "@ant-design/icons";

type FieldType = {
  columns_to_delete?: string;
  option?: string;
};

const ImputationForm: React.FC = () => {
  const {
    data: { missing_percentage, dataset },
  } = useSelector((state: RootState) => state.dataInfo);
  const dispatch = useDispatch();

  const dynamiqueOptions: any = [];

  Object.keys(missing_percentage).forEach((o) => {
    dynamiqueOptions.push({ label: o, value: o });
  });

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log(values);
    const requestBody = {
      dataset: dataset,
      columns_to_delete: values.columns_to_delete,
    };
    dispatch(deletingSelectedColumns(requestBody));
  };
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      layout="vertical"
      name="basic"
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
        Imputate missing values
      </p>
      <Row>
        <Col span={12}>
          <Form.Item<FieldType>
            label="Column to imputate"
            name="columns_to_delete"
            rules={[{ required: true, message: "Please select some columns" }]}
          >
            <Radio.Group options={dynamiqueOptions} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item<FieldType>
            label="Method of imputation"
            name="option"
            rules={[{ required: true, message: "Please select some columns" }]}
          >
            <Select
              defaultValue="Mean"
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
          <Button icon={<DeleteFilled />} type="primary" htmlType="submit">
            Imputate
          </Button>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default ImputationForm;
