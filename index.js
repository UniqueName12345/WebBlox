const toolbox = {
    "kind": "flyoutToolbox",
    "contents": [
      {
        "kind": "block",
        "type": "events_when_script_ran",
      },
      {
        "kind": "block",
        "type": "window_alert",
      },
    ],
}

const workspace = Blockly.inject('blocklyDiv', {toolbox: toolbox});