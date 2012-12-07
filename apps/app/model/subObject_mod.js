sc_require('model/subSubObject_mod');

App.SubObjectLeft = SC.Record.extend({

  data: SC.Record.attr(Number)

});

App.SubObjectRight = SC.Record.extend({

  data: SC.Record.attr(Number),

  subSubObject: SC.Record.toOne(App.SubSubObjectRight, { isNested: YES }),

  display: function() {
    var data = this.get('data'),
      subSubObject = this.get('subSubObject'),
      display = '';

    display = data.toString(10) + '-' + subSubObject.get('moreData');
    return display;
  }.property('data', 'subSubObject').cacheable()


});
