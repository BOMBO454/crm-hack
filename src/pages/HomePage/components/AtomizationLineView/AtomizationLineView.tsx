import React from "react";
import ReactFlow from "react-flow-renderer";
import { ReactComponent as Add } from "../../../../images/icons/add.svg";
import IconButton from "../../../../components/IconButton/IconButton";
import AutoFlow from "../AutoFlow/AutoFlow";
import {
  HeaderBar,
  OrderBody,
  AtomizationLineWrapper,
  RightSide,
  LeftSide,
} from "./styled";

const AtomizationLineView: React.FC = () => {
  return (
    <AtomizationLineWrapper>
      <HeaderBar>
        <h2>Редактировать цепочки автоматизации</h2>
        <IconButton>
          <Add />
        </IconButton>
      </HeaderBar>
      <OrderBody>
        <LeftSide>
          <AutoFlow />
        </LeftSide>
        <RightSide>fsdf</RightSide>
      </OrderBody>
    </AtomizationLineWrapper>
  );
};

export default AtomizationLineView;
