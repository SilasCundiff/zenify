// Allows for logging objects inside of an infinite loop without overloading the console

let logLimited = false;

const logLimiter = (message, clear = false) => {
  if (!logLimited) {
    if (clear) {
      console.clear();
    }
    if (message) {
      console.log(`Logging${message}`, message);
    }
  }
  logLimited = true;
};

export { logLimiter };
