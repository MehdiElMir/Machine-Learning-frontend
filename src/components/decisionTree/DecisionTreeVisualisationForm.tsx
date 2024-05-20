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
  Tooltip,
  type FormProps,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  deletingSelectedColumns,
  imputateSelectedColumns,
} from "../../store/slices/dataInfoSlice";
import {
  DeleteFilled,
  PlusCircleFilled,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import {
  crossValidation,
  decisionTree,
  decisionTreeVisualisation,
  linearRegression2D,
} from "../../store/slices/linearRegressionSlice";
import { AiFillPlayCircle } from "react-icons/ai";

type FieldType = {
  target?: string;
  criterion?: string;
  max_depth?: string;
};

interface Props {
  setImage: React.Dispatch<any>;
}

const DecisionTreeVisualisationForm: React.FC<Props> = ({ setImage }) => {
  const {
    data: { missing_percentage, dataset },
  } = useSelector((state: RootState) => state.dataInfo);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const criterionOptions: any = [
    { label: "gini", value: "gini" },
    { label: "entropy", value: "entropy" },
  ];

  const dynamiqueOptions: any = [];

  Object.keys(missing_percentage).forEach((o) => {
    dynamiqueOptions.push({ label: o, value: o });
  });

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    console.log(values);
    const requestBody = {
      dataset: dataset,
      target: values.target,
      max_depth: values.max_depth,
      criterion: values.criterion,
    };
    console.log(requestBody);
    const response = await dispatch(decisionTreeVisualisation(requestBody));
    console.log(response);
    setImage(`data:image/png;base64,${response.payload.image}`);
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
      name="DecisionTreeVisualisationForm"
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
        Decision Tree Visualisation{" "}
        <Tooltip
          color="#6047ed"
          overlayInnerStyle={{ width: "400px" }}
          title="This visualization shows the structure of a Decision Tree Classifier. Each node represents a decision based on a feature, splitting the data into subsets to predict the target variable. The leaves at the bottom of the tree indicate the final prediction classes. The color and labels in each node provide information about the majority class and the proportion of samples. Decision trees help us understand the decision-making process of the model, making it easier to interpret and explain the predictions."
        >
          <QuestionCircleOutlined />
        </Tooltip>
      </p>
      <Row justify={"space-around"}>
        <Col span={6}>
          <Form.Item<FieldType>
            label="Target"
            name="target"
            rules={[{ required: true, message: "Please select a target" }]}
          >
            <Select style={{ width: "100%" }} options={dynamiqueOptions} />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item<FieldType>
            label="Criterion"
            name="criterion"
            rules={[{ required: true, message: "Please select a criterion" }]}
          >
            <Select style={{ width: "100%" }} options={criterionOptions} />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item<FieldType>
            label="Max Depth"
            name="max_depth"
            rules={[{ required: true, message: "Please select a max depth" }]}
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

export default DecisionTreeVisualisationForm;
