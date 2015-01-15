self.port.on('message', function(data) {
  if(data == 'test') {
    self.port.emit('message', 'testing');
    navigator.mozGetUserMedia({ audio: true, video: false }, function(m) { console.info('got user usermedia', m) }, function(e) { console.info('failed to get usermedia', e) });    
  }
});
