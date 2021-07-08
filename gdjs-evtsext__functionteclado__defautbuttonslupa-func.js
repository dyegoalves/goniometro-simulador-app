gdjs.evtsExt__functionTeclado__defautButtonsLupa = {};
gdjs.evtsExt__functionTeclado__defautButtonsLupa.GDbuttonObjects1= [];
gdjs.evtsExt__functionTeclado__defautButtonsLupa.GDbuttonObjects2= [];

gdjs.evtsExt__functionTeclado__defautButtonsLupa.conditionTrue_0 = {val:false};
gdjs.evtsExt__functionTeclado__defautButtonsLupa.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__functionTeclado__defautButtonsLupa.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("button"), gdjs.evtsExt__functionTeclado__defautButtonsLupa.GDbuttonObjects1);
{for(var i = 0, len = gdjs.evtsExt__functionTeclado__defautButtonsLupa.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__functionTeclado__defautButtonsLupa.GDbuttonObjects1[i].setWidth(100);
}
}{for(var i = 0, len = gdjs.evtsExt__functionTeclado__defautButtonsLupa.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__functionTeclado__defautButtonsLupa.GDbuttonObjects1[i].setHeight(116);
}
}{for(var i = 0, len = gdjs.evtsExt__functionTeclado__defautButtonsLupa.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__functionTeclado__defautButtonsLupa.GDbuttonObjects1[i].setZOrder(48);
}
}}

}


};

gdjs.evtsExt__functionTeclado__defautButtonsLupa.func = function(runtimeScene, button, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"button": button
},
  _objectArraysMap: {
"button": gdjs.objectsListsToArray(button)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__functionTeclado__defautButtonsLupa.GDbuttonObjects1.length = 0;
gdjs.evtsExt__functionTeclado__defautButtonsLupa.GDbuttonObjects2.length = 0;

gdjs.evtsExt__functionTeclado__defautButtonsLupa.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

