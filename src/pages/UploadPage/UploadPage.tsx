import * as S from "./Upload.styles";
import React from "react";
import { CloudUploadOutlined } from "@ant-design/icons";
import { Button, Form, message, notification, Upload, UploadProps } from "antd";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { uploadFile } from "../../store/slices/dataInfoSlice";
import { notificationController } from "../../controllers/notificationController";

function UploadPage() {
  const { Dragger } = Upload;
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state: RootState) => state.dataInfo);
  console.log(loading);
  const props: UploadProps = {
    name: "file",
    method: "POST",
    multiple: false,
    beforeUpload: (file) => {
      console.log({ file });
      const formData = new FormData();
      formData.append("file", file);
      console.log(formData);
      dispatch(uploadFile(formData))
        .then(() => {
          notificationController.success({
            message: `${file.name} file uploaded successfully.`,
          });
          navigate("/app/preprocessing");
        })
        .catch((error: any) => {
          console.error("Error uploading file:", error);
        });
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
    <>
      <S.Main>
        <img
          src={logo}
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
      </S.Main>
    </>
  );
}

export default UploadPage;
