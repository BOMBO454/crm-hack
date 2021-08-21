import React from "react";
import { HeaderBar } from "./styled";

const Orders: React.FC = () => {
  return (
    <div>
      <HeaderBar>
        <li>Заказы</li>
        <li>Клиенты</li>
        <li>Склад</li>
        <li>Менеджеры</li>
        <li>Финансы</li>
      </HeaderBar>
    </div>
  );
};

export default Orders;
