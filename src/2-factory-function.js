const bankAccountFactory = (num) => {
  return {
    checkBalance() {
      if (!num) return 0
      return num
    },
    add(inc) {
      let result = num += inc
      console.log(`$${result} added.`)
    },
    subtract(dec) {
      let result = num -= dec
      console.log(`$${result} subtracted.`)
    }
  }
};
//my fundamentals are wackkkkk, i need to study fr

module.exports = {
  bankAccountFactory,
};
