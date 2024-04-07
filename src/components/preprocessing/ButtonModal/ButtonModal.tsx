import React, { useState } from "react";
import { Button, Modal } from "antd";
import PreviewTable from "../PreviewTable/PreviewTable";

const ButtonModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Preview of the dataset
      </Button>
      <Modal
        title="Modal 1000px width"
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
