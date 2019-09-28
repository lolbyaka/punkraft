class rotateText {
  constructor(
    r,
    currentClause,
    setClause,
    intervalId,
    setIntervalId,
    clauseArray,
    clasesRef
  ) {
    this.clauseArray = clauseArray;
    this.clausesRef = clasesRef;
    this.r = r;
    this.currentClause = currentClause;
    this.setClause = setClause;
    this.intervalId = intervalId;
    this.setIntervalId = setIntervalId;
    this.init(r, currentClause, setClause, intervalId, setIntervalId);
  }

  init = (r, currentClause, setClause, intervalId, setIntervalId) => {
    this.clauseArray = [];
    if (this.clausesRef.current[currentClause].childElementCount > 1) return;
    clearInterval(intervalId);
    for (var i = 0; i < this.clausesRef.current.length; i++) {
      this.clausesRef.current[i].style.opacity = 0;
      this.splitClause(this.clausesRef.current[i]);
    }

    this.clausesRef.current[currentClause].style.opacity = 1;

    const id = setInterval(() => {
      this.changeClause(this.clausesRef.current, r, setClause);
    }, 3000);
    setIntervalId(id);
  };

  changeClause = (clausesRef, r, setClause) => {
    var cc = this.clauseArray[r.current.currentClause];
    var nc =
      r.current.currentClause === clausesRef.length - 1
        ? this.clauseArray[0]
        : this.clauseArray[r.current.currentClause + 1];
    for (var i = 0; i < cc.length; i++) {
      this.animateWordOut(cc, i);
    }

    for (let i = 0; i < nc.length; i++) {
      nc[i].className = "word behind";
      nc[0].parentElement.style.opacity = 1;
      this.animateWordIn(nc, i);
    }

    setClause(curClause => {
      return curClause === this.clauseArray.length - 1 ? 0 : curClause + 1;
    });
  };

  animateWordOut = (cc, i) => {
    setTimeout(function() {
      cc[i].className = "word out";
    }, i * 40);
  };

  animateWordIn = (nc, i) => {
    setTimeout(function() {
      nc[i].className = "word in";
    }, 340 + i * 40);
  };

  splitClause = clause => {
    var content = clause.innerHTML;
    clause.innerHTML = "";
    var words = [];
    for (var i = 0; i < content.split(" ").length; i++) {
      var word = document.createElement("span");
      word.className = "word";
      word.innerHTML = content.split(" ")[i];
      clause.appendChild(word);
      words.push(word);
    }

    this.clauseArray.push(words);
  };
}

export { rotateText as default };
