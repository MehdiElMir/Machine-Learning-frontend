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
      <Form.Item<FieldType>
        label="Columns"
        name="columns_to_delete"
        rules={[{ required: true, message: "Please select some columns" }]}
      >
        <Checkbox.Group options={dynamiqueOptions} />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }}>
        <Button type="primary" htmlType="submit" block danger>
          Delete selected columns
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ColumnsForm;
