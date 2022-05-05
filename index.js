const Calculate = {
    factorial(anInput) {
      if (anInput === 0) {
        return 1;
      }
      let sum = anInput;
  
      for (let i = anInput - 1; i > 0; i--) {
        sum *= i;
      }
  
      return sum;
    }
}
  
module.exports = Calculate;  