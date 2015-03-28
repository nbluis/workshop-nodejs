var fs = require('fs');

fs.stat('/tmp/file.txt', function(error, stat) {
	console.log({
		size: stat.size,
		date: stat.atime,
		isFile: stat.isFile(),
		isDirectory: stat.isDirectory(),
		isSymlink: stat.isSymbolicLink()
	})
});
