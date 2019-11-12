export const animateWord = (
  clause,
  selectedWords,
  animationType,
  timings,
) => {
  setTimeout(() => {
    clause.className = selectedWords.includes(clause.textContent)
      ? `word ${animationType} accent`
      : `word ${animationType}`;
  }, timings);
};

export const splitClause = (clause, selectedWords) => {
  const content = clause.innerHTML;
  clause.innerHTML = '';
  return content.split(' ').map(item => {
    const word = document.createElement('span');
    word.className = selectedWords.includes(item)
      ? 'word accent'
      : 'word';
    word.innerHTML = item;
    clause.appendChild(word);
    return word;
  });
};

export const changeClause = (
  clausesLenght,
  { clausesArray, currentClause },
  selectedWords,
  nextIndex,
) => {
  let clauseIndex;
  if (nextIndex >= 0) {
    clauseIndex = nextIndex;
  } else if (currentClause === clausesLenght - 1) {
    clauseIndex = 0;
  } else {
    clauseIndex = currentClause + 1;
  }
  const currentClauseArray = clausesArray[currentClause];
  const nextClauseArray = clausesArray[clauseIndex];

  currentClauseArray.forEach((word, i) => {
    animateWord(word, selectedWords[currentClause], 'out', i * 40);
  });

  nextClauseArray.forEach((word, i) => {
    word.className = selectedWords[currentClause].includes(
      word.textContent,
    )
      ? 'word behind accent'
      : 'word behind';
    word.parentElement.style.opacity = 1;
    animateWord(word, selectedWords[clauseIndex], 'in', 340 + i * 40);
  });

  return clauseIndex;
};
