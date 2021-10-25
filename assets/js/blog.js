import '../../assets/css/blog.css'
// export default class Animate{
//     constructor(arr){
//         this.arr=arr;
//     }
//     run(){
//         this.arr.exec();
//     }
// }
// export  class Translate{
//      constructor(arr) {
//         this.targets = arr.targets;
//         //深拷贝数组
//         this.newtargets = this.targets.slice();
//         console.log(this.newtargets)
//         this.exec()
//     }
//     exec() {
//         console.log(this.targets.length)//整个数组的长度
//         if(!this.newtargets.length) return
//             let target = this.newtargets.shift();//删除第一个
//             setTimeout(function(){
//                 target.el.classList.add(target.animationClassName);
//             })
//             var _this =this;
//             var aExec=function () {
//                 //把添加的动画及其添加的属性属性删除(取消事件委托)
//                 target.el.classList.add(target.animationClassName);
//                 target.el.removeEventListener('animationend',aExec);
//                 //调用方法
//                 _this.exec();
//             }
//             //添加动画及其属性 (事件委托)
//            target.el.addEventListener('animationstart',aExec);
//     }
// }

// // 作业:封装Ellipsis类
//     /**
//      * @description 截取字符串,超出...
//      * @param text: 文本
//      * @param textCount : 字符串截取长度 number类型;
//      * @param findAllText: 非必填项,默认为'查看全部'
//      * @param showFindAllButton :是否显示'查看全部'按钮,默认为false
//      * **/

//     class Ellipsis{
//         constructor(prop){
//             this.text=prop.text;
//             this.textCount =prop.textCount;
//             this.findAllText=prop.findAllText;
//             this.showFindAllButton=prop.showFindAllButton;
//             this.intercept();
//         }
//         intercept(){

//         }


//     }