import React from "react";
import { Jumbotron } from "./migration";
import ZiruiCheng from "../../assets/img/zirui_cheng.jpg";
import JiaxuanYou from "../../assets/img/jiaxuan_you.jpg";

const Logistics = () => {
  return (
    <Jumbotron id="logistics" className="m-0">
      <h2
        style={{
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        Logistics
      </h2>
      <div className="container row">
        <p style={{ marginTop: "0.5em", marginBottom: "0.5em" }}>
          <ul>
            <li>
              <b>Times</b>: 12:30 PM - 01:45 PM, Wednesday and Friday,
              08/26/2024 - 12/11/2024
            </li>
            <li>
              <b>Locations</b>: Urbana-Champaign Campus | Siebel Center for
              Computer Science | Room 1304
            </li>
            <li>
              <b>Course Materials</b>: Slides will be posted here before
              classes.
            </li>
            <li>
              <b>Office Hours</b>
              <ul>
                <li>Jiaxuan You: To be announced</li>
                <li>
                  Zirui Cheng: 11:00 AM - 12:00 PM, Tuesday and Thursday, Zoom
                  [link visible on Canvas]
                </li>
              </ul>
            </li>
            <li>
              <b>Communication</b>: Canvas
            </li>
          </ul>
        </p>
        <div className={`col-lg-6`} style={{ textAlign: "center" }}>
          <p
            className="lead text-center"
            style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
          >
            <b>Instructor</b>
          </p>
          <img
            className="border border-secondary rounded-circle"
            src={JiaxuanYou}
            alt="profilepicture"
            width={150}
            height={150}
            style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
          />
          <p
            className="lead text-center"
            style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
          >
            <a href="https://cs.stanford.edu/people/jiaxuan/"> Jiaxuan You</a>
          </p>
        </div>
        <div className={`col-lg-6`} style={{ textAlign: "center" }}>
          <p
            className="lead text-center"
            style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
          >
            <b>Assistant</b>
          </p>
          <img
            className="border border-secondary rounded-circle"
            src={ZiruiCheng}
            alt="profilepicture"
            width={150}
            height={150}
            style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
          />
          <p
            className="lead text-center"
            style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
          >
            <a href="https://chengzr01.github.io/">Zirui Cheng</a>
          </p>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Logistics;
