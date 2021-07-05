gdjs.evtsExt__functionTeclado__sizeButtonsConf = {};
gdjs.evtsExt__functionTeclado__sizeButtonsConf.GDbtTecladoObjects1= [];
gdjs.evtsExt__functionTeclado__sizeButtonsConf.GDbtTecladoObjects2= [];

gdjs.evtsExt__functionTeclado__sizeButtonsConf.conditionTrue_0 = {val:false};
gdjs.evtsExt__functionTeclado__sizeButtonsConf.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__functionTeclado__sizeButtonsConf.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("btTeclado"), gdjs.evtsExt__functionTeclado__sizeButtonsConf.GDbtTecladoObjects1);
{for(var i = 0, len = gdjs.evtsExt__functionTeclado__sizeButtonsConf.GDbtTecladoObjects1.length ;i < len;++i) {
    gdjs.evtsExt__functionTeclado__sizeButtonsConf.GDbtTecladoObjects1[i].setWidth(280);
}
}{for(var i = 0, len = gdjs.evtsExt__functionTeclado__sizeButtonsConf.GDbtTecladoObjects1.length ;i < len;++i) {
    gdjs.evtsExt__functionTeclado__sizeButtonsConf.GDbtTecladoObjects1[i].setHeight(100);
}
}{for(var i = 0, len = gdjs.evtsExt__functionTeclado__sizeButtonsConf.GDbtTecladoObjects1.length ;i < len;++i) {
    gdjs.evtsExt__functionTeclado__sizeButtonsConf.GDbtTecladoObjects1[i].setZOrder(100);
}
}}

}


};

gdjs.evtsExt__functionTeclado__sizeButtonsConf.func = function(runtimeScene, btTeclado, parentEventsFunctionContext) {
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

gdjs.evtsExt__functionTeclado__sizeButtonsConf.GDbtTecladoObjects1.length = 0;
gdjs.evtsExt__functionTeclado__sizeButtonsConf.GDbtTecladoObjects2.length = 0;

gdjs.evtsExt__functionTeclado__sizeButtonsConf.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

