gdjs.evtsExt__Input_Manager__getInputValue = {};
gdjs.evtsExt__Input_Manager__getInputValue.GDObjectObjects1= [];
gdjs.evtsExt__Input_Manager__getInputValue.GDObjectObjects2= [];

gdjs.evtsExt__Input_Manager__getInputValue.conditionTrue_0 = {val:false};
gdjs.evtsExt__Input_Manager__getInputValue.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Input_Manager__getInputValue.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Input_Manager__getInputValue.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Input_Manager__getInputValue.GDObjectObjects1);

gdjs.evtsExt__Input_Manager__getInputValue.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Input_Manager__getInputValue.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Input_Manager__getInputValue.GDObjectObjects1[i].getVariableString(gdjs.evtsExt__Input_Manager__getInputValue.GDObjectObjects1[i].getVariables().get("ID_bind")) == (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("ID_bind") : "") ) {
        gdjs.evtsExt__Input_Manager__getInputValue.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Input_Manager__getInputValue.GDObjectObjects1[k] = gdjs.evtsExt__Input_Manager__getInputValue.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Input_Manager__getInputValue.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Input_Manager__getInputValue.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Input_Manager__getInputValue.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Input_Manager__getInputValue.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__Input_Manager__getInputValue.GDObjectObjects1[0].getString()); }}}

}


};

gdjs.evtsExt__Input_Manager__getInputValue.func = function(runtimeScene, Object, ID_bind, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
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
if (argName === "ID_bind") return ID_bind;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Input_Manager__getInputValue.GDObjectObjects1.length = 0;
gdjs.evtsExt__Input_Manager__getInputValue.GDObjectObjects2.length = 0;

gdjs.evtsExt__Input_Manager__getInputValue.eventsList0(runtimeScene, eventsFunctionContext);
return "" + eventsFunctionContext.returnValue;
}

