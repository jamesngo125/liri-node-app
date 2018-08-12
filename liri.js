
require("dotenv").congif();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var Request = require('request');
var fs = require('fs');
var keys = require('./keys');
var spotifyKey = new Spotify(keys.spotify);
var twitterKey = new Twitter(keys.twitter);
var args = process.argv.slice(2);
var command = args[0];
var search = args[1];
function myTweets() {
    var params = {
