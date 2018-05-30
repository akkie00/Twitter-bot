console.log("The follow bot is starting");

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

// this sets the time at which the tweet needs to be posted.
// setInterval(tweetIt, 1000*10);

var stream = T.stream('user');

stream.on('follow', followed);

function followed(eventMsg) {
    console.log("The event for following")
    var name = eventMsg.source.name;
    var screenName = eventMsg.source.screen_name;
    tweetIt('.@' + screenName + ' do you like technical stuff?');
}


function tweetIt(txtFromEvent) {

    // var random = Math.floor(Math.random() * 100);
    var tweet = {
        status: txtFromEvent
    }

    T.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response) {

        // console.log(data);
        if (err) {
            // console.log(err);
        }
        else {
            console.log("It works");
        }
    }
}

tweetIt();