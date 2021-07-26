/* console.log(1);
console.log(2);


function timer() {
  console.log(`hello`);
}
setInterval(timer, 1000);
console.log(3);
 */

/* setTimeout(function () { console.log(`hello`) }, 3000) */



function a() {
  console.log(b);
}
function b() {
  console.log(c);
}
function c() {
  return "hello";
}
a();