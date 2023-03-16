const commander = require("../exchanger");

const speed = (speed) => commander.send(`speed ${speed}`);

const rc = (x, y, z, yaw) => commander.send(`rc ${x} ${y} ${z} ${yaw}`);

const wifi = (ssid, password) => commander.send(`wifi ${ssid} ${password}`);

const mon = () => commander.send("motoron");

const moff = () => commander.send("motoroff");

module.exports = { speed, rc, wifi, mon, moff };
