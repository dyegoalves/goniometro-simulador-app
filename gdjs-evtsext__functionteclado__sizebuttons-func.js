gdjs.evtsExt__functionTeclado__sizeButtons = {};
gdjs.evtsExt__functionTeclado__sizeButtons.GDbtTecladoObjects1= [];
gdjs.evtsExt__functionTeclado__sizeButtons.GDbtTecladoObjects2= [];

gdjs.evtsExt__functionTeclado__sizeButtons.conditionTrue_0 = {val:false};
gdjs.evtsExt__functionTeclado__sizeButtons.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__functionTeclado__sizeButtons.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("btTeclado"), gdjs.evtsExt__functionTeclado__sizeButtons.GDbtTecladoObjects1);
{for(var i = 0, len = gdjs.evtsExt__functionTeclado__sizeButtons.GDbtTecladoObjects1.length ;i < len;++i) {
    gdjs.evtsExt__functionTeclado__sizeButtons.GDbtTecladoObjects1[i].setWidth(gdjs.evtsExt__functionTeclado__sizeButtons.GDbtTecladoObjects1[i].getWidth() + (5000 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.evtsExt__functionTeclado__sizeButtons.GDbtTecladoObjects1.length ;i < len;++i) {
    gdjs.evtsExt__functionTeclado__sizeButtons.GDbtTecladoObjects1[i].setHeight(gdjs.evtsExt__functionTeclado__sizeButtons.GDbtTecladoObjects1[i].getHeight() + (5000 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.evtsExt__functionTeclado__sizeButtons.GDbtTecladoObjects1.length ;i < len;++i) {
    gdjs.evtsExt__functionTeclado__sizeButtons.GDbtTecladoObjects1[i].setZOrder(100);
}
}}

}


};

gdjs.evtsExt__functionTeclado__sizeButtons.func = function(runtimeScene, btTeclado, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"btTeclado": btTeclado
},
  _objectArraysMap: {
"btTeclado": gdjs.objectsListsToArray(btTeclado)
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

gdjs.evtsExt__functionTeclado__sizeButtons.GDbtTecladoObjects1.length = 0;
gdjs.evtsExt__functionTeclado__sizeButtons.GDbtTecladoObjects2.length = 0;

gdjs.evtsExt__functionTeclado__sizeButtons.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

