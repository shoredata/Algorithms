// flickr-fetcher.js
var FlickrFetcher;

FlickrFetcher = {
    photoObjToURL: function(photoObj) {
        return [ 'https://farm',
            photoObj.farm, '.staticflickr.com/', 
            photoObj.server, '/',
            photoObj.id, '_',
            photoObj.secret, '_b.jpg'
        ].join('');
    },

    transformPhotoObj: function(photoObj) {
        return {
            title: photoObj.title,
            url:   FlickrFetcher.photoObjToURL(photoObj)
        };
    },
    
    // fetchFlickrData: function(apiKey, fetch) {
    //     var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='
    //             + apiKey + '&text=pugs&format=json&nojsoncallback=1'
    //     return fetch(url).then(function(data) {
    //         return data;
    //     });
    // }

    // Running the tests again, everything still passes. But I would also like to refactor my test 
    //  code. Mocha actually provides two ways to handle asynchronous code. The first is the done() 
    //  function as we saw before. The second is specifically for Promises. If you return a Promise 
    //  from your test, Mocha will automatically wait for it to either resolve or reject:

    fetchFlickrData: function(apiKey, fetch) {
        var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='
                + apiKey + '&text=pugs&format=json&nojsoncallback=1'
        return fetch(url);
    },
    
    
    // There is one final thing to test before I can declare the FlickrFetcher module done: 
    //  Do the pieces fit together OK? Can I make a network call, get back the results, and 
    //  transform them into the format I want? It would be most convenient if I could do all 
    //  this with one function.

    fetchPhotos: function(apiKey, fetch) {
        return FlickrFetcher.fetchFlickrData(apiKey, fetch).then(function(data) {
            return data.photos.photo.map(FlickrFetcher.transformPhotoObj);
        });
    }    

};


// The first thing I’ll do is wrap a conditional around the module.exports so that 
//  the browser won’t throw an error if I just include the code in a web page. I 
//  could, of course, use something like Browserify or Webpack to package these up 
//  (and if you can, I highly recommend you do), but it’s nice to make them work 
//  either way. If I just want to throw the code in something like CodePen, for 
//  example, I’d prefer not to do a full Webpack setup:


if ((typeof module !== 'undefined') && (typeof module.exports !== 'undefined')) {
    module.exports = FlickrFetcher;
}
