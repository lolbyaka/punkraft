export const animateWord = (clause, selectedWords, animationType, timings) => {
  setTimeout(() => {
    clause.className = selectedWords.includes(clause.textContent)
      ? `word ${animationType} accent`
      : `word ${animationType}`;
  }, timings);
};

export const splitClause = (clause, selectedWords) => {
  var content = clause.innerHTML;
  clause.innerHTML = "";
  return content.split(" ").map((item, i) => {
    var word = document.createElement("span");
    word.className = selectedWords.includes(item) ? "word accent" : "word";
    word.innerHTML = item;
    clause.appendChild(word);
    return word;
  });
};

export const changeClause = (
  clausesLenght,
  currentClause,
  setClause,
  clauseArray,
  selectedWords,
  nextIndex
) => {
  const clauseIndex =
    nextIndex >= 0
      ? nextIndex
      : currentClause === clausesLenght - 1
      ? 0
      : currentClause + 1;
  const cc = clauseArray[currentClause];
  const nc = clauseArray[clauseIndex];

  cc.map((item, i) => {
    animateWord(item, selectedWords[currentClause], "out", i * 40);
  });

  nc.map((item, i) => {
    item.className = selectedWords[currentClause].includes(item.textContent)
      ? "word behind accent"
      : "word behind";
    item.parentElement.style.opacity = 1;
    animateWord(item, selectedWords[clauseIndex], "in", 340 + i * 40);
  });

  setClause(clauseIndex);
};
