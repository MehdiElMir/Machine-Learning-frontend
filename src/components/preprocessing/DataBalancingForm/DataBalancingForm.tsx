import React, { useEffect } from "react";
import type { GetProp } from "antd";
import { Button, Checkbox, Form, Row, Select, type FormProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import {
  deletingSelectedColumns,
  fetchValuesCount,
  overSampling,
  resetBalanceValues,
  underSampling,
} from "../../../store/slices/dataInfoSlice";
import { FaBalanceScale } from "react-icons/fa";

type FieldType = {
  target?: string;
  method?: string;
};

const DataBalancingForm: React.FC = () => {
  const [form] = Form.useForm();
  const {
    data: { categorical_columns_names, dataset },
  } = useSelector((state: RootState) => state.dataInfo);
  const dispatch = useDispatch();

  const methodOptions = [
    { label: "Oversampling", value: "OverSampling" },
    { label: "Undersampling", value: "UnderSampling" },
  ];

  const dynamiqueOptions: any = [];

  categorical_columns_names.forEach((o) => {
    dynamiqueOptions.push({ label: o, value: o });
  });

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    let response;
    const requestBody = {
      dataset: dataset,
      target: values.target,
    };
    console.log(requestBody.dataset.length);
    if (values.method == "OverSampling") {
      response = await dispatch(overSampling(requestBody));
    } else if (values.method == "UnderSampling") {
      response = await dispatch(underSampling(requestBody));
    }
    dispatch(resetBalanceValues());
    const requestBody2 = {
      dataset: response.payload.data,
      target: values.target,
    };

    dispatch(fetchValuesCount(requestBody2));
    form.resetFields();
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
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
        Balance your Data
      </p>
      <Form.Item<FieldType>
        label="Column to balance"
        name="target"
        rules={[{ required: true, message: "Please select a column" }]}
      >
        <Select options={dynamiqueOptions} />
      </Form.Item>

      <Form.Item<FieldType>
        label="Method"
        name="method"
        rules={[{ required: true, message: "Please select a column" }]}
      >
        <Select options={methodOptions} />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }}>
        <Row justify={"end"}>
          <Button icon={<FaBalanceScale />} type="primary" htmlType="submit">
            Balance
          </Button>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default DataBalancingForm;
