# Zoom Clone Coding
참고 사이트: https://nomadcoders.co/noom/lobby
<br><br>
Zoom Clone using NodeJS, WebRTC and Websockets.

----
24-01-12
* 개발 환경 구축
    * Nodemon
        * 노드 서버를 키고 코드를 수정하거나 업데이트 시, 서버를 내리고 다시 반영시키는 데 도움을 주는 기능
        * nodemon.json을 설정하여 재실행시 수행해야 하는 것들을 정리함.
        * 해당 프로젝트에서는 exec를 추가하여 다음과 같은 명령어를 수행함.<br>
          > babel-node src/server.js 
    * Babel
        * 자바스크립트 컴파일러.<br>javascript로 결과물을 만들어준다고 생각하면 좋다.
        * babel-node를 실행시키면 babel-node는 바로 babel.config.json을 찾는다. 거기서 코드에 적용해야 하는 preset을 실행한다.
    * Express.js
    * 기타
        * public에 존재하는 js는 Frontend에서,<br>
        그 밖에 있는 server.js는 Backend에서 구동될 것이다.