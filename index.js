const { exec } = require('child_process');

let timer = 15

exec('powershell -c (New-Object Media.SoundPlayer "outro.wav").PlaySync()')
//shutdown 1 second later to print 0 before shutdown
exec('shutdown -s -t ' +(timer + 1) );

console.log(timer--)
setInterval(()=>{
    console.log(timer--)
    if(timer === 0);
},1000)
