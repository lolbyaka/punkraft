import React, { useEffect, useState, useRef } from "react";
import { splitClause, changeClause } from "../../utils/rotateText";
import "./RotateText.scss";

export const RotateText = ({ clauses, selectedWords }) => {
  const clausesRef = useRef([]);
  const [clauseArray, setClauseArray] = useState([]);
  const [currentClause, setClause] = useState(0);
  const [intervalId, setIntervalId] = useState();
  const [prevClause, setPrevClause] = useState(0);

  const r = useRef(null);
  r.current = {
    intervalId,
    currentClause,
    setClause,
    prevClause,
    setPrevClause,
    clauseArray
  };

  useEffect(() => {
    setClauseArray([]);
    if (clausesRef.current[currentClause].childElementCount > 1) return;
    setClauseArray(
      clausesRef.current.map((item, i) => {
        item.style.opacity = 0;
        const words = splitClause(item, selectedWords[currentClause]);
        return words;
      })
    );
    for (var i = 0; i < clausesRef.current.length; i++) {}

    clausesRef.current[currentClause].style.opacity = 1;

    const id = setInterval(() => {
      changeClause(
        clausesRef.current.length,
        r.current.currentClause,
        setClause,
        r.current.clauseArray,
        selectedWords,
        r.current.prevClause,
        setPrevClause
      );
    }, 3000);
    setIntervalId(id);

    return () => {
      clearInterval(r.current.intervalId);
    };
  }, [clauses]);

  const changeNextClause = nextIndex => {
    if (r.current.currentClause !== nextIndex) {
      clearInterval(r.current.intervalId);
      changeClause(
        clausesRef.current.length,
        r.current.currentClause,
        setClause,
        r.current.clauseArray,
        selectedWords,
        r.current.prevClause,
        setPrevClause,
        nextIndex
      );
      const id = setInterval(() => {
        changeClause(
          clausesRef.current.length,
          r.current.currentClause,
          setClause,
          r.current.clauseArray,
          selectedWords,
          r.current.prevClause,
          setPrevClause
        );
      }, 3000);
      setIntervalId(id);
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
