// CLIENT SIDE JS CODE!!!

// Open websocket connection from the browser to the server
const socket = new WebSocket('ws://localhost:3000/chat/people')
//ask user name to user
const username = prompt('Enter a user name (no spaces)')

//if the connection is successful
socket.onopen = (ev) => {
  console.log('WEB SOCKET OPENED')
  //sent the user name and type to ws indicating that this person is joining to the room
  const data = {type: 'join', name: username}
  socket.send(JSON.stringify(data))
}

//for each message recived from server
socket.onmessage = (evt) => {
  console.log('MESSAGE FROM WEBSOCKET', evt.data)
  let msg = JSON.parse(evt.data);
  if (msg.type === 'note') {
    const item = document.createElement('li');
    const text = document.createElement('i');
    text.textContent = msg.text;
    item.appendChild(text);
    document.querySelector('#messages').appendChild(item);
  } else if(msg.type === 'chat') {
    const item = document.createElement('li');
    const text = document.createElement('i');
    text.textContent = msg.text;
    item.appendChild(text);
    document.querySelector('#messages').appendChild(item);
  }
}


//if the connection fails
socket.onerror = (evt) => console.log('WEBSOCKET ERROR', evt);

//if the connection is close
socket.onclose = (evt) => console.log('WEBSOCKET HAS BEEN CLOSED')

// When submit form
document.querySelector('#msg-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.querySelector('#messageInput'); 
  const payload = JSON.stringify({type: 'chat', text: input.value})
  socket.send(payload);
  input.value = '';
  console.log('FORM SUBMITTED')
})
