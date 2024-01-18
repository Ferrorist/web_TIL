// io : 자동적으로 back-end socket.io와 연결해주는 function
const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");

const handleRoomSubmit = (event) => {
    event.preventDefault();
    const input = form.querySelector("input");

    // 특정한 event를 emit할 수 있으며, object를 전송할 수 있음.
    // callback: 서버로부터 실행되는 function
    socket.emit("enter_room", {payload: input.value}, () => { 
        console.log("server is done!");
    });
    input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);