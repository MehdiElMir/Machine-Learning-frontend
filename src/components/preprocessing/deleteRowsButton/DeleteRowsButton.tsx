import { App, Button, Popconfirm, PopconfirmProps, message } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { deletingRowsWithMissingValues } from "../../../store/slices/dataInfoSlice";

export const DeleteRowsButton: React.FC = () => {
  const {
    data: { dataset },
  } = useSelector((state: RootState) => state.dataInfo);
  const dispatch = useDispatch();
  const { notification } = App.useApp();

  const handleButton = () => {
    const requestData = {
      dataset: dataset,
    };
    console.log(requestData);
    dispatch(deletingRowsWithMissingValues(requestData));
    notification.success({
      message: `Notification topLeft`,
      description: "Hello, Ant Design!!",
      placement: "bottomRight",
    });
  };

  const confirm: PopconfirmProps["onConfirm"] = (e) => {
    handleButton();
  };

  const cancel: PopconfirmProps["onCancel"] = (e) => {};

  return (
    <Popconfirm
      title="Delete the rows"
      description="It is not recommanded when the number of rows is big. Do you want to proceed? "
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
    >
      <Button type="primary" block>
        Deleting rows with missing values
      </Button>
    </Popconfirm>
  );
};

export default DeleteRowsButton;
