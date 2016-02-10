describe('google', it => {
  it.should.have('search bar').can.be.find.by('#lst-ib');
  it.can.goto('result page', driver => {
    return driver
      .setValueOn('search bar', 'appwalker')
      .click('button.lsb')
      .pause(2000);
  });
});

describe('result page', it => {
  it.has('Images').by('=Images');
  it.has('Maps').by('=Maps');
  it.has('Videos').by('=Videos');
  it.can.goto('images page', d => {
    return d.clickOn('Images').pause(2000);
  });
  it.can.goto('videos page', d => {
    return d.clickOn('Videos').pause(2000);
  });
});

describe('images page');
describe('videos page');
