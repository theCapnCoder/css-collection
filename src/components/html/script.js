console.log("test");
const url = "https://api.escuelajs.co/api/v1/products";
const data = fetch(url)
console.log({ data });

function now() {
  return 21
}

function later() {
  answer = answer *2 
  console.log("Meaning of life", answer)
}

var answer = now()

setTimeout(later, 1000)

var a = {
  index: 1
}

console.log(a)

a.index++