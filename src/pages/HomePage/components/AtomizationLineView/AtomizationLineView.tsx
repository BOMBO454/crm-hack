import React from "react";
import ReactFlow from "react-flow-renderer";
import { ReactComponent as Add } from "../../../../images/icons/add.svg";
import IconButton from "../../../../components/IconButton/IconButton";
import AutoFlow from "../AutoFlow/AutoFlow";
import Event from "../../../../components/Events/Event";
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
        <RightSide>
          <h2>События</h2>
          <Event>Звонок клиета</Event>
          <Event>Жалоба</Event>
          <Event>Заявка</Event>
          <h2>Развилки</h2>
        </RightSide>
      </OrderBody>
    </AtomizationLineWrapper>
  );
};

export default AtomizationLineView;
