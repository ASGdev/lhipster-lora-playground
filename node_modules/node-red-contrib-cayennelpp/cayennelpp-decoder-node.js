var decoder = require('./decode.js');

module.exports = function(RED) {

  function CayenneLPPDecoderNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;

    node.on('input', function(msg) {
      msg.payload = decoder.decodeCayenneLpp(msg.payload);
      node.send(msg);
    });
  }
  RED.nodes.registerType("cayennelpp-decoder", CayenneLPPDecoderNode);
}