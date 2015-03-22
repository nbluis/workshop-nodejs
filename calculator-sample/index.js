var   sys = require("sys"),
      stdin = process.openStdin();

console.log('This is a simple calculator, enter the math expression: (ex. 1 + 2) ');
process.stdout.write("> ");

stdin.addListener("data", function(d) {
	var expression = d.toString().substring(0, d.length - 1);
	try {
		console.log(eval(expression));
	} catch(e) {
		console.error('Invalid expression: ' + expression);
	}
	process.stdout.write("> ");
});
