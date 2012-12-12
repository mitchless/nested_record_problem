// ==========================================================================
// Project:   App - mainPage
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals App */

// This page describes the main user interface for your application.  
App.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    childViews: 'nestStoreButton commitStoreButton theLists'.w(),

    nestStoreButton: SC.ButtonView.extend({
      layout: { left : 0, top: 0, width: 100, height: 24 },
      title: 'Nest Store',
      target: 'App.mainPageController',
      action: 'nestStorePressed'
    }),

    commitStoreButton: SC.ButtonView.extend({
      layout: { left : 110, top: 0, width: 100, height: 24 },
      title: 'Commit Store',
      target: 'App.mainPageController',
      action: 'commitStorePressed'
    }),

    theLists: SC.View.extend({
      layout: { left: 0, top: 30, width: 900 },
      childViews: 'nameLeftLabel addLeftButton selectedLeftLabel scrollingLeftList nameRightLabel addRightButton selectedRightLabel scrollingRightList'.w(),

      nameLeftLabel: SC.LabelView.extend({
        layout: { left: 0, top: 0, width: 200, height: 24 },
        valueBinding: 'App.uberObjectLeftController.name'
      }),

      addLeftButton: SC.ButtonView.extend({
        layout: { left: 0, top: 30, width: 100, height: 24 },
        title: 'Add To Left',
        target: 'App.mainPageController',
        action: 'addLeftButtonPressed'
      }),

      selectedLeftLabel: SC.LabelView.extend({
        layout: { left: 110, top: 30, width: 290, height: 24 },
        valueBinding: 'App.selectedSubObjectsLeftController.data'
      }),

      scrollingLeftList: SC.ScrollView.extend({
        layout: { left: 0, top: 60, width: 300, height: 800 },
        contentView: SC.ListView.extend({
          rowHeight: 30,
          contentBinding: 'App.subObjectsLeftController.arrangedObjects',
          selectionBinding: 'App.subObjectsLeftController.selection',
          contentValueKey: 'data',
          canReorderContent: YES
        })
      }),

      nameRightLabel: SC.LabelView.extend({
        layout: { left: 400, top: 0, width: 200, height: 24 },
        valueBinding: 'App.uberObjectRightController.name'
      }),

      addRightButton: SC.ButtonView.extend({
        layout: { left: 400, top: 30, width: 100, height: 24 },
        title: 'Add To Right',
        target: 'App.mainPageController',
        action: 'addRightButtonPressed'
      }),

      selectedRightLabel: SC.LabelView.extend({
        layout: { left: 510, top: 30, width: 290, height: 24 },
        valueBinding: 'App.selectedSubObjectsRightController.display'
      }),

      scrollingRightList: SC.ScrollView.extend({
        layout: { left: 400, top: 60, width: 300, height: 800 },
        contentView: SC.ListView.extend({
          rowHeight: 30,
          contentBinding: 'App.subObjectsRightController.arrangedObjects',
          selectionBinding: 'App.subObjectsRightController.selection',
          contentValueKey: 'display',
          canReorderContent: YES
        })
      })

    }),

    listView: SC.ListView.extend({
      layout: { left: 0, top: 0, width: 200, height: 100 },
      contentBinding: 'App.midlevelcontroller.content',
      selectionBinding: 'App.midlevelcontroller.selection',
      contentValueKey: 'bProperty',
      rowHeight: 30
    }),

    labelView: SC.LabelView.extend({
      layout: { left: 250, top: 0, width: 200, height: 50 },
      valueBinding: 'App.bottomlevelcontroller.cProperty'
    }),

    buttonViewA: SC.ButtonView.extend({
      layout: { left: 0, top: 150, width: 100, height: 20 },
      title: 'Click me A',
      /*
      target: 'App.mainPageController',
      action: 'buttonAPressed'
       */
      action: function() {

        App.bottomlevelcontroller.get('content');

        var midlevel = App.toplevelcontroller.get('midLevel');
        var o, store, sk, objects = [];
        o = midlevel.objectAt(2);
        store = o.get('store');
        sk = o.get('storeKey');
        objects.push(store.readDataHash(sk));

        midlevel.removeAt(2);

        SC.run(function() {
          midlevel.replace(1, 0, objects);
        })
        this.getPath('parentView.listView').select(SC.IndexSet.create(1, 1));
      }
    }),
    buttonViewB: SC.ButtonView.extend({
      layout: { left: 110, top: 150, width: 100, height: 20 },
      title: 'Click me B',
      target: 'App.mainPageController',
      action: 'buttonBPressed'
      /*
      action: function() {
        App.bottomlevelcontroller.get('content');

        var midlevel = App.toplevelcontroller.get('midLevel');
        midlevel.removeAt(0);
      }
      */
    }),
    buttonViewC: SC.ButtonView.extend({
      layout: { left: 220, top: 150, width: 100, height: 20 },
      title: 'Click me C',
      target: 'App.mainPageController',
      action: 'buttonCPressed'
      /*
      action: function() {
        App.bottomlevelcontroller.get('content');

        //var midlevel = App.store.createRecord(App.MidLevel, { bProperty: 'bbbBBBbbb' });
        var midlevel = { bProperty: 'bbbBBBbbb', bottomLevel: { cProperty: 'cccCCCccc' } };
        //var bottomlevel = App.store.createRecord(App.BottomLevel, { cProperty: 'cccCCCccc' });
        //var bottomlevel = { cProperty: 'cccCCCccc' };

        //midlevel.set('bottomLevel', bottomlevel);
        App.toplevelcontroller.get('midLevel').pushObject(midlevel);
      }
      */
    })
  })

});
