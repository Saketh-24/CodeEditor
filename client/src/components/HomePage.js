import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [roomId, setroomId] = useState("");
  const [username, setusername] = useState("");
  const navigate = useNavigate();

  const generateUUID = (e) => {
    e.preventDefault();
    const id = uuid();
    setroomId(id);
    toast.success("Room Id created Successfully");
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("RoomId and Username Required");
      return;
    }

    navigate(`/editor/${roomId}`, {
      state: { username },
    });
    toast.success("Room is Created");
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-12 col-md-6">
          <div className="card shadow-sm p-2 mb-5 bg-secondary rounded">
            <div className="card-body text-center bg-dark">
              <img
                className="img-fluid mx-auto d-block mb-3"
                src="/images/logo.png"
                alt="appLogo"
                style={{ maxWidth: "150px" }}
              />
              <h3 className="text-light">Enter the Details</h3>
              <div className="form-group">
                <input
                  value={roomId}
                  onChange={(e) => setroomId(e.target.value)}
                  type="text"
                  className="form-control mb-2"
                  placeholder="Room Id"
                />
              </div>
              <div>
                <input
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                  type="text"
                  className="form-control mb-2"
                  placeholder="UserName"
                />
              </div>
              <button
                onClick={joinRoom}
                className="btn btn-success btn-lg btn-block"
              >
                Join
              </button>
              <p className="mt-3 text-light">
                Dont have a room Id?
                <span
                  className="text-success p-2"
                  style={{ cursor: "pointer" }}
                  onClick={generateUUID}
                >
                  New Room
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
