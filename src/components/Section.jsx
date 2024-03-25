import { useState } from "react";
export default function Section() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <>
      <div className="container">
        <div className="center">
          <div className="bn">
            <button
              className="btn1"
              onClick={() => {
                setSwitch1(false);
                setSwitch2(false);
                setSwitch3(false);
              }}
            >
              Stopped
            </button>
          </div>
          <div className="on">
            <div>
              <button
                className={switch1 ? "active" : "inactive"}
                onClick={() => {
                  setSwitch1(true);
                }}
              >
                ON
              </button>
            </div>
            <div>
              <button
                className={switch2 ? "active" : "inactive"}
                onClick={() => {
                  setSwitch2(true);
                }}
              >
                ON{" "}
              </button>
            </div>
            <div>
              <button
                className={switch3 ? "active" : "inactive"}
                onClick={() => {
                  setSwitch3(true);
                }}
              >
                ON
              </button>
            </div>
          </div>
          <div className="off">
            <div>
              <button
                className={!switch1 ? "active" : "inactive"}
                onClick={() => {
                  setSwitch1(false);
                }}
              >
                OFF
              </button>
            </div>
            <div>
              <button
                className={!switch2 ? "active" : "inactive"}
                onClick={() => {
                  setSwitch2(false);
                }}
              >
                OFF
              </button>
            </div>
            <div>
              <button
                className={!switch3 ? "active" : "inactive"}
                onClick={() => {
                  setSwitch3(false);
                }}
              >
                OFF
              </button>
            </div>
          </div>
          <div>
            {switch1 === true && switch2 === true && switch3 === true ? (
              <div className="button go">GO ! </div>
            ) : (
              <div className="button go1">NO WAY !</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
