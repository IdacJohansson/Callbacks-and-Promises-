const checkNumber = () => {
  return new Promise(function (resolve, reject) {
    let number = 6;

    if (number % 2 === 0) {
      resolve("Promise resolved");
    } else {
      reject("Promise rejected");
    }
  });
};
checkNumber()
  .then((message) => console.log(message))
  .catch((error) => console.log("error " + error));
