const privateKey = fs.readFileSync('private.key');
const token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256'});
