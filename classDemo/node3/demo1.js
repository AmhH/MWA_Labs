/*var moment = require('moment');
console.log(moment().format('MMMM, dddd, ha:mm'));
const url = require('url');
const my = url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash', true);
console.log(my);
const urlO = {
    protocol: 'https:',
    host: 'www.mum.eddu',
    search: '?q=CS572',
    pathname: '/search'
};
console.log(url.format(urlO));

const http = require('http');
const queryS = require('querystring');

function onRequest(req, res){
    let post = "";
    req.setEncoding('utf8');
    req.on('data', (chunk)=>post += chunk);
    req.on('end', ()=>{
                    const myTxt = queryS.parse(post).text;
                });
    res.end();
}
http.createServer(onRequest).listen(8888);
console.log('Server has started on port');

var fetch =   require('node-fetch');
const post = fetch('http://mywebsite.com/API');

post.then(data => data.json())
    .then(data => {console.log(data);})
    .catch(err => { console.log(err);})

var pizza = function(every){
    return new Promise(function(resolve, reject){
            if(every){
                resolve('This is nice');
            } else {
                reject('No piza today');
            }
    });
}

pizza('').then(data => console.log(data))
       .catch(err => console.log(err));
console.log('I will run immediatley after calling giveMePizza() and before any result');/

var fetch =   require('node-fetch');
const weather = fetch('http://weather.com/getWeatherAPI');
const tweet = fetch('http://tweeter.com/getTweetsAPI');

Promise.all([weather, tweet])
       .then(res => {console.log(res);});

function* give(){
    let i = 0;
    yield i;
    i++;
    yield i;
    i++;
    yield i;
}
const my = give();
console.log(my.next());
console.log(my.next());
console.log(my.next());
console.log(my.next());

function* gen(){
    yield `cs572 `;
    yield `is`;
    yield `nice course`;
}

const g = gen();

for(const w of g){
    console.log(w);
}

var fetch =   require('node-fetch');
function myAjax(url){
    fetch(url).then(data => data.json())
              .then(data => dataGen.next(data));
}
function* steps(){
    console.log('fetching user');
    const userId = yield myAjax('http://api/users');

    console.log('fetching course');
    const courseId = yield myAjax(`http://api/courses/?id=${userId}`);

    console.log('fetching grade');
    const grade = yield myAjax(`http://api/grade/?course=${courseId}`);
}
const dataGen = steps();
dataGen.next();

var studied = false;
var will = function(){
    return new Promise(function(res, rej){
        if(studied) res('pass');
        else rej(new Error('fail'));
    });
};
async function askMe(){
    try{
        console.log('Before');
        let result = await will();
        console.log(result);
        console.log('After');
    } catch( error ){
        console.log(error.message);
    }
}

askMe();
console.log('Finish');

const {promisify} = require('util');
const fs = require('fs');

const readFileAsync = promisify(fs.readFile);

readFileAsync('./package.json', {encoding: 'utf8'})
            .then(txt => console.log('CONTENT:', txt))
            .catch(err => console.log('ERROR:', err));*/

const Rx = require('@reactivex/rxjs');
/*var source = Rx.Observable.create(function (observer){
                        observer.next('CS572');
                        observer.complete();
                    });
var subscription = source.subscribe(x => console.log(x),
                                   err => console.log(err),
                                   () => console.log("done"));*/
Rx.Observable.of(1,2,3,4,5,6)
             .map(n => n+3)
             .subscribe(
                 x => console.log(x),
                 null,
                 () => console.log("Done")
             );