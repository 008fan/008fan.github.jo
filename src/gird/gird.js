// import {Translate} from "../../assets/js/Translate"
// import Animate from "../../assets/js/Translate";
import Translate from "../../assets/js/Translate"
import {Animate} from "../../assets/js/Translate";
// 作业一：Translate()   Opicity();
// new Animate({
    //     el:document.querySelector('div'),
    //     model:new Translate()
    // })
    //作业一
    // var animale = new Animate({
    //     el:document.querySelector('.box1'),
    //     model:new Translate()
    //     });
    // 作业二： 
// let animate = new Animate({
//     el:document.querySelector('.box2'),
//     type:'translate',
// })
// animate.load();


// 作业三： 
// Animate.create({  
//     type:'translate',
// }).mount(document.querySelector('.box3'))


// 作业四：
//  use方法中应该接收一个 Translate.install的静态方法；如果没有静态方法，那么直接执行这个方法；
//  注意：是直接执行这个方法，而不是 new一个构造函数；
// Animate.create().use(Translate).mount(document.querySelector('.box4'))

//作业五：
Animate.create().use(Translate).mount(document.querySelector('.box5'))



// {
//     targets: [
//         {
//             el: document.querySelector('.box1'),
//             animationClassName: 'move'
//         },
//         {
//             el: document.querySelector('.box2'),
//             animationClassName: 'move'
//         },
//         {
//             el: document.querySelector('.box3'),
//             animationClassName: 'move'
//         },
//         {
//             el: document.querySelector('.box4'),
//             animationClassName: 'move'
//         },
//         {
//             el: document.querySelector('.box5'),
//             animationClassName: 'move'
//         },
//     ],
// }