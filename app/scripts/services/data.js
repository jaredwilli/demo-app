'use strict';

angular.module('appApp').factory('model', [
  '$http',
  function($http) {
    /**
     * So for some reason doing an $http.get() wasn't working
     * not sure why, but I would normally do that to get the data
     * from the data.json file. Like this:

      return {
        get: function() {
          return $http.get(data.json).success(function(resp) {
            console.log(resp);
          });
        }
      }

     * I use services for communicating with the data storage from
     * a controller. There was some funky stuff going on where things
     * worked then they didn't so I just did this instead, but you
     * should get the idea.

     * I also would've done the bonus too, had this been working
     * and I would've had a couple methods for getting the data
     * for each route.
     */

    return {
      'meta': {
        'start_date': '2014-08-15',
        'profile_name': 'piqora',
        'profile_image': 'https://img-cdn-5.piqora.com/125/pa/piqora_1383674726'
      },
      'result': 'success',
      'data': [{
        'profile_metrics': [{
          'label': 'Total Pins',
          'value': 8830
        },{
          'label': 'Total Boards',
          'value': 70
        },{
          'label': 'Total Followers',
          'value': 245499
        },{
          'label': 'Total Following',
          'value': 300
        }],
        'primary_metrics': [{
          'label': 'Profile Pins Posted In The Past 7 Days',
          'value': 14
        },{
          'label': 'Interactions On All Profile Pins In The Past 7 Days',
          'value': 37
        }],
        'items': [{
          'image_url': 'https://img-cdn-2.piqora.com/550/p/499e7cebfb58a6e5ed40ea5684b2cb1f.jpg',
          'repins': 211,
          'likes': 15,
          'comments': 2,
          'create_date': '2012-12-03 18:09:33',
          'tags': 'red, green'
        },{
          'image_url': 'https://img-cdn-2.piqora.com/550/p/499e7cebfb58a6e5ed40ea5684b2cb1f.jpg',
          'repins': 357,
          'likes': 68,
          'comments': 1,
          'create_date': '2012-12-03 18:17:05',
          'tags': 'blue'
        },{
          'image_url': 'https://img-cdn-2.piqora.com/550/p/499e7cebfb58a6e5ed40ea5684b2cb1f.jpg',
          'repins': 148,
          'likes': 22,
          'comments': 0,
          'create_date': '2012-12-03 18:19:37',
          'tags': 'yellow, green'
        },{
          'image_url': 'https://img-cdn-2.piqora.com/550/p/499e7cebfb58a6e5ed40ea5684b2cb1f.jpg',
          'repins': 223,
          'likes': 12,
          'comments': 1,
          'create_date': '2012-12-04 08:00:56',
          'tags': 'red, yellow, green'
        },{
          'image_url': 'https://img-cdn-2.piqora.com/550/p/499e7cebfb58a6e5ed40ea5684b2cb1f.jpg',
          'repins': 15,
          'likes': 0,
          'comments': 1,
          'create_date': '2012-12-04 22:50:08',
          'tags': 'green'
        },{
          'image_url': 'https://img-cdn-2.piqora.com/550/p/499e7cebfb58a6e5ed40ea5684b2cb1f.jpg',
          'repins': 401,
          'likes': 113,
          'comments': 5,
          'create_date': '2012-12-05 10:50:46',
          'tags': 'red'
        },{
          'image_url': 'https://img-cdn-2.piqora.com/550/p/499e7cebfb58a6e5ed40ea5684b2cb1f.jpg',
          'repins': 318,
          'likes': 23,
          'comments': 2,
          'create_date': '2012-12-05 13:31:30',
          'tags': 'yellow'
        },{
          'image_url': 'https://img-cdn-2.piqora.com/550/p/499e7cebfb58a6e5ed40ea5684b2cb1f.jpg',
          'repins': 251,
          'likes': 49,
          'comments': 3,
          'create_date': '2012-12-05 15:19:25',
          'tags': 'red blue'
        },{
          'image_url': 'https://img-cdn-2.piqora.com/550/p/499e7cebfb58a6e5ed40ea5684b2cb1f.jpg',
          'repins': 39,
          'likes': 2,
          'comments': 0,
          'create_date': '2012-12-05 16:55:07',
          'tags': 'red orange'
        },{
          'image_url': 'https://img-cdn-2.piqora.com/550/p/499e7cebfb58a6e5ed40ea5684b2cb1f.jpg',
          'repins': 26,
          'likes': 8,
          'comments': 7,
          'create_date': '2012-12-05 16:57:31',
          'tags': 'red'
        }]
      }]
    };
  }
]);
