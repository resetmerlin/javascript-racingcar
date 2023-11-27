### STEP 1후기
실제 미션 참여자가 아니어서 그냥 가상의 멘토를 만들어 실제 참여하는 것처럼 행동하려고 합니다. 일단 제가 프로그래밍을 짤때 가치있게 보는 것은 유연함과 단순함입니다.

1. 유연함과 단순함
  - 역할 모델을 캐치해서 관심사를 분리하여 추후 예기치 않은 변화가 있을때 유연하게 대치할 수 있도록 했습니다. 제 컴포넌트 폴더에는 오로지 사이드 이펙트 없는 뷰 함수만 호출할 수 있게 작업하였습니다. 또한 각 도메인 별로 비즈니스 로직이 있는건 도메인 폴터 안에 작업하였습니다.

하지만 가치 이외의 원칙과 패턴에 부족함이 있어 코드에 잘 녹여내지 못했습니다. 


저의 도메인 분류 과정은 이렇습니다.

**자동차**
- [ ]  자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- [ ]  전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.

**Input**
- [ ]  사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- [ ] 사용자가 잘못된 입력 값을 작성한 경우 에러 메시지를 보여주고, 다시 입력할 수 있게 한다.
	- [ ] 여기서 잘못된 입력 값이란? 
		- [ ] 이름?
- [ ]  자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
	- [ ] 잘못된 입력 값이란 쉼표가 없는
	- [ ] 5자 이하의 요건에 충족시킬시 못할시

**GAME**
- [ ] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다
- [ ] 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.


자동차 객체를 홀로 만들어 해당 요구사항을 지키기 어려웠습니다. 그래서 Game이라는 더 넓은 집합의 도메인을 만들어 주어진 요구사항을 최대로 분산하였습니다.


![Drawing 2023-11-11 10 31 28 light](https://github.com/resetmerlin/javascript-racingcar/assets/108568153/9df9629b-8fea-42e4-a34f-d3a216ce74d1)
![Drawing 2023-11-11 10 31 28 light](https://github.com/resetmerlin/javascript-racingcar/assets/108568153/f486b958-0598-422c-9be6-b9a8c7e9905e)

궁금한 점은 
- 제 코드가 제대로 역할 모델을 캐치하고 있는지 궁금합니다.
- 제 코드가 도메인을 제대로 파악하고 있는지 궁금합니다.
- 마지막으 프로그래밍을 짤때 원칙과 패턴을 어떻게 고수하는지 궁금합니다.


---
<p align="middle" >
  <img width="200px;" src="https://user-images.githubusercontent.com/50367798/106415730-2645a280-6493-11eb-876c-ef7172652261.png"/>
</p>
<h2 align="middle">level1 - 자동차 경주 게임</h2>
<p align="middle">자바스크립트로 구현 하는 자동차 경주 게임</p>
<p align="middle">
<img src="https://img.shields.io/badge/version-1.0.0-blue?style=flat-square" alt="template version"/>
<img src="https://img.shields.io/badge/language-html-blue.svg?style=flat-square"/>
<a href="https://github.com/daybrush/moveable/blob/master/LICENSE" target="_blank">
  <img src="https://img.shields.io/github/license/daybrush/moveable.svg?style=flat-square&label=license&color=08CE5D"/>
  </a>
</p>

## 🔥 Projects!

<p align="middle">
  <img width="400" src="https://techcourse-storage.s3.ap-northeast-2.amazonaws.com/7c76e809d82a4a3aa0fd78a86be25427">
</p>

### 🎯 step1

- [x] 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- [x] 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- [x] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- [x] 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- [x] 전진하는 조건은 0에서 9 사이에서 random 값을 구한 후 random 값이 4 이상일 경우 전진하고, 3 이하의 값이면 멈춘다.
- [x] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- [x] 우승자가 여러명일 경우 ,를 이용하여 구분한다.

### BDD

- 정상동작

  - [x] 사용자는 페이지에 들어오면 자동차 이름을 입력하는 폼을 본다.
  - [x] 자동차 이름을 입력하는 칸에 자동차 이름을 입력한다.
  - [x] 사용자는 확인 버튼을 누르고 시도할 횟수를 입력하는 폼을 본다.
  - [x] 사용자는 시도할 횟수를 입력한다.
  - [x] 사용자는 확인 버튼을 누르고 결과 화면을 본다 (진행결과, 최종 우승자, 다시시작하기 버튼)
  - [ ] 사용자는 다시 시작버튼을 누른다. & 사용자는 게임의 첫 화면으로 돌아간다. ( 시도횟수, 결과 화면이 사라진다. )

- 예외상황
  - 자동차 이름
    - [ ] 자동차 이름이 5자를 초과하거나, 1글자 미만인 경우 ⇒ Error
    - [ ] 자동차 이름이 중복되는 경우
      - Error
      - ~~뒤에 숫자를 넣어주는 식으로 구분.~~
      - 대소문자 구분 함.
    - [ ] 완전한 한글자가 아닌경우 (ex. ㅏ ㄱ ㄷ) ⇒ Error
      - 한글, 영어, 숫자만 허용함.
    - [ ] 자동차 이름에 공백이 있는 경우 ⇒ Error
  - 시도횟수
    - [] 입력된 값이 정수가 아닌 경우
    - [] 입력된 값이 0이하인 경우

### 🎯🎯 step2

- [ ] 자동차 경주 게임의 턴이 진행 될 때마다 1초의 텀(progressive 재생)을 두고 진행한다.
  - [ ] 애니메이션 구현을 위해 setInterval, setTimeout, requestAnimationFrame 을 활용한다.
- [ ] 정상적으로 게임의 턴이 다 동작된 후에는 결과를 보여주고, 2초 후에 축하의 alert 메세지를 띄운다.
- [ ] 위 기능들이 정상적으로 동작하는지 Cypress를 이용해 테스트한다.

<br>

## ⚙️ Before Started

#### <img alt="Tip" src="https://img.shields.io/static/v1.svg?label=&message=Tip&style=flat-square&color=673ab8"> 로컬에서 서버 띄워서 손쉽게 static resources 변경 및 확인하는 방법

로컬에서 웹서버를 띄워 html, css, js 등을 실시간으로 손쉽게 테스트해 볼 수 있습니다. 이를 위해서는 우선 npm이 설치되어 있어야 합니다. 구글에 `npm install` 이란 키워드로 각자의 운영체제에 맞게끔 npm을 설치해주세요. 이후 아래의 명령어를 통해 실시간으로 웹페이지를 테스트해볼 수 있습니다.

```
npm install -g live-server
```

실행은 아래의 커맨드로 할 수 있습니다.

```
live-server 폴더명
```

<br>

## 👏 Contributing

만약 미션 수행 중에 개선사항이 보인다면, 언제든 자유롭게 PR을 보내주세요.

<br>

## 🐞 Bug Report

버그를 발견한다면, [Issues](https://github.com/woowacourse/javascript-racingcar/issues) 에 등록 후 @eastjun에게 dm을 보내주세요.

<br>

## 📝 License

This project is [MIT](https://github.com/woowacourse/javascript-racingcar/blob/main/LICENSE) licensed.
