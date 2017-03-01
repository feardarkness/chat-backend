/**
 * Created by fear on 19-02-17.
 */
import debugModule from 'debug';
import TwitterNodeClient from 'twitter-node-client';
import twitterConfigs from '../configurations/twitter-config';

const Twitter = TwitterNodeClient.Twitter;
const twitter = new Twitter(twitterConfigs);
const debug = debugModule('twitter-service');

module.exports.searchByTag = (tag, quantity = 10) => {
  debug(tag, quantity);
  return new Promise((resolve, reject) => {
    twitter.getSearch({ q: `#${tag}`, count: quantity },
      (err, response, body) => {
        debug(body);
        reject(err);
      }, (data) => {
        debug(data);
        resolve(JSON.parse(data));
      });
  });
};

