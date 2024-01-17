const messageList = document.querySelector("ul");
const nickForm = document.querySelector("#nick");
const messageform = document.querySelector("#message");

// 서버와 연결
const socket = new WebSocket(`ws://${window.location.host}`);

const makeMessage = (type, payload) => {
    const msg = {type, payload};
    return JSON.stringify(msg);
}

// socket이 open 되었다면, 이벤트 발생.
socket.addEventListener("open", () => {
    console.log("Connected to Server ✔");
});


socket.addEventListener("message", (message) => {
    const li = document.createElement("li");
    li.innerText = message.data;
    messageList.append(li);
    // console.log("New message: ", message.data);
    // message: MessageEvent
    // data, timestamp 등을 payload? 로 가짐.
});

socket.addEventListener("close", () => {
    console.log("Disconnected from Server 💦");
});

const handleSubmit = (event) => {
    event.preventDefault();
    const input = messageform.querySelector("input");
    socket.send(makeMessage("new_message", input.value));
    input.value = "";
    // console.log(input.value);
}

const handleNickSubmit = (event) => {
    event.preventDefault();
    const input = nickForm.querySelector("input");
    socket.send(makeMessage("nickname", input.value));
}

messageform.addEventListener("submit", handleSubmit);
nickForm.addEventListener("submit", handleNickSubmit);

// setTimeout(() => {
//     socket.send("hello from the browser!");
// }, 8000);


