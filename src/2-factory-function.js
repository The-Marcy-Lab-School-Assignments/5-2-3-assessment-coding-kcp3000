const bankAccountFactory = (num) => {
  return {
    checkBalance() {
      if (!num) return 0
      return num
    },
    add(inc) {
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
