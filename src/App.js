import React, { useState, useEffect } from "react";
import { hitApi } from "./apis/api";
import axios from "axios";
import { getReq } from "./apis/axiosInstance";

function App() {
  const [fetchRes, setFetchRes] = useState("");
  const [axiosRes, setAxiosRes] = useState("");
  const [fetchClick, setFetchClick] = useState("");
  const [axiosClick, setAxiosClick] = useState("");

  useEffect(() => {
    setFetchRes("fetch request created");
    hitApi().then((res) => {
      setFetchRes(res);
    });
  }, [fetchClick]);

  useEffect(() => {
    setAxiosRes("axios request created");
    getReq().then((res) => {
      setAxiosRes(res);
    });
  }, [axiosClick]);

  return (
    <div className="App">
      <div>
        <p>This is usig fetch</p>
        <p>The response is = {JSON.stringify(fetchRes)}</p>
        <button type="button" onClick={() => setFetchClick(!fetchClick)}>
          Create Request
        </button>
      </div>
      <div>
        <p>This is usig Axios</p>
        <p>The response is = {JSON.stringify(axiosRes)}</p>
        <button type="button" onClick={() => setAxiosClick(!axiosClick)}>
          Create Axios Request
        </button>
      </div>
    </div>
  );
}

export default App;
