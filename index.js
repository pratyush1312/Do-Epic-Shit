//generate random numbers between 1 to 99999
//const randomNumber = Math.floor(Math.random() * 99999999999 + 1);

document
  .querySelector(".generateButton")
  .addEventListener("click", function () {
    // let randomNumber = Math.random().toString(36).substring(7);
    let randomNumber = Math.floor(Math.random() * (262 - 8 + 1) + 8);
    let valueInput = (document.querySelector(".guess").value = randomNumber);
    let para = (document.getElementById(
      "page"
    ).innerHTML = `Start Reading Page ${randomNumber} 📖`);
  });
