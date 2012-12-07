App.UberObjectLeft = SC.Record.extend({

  name: SC.Record.attr(String),
  subObjects: SC.Record.toMany(App.SubObjectLeft, { isNested: YES })

});

App.UberObjectRight = SC.Record.extend({

  name: SC.Record.attr(String),
  subObjects: SC.Record.toMany(App.SubObjectRight, { isNested: YES })

});
