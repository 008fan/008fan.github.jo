import acticle1 from '../src/acticle/acticle1.html';
import acticle2 from "../src/acticle/acticle2.html";
import acticle3 from "../src/acticle/acticle3.html";
import acticle4 from "../src/acticle/acticle4.html";
import acticle5 from "../src/acticle/acticle5.html";
import acticle6 from "../src/acticle/acticle6.html";
import{parseHtml} from "../assets/js/ariticle";

export default [
    { 
        id:1,
        article:parseHtml(acticle1) 
    },
    {
        id:2,
        article:parseHtml(acticle2) 
    },
    {
        id:3,
        article:parseHtml(acticle3) 
    },
    {
        id:4,
        article:parseHtml(acticle4) 
    },
    {
        id:5,
        article:parseHtml(acticle5) 
    },
    {
        id:6,
        article:parseHtml(acticle6) 
    },
]

