/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from "react";
import Client from "../Client";
import EditorWorkSpace from "./EditorWorkSpace";
import { initSocket } from "../socket";

const EditorPage = () => {
  const socketRef = useRef(null);
  useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();
    };
    init();
  }, []);
  const [clients, setClients] = useState([
    {
      socketId: 1,
      username: "Saketh",
    },
    {
      socketId: 2,
      username: "Tarun",
    },
  ]);
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div
          className="col-md-2 bg-dark text-light d-flex flex-column h-100"
          style={{ boxShadow: "2px 0px 4px rgba(0,0,0,0.1)" }}
        >
          <img
            className="img-fluid mx-auto"
            src="/images/logo.png"
            alt="logo"
            style={{ maxWidth: "150px", marginTop: "0px" }}
          />
          <hr style={{ marginTop: "1rem" }} />
          <div className="d-flex flex-column overflow-auto">
            {clients.map((client) => (
              <Client key={client.socketId} username={client.username} />
            ))}
          </div>
          <div className="mt-auto">
            <hr style={{ marginTop: "1rem" }} />
            <button className="btn btn-success">Copy Room ID</button>
            <button className="btn btn-danger mt-2 mb-2 px-3 btn-block">
              Leave Room
            </button>
          </div>
        </div>
        <div className="col-md-10 text-light d-flex flex-column h-100">
          <EditorWorkSpace />
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
