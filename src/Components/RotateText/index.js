import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { splitClause, changeClause } from '../../utils/rotateText';
import './styles.scss';

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
    clausesArray,
  };

  const changeNextClause = nextIndex => {
    if (mutateRef.current.currentClause !== nextIndex) {
      clearInterval(mutateRef.current.intervalId);
      setClause(
        changeClause(
          clausesRef.current.length,
          mutateRef.current,
          selectedWords,
          nextIndex,
        ),
      );
    }
    setIntervalId(
      setInterval(() => {
        setClause(
          changeClause(
            clausesRef.current.length,
            mutateRef.current,
            selectedWords,
          ),
        );
      }, 3000),
    );
    return 'ha!';
  };

  useEffect(() => {
    if (clausesRef.current[currentClause].childElementCount > 1)
      return;
    setClausesArray(
      clausesRef.current.map((item, i) => {
        const newItem = item;
        newItem.style.opacity = i === 0 ? 1 : 0;
        return splitClause(newItem, selectedWords[currentClause]);
      }),
    );

    changeNextClause(currentClause);

    // eslint-disable-next-line consistent-return
    return () => {
      clearInterval(mutateRef.current.intervalId);
    };
  }, [clauses]);

  return (
    <>
      <div className="text">
        {clauses.map((clause, i) => (
          <p
            key={i}
            ref={el => {
              clausesRef.current[i] = el;
              return null;
            }}
            className="clause"
          >
            {clause}
          </p>
        ))}
        <div className="dots">
          {clauses.map((clause, i) => (
            <div
              key={i}
              className={i === currentClause ? 'active dot' : 'dot'}
              onClick={() => {
                if (currentClause !== i) {
                  changeNextClause(i);
                }
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

RotateText.propTypes = {
  clauses: PropTypes.array.isRequired,
  selectedWords: PropTypes.array.isRequired,
};

export { RotateText as default };
