import React, { useState } from "react";
import { Button, Modal } from "antd";
import PreviewTable from "../PreviewTable/PreviewTable";
import { EyeFilled } from "@ant-design/icons";

const ButtonModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        style={{
          marginRight: "1rem",
          width: "8rem",
          backgroundColor: "#5c7bd9",
        }}
        icon={<EyeFilled />}
        type="primary"
        onClick={() => setOpen(true)}
      >
        Preview
      </Button>
      <Modal
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <PreviewTable />
      </Modal>
    </>
  );
};

export default ButtonModal;
