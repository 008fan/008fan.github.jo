import '../../assets/css/gird.css'
//作业一
// export default class Animate{
//     constructor(arr){
//         this.el=arr.el;
//         this.model=arr.model;
//         this.run();
//     }
//     run(){
//         this.model.run(this.el)
//     }
// }
// export class Translate{
//     constructor(){
       
//     }
//     run(el){
//         el.classList.add('move')
//     }
// }




//作业二
// export default class Animate{
//     constructor(arr){
//         this.el=arr.el;
//         this.type=arr.type;     
//     }
//     load(){
//         if(this.type =="translate"){
//             this.model=new Translate();
//             this.model.run(this.el)
//         }else if(this.type =="Opicity"){
//             this.model=new Opicity();
//             this.model.run(this.el)
//         }
//     }
// }
// export class Translate{
//     constructor(){
       
//     }
//     run(el){
//         el.classList.add('move')
//     }
// }
// export class Opicity{
//     constructor(){

//     }
//     run(el){
//         el.classList.add('opicity')
//     }
// }


//作业三

// export default class Animate{
//     constructor(arr){
//         this.el=arr.el;
//         this.type=arr.type;   
//     }
//      static create(type){
//         return new Animate(type);
//         }
//         mount(e){
//             console.log(e);
//             this.el=e;
//             this.load();
//         }
//         load(){
//             if(this.type =="translate"){
//                 this.model=new Translate();
//                 this.model.run(this.el)
//             }else if(this.type =="Opicity"){
//                 this.model=new Opicity();
//                 this.model.run(this.el)
//             }
//         }
//     }
//     export class Translate{
//         constructor(){

//         }
//         run(el){
//             el.classList.add('move')
//         }
//     }
//     export class Opicity{
//         constructor(){
    
//         }
//         run(el){
//             el.classList.add('opicity')
//         }
//     }
    





//作业四
    // export default class Animate{
    //     constructor(){
           
    //     }
    //      static create(){
    //         return new Animate(); 
    //         }
    //         use(Translate){
    //             try {
    //               this.model=Translate.install();
    //             } catch (e) {
    //                 Translate();
    //             }
    //             console.log(this);
    //             return this; //这个指的是实例
    //         }
    //         mount(e){
    //             console.log(e);
    //             this.el=e;
    //             this.model.run(this.el);
    //         }
    //     }
    //     export class Translate{
    //         constructor(){
    
    //         }
    //         run(el){
    //             el.classList.add('move')
    //         }
    //         //静态方法
    //         static install(){
    //             return new Translate(); //创建实例
    //         }
    //     }
//作业五：子类写实现第四个方法
export  class Animate{
    constructor(arr){
       this.el=Animate.el;
    }
     static create(){
        return new Animate(); 
        }
        use(Translate){
            try {
              this.model=Translate.install();
            } catch (e) {
               this.model=Translate;
            }
            console.log(this);
            return this; 
        }
        static el;
        mount(el){
            Animate.el=el;
            console.log(Animate.el);
           new this.model().run()
        }
    }

export default class Translate extends Animate{
    constructor(){
        super()
    }
    run(){
        console.log(this.el)
    this.el.classList.add('move');
    }
   static install(){
        return Translate;
    }
}




































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