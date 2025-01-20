const bankAccountFactory = (num) => {
  return {
    checkBalance() {
      if (!num) return 0
      return num
    },
    add(inc) {
      /** FEEDBACK: Because of the keyword let, you are essentially creating a new variable. If we are creating a new variable is our num being altered?
       * Should we be altering our original number when adding on to it?
       */
      num += inc
      console.log(`$${inc} added.`)
    },
    subtract(dec) {
      num -= dec
      console.log(`$${dec} subtracted.`)
    }
  }
};
//my fundamentals are wackkkkk, i need to study fr

module.exports = {
  bankAccountFactory,
};
