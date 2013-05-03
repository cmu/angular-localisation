'use strict';

angular.module('angularLocalisationApp')
  
  .filter('i18n', ['$rootScope', function($rootScope) {
    return function (input) {
      var translations = {
        // DEUTSCH
        'de' : {
          'HELLO_WORLD' : 'Hallo Welt',
          'GERMAN' : 'Deutsch',
          'ENGLISH' : 'Englisch',
          'FRENCH' : 'Französisch',
          'DUTCH' : 'Niederländisch'
        },
        
        // ENGLISCH
        'en' : {
          'HELLO_WORLD' : 'Hello World',
          'GERMAN' : 'german',
          'ENGLISH' : 'english',
          'FRENCH' : 'french',
          'DUTCH' : 'dutch'
        },
        
        // FRANZÖSISCH
        'fr' : {
          'HELLO_WORLD' : 'Bonjour tout le monde',
          'GERMAN' : 'allemand',
          'ENGLISH' : 'anglais',
          'FRENCH' : 'français',
          'DUTCH' : 'hollandais'
        },
        
        // NIEDERLÄNDISCH
        'nl' : {
          'HELLO_WORLD' : 'Hallo mensen',
          'GERMAN' : 'duits',
          'ENGLISH' : 'engels',
          'FRENCH' : 'frans',
          'DUTCH' : 'nederlands'
        }
      },
      currentLanguage = $rootScope.currentLanguage || 'de';

      return translations[currentLanguage][input];
    }
  }]);
