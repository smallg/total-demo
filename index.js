/**
 * Created by wpguo on 10/23/2015.
 */
function main(){
    F.route('/', function(){
        this.plain('HOMEPAGE');
    });
    F.http('debug');
}

require('http').get('http://modules.totaljs.com/total.js/v1.9.0/total.js', function(res) {
    var buffer = [];
    res.on('data', function(buf) { buffer.push(buf.toString('utf8')); });
    res.on('end', function() { eval(buffer.join('')); main(); });
});