App.mainPageController = SC.Object.create({

  addLeftButtonPressed: function() {
    var accum = App.get('accumulator'),
      uberObj = App.uberObjectLeftController.get('content'),
      subObjs = uberObj ? uberObj.get('subObjects') : null,
      newObj;

    if (subObjs) {
      newObj = {
        data: accum
      };

      subObjs.pushObject(newObj);

      App.set('accumulator', accum + 1);
    }
  },

  addRightButtonPressed: function() {
    var accum = App.get('accumulator'),
      uberObj = App.uberObjectRightController.get('content'),
      subObjs = uberObj ? uberObj.get('subObjects') : null,
      newObj,
      moreData = 'This is a string' + accum;

    if (subObjs) {
      newObj = {
        data: accum,
        subSubObject: {
          moreData: moreData
        }
      };

      subObjs.pushObject(newObj);

      App.set('accumulator', accum + 1);
    }
  },

  buttonAPressed: function() {

    App.bottomlevelcontroller.get('content');

    var midlevel = App.toplevelcontroller.get('midLevel');
    var o, store, sk, objects = [];
    o = midlevel.objectAt(2);
    store = o.get('store');
    sk = o.get('storeKey');
    objects.push(store.readDataHash(sk));

    midlevel.removeAt(2);

    midlevel.replace(1, 0, objects);
    //this.getPath('parentView.listView').select(SC.IndexSet.create(1, 1));
  },

  buttonBPressed: function() {
    App.bottomlevelcontroller.get('content');

    var midlevel = App.toplevelcontroller.get('midLevel');
    midlevel.removeAt(0);
  },

  buttonCPressed: function() {
    App.bottomlevelcontroller.get('content');

    //var midlevel = App.store.createRecord(App.MidLevel, { bProperty: 'bbbBBBbbb' });
    var midlevel = { bProperty: 'bbbBBBbbb', bottomLevel: { cProperty: 'cccCCCccc' } };
    //var bottomlevel = App.store.createRecord(App.BottomLevel, { cProperty: 'cccCCCccc' });
    //var bottomlevel = { cProperty: 'cccCCCccc' };

    //midlevel.set('bottomLevel', bottomlevel);
    App.toplevelcontroller.get('midLevel').pushObject(midlevel);
  }

});