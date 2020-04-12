# 편지봇
📨 Github Action 으로 만든 디스코드, 슬랙에 매일 아침 8시에 브리핑을 해주는 봇입니다

![Node.js CI](https://github.com/cjaewon/letterbot/workflows/Node.js%20CI/badge.svg)
![cjaewon/letterbot License](https://img.shields.io/github/license/cjaewon/letterbot?color=blue)
![stars](https://img.shields.io/github/stars/cjaewon/letterbot?color=yellow&style=social)

### 사용 예시

#### 디스코드 웹훅
![image](https://user-images.githubusercontent.com/32125218/77283471-c24d3c00-6d0f-11ea-8635-d7120a24d344.png)

#### 슬랙 웹훅
![image](https://user-images.githubusercontent.com/32125218/77283427-aa75b800-6d0f-11ea-9f29-d694dec8830b.png)

### ⚙️ 설정법
**cjaewon/letterbot을 먼저 Fork 해주세요. / 또는 클론 하셔서 레포를 만드셔도 됩니다.**
봇 작동을 위해서는 깃허브 secrets에 WEATHER_API_KEY 와 WEBHOOKS가 필요합니다

![image](https://user-images.githubusercontent.com/32125218/76913894-b28ebb80-68fb-11ea-978c-57ffe17dd2bc.png)

#### WEATHER_API
WEATHER_API_KEY는 [Weather Api](https://openweathermap.org/api) 에서 생성이 가능해요.

#### WEBHOOKS
WEBHOOKS는 웹훅 링크를 콤마로 구분한 것입니다
한개 일때는
`https://webhooklinkexample.letterbot`
두개 이상일떄는
```
https://webhooklinkexample1.letterbot,
https://webhooklinkexample2.letterbot,
https://webhooklinkexample3.letterbot,
https://webhooklinkexample4.letterbot
```
이렇게 콤마로 구분해주시면 됩니다.

그럼 인제 매일 아침 8시마다 디스코드 또는 슬랙에 메세지를 보내드립니다
만약 시간을 수정하고 싶으시면 `.github/workflows/nodejs.yml` cron 시간을 변경하시면 됩니다 (UTC 기준입니다.)
