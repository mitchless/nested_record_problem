App.TopLevel = SC.Record.extend({
  aProperty: SC.Record.attr(String),

  midLevel: SC.Record.toMany(App.MidLevel, { isNested: YES })
});