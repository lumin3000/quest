var daemon = require('daemon');

require("./debug");


daemon.daemonize('tmp/stdout-and-stderr.log', 'tmp/stop.pid', function (err, pid) {
    //
    // We are now in the daemon process
    //
    if (err) {
      return console.log('Error starting daemon: ' + err);
    }

    console.log('Daemon started successfully with pid: ' + pid);
  });
