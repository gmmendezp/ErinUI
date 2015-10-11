function createWebSocket(host, inputPath, outputPath, receiveCallback) {
  var stompClient = null;

  function doConnect() {
    var socket = new SockJS(host);
    stompClient = Stomp.over(socket);

    stompClient.connect({}, function (frame) {
      console.log('Connected: ' + frame);
      stompClient.subscribe(outputPath, receiveCallback);
    });
  }

  function doDisconnect() {
    if (stompClient != null) {
      stompClient.disconnect();
    }
    console.log("Disconnected");
  }

  function doSend(json) {
    stompClient.send(inputPath, {}, JSON.stringify(json));
  }

  return {send: doSend, connect: doConnect, disconnect: doDisconnect}
}

