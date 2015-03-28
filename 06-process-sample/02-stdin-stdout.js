process.stdin.setEncoding('utf8');
process.stdout.write('Escreva algo: ');

process.stdin.on('data', function(data) {
  process.stdout.write('Lido: ' + data);
});
