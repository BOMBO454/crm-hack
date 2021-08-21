import React from "react";
import { Handle, Position } from "react-flow-renderer";
import { EventWrapper } from "./styled";

export const EventNode = ({ data }) => {
  return (
    <EventWrapper>
      <Handle type="source" position={Position.Bottom} id={data.id} />
      <div>{data.label}</div>
    </EventWrapper>
  );
};
const Event: React.FC = ({ children }) => {
  return <EventWrapper>{children}</EventWrapper>;
};

export default Event;
