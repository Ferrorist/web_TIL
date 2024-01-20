# Zoom Clone Coding
참고 사이트: https://nomadcoders.co/noom/lobby
<br><br>
Zoom Clone using NodeJS, WebRTC and Websockets.

----
### 2024-01-12
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

### 2024-01-13

#### (이론) HTTP vs WebSocket(어제 푸쉬 안해서 복습 겸 다시 정리..)
<img src="../pictures/httpVSwebsocket_01.png">

* HTTP<br>

클라이언트 (request) ↔ 서버 (response) 가 번갈아서 발생.<br>

Stateless하다는 특징을 갖고 있어, 서버는 클라이언트를 기억하지 못하므로 로그인 유지와 같은 기능이 필요할 시, cookie를 서버에게 보내는 방식으로 유지하여야 한다.




* WebSocket

클라이언트가 서버에게 요청하면 서버는 수락 혹은 거부를 한다.<br>
서버가 수락한다면 클라이언트와 서버는 연결(connection)되어 연결을 끊기 전까지 원하는대로 request와 response를 주고받을 수 있다.<br>


참고)<br>
일부 framework에서는 이미 채팅방 기능이 있다.<br>
npmjs에 있는 ws 라이브러리의 경우, webSocket의 기초적인 기능만 있다. 이를 이용하여 채팅방과 같은 기능을 구현하려면 개발자가 logic을 구현해야 한다.

---
* 개발 관련
    * express 변경
        * ws서버를 만드는 대신 express서버와 합침.(합치기 전의 express 서버는 http를 다룸.)


### 2024-01-18

#### SocketIO vs Websocket
SocketIO는 실시간 웹 애플리케이션을 위한 이벤트 기반 라이브러리이며, websocket의 부가기능이 아니다.
websocket은 SocketIO가 실시간, 양방향, event 기반 통신을 제공하는 방법 중 하나다.

A 라는 브라우저가 websocket을 지원하지 않는다고 하여도 socketIO는 작동한다.


#### socketIO의 adapter
어플리케이션의 규모가 커지면서 여러 서버가 생기게 된다면,
여러 서버가 하나의 DB를 보게 만들고 결국 adapter를 통해 일관성을 유지해야 한다.