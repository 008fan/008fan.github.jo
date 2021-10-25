// let textCont=document.querySelector('article').innerHTML;
// console.log(textCont);
// let text=textCont.match(/(#+\s*)|\S+/g);
// console.log(text);
// let oLable=[];
// let content=[];
// var oDiv= document.createElement('div');    
// for (let i = 0; i < text.length; i++) {
//     // console.log(text[i]);
//     if(i%2 ==0){
//         let h=document.createElement('h'+(text[i].length-1));
//      oLable.push(h);
//     }else{
//         content.push(text[i])
//     }
    
// }
// console.log(oLable);
// console.log(content);
// oLable.forEach((item,index) => {
//     item.innerText=content[index]
// console.log(item);
// oDiv.appendChild(item);
// });
// document.querySelector('article').innerHTML= '';
// document.querySelector('article').appendChild(oDiv);



// class Markdown{
//     constructor(props){
//         this.el=props.el;
//     }
//     parseHtml(){
//         this.exec();
//     }
//     exec(){
//     let text=this.el.match(/(#+\s*)|\S+/g);
//     let oLable=[];
//     let content=[];
//     var oDiv=document.querySelector('.box');
//     for (let i = 0; i < text.length; i++) {
//       if(i % 2 ==0){
//         let oH=document.createElement('h'+(text[i].length-1));
//         oLable.push(oH);
//       }else{
//         content.push(text[i]);
//       }   
//     }
//     oLable.forEach((item,index)=>{
//         item.innerText=content[index];
//         oDiv.appendChild(item);
//     })
//     }
// }
// //作业：
// let md = new Markdown({el: document.querySelector('template').content.querySelector('article').innerText});
// let res = md.parseHtml();
//     //输出html

export default class Markdown{
    constructor(text){
        this.text=text;
    }
    parse(){
        return this.parseHtml(this.text);
    }
    parseHtml(text){
      let reg=  text.match(/(#+\s*|\S+\s*)(\S+)\n/g);
      let num=0;
      let arr=[];
      console.log(reg);
        reg.forEach(item => {
            console.log(item);
            if (/#+/.test(item)) {
                num++;
                num = num > 6 ? 6 : num;
             arr.push( `<h${num}>${item.trim().split(/\s+/)[1]}</h${num}>`) ;
             console.log(arr); 
            }else{
                arr.push(`<p>${item.trim()}</p>`);

            }
        });
        return arr.join('');
    }
}
    // let reg=/(#+)\s+([^\n]+)/;
    // let flag=false;
    //    let res= text.replace(reg,function(item){
    //         console.log(item);
    //         flag=true;
    //         let n=RegExp.$1.length >6 ? 6 : RegExp.$1.length;
    //         let textContent=RegExp.$2;
    //         return `<h${n}>${textContent}</h${n}>`;
    //     })
    //     if(flag){
    //         res=this.parseHtml(res);
    //     }
    //     console.log(res);
    //     return res;
//     }
// }
var el=document.querySelector('article');
var textContent= el.textContent;
console.log(textContent);
let md=new Markdown(el.textContent);
let res=md.parse();
el.innerHTML=res;


   //作业二：
// var deptData = [
//     {
//         deptName:'某某公司',
//         type:2
//     },
//     {
//         deptName:'子公司',
//         type:4
//     },
//     {
//         deptName:'子子部门',
//         type:5
//     }
// ]
// var a = '2->4，,,,,,,,asdas,,,a ,asda ， q5'; 
// var res = format() // 某某公司->子公司，子子部门

// console.log(res);
// function format(){
// return a.replace(/\d+/g,function(item){
//    return deptData.filter(data =>{
//        return data.type == item
//     })[0].deptName
// })
// }
//作业三：
// var text = '{{ username }}';
// // username是一个变量  用正则匹配到 username
// //方法一
// var a="{{username}}".replace(/\{\{\s*(\S+)\s*\}\}/,'$1');
// console.log(a);
//方法二
// var a=text.match(/(?<=\{\{\s*)username(?=\s*\}\})/);
// // console.log(a[0]);
// //方法三
// a=/(?<=\{\{\s*)\S+(?=\s*\}\})/.exec(text)[0];
// console.log(a);



