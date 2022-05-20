import axios from "axios";
import React, { useEffect, useState } from "react";
import Info from "../Info/Info";

const Infos = () => {
  const [infos, setInfos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/apis/infos")
      .then((res) => {
        setInfos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container mx-auto">
      <div className="flex lg:flex-nowrap flex-wrap">
        {infos.map((info) => (
          <Info key={info._id} info={info} />
        ))}
      </div>
    </div>
  );
};

export default Infos;
