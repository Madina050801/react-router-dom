import React from "react";
import { navbar } from "../../utils/navbar";
import { useNavigate, useParams } from "react-router-dom";
import { Wrapper } from "./style";

const History = (props) => {
  const params =useParams();
  console.log(props, params);
  const navigate = useNavigate();
  return (
    <Wrapper>
      <h1>History {params?.id}</h1>
    </Wrapper>
  );
};

export default History;
