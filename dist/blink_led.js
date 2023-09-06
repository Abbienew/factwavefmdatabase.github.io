var led_pin = 5;
var jonny_five = require("jonny-five");
var ardunio_board = new jonny_five.Board();


console.log("LED已經開始閃爍！");
var led = new jonny_five.Led(led_pin);
led.blink(100);

var  express = require ('express');
app = express();
server = require ('http').createServer(app);
io = require ('socket.io').listen(server);
var SerialPort = require("serialport") //.SerialPort

var SerialPort = new SerialPort("/COM4", { baudRate:9600 });
server.listen(8080);

