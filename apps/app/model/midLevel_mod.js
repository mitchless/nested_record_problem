App.MidLevel = SC.Record.extend({
  bProperty: SC.Record.attr(String),

  bottomLevel: SC.Record.toOne(App.BottomLevel, { isNested: YES })
});