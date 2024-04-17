import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
interface Column {
  title: string;
  dataIndex: string;
  render: (value: any) => JSX.Element;
}

const PreviewTable: React.FC = () => {
  const {
    data: { dataset },
  } = useSelector((state: RootState) => state.dataInfo);

  const [columns, setColumns] = useState<Column[]>([]);
  const [dataSource, setDataSource] = useState<any[]>([]);

  useEffect(() => {
    const firstItem = dataset[0] || [];
    const cols: Column[] = Object.keys(firstItem).map((key) => ({
      title: key,
      dataIndex: key,
      render: (value: any) => <span>{String(value)}</span>,
    }));
    setColumns(cols);
    setDataSource(dataset);
  }, [dataset]);

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      size="small"
      scroll={{ y: 560, x: 1300 }}
    />
  );
};

export default PreviewTable;
