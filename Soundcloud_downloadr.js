url = process.argv[2]
if(typeof url == 'undefined') {
      console.log("loser! need a url")
            process.exit(1);
}

savedir = "/Users/thorsten/Desktop/Soundcloudsz";
SoundRain = require('soundrain');
var Song = new SoundRain(url, savedir);
Song.on('error', function(err) {
            if(err) throw err;
}).on('done', function(file) {
            console.log(file);
});
