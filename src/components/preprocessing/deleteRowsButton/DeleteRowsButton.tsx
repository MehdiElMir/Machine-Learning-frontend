import { Button, Popconfirm, PopconfirmProps } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { deletingRowsWithMissingValues } from "../../../store/slices/dataInfoSlice";

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
      description="It is not recommanded when the number of rows is big. Do you want to proceed? "
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
    >
      <Button type="primary">Deleting Rows</Button>
    </Popconfirm>
  );
};

export default DeleteRowsButton;
