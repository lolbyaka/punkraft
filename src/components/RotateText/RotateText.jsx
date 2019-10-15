import React, { useEffect, useState, useRef } from "react";
import { splitClause, changeClause } from "../../utils/rotateText";
import "./RotateText.scss";

export const RotateText = ({ clauses, selectedWords }) => {
  const clausesRef = useRef([]);
  const [clauseArray, setClauseArray] = useState([]);
  const [currentClause, setClause] = useState(0);
  const [intervalId, setIntervalId] = useState();

  const mutateRef = useRef(null);
  mutateRef.current = {
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

    changeNextClause(currentClause);

    return () => {
      clearInterval(mutateRef.current.intervalId);
    };
  }, [clauses]);

  const changeNextClause = nextIndex => {
    if (mutateRef.current.currentClause !== nextIndex) {
      clearInterval(mutateRef.current.intervalId);
      setClause(
        changeClause(
          clausesRef.current.length,
          mutateRef.current,
          selectedWords,
          nextIndex
        )
      );
    }
    setIntervalId(
      setInterval(() => {
        setClause(
          changeClause(
            clausesRef.current.length,
            mutateRef.current,
            selectedWords
          )
        );
      }, 3000)
    );
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
              className={i === currentClause ? "active dot" : "dot"}
              onClick={e => {
                currentClause !== i && changeNextClause(i);
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};
