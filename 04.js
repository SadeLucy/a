var fs = require('fs');
var frames = [];
for(var i =1;i<7;i++){
	frames[frames.length]= fs.readFileSync(`./frames/${i}.txt`,'utf8');
	
}
var index = 0 ;
var render = () => {
	process.stdout.write('\033[0f');
	process.stdout.write('\033[0f');

	index = index === frames.length ? 0 : index;
	process.stdout.write(frames[index++]);

}
setInterval(render, 300);
