export const parseHtml=function(text){
    let oDiv=document.createElement('div');
    oDiv.innerHTML=text;
    // console.log(oDiv.childNodes[0].content.textContent);
//    return  oDiv.childNodes[0].content.textContent;
   return oDiv.querySelector('template').innerHTML;
}