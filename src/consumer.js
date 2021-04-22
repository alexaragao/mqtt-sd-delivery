var readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const mqtt = require('mqtt');

const broker = mqtt.connect('mqtt://test.mosquitto.org/');

console.log("Aguarde a conexão com o broker.");

broker.on('connect', () => {
  broker.subscribe("mqtt_sd_microproject_5", () => {
      console.log("mqtt_sd_microproject_5 subscribed!");
  });
});

broker.on('message', (topic, message) => {
  const response = message.toString();
  
  console.log(response);
});

rl.on('line', line => {
  broker.publish("mqtt_sd_microproject_5", line + "\n");

  if (line === "exit") {
    broker.publish("mqtt_sd_microproject_5", "exit\n");
    broker.unsubscribe("mqtt_sd_microproject_5");
    rl.close();
  }
});