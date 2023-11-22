## client
npx create-react-app .
npm install react-bootstrap bootstrap

# server
npm init -y;
npm install express --save;
npm install nodemon --save;
npm install path --save;

## 제작과정
```
const express = require("express");
const app = express();
const port = 5050;

app.listen(port, () => {
    console.log("running --> " + port);
})

app.get("/", (req, res) => {
    res.send("Hello World");
})
```
- express 설치 과정



# web2023

나의 블로그 : https://inforlicense.tistory.com/


# JAVASCRIPT
데이터 저장하기 : https://webstoryboy.github.io/web2023/javascript/javascript01.html   
데이터 출력하기 : https://webstoryboy.github.io/web2023/javascript/javascript02.html   
데이터 실행하기 : https://webstoryboy.github.io/web2023/javascript/javascript03.html   
데이터 제어하기 : https://webstoryboy.github.io/web2023/javascript/javascript04.html   

퀴즈 게임01 : https://webstoryboy.github.io/web2023/javascript/quiz/quizEffect01.html   


# 사이트 
이미지 유형01 : https://webstoryboy.github.io/web2023/site/imageType/imageType01.html           
카드 유형01 : https://webstoryboy.github.io/web2023/site/cardType/cardType01.html       
텍스트 유형01 : https://webstoryboy.github.io/web2023/site/textType/textType01.html        
슬라이드 유형01 : https://webstoryboy.github.io/web2023/site/sliderType/sliderType01.html   
헤더 유형01 : https://webstoryboy.github.io/web2023/site/headerType/headerType01.html   
이미지/텍스트 유형01 : https://webstoryboy.github.io/web2023/site/imgTextType/imgTextType01.html  



