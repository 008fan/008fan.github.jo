import Article from "../article_title"

class Url {
    constructor(props) {
        this.content = props;
    }
    get(item) {
        let obj = {};
        let str = this.content.split('?');
        let type = str[1].split('&');
        for (let i = 0; i < type.length; i++) {
            type[i] = type[i].split('=')
            obj[type[i][0]] = type[i][1];
        }
        return obj[item]
    }

    parse() {
        let arr = [];
        console.log(this.content);
        for (const key in this.content) {
            arr.push(key + "=" + this.content[key])
        }
        return arr.join('&')
    }
}

//作业一：
var url = new Url('localhost:8080?type=2&id=1&name=xiaoming');
url.get('type') // 2；
url.get('id') // 1；
url.get('name') // xiaoming;
console.log(url.get('name'));



//作业二
var params = {
    type: '1',
    id: 1,
    name: 'xiaoming'
}
var url2 = new Url(params)
url2.parse() //  type=2&id=1&name=xiaoming
console.log(url2.parse());




var type = (window.location.search).substring(4);
console.log(type);
for (let i = 0; i < Article.length; i++) {
    if (Article[0].id == type) {
        document.querySelector('.sculpture-button').innerHTML = Article[0].article;
    }
}


