import React from "react";
import App from "./App";

it("renders without crashing", () => {
  const renderMock = jest.fn();
  jest.doMock("react-dom", () => ({ render: renderMock }));

  const div = document.createElement("div");
  div.id = "root";
  document.body.appendChild(div);

  require("./index.tsx");
  expect(renderMock).toHaveBeenCalledWith(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    div
  );
});
