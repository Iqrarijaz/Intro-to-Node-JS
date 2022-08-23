const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('FullyCharged', () => {
  console.log('Your laptop is fully charged kindly unpluged it');
  setTimeout(() => {
    console.log(' Reminder: kindly Unpluged your laptop');
  }, 4000);
});
myEmitter.emit('FullyCharged');