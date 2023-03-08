const commander = require("../exchanger");

const speed = (speed) => commander.send(`speed ${speed}`);

const rc = (x, y, z, yaw) => commander.send(`rc ${x} ${y} ${z} ${yaw}`);

const wifi = (ssid, password) => commander.send(`wifi ${ssid} ${password}`);

const mon = () => commander.send("mon");

const moff = () => commander.send("moff");

module.exports = { speed, rc, wifi, mon, moff };
