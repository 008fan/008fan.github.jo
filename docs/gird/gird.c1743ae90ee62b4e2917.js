(()=>{"use strict";(()=>{class t{constructor(e){this.el=t.el}static create(){return new t}use(t){try{this.model=t.install()}catch(e){this.model=t}return console.log(this),this}static el;mount(e){t.el=e,console.log(t.el),(new this.model).run()}}class e extends t{constructor(){super()}run(){console.log(this.el),this.el.classList.add("move")}static install(){return e}}t.create().use(e).mount(document.querySelector(".box5"))})()})();