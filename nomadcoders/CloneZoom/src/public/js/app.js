// 서버와 연결
const socket = new WebSocket(`ws://${window.location.host}`);

// socket이 open 되었다면, 이벤트 발생.
socket.addEventListener("open", () => {
    console.log("Connected to Browser ✔");
});


socket.addEventListener("message", (message) => {
    console.log("New message: ", message.data);
    // message: MessageEvent
    // data, timestamp 등을 payload? 로 가짐.
});

socket.addEventListener("close", () => {
    console.log("Disconnected from Server 💦");
});

setTimeout(() => {
    socket.send("hello from the browser!");
}, 8000);