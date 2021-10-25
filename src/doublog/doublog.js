class Ellipsis{
    constructor(prop){
    this.el = prop.el;
    this.text=this.el.innerHTML;
    this.textCount = prop.textCount;
    this.findAllButtonText = prop.findAllButtonText || '查看全部';
    this.ellpisisButtonText = prop.ellpisisButtonText || '收起'; 
    this.showFindAllButton = prop.showFindAllButton || false;
    this.flag = true;
    }
    get buttonText(){
      return this.flag ? this.findAllButtonText : this.ellpisisButtonText;
    }
    exec(){
      if( ! this.text) throw new Errow('截取的文本内容不能为空');
      this.el.innerHTML =this.subArticle(this.text,this.textCount);
      if(this.showFindAllButton){
        this.addButton();
      }
    }
    //添加查看按钮
    addButton(){
      var a=document.createElement('a');
      a.textContent = this.findAllButtonText;
      //减少重绘
      a.style.cssText=`
        color:blue;
        cursor:pointer;
      `
      var _this=this;
      a.addEventListener('click',function(){
        _this.flag = !_this.flag;
        this.textContent = _this.buttonText;
        _this.el.childNodes[0].textContent = _this.flag ? _this.subArticle (_this.text,_this.textCount) : _this.text; 
      })
      this.el.appendChild(a,this.el.childNodes[0]);
    }
    //截取文本字符串的长度，超出的部分...
    subArticle(str,textCount){
     return str.length < textCount ?str :(str.substring(0,textCount) + '...');
    } 
}
//  /**
//      * @description 截取字符串,超出...
//      * @param el: 元素
//      * @param textCount : 字符串截取长度 number类型;
//      * @param findAllButtonText: 非必填项,默认为'查看全部'
//      * @param showFindAllButton :非必填项,是否显示'查看全部'按钮,默认为false
//      * **/
  let ellipsis = new Ellipsis({
    el:document.querySelector('.list'),
    textCount:100,
    findAllButtonText:"查看所有",
    showFindAllButton:true
})
ellipsis.exec();


document.querySelector('h2').onclick=function(){
  console.log(this.dataset.id);
  window.location.href=`details.html?id=${this.dataset.id}`
}

