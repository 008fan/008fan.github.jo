import Ani from "../../assets/js/Ani"
var ani = new Ani({
    targets: [
        {
            el: document.querySelector('.box1'),
            animationClassName: 'move'
        },
        {
            el: document.querySelector('.box2'),
            animationClassName: 'move'
        },
        {
            el: document.querySelector('.box3'),
            animationClassName: 'move'
        },
        {
            el: document.querySelector('.box4'),
            animationClassName: 'move'
        },
        {
            el: document.querySelector('.box5'),
            animationClassName: 'move'
        },
    ],
    count: 4,
    reverse:[2]
})