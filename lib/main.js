const { ActionButton } = require('sdk/ui/button/action');
const { Panel } = require('sdk/panel');

var data = require('sdk/self').data;

console.debug('Starting GetUserMedia Test Addon');

var panel = new Panel({
  contentURL: data.url('panel.html'),
  contentScriptFile: [data.url('panel.js')],
  contentScriptWhen: 'end',
  contentScriptOptions: {},
  onError: function(e) {
    console.info('Panel Error:', e.message, e.name);
  }
});

panel.port.on('message', function(data) {
  console.info('Panel message:', data)
});

panel.on('show', function(e) {
  console.info('Panel Showing');
  panel.port.emit('message', 'test');
});

var button = new ActionButton({
  id: 'test-getusermedia-addon-button',
  label: 'test-getusermedia-addon',
  icon: './blank_phone.png',
  onClick: function(state) {
    panel.show({
      width: 300,
      height: 100,
      position: button,
      focus: true
    });
  }
});
