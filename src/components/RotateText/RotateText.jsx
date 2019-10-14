import React, { useEffect, useState, useRef } from "react";
import { splitClause, changeClause } from "../../utils/rotateText";
import "./RotateText.scss";

export const RotateText = ({ clauses, selectedWords }) => {
  const clausesRef = useRef([]);
  const [clauseArray, setClauseArray] = useState([]);
  const [currentClause, setClause] = useState(0);
  const [intervalId, setIntervalId] = useState();

  const r = useRef(null);
  r.current = {
    intervalId,
    currentClause,
    setClause,
    clauseArray
  };

  useEffect(() => {
    if (clausesRef.current[currentClause].childElementCount > 1) return;
    setClauseArray(
      clausesRef.current.map((item, i) => {
        item.style.opacity = i === 0 ? 1 : 0;
        return splitClause(item, selectedWords[currentClause]);
      })
    );

    changeClauseX();

    return () => {
      clearInterval(r.current.intervalId);
    };
  }, [clauses]);

  const changeClauseX = () => {
    setIntervalId(
      setInterval(() => {
        changeClause(
          clausesRef.current.length,
          r.current.currentClause,
          setClause,
          r.current.clauseArray,
          selectedWords
        );
      }, 3000)
    );
  };

  const changeNextClause = nextIndex => {
    if (r.current.currentClause !== nextIndex) {
      clearInterval(r.current.intervalId);
      changeClauseX();
    }
  };

  return (
    <>
      <div className="text">
        {clauses.map((clause, i) => (
          <p
            key={i}
            ref={el => (clausesRef.current[i] = el)}
            className="clause"
          >
            {clause}
          </p>
        ))}
        <div className="dots">
          {clauses.map((clause, i) => (
            <div
              key={i}
              className={i == currentClause ? "active dot" : "dot"}
              onClick={e => {
                changeNextClause(i);
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};
