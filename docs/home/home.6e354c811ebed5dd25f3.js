(()=>{"use strict";new class{constructor(e){this.targets=e.targets,this.count=e.count,this.reverseNum=e.count,this.reverse=e.reverse,this.newtargets=this.targets.slice(),console.log(this.newtargets),this.exec()}exec(){if(console.log(this.targets.length),this.newtargets.length){var e=this,t=function(){s.el.classList.remove(s.animationClassName),s.el.removeEventListener("animationend",t),e.exec()};let s=this.newtargets.shift();s.el.classList.add(s.animationClassName),s.el.addEventListener("animationend",t)}else setTimeout((()=>{this.newtargets=this.targets.slice(),this.reverseNum>1&&(this.reverseNum--,this.getRenum()==this.reverse&&(this.newtargets=this.newtargets.reverse(),this.exec()))}))}getRenum(){return this.count-this.reverseNum+1}}({targets:[{el:document.querySelector(".box1"),animationClassName:"move"},{el:document.querySelector(".box2"),animationClassName:"move"},{el:document.querySelector(".box3"),animationClassName:"move"},{el:document.querySelector(".box4"),animationClassName:"move"},{el:document.querySelector(".box5"),animationClassName:"move"}],count:4,reverse:[2]})})();