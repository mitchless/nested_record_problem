App.UberObjectLeft = SC.Record.extend({

  name: SC.Record.attr(String),
  subObjects: SC.Record.toMany(App.SubObjectLeft)

});