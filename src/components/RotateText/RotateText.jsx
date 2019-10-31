/* eslint-disable no-return-assign */
import React, { useEffect, useState, useRef } from 'react';
import { splitClause, changeClause } from '../../utils/rotateText';
import './RotateText.scss';

const RotateText = ({ clauses, selectedWords }) => {
  const clausesRef = useRef([]);
  const [clausesArray, setClausesArray] = useState([]);
  const [currentClause, setClause] = useState(0);
  const [intervalId, setIntervalId] = useState();

  const mutateRef = useRef(null);
  mutateRef.current = {
    intervalId,
    currentClause,
    setClause,
    clausesArray
  };

  const changeNextClause = nextIndex => {
    if (mutateRef.current.currentClause !== nextIndex) {
      clearInterval(mutateRef.current.intervalId);
      setClause(
        changeClause(clausesRef.current.length, mutateRef.current, selectedWords, nextIndex)
      );
    }
    setIntervalId(
      setInterval(() => {
        setClause(changeClause(clausesRef.current.length, mutateRef.current, selectedWords));
      }, 3000)
    );
  };

  useEffect(() => {
    if (clausesRef.current[currentClause].childElementCount > 1) return;
    setClausesArray(
      clausesRef.current.map((item, i) => {
        item.style.opacity = i === 0 ? 1 : 0;
        return splitClause(item, selectedWords[currentClause]);
      })
    );

    changeNextClause(currentClause);

    // eslint-disable-next-line consistent-return
    return () => {
      clearInterval(mutateRef.current.intervalId);
    };
  }, [clauses]);

  const nextClause = () => {
    if (currentClause !== i) {
      changeNextClause(i);
    }
  };

  return (
    <>
      <div className="text">
        {clauses.map((clause, i) => (
          <p key={i} ref={el => (clausesRef.current[i] = el)} className="clause">
            {clause}
          </p>
        ))}
        <div className="dots">
          {clauses.map((clause, i) => (
            <div
              key={i}
              role="button"
              tabIndex="0"
              aria-label={`To slide ${i}`}
              onKeyDown={nextClause()}
              className={i === currentClause ? 'active dot' : 'dot'}
              onClick={nextClause()}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export { RotateText as default };
