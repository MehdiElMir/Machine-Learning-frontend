import * as S from "./Upload.styles";
import React from "react";
import { CloudUploadOutlined } from "@ant-design/icons";
import { Button, Form, message, Upload, UploadProps } from "antd";
import { Link } from "react-router-dom";

function UploadPage() {
  const { Dragger } = Upload;
  const [form] = Form.useForm();

  const props: UploadProps = {
    name: "file",
    method: "POST",
    multiple: true,

    beforeUpload: (file) => {
      message.success(`${file.name} file added successfully.`);
      console.log({ file });
      return false;
    },
    accept: ".csv",

    progress: {
      strokeWidth: 4,
      strokeColor: {
        "0%": "#11b8fc",
        "100%": "#6047ed",
      },
    },
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <S.Main>
      <img
        src="/assets/logo.png"
        alt="logo image"
        style={{ width: "60px", height: "auto" }}
      />
      <S.Title>
        File to Insights: Harnessing Machine Learning for Your Data
      </S.Title>

      <S.DraggerWrapper>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <CloudUploadOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
          </p>
        </Dragger>
      </S.DraggerWrapper>

      <Link type="primary" to={"/app/preprocessing"}>
        Start
      </Link>
    </S.Main>
  );
}

export default UploadPage;
