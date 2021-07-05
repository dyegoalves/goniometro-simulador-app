gdjs.evtsExt__functionTeclado__defautButtonsConf = {};
gdjs.evtsExt__functionTeclado__defautButtonsConf.GDbuttonObjects1= [];
gdjs.evtsExt__functionTeclado__defautButtonsConf.GDbuttonObjects2= [];

gdjs.evtsExt__functionTeclado__defautButtonsConf.conditionTrue_0 = {val:false};
gdjs.evtsExt__functionTeclado__defautButtonsConf.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__functionTeclado__defautButtonsConf.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("button"), gdjs.evtsExt__functionTeclado__defautButtonsConf.GDbuttonObjects1);
{for(var i = 0, len = gdjs.evtsExt__functionTeclado__defautButtonsConf.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__functionTeclado__defautButtonsConf.GDbuttonObjects1[i].setWidth(140);
}
}{for(var i = 0, len = gdjs.evtsExt__functionTeclado__defautButtonsConf.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__functionTeclado__defautButtonsConf.GDbuttonObjects1[i].setHeight(50);
}
}{for(var i = 0, len = gdjs.evtsExt__functionTeclado__defautButtonsConf.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__functionTeclado__defautButtonsConf.GDbuttonObjects1[i].setZOrder(48);
}
}}

}


};

gdjs.evtsExt__functionTeclado__defautButtonsConf.func = function(runtimeScene, button, parentEventsFunctionContext) {
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

gdjs.evtsExt__functionTeclado__defautButtonsConf.GDbuttonObjects1.length = 0;
gdjs.evtsExt__functionTeclado__defautButtonsConf.GDbuttonObjects2.length = 0;

gdjs.evtsExt__functionTeclado__defautButtonsConf.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

