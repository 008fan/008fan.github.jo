import '../../assets/css/Ani.css'
 export default class Ani {
    constructor(arr) {
        this.targets = arr.targets;
        this.count = arr.count;
        //把count复制一份
        this.reverseNum=arr.count;
        this.reverse=arr.reverse;

        //深拷贝数组
        this.newtargets = this.targets.slice();
        console.log(this.newtargets)
        this.exec()
    }
  
    exec() {
        console.log(this.targets.length)//整个数组的长度
        if(this.newtargets.length){
            var _this =this;
            var aExec=function () {
                //把添加的动画及其添加的属性属性删除(取消事件委托)
                target.el.classList.remove(target.animationClassName);
                target.el.removeEventListener('animationend',aExec);
                //调用方法
                _this.exec();
            }
            let target = this.newtargets.shift();//删除第一个
            //添加动画及其属性 (事件委托)
            target.el.classList.add(target.animationClassName);
            target.el.addEventListener('animationend',aExec);
        }else{
           setTimeout(()=>{
                //深拷贝一份数组
            this.newtargets=this.targets.slice();
           // count不变，复制的reverseNum改变
            if( this.reverseNum>1){
                this.reverseNum--;
                if(this.getRenum()==this.reverse){
                    this.newtargets=this.newtargets.reverse();
                    this.exec();
                }
              
            }
            
           })
        } 

    }
   
    getRenum(){
              return  this.count-this.reverseNum+1;
            }      
}