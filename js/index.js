// document.getElementById('btn').onclick = function () {
//   document.getElementById('wrap').setAttribute('class', 'wrap-out')
// }
// document.querySelector('.header_img').addEventListener('animationend', function (e) {
//   document.querySelector('.header_img').classList.add('move');
//   console.log('动画完成');
// })
var oImg=document.querySelector('.header_img');
oImg.addEventListener('animationend',function(){
    oImg.classList.add('move');
    console.log('动画完成');
  oImg.classList.remove('move');
  console.log('节点消失');
})


