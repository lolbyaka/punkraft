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
  nextClause
) => {
  var cc = clauseArray[currentClause];

  let isN = nextClause === 0 ? true : false;
  var nc =
    currentClause === clausesLenght - 1
      ? clauseArray[0]
      : clauseArray[currentClause + 1];
  if (isN && nextClause) {
    nc = clauseArray[nextClause];
  }

  for (var i = 0; i < cc.length; i++) {
    animateWord(cc[i], selectedWords[currentClause], "out", i * 40);
  }

  for (let i = 0; i < nc.length; i++) {
    nc[i].className = selectedWords[
      nextClause ? nextClause : currentClause
    ].includes(nc[i].textContent)
      ? "word behind accent"
      : "word behind";
    nc[0].parentElement.style.opacity = 1;
    animateWord(
      nc[i],
      selectedWords[
        nextClause
          ? nextClause
          : currentClause !== clausesLenght - 1
          ? currentClause + 1
          : 0
      ],
      "in",
      340 + i * 40
    );
  }

  setClause(curClause => {
    if (isN) {
      return nextClause;
    } else {
      return nextClause
        ? nextClause
        : curClause === clauseArray.length - 1
        ? 0
        : curClause + 1;
    }
  });
};
