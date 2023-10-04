javascript.javascriptGenerator.forBlock['window_alert'] = function(block, generator) {
  var value_contents = generator.valueToCode(block, 'contents', javascript.Order.ATOMIC);
  var code = 'window.alert(' + value_contents + ');';
  return code;
};