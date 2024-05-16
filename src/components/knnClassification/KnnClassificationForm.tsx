import React, { useEffect } from "react";
import type { GetProp } from "antd";
import {
  Button,
  Checkbox,
  Col,
  Form,
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
  decisionTree,
  knnClassification,
  linearRegression2D,
} from "../../store/slices/linearRegressionSlice";
import { AiFillPlayCircle } from "react-icons/ai";

type FieldType = {
  column?: string;
  n_neighbors?: string;
};

interface Props {
  setPlotData: React.Dispatch<any>;
}

const KnnClassificationForm: React.FC<Props> = ({ setPlotData }) => {
  const {
    data: { categorical_columns_names, dataset },
  } = useSelector((state: RootState) => state.dataInfo);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const dynamiqueOptions: any = [];

  categorical_columns_names.forEach((o) => {
    dynamiqueOptions.push({ label: o, value: o });
  });

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    console.log(values);
    const requestBody = {
      dataset: dataset,
      target: values.column,
      n_neighbors: values.n_neighbors,
    };
    console.log(requestBody);
    const response = await dispatch(knnClassification(requestBody));
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
      name="KnnClassificationForm"
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
        Knn Classification
      </p>
      <Row justify={"space-around"}>
        <Col span={6}>
          <Form.Item<FieldType>
            label="Column"
            name="column"
            rules={[{ required: true, message: "Please select a feature" }]}
          >
            <Select options={dynamiqueOptions} />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item<FieldType>
            label="N-Neighbors"
            name="n_neighbors"
            rules={[{ required: true, message: "Please enter a number" }]}
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

export default KnnClassificationForm;
