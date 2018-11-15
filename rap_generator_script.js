let RapperNames = {
  FirstName: [
    "Lil",
    "ASAP",
    "Young",
    "Money",
    "Notorious",
    "Murder",
    "Eazy",
    "Lambo",
    "Killa",
    "Criminal",
    "Janky",
    "Da Real",
    "Big",
    "Milly",
    "Crae",
    "Lyrical",
    "Crazy",
    "Vanilla",
    "Ice",
    "YBN",
    "Wu-Tang",
    "Green",
    "Cool",
    "Dope",
    "Xan",
    "Cardi"
  ],
  LastName: [
    "Thots",
    "Thoughts",
    "Gang",
    "JR",
    "Yachty",
    "Crew",
    "Boyz",
    "Eastside",
    "Kush",
    "Uzi",
    "Zombies",
    "Muzic",
    "Town",
    "High",
    "Ace",
    "Starr",
    "G",
    "Side",
    "Thug",
    "Massive",
    "Style",
    "Clan",
    "Mob",
    "Technique",
    "Inc.",
    "Faded",
    "Boi",
    "Dogg"
  ]
};

let firstName = RapperNames.FirstName;
let lastName = RapperNames.LastName;

// let breedList = sortObj(data)
let fnList = sortObjFN(firstName);
let lnList = sortObjLN(lastName);

function sortObjFN(data) {
  let result = [];
  for (let i = 0; i < RapperNames.FirstName.length; i++) {
    result.push(data[i]);
    console.log(data[0].length);
  }
  return result;
}

function sortObjLN(data) {
  let result = [];
  for (let i = 0; i < RapperNames.LastName.length; i++) {
    result.push(data[i]);
    console.log(data[0].length);
  }
  return result;
}
console.log(fnList);
console.log(lnList);


document.addEventListener("DOMContentLoaded", event => {
  let button = document.querySelector(".generate-breed-button");
  let breedDisplay = document.querySelector(".dog-breed");

  button.addEventListener("click", event => {
    function randomBreedGeneratorfn(num) {
      return Math.floor(Math.random() * fnList.length);
    }

    function randomBreedGeneratorln(num) {
      return Math.floor(Math.random() * lnList.length);
    }

    //  function capitalizeBreed(str) {
    //    let capped = "";
    //    for(var i = 0 ; i < str.length - 1 ; i++){
    //     capped += str[i].toUpperCase();
    // }

    //    const capitalizeBreed = (str) => {
    //   return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    // };
    breedDisplay.innerText =
      fnList[randomBreedGeneratorfn(fnList.length)] +
      " " +
      lnList[randomBreedGeneratorln(lnList.length)];
    // breedList[randomBreedGenerator(fnList.length)]
    button.innerHTML = "Another One!";
  });
});
