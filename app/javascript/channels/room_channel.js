import consumer from "./consumer"

const appRoom = consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log('connected');
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(template) {
    console.log(template);
    console.log(typeof template);
    const timeline = document.getElementById('timeline');
    timeline.innerHTML += template;

    const timelineHight = $('#timeline').innerHeight();
    $('body,html').animate({scrollTop: timelineHight},400);
    // Called when there's incoming data on the websocket for this channel
  },

  speak: function(message) {
    console.log(message);
    return this.perform('speak', {message: message});
  }
});

document.addEventListener("DOMContentLoaded",function(){
  const button = document.getElementById('button');
  button.addEventListener('click',function(){
    const input = document.getElementById('chat-input');
    appRoom.speak(input.value);
    input.value="";
  });
});