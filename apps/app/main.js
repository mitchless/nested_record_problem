// ==========================================================================
// Project:   App
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals App */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
App.main = function main() {
  var toplevel = App.store.createRecord(App.TopLevel, { aProperty: 'AAA' });
  var midlevel = { bProperty: 'BBB', bottomLevel: { cProperty: 'CCC' } };

  toplevel.get('midLevel').pushObject(midlevel);

  midlevel = { bProperty: 'bbbBBB', bottomLevel: { cProperty: 'cccCCC' } };

  toplevel.get('midLevel').pushObject(midlevel);

  midlevel = { bProperty: 'bbbBBBbbb', bottomLevel: { cProperty: 'cccCCCccc' } };

  toplevel.get('midLevel').pushObject(midlevel);

  App.toplevelcontroller.set('content', toplevel);


  var uberObject = App.store.createRecord(App.UberObjectLeft, {
    name: 'The Uber Object'
  });

  App.uberObjectLeftController.set('content', uberObject);

  App.getPath('mainPage.mainPane').append();


} ;

function main() { App.main(); }
