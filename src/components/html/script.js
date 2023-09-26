// console.log("test");
// const url = "https://api.escuelajs.co/api/v1/products";
// const data = fetch(url);
// console.log({ data });

// function now() {
//   return 21;
// }

// function later() {
//   answer = answer * 2;
//   console.log("Meaning of life", answer);
// }

// var answer = now();

// setTimeout(later, 1000);

// var a = {
//   index: 1,
// };

// console.log(a);

// a.index++;
// const show = () => {
//   console.log("show");
// }

// var eventLoop = [show, show, a];
// var event;

// while (true) {
//   console.log("eventLoop", eventLoop);
//   if (eventLoop.length > 0) {
//     event = eventLoop.shift();
//   }

//   try {
//     event();
//   } catch (err) {
//     // retportError(err);
//     console.log("error");
//   }
// }

// console.log('A')

// setTimeout(function() {
//   console.log('B')
// }, 0)

// console.log('C')

// console.log( "A" );

// setTimeout( function(){
// 	console.log( "B" );
// }, 0 );

// // API Задания
// schedule( function(){
// 	console.log( "C" );

// 	schedule( function(){
// 		console.log( "D" );
// 	} );
// } );

function doB() {
  console.log("B");
}

function doD() {
  console.log("D");
}

function doE() {
  console.log("E");
}

function doF() {
  console.log("F");
}

//////////////////////////////

function doA(callback) {
  callback();
}

function doC(callback) {
  callback();
}
//////////////////

doA(function () {
  doB();

  doC(function () {
    doD();
  });

  doE();
});

doF();
