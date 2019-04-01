// flickr-fetcher-spec.js
'use strict';
var expect = require('chai').expect;

// started from:
// https://jrsinclair.com/articles/2016/gentle-introduction-to-javascript-tdd-intro/

// 1. Tests run using Node, this means that we import modules using the node-style require().

// 2. Uing BDD, a variation of TDD
// ‘Behaviour Driven Development’ (BDD) style to write the tests. 
// This is a variation on TDD where tests are written in the form: 
//  Describe [thing]. It should [do something]. The [thing] can be a module, 
//  or a class, or a method, or a function. Mocha includes built-in functions 
//  like describe() and it() to make writing in this style possible.

// 3. The expect() chain does the checking. In this case checking simply that module is not 
//  undefined. Most of the time though, the pattern I will use is 
//   expect(actualValue).to.equal.(expectedValue);.

// notes: 
// - had to put test files into test folder
// - npm install --save       for both mocha and chai
// - had to modify the require path below to point to parent folder as
//    mocha wants a test folder in npm project folder, and all -spec js files will be in test
// - had to modify package.json test line to refer to mocha

// TDD FULL CYCLE: Red, Green, Refactor


var FlickrFetcher;
describe('FlickrFetcher', function() {
    it('should exist', function() {
        FlickrFetcher = require('./../flicker-fetcher.js');
        expect(FlickrFetcher).to.not.be.undefined;
    });
});

// // flickr-fetcher-spec.js
// var FlickrFetcher = require('./flickr-fetcher.js');

// Used expect(actual).to.eql(expected); here rather than expect(actual).to.equal(expected);. 
//  This tells Chai to to check that every single value inside actual matches every single 
//  value inside expected. The rule of thumb is, use equal when comparing numbers, strings, 
//  or booleans, and use eql when comparing arrays or objects.


// more tests, todo:
// I would now write tests to cover all the crazy things someone might pass this function. For example:
// What should happen if someone passes a string instead of an object?
// What should happen if someone passes no parameters?
// What should happen if someone passes an object that has the wrong property names?
// What should happen if someone passes in an object with the right property names but the values aren’t strings?

describe('#photoObjToURL()', function() {
    it('should take a photo object from Flickr and return a string', function() {
        var input = {
            id:       '24770505034',
            owner:    '97248275@N03',
            secret:   '31a9986429',
            server:   '1577',
            farm:     2,
            title:    '20160229090898',
            ispublic: 1,
            isfriend: 0,
            isfamily: 0
        };
        var expected = 'https://farm2.staticflickr.com/1577/24770505034_31a9986429_b.jpg';
        var actual = FlickrFetcher.photoObjToURL(input);
        expect(actual).to.eql(expected);

        input = {
            id:       '24770504484',
            owner:    '97248275@N03',
            secret:   '69dd90d5dd',
            server:   '1451',
            farm:     2,
            title:    '20160229090903',
            ispublic: 1,
            isfriend: 0,
            isfamily: 0
        };
        expected = 'https://farm2.staticflickr.com/1451/24770504484_69dd90d5dd_b.jpg';
        actual = FlickrFetcher.photoObjToURL(input);
        expect(actual).to.eql(expected);
    });
});


// Take the list of photo objects that Flickr gives us and transform it into a list of 
//  objects that have just the information that I want. If I’m going to process a list, 
//  that will probably involve some kind of map operation, so I want to create a function 
//  that will just process one object at a time. That gives me another nice, small, 
// testable unit of code to test.

describe('#transformPhotoObj()', function() {
    it('should take a photo object and return an object with just title and URL', function() {
        var input = {
                id:       '25373736106',
                owner:    '99117316@N03',
                secret:   '146731fcb7',
                server:   '1669',
                farm:     2,
                title:    'Dog goes to desperate measure to avoid walking on a leash',
                ispublic: 1,
                isfriend: 0,
                isfamily: 0
            },
            expected = {
                title: 'Dog goes to desperate measure to avoid walking on a leash',
                url:   'https://farm2.staticflickr.com/1669/25373736106_146731fcb7_b.jpg'
            },
            actual = FlickrFetcher.transformPhotoObj(input);
        expect(actual).to.eql(expected);

        input = {
            id:       '24765033584',
            owner:    '27294864@N02',
            secret:   '3c190c104e',
            server:   '1514',
            farm:     2,
            title:    'the other cate',
            ispublic: 1,
            isfriend: 0,
            isfamily: 0
        };
        expected = {
            title: 'the other cate',
            url:   'https://farm2.staticflickr.com/1514/24765033584_3c190c104e_b.jpg'
        }
        actual = FlickrFetcher.transformPhotoObj(input);
        expect(actual).to.eql(expected);

    });
});