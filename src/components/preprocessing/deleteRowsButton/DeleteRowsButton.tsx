import { App, Button, Popconfirm, PopconfirmProps, message } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { deletingRowsWithMissingValues } from "../../../store/slices/dataInfoSlice";
import { DeleteFilled } from "@ant-design/icons";

export const DeleteRowsButton: React.FC = () => {
  const {
    data: { dataset },
  } = useSelector((state: RootState) => state.dataInfo);
  const dispatch = useDispatch();

  const handleButton = () => {
    const requestData = {
      dataset: dataset,
    };
    console.log(requestData);
    dispatch(deletingRowsWithMissingValues(requestData));
  };

  const confirm: PopconfirmProps["onConfirm"] = (e) => {
    handleButton();
  };

  const cancel: PopconfirmProps["onCancel"] = (e) => {};

  return (
    <Popconfirm
      title="Delete the rows"
      description="It is not recommanded for model training when the number of rows with missing values is too big as it will impact the results! Do you want to proceed? "
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
      overlayStyle={{ width: 300 }}
    >
      <Button
        icon={<DeleteFilled />}
        type="primary"
        style={{ border: "2px solid" }}
        block
        danger
      >
        Deleting rows with missing values
      </Button>
    </Popconfirm>
  );
};

export default DeleteRowsButton;
