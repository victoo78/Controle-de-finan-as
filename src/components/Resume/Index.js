import React from 'react';
import * as C from "./styles";
import ResumeItem from '../ResumeItem/Index';
import {
    FaArrowCircleUp,  
    FaArrowCircleDown,
    FaDollarSign
  } from "react-icons/fa";
  

  const Resume = ({ income, expense, total }) => {
    return (
      <C.Container>
        <ResumeItem title="Entradas" Icon={FaArrowCircleUp} value={income} />
        <ResumeItem title="Saidas" Icon={FaArrowCircleDown} value={expense} />
        <ResumeItem title="total" Icon={FaDollarSign} value={total} />
      </C.Container>
  );
}

export default Resume;
