import React, { useEffect } from "react";
import type { GetProp } from "antd";
import { Button, Checkbox, Form, type FormProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { deletingSelectedColumns } from "../../../store/slices/dataInfoSlice";

type FieldType = {
  columns_to_delete?: string;
};

const ColumnsForm: React.FC = () => {
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
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 24 }}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Columns"
        name="columns_to_delete"
        rules={[{ required: true, message: "Please select some columns" }]}
      >
        <Checkbox.Group options={dynamiqueOptions} />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }}>
        <Button type="primary" htmlType="submit" block>
          Delete
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ColumnsForm;
