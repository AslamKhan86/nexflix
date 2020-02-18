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


<img width="303" alt="Screen Shot 2020-02-18 at 9 47 44 PM" src="https://user-images.githubusercontent.com/2673114/74741969-b72e6880-5298-11ea-819b-2da51efebbd0.png">
<img width="303" alt="Screen Shot 2020-02-18 at 9 48 13 PM" src="https://user-images.githubusercontent.com/2673114/74741975-bc8bb300-5298-11ea-8df9-78d8439bc226.png">
<img width="303" alt="Screen Shot 2020-02-18 at 9 49 17 PM" src="https://user-images.githubusercontent.com/2673114/74741980-c0b7d080-5298-11ea-8c7f-d97ce0ed0417.png">
<img width="305" alt="Screen Shot 2020-02-18 at 9 48 51 PM" src="https://user-images.githubusercontent.com/2673114/74741997-ca413880-5298-11ea-9fd8-cff3dfc2bfc1.png">
<img width="306" alt="Screen Shot 2020-02-18 at 9 49 26 PM" src="https://user-images.githubusercontent.com/2673114/74742009-d2997380-5298-11ea-88fa-06d0a1814319.png">
