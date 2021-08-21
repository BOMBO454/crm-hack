/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from "react";
import ReactFlow, { removeElements, addEdge } from "react-flow-renderer";

const initialElements = [
  {
    id: "1",
    type: "input",
    data: { label: "Звонок клиента" },
    position: { x: 250, y: 25 },
  },
  // default node
  {
    id: "2",
    data: { label: <div>Создать запись в журнале</div> },
    position: { x: 100, y: 125 },
  },
  {
    id: "3",
    data: { label: "Закрыть заявку" },
    position: { x: 250, y: 250 },
  },
  // animated edge
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e2-3", source: "2", target: "3", animated: true },
];
const AutoFlow: React.FC = () => {
  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = elementsToRemove => {
    // @ts-ignore
    setElements(els => removeElements(elementsToRemove, els));
  };
  // @ts-ignore
  const onConnect = params => setElements(els => addEdge(params, els));
  return (
    <ReactFlow
      elements={elements}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      deleteKeyCode={46} /* 'delete'-key */
    />
  );
};

export default AutoFlow;
