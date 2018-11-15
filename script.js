let APIResponse = {"status":"success","message":{"affenpinscher":[],"african":[],"airedale":[],"akita":[],"appenzeller":[],"basenji":[],"beagle":[],"bluetick":[],"borzoi":[],"bouvier":[],"boxer":[],"brabancon":[],"briard":[],"bulldog":["boston","french"],"bullterrier":["staffordshire"],"cairn":[],"cattledog":["australian"],"chihuahua":[],"chow":[],"clumber":[],"cockapoo":[],"collie":["border"],"coonhound":[],"corgi":["cardigan"],"cotondetulear":[],"dachshund":[],"dalmatian":[],"dane":["great"],"deerhound":["scottish"],"dhole":[],"dingo":[],"doberman":[],"elkhound":["norwegian"],"entlebucher":[],"eskimo":[],"frise":["bichon"],"germanshepherd":[],"greyhound":["italian"],"groenendael":[],"hound":["afghan","basset","blood","english","ibizan","walker"],"husky":[],"keeshond":[],"kelpie":[],"komondor":[],"kuvasz":[],"labrador":[],"leonberg":[],"lhasa":[],"malamute":[],"malinois":[],"maltese":[],"mastiff":["bull","tibetan"],"mexicanhairless":[],"mix":[],"mountain":["bernese","swiss"],"newfoundland":[],"otterhound":[],"papillon":[],"pekinese":[],"pembroke":[],"pinscher":["miniature"],"pointer":["german","germanlonghair"],"pomeranian":[],"poodle":["miniature","standard","toy"],"pug":[],"puggle":[],"pyrenees":[],"redbone":[],"retriever":["chesapeake","curly","flatcoated","golden"],"ridgeback":["rhodesian"],"rottweiler":[],"saluki":[],"samoyed":[],"schipperke":[],"schnauzer":["giant","miniature"],"setter":["english","gordon","irish"],"sheepdog":["english","shetland"],"shiba":[],"shihtzu":[],"spaniel":["blenheim","brittany","cocker","irish","japanese","sussex","welsh"],"springer":["english"],"stbernard":[],"terrier":["american","australian","bedlington","border","dandie","fox","irish","kerryblue","lakeland","norfolk","norwich","patterdale","russell","scottish","sealyham","silky","tibetan","toy","westhighland","wheaten","yorkshire"],"vizsla":[],"weimaraner":[],"whippet":[],"wolfhound":["irish"]}}


let data = APIResponse.message
let breedList = sortObj(data)

function sortObj(data) {
  let result = [];
  Object.keys(data).forEach((animal) => {
  if (data[animal].length) {
    data[animal].forEach((type) => {
      result.push(type.concat(" " + animal))
    })
  } else {
    result.push(animal)
  }
})
return result;
}

document.addEventListener("DOMContentLoaded", (event) => {
  let button = document.querySelector(".generate-breed-button")
  let breedDisplay = document.querySelector(".dog-breed")

  button.addEventListener("click", (event) => {
    function randomBreedGenerator(num) {
      return Math.floor(Math.random() * breedList.length)
    }

   //  function capitalizeBreed(str) {
   //    let capped = "";
   //    for(var i = 0 ; i < str.length - 1 ; i++){
   //     capped += str[i].toUpperCase();
   // }

   const capitalizeBreed = (str) => {
  return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};


    breedDisplay.innerText = capitalizeBreed(breedList[randomBreedGenerator(breedList.length)])
    // breedList[randomBreedGenerator(breedList.length)]
    button.innerHTML = "Another One!"
  })
})
