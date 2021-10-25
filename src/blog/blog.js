import {Translate} from "../../assets/js/blog"
import Animate from "../../assets/js/blog";
import Articles from "../article_title";

// var animale = new Animate(new Translate({
//     targets: [
//         {
//             el: document.querySelector('.header-left'),
//             animationClassName: 'move'
//         },
//         {
//             el: document.querySelector('.right_out'),
//             animationClassName: 'move'
//         },
//         {
//             el: document.querySelector('.version'),
//             animationClassName: 'move'
//         },
//         {
//             el: document.querySelector('.te-box'),
//             animationClassName: 'move'
//         },
//         // {
//         //     el: document.querySelector('.te-box2'),
//         //     animationClassName: 'move'
//         // },
//         // {
//         //     el: document.querySelector('.te-box3'),
//         //     animationClassName: 'move'
//         // },
//         {
//             el: document.querySelector('.right-box1'),
//             animationClassName: 'move'
//         },
//         {
//             el: document.querySelector('.right-box2'),
//             animationClassName: 'move'
//         },
//         {
//             el: document.querySelector('.right-box3'),
//             animationClassName: 'move'
//         },
//         {
//             el: document.querySelector('.right-box4'),
//             animationClassName: 'move'
//         },
//         {
//             el: document.querySelector('.right-box5'),
//             animationClassName: 'move'
//         },
//     ],
//     count: 4,
//     reverse:[2]
// }));

// new Ellipsis({
//     text:'文本',
//     textCount:110,
//     findAllText:'',
//     showFindAllButton:true
// })

// String.prototype.ellipsis=function(num){
//     let str;
// if(num<this.length){
//   str = this.substring(0,num)+'...'; 
// }
// return str;
// }
// var oDivbox=document.querySelector('.version-header');
// var oDiv=document.querySelector('template');
// console.log(oDiv.content)
// var oTitle=oDiv.querySelector('.headerText');
// var oArticle=oDiv.content.querySelector('.text-exceeded');

// oDiv.remove();
// var oP=document.createElement('p');
// oP.className="readtext";
// oP.innerHTML="阅读全文";
// oDiv.content.children[0].appendChild(oP);
// // console.log(oDiv)
// var flag= true;
// Articles.forEach(item=>{
//     // console.log(item)
//     // oTitle.innerHTML=item.title;
//     oArticle.innerHTML=item.article.ellipsis(300);
//     var newDiv= oDiv.content;
//     var cloneDiv=newDiv.cloneNode(true);
//     // console.log(cloneDiv);
//      oDivbox.appendChild(cloneDiv);
//     document.querySelector('.readtext').onclick = function(){
//         if(flag){
//             // console.log(this.parentNode)
//             this.parentNode.querySelector('.text-exceeded').innerHTML=item.article;
//             this.parentNode.querySelector('.text-exceeded').innerHTML=this.parentNode.querySelector('.text-exceeded').innerHTML.replace(/\n/,'<br>');
//             this.parentNode.querySelector('.text-exceeded').innerHTML=this.parentNode.querySelector('.text-exceeded').innerHTML.replace(/\s/,'');
//             this.innerHTML='收起内容';
//             flag=false;
//         }else{
//             this.parentNode.querySelector('.text-exceeded').innerHTML=item.article.ellipsis(300);
//             this.innerHTML='全部内容';
//             flag=true;
//         }
//     }
// })