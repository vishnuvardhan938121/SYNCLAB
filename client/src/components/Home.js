import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Home() {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const generateRoomId = (e) => {
    e.preventDefault();
    const Id = uuid();
    setRoomId(Id);
    toast.success("Room Id is generated");
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("Both the fields are required");
      return;
    }

    navigate(`/editor/${roomId}`, {
      state: { username },
    });
    toast.success("Room is created");
  };

  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  return (
    <div
      className="container-fluid d-flex flex-column"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5dc", 
        padding: "0",
      }}
    >
      {/* Banner Section */}
      <div
        className="text-center text-light py-5"
        style={{
          background: "linear-gradient(135deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FCAF45)",
          backgroundSize: "cover",
        }}
      >
        <h1 style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>SyncLab</h1>
        <p style={{ maxWidth: "700px", margin: "0 auto", fontSize: "1.1rem" }}>
          A modern <b>code collaboration</b> and <b>compilation</b> platform.  
          Create a room, invite others, and start coding together live in real-time.
        </p>
      </div>

      {/* Info Cards */}
      <div className="row my-5 justify-content-center px-3">
        <div className="col-md-3 mb-3">
          <div className="card shadow-lg h-100 text-center">
            <div className="card-body">
              <h4 className="card-title">💻 Collaborative Coding</h4>
              <p className="card-text text-muted">
                Work together in real-time with peers. Multiple users can join
                the same room and code live seamlessly.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card shadow-lg h-100 text-center">
            <div className="card-body">
              <h4 className="card-title">⚡ Instant Compilation</h4>
              <p className="card-text text-muted">
                Write, compile, and execute code instantly in your browser with
                support for multiple programming languages.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card shadow-lg h-100 text-center">
            <div className="card-body">
              <h4 className="card-title">🎯 Perfect for Students</h4>
              <p className="card-text text-muted">
                Great for learning, pair programming, and technical interviews.
                Boosts collaboration and coding efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Join Room Form */}
      <div className="row justify-content-center align-items-center w-100 mb-5 px-3">
        <div className="col-12 col-md-6">
          <div
            className="card shadow-lg p-4 rounded"
            style={{
              backgroundColor: "#000000",
              border: "2px solid #fff",
            }}
          >
            <div className="card-body text-center text-light">
              <img
                src="/images/synclab1.jpg"
                alt="Logo"
                className="img-fluid mx-auto d-block mb-3"
                style={{ maxWidth: "200px" }}
              />
              <h4 className="card-title mb-4">Enter the ROOM ID</h4>

              <div className="form-group">
                <input
                  type="text"
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  className="form-control mb-2"
                  placeholder="ROOM ID"
                  onKeyUp={handleInputEnter}
                  style={{
                    backgroundColor: "#111",
                    color: "#fff",
                    border: "1px solid #444",
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control mb-2"
                  placeholder="USERNAME"
                  onKeyUp={handleInputEnter}
                  style={{
                    backgroundColor: "#111",
                    color: "#fff",
                    border: "1px solid #444",
                  }}
                />
              </div>
              <button
                onClick={joinRoom}
                className="btn btn-success btn-lg btn-block"
              >
                JOIN
              </button>
              <p className="mt-3 text-light">
                Don't have a room ID? create{" "}
                <span
                  onClick={generateRoomId}
                  className="text-success p-2"
                  style={{ cursor: "pointer" }}
                >
                  New Room
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-auto py-3 bg-dark text-light">
        <p className="mb-0">🚀 Built with ❤️ by <b>Vishnu Vardhan</b></p>
      </footer>
    </div>
  );
}

export default Home;
