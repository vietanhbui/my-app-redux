import { Table } from "antd";
import React, { useEffect, useState } from "react";
import provinceApi from "../../api/provinceApi";
import "./Province.css";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  }
];

function Province(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      let data = await provinceApi.getProvinceList();
      setData(data.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="header">Header</div>
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        rowKey={record => record.id}
      ></Table>
    </div>
  );
}

export default Province;
