// function addingEventListener() {
//     element.addEventListener(input, listener)
// }
// function clickHandler(event) {
//     console.log('Button Clicked');
//  }
// const main = document.getElementById('button');
// main.addEventListener('click', function(){});

// let input;
// function addingEventListener(){
//     input = document.getElementById('button');
//     // sinon.spy(input, 'addEventListener');
// }
// input.addingEventListener('click', function(){}.to.be.true , false) ;
// function clickHandler(event) {
//     console.log('Button Clicked');
//  }
  
// const addingEventListener = document.querySelector('.btn');
// btn.addEventListener('click', function(event){
//    console.log('Button Clicked');
// });
function addingEventListener(event,target){
    console.log(this.someVar);
    console.log(event,target);
}
   
addingEventListener = addingEventListener.bind({someVar: 1234});
   
target.addEventListener('click', addingEventListener);
// window.addEventListener("click", () => {
//     console.log("You knocked?");
//   });
// let addingEventListener = document.querySelector("button");
// button.addEventListener("click", () => {
//   console.log("Button clicked.");
// });
// let button = document.querySelector("button");
// function addingEventListener() {
//   console.log("Done.");
// }
// button.addEventListener("click", addingEventListener);

let button = document.querySelector("button");
  button.addEventListener("mousedown", event => {
    if (event.button == 0) {
      console.log(false);
    } else if (event.button == 1) {
      console.log(true);
    }
  });
 
