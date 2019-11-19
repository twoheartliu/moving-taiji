const log = console.log.bind(console);

const e = selector => document.querySelector(selector);

const html = e("#html");

let string = `/*
大家好，我是二心
接下来我要展示一下前端功底
首先准备一个 div
*/
#div1 {
  border: 1px solid red;
  width: 200px;
  height: 200px;
}
/*
接下来我把 div 变成一个八卦图
首先把 div 变成一个圆
*/
#div1 {
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  border: none;
}
/*
八卦是阴阳组成的
一黑一白
*/
#div1 {
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个小球 */
#div1::before {
  width: 100px;
  height: 100px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  border-radius: 50%;
  background: rgb(255,255,255);
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after {
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border-radius: 50%;
  background: rgb(0,0,0);
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
// string = string.replace(/\n/g, "<br>");

let newString = "";

let n = 0;
let s = e("#style");
const step = () => {
  setTimeout(() => {
    // 如果是回车的话，将 br 累加到 newString 上
    // 如果不是，将 string 累加到 newString 上
    newString += string[n] === "\n" ? "<br>" : string[n];

    html.innerHTML = newString;
    s.innerHTML = string.substring(0, n);
    window.scrollTo(0, 999999);
    html.scrollTo(0, 999999);
    if (n < string.length - 1) {
      n = n + 1;
      step();
    }
  }, 50);
};

step();
