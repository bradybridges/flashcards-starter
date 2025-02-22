const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Game = require('../src/Game');

describe('Game', () => {
  it('should be function', () => {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('It should have a cards property', () => {
    const game = new Game();
    expect(game.cards[0]).to.be.an.instanceof(Card);
    expect(game.cards.length).to.equal(30);
  });

  it('should have a deck property', () => {
    const game = new Game();
    expect(game.deck).to.be.an.instanceof(Deck);
    expect(game.deck.countCards()).to.equal(30);
  });

  it('should have a round property', () => {
    const game = new Game();
    expect(game.round).to.be.an.instanceof(Round);
    expect(game.round.deck.countCards()).to.equal(30);
  });
});