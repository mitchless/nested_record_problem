///////////////////////////////////////////////////////////////////////////
// File: midLevel_con.js
//
// Description:
//
//
// Related Files(s):
//
// External Link(s):
//
//
// Copyright:
//   Copyright (c) 1996-2012 Seapine Software, Inc.
//   All contents of this file are considered Seapine Software proprietary.
///////////////////////////////////////////////////////////////////////////

/*globals TTWeb: false, SP: false, SC: false, YES: false, NO: false, sc_require: false
 sc_super: false
 */

App.midlevelcontroller = SC.ArrayController.create({
  contentBinding: 'App.toplevelcontroller.midLevel',

  selectedItem: function() {
    var selection = this.get('selection'),
        selectedItem = null;
    if (selection && selection.get('length')) {
      selectedItem = selection.firstObject();
    }
    return selectedItem;
  }.property('content', 'selection').cacheable()
});