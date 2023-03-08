const controlCommands = require("./commands/control"),
    readCommands = require("./commands/read"),
    setCommands = require("./commands/set"),
    stateStream = require("./streams/state"),
    videoStream = require("./streams/video"),
    commander = require("./exchanger");

module.exports = {
    sdk: {
        control: controlCommands,
        read: readCommands,
        set: setCommands,
        receiver: {
            state: stateStream,
            video: videoStream,
        },
        command: (arg) => commander.send(arg),
    },
};
