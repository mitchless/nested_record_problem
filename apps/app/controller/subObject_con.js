App.subObjectsLeftController = SC.ArrayController.create({
  contentBinding: 'App.uberObjectLeftController.subObjects'
});

App.selectedSubObjectsLeftController = SC.ObjectController.create({
  contentBinding: SC.Binding.single('App.subObjectsLeftController.selection')
});

App.subObjectsRightController = SC.ArrayController.create({
  contentBinding: 'App.uberObjectRightController.subObjects'
});

App.selectedSubObjectsRightController = SC.ObjectController.create({
  contentBinding: SC.Binding.single('App.subObjectsRightController.selection')
});
