# 편지봇
📨 Github Action 으로 만든 디스코드, 슬랙에 매일 아침 8시에 브리핑을 해주는 봇입니다

![Node.js CI](https://github.com/cjaewon/letterbot/workflows/Node.js%20CI/badge.svg)


## ⚙️ 디스코드 설정법

일단 먼저 웹후크를 생성해줍니다.
![image](https://user-images.githubusercontent.com/32125218/76847761-e7f8c200-6885-11ea-8c69-5c4de5e545f2.png)

깃허브 secrets WEATHER_API_KEY ([WETHAER API](https://openweathermap.org/api)) 저장합니다.
웹훅이 한개라면 url을 `https://discordapp.com/api/thisiswebhook` 이런 식으로 적어주시기만 하면 되고
만약 웹훅이 두개 이상이라면 콤마로 구분해주시면 됩니다.
```
https://discordapp.com/api/thisiswebhook1,
https://discordapp.com/api/thisiswebhook2
```
![image](https://user-images.githubusercontent.com/32125218/76913894-b28ebb80-68fb-11ea-978c-57ffe17dd2bc.png)

웹훅이 발송되는 시간은 매일 아침 8시 이고 바꾸고 싶다면 .github/workflows/nodejs.yml 을 수정해주시면 됩니다
+ 참고로 GITHUB ACTION 은 UTC 기준이므로 13시간 차이가 나는 점을 감안해주셔야해요.

## ⚙️ 슬랙 설정법
~~아앗..개발자가 아직 개발을 안 했어요~~
