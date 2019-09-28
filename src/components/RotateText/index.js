import React, { useEffect, useState, useRef } from "react";
import rotateText from "../../utils/rotateText";
import "./rotateText.scss";

export const RotateText = props => {
  var clauseArray = [];
  const clausesRef = useRef([]);
  const [currentClause, setClause] = useState(0);
  const [intervalId, setIntervalId] = useState();

  const r = useRef(null); // TODO: fix setInterval hooks in better way (add useInterval hook)
  r.current = { currentClause, setClause };

  useEffect(() => {
    const rotateTextEl = new rotateText(
      r,
      currentClause,
      setClause,
      intervalId,
      setIntervalId,
      clauseArray,
      clausesRef
    );
  }, [props.clauses]);

  return (
    <div className="text">
      {props.clauses.map((clause, i) => (
        <p key={i} ref={el => (clausesRef.current[i] = el)} className="clause">
          {clause}
        </p>
      ))}
    </div>
  );
};
