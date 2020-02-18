# nexflix
Nexus + Flix  - Nexus team coming up with their version of Netflix


Description
--------

An app build to search the movies in the. When the movies are searched that keyword is searched for all the movies matching in http://www.omdbapi.com/

A list of the matched movies is displayed 

On click of each movie another call to http://www.omdbapi.com/ is made to get the details of that movie. 

Installing and running
--------
Please update the file [config.js] with your [OMDb API key](http://www.omdbapi.com/):

```
export default {
  "apiKey": "INSERT API KEY HERE"
};
```

Then execute

```
yarn
yarn start
```
