import React from "react";
import GridItem from "../GridItem/Index";
import * as C from "./styles";

const Grid = ({ itens, setItens }) => {
  const onDelete = (ID) => {
    console.log("ID do item a ser excluído:", ID); 
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    console.log("Nova lista de itens após exclusão:", newArray); 
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={40}>Descrição</C.Th>
          <C.Th width={40}>Valor</C.Th>
          <C.Th width={10} alignCenter>
            Tipo
          </C.Th>
          <C.Th width={10}></C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </C.Tbody>
    </C.Table>
  );
};

export default Grid;