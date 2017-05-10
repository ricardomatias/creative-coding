'use strict';

var story = {
  start: '#[hero:#character#]story#',
  character: [ 'chimera', 'dragon' ],
  story: 'A #adj# #hero# fights the #adj# monster. Go #hero# go!',
  adj: [ 'dark', 'sleepy', 'quiet' ]
};

var grammar;

function setup() {
  noCanvas();

  grammar = tracery.createGrammar(story);

  var result = grammar.flatten('#start#');

  console.log(result);
}
