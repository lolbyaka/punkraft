class rotateText {
  constructor(
    r,
    currentClause,
    setClause,
    intervalId,
    setIntervalId,
    clauseArray,
    clasesRef,
    selectedWords
  ) {
    this.clauseArray = clauseArray;
    this.clausesRef = clasesRef;
    this.r = r;
    this.currentClause = currentClause;
    this.setClause = setClause;
    this.intervalId = intervalId;
    this.setIntervalId = setIntervalId;
    this.selectedWords = selectedWords;
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
      nc[i].className = this.selectedWords[r.current.currentClause].includes(
        nc[i].textContent
      )
        ? "word behind accent"
        : "word behind";
      //nc[i].className = "word behind";
      nc[0].parentElement.style.opacity = 1;
      this.animateWordIn(nc, i);
    }

    setClause(curClause => {
      return curClause === this.clauseArray.length - 1 ? 0 : curClause + 1;
    });
  };

  animateWordOut = (cc, i) => {
    const vm = this;
    setTimeout(function() {
      let switchIndex = 0;
      if (
        vm.r.current.currentClause - 1 !== vm.clauseArray.length &&
        vm.r.current.currentClause !== 0
      ) {
        switchIndex = vm.r.current.currentClause - 1;
      } else if (vm.r.current.currentClause === 0) {
        switchIndex = vm.clauseArray.length - 1;
      } else {
        switchIndex = 0;
      }
      cc[i].className = vm.selectedWords[switchIndex].includes(
        cc[i].textContent
      )
        ? "word out accent"
        : "word out";
    }, i * 40);
  };

  animateWordIn = (nc, i) => {
    const vm = this;
    setTimeout(function() {
      nc[i].className = vm.selectedWords[vm.r.current.currentClause].includes(
        nc[i].textContent
      )
        ? "word in accent"
        : "word in";
    }, 340 + i * 40);
  };

  splitClause = clause => {
    var content = clause.innerHTML;
    clause.innerHTML = "";
    var words = [];
    for (var i = 0; i < content.split(" ").length; i++) {
      var word = document.createElement("span");
      var text = content.split(" ")[i];

      word.className = this.selectedWords[
        this.r.current.currentClause
      ].includes(text)
        ? "word accent"
        : "word";
      word.innerHTML = text;
      clause.appendChild(word);
      words.push(word);
    }

    this.clauseArray.push(words);
  };
}

export { rotateText as default };
