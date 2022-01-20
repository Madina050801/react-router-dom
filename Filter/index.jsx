import React from "react";
import { navbar } from "../../utils/navbar";
import { useNavigate, useParams } from "react-router-dom";
import { Wrapper } from "./style";
// import { navbar } from "../../utils/navbar";

const Filter = (props) => {
  const params =useParams();
  console.log(props, params);
  // const navigate = useNavigate();
  return (
    <Wrapper>
      <h1>Filter {params?.id}</h1>
    </Wrapper>
  );
};

export default Filter;
