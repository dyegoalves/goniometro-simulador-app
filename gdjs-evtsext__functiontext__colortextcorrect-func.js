gdjs.evtsExt__functionText__colorTextCorrect = {};
gdjs.evtsExt__functionText__colorTextCorrect.GDRespostasObjects1= [];
gdjs.evtsExt__functionText__colorTextCorrect.GDRespostasObjects2= [];
gdjs.evtsExt__functionText__colorTextCorrect.GDtxtA1Objects1= [];
gdjs.evtsExt__functionText__colorTextCorrect.GDtxtA1Objects2= [];
gdjs.evtsExt__functionText__colorTextCorrect.GDtxtB1Objects1= [];
gdjs.evtsExt__functionText__colorTextCorrect.GDtxtB1Objects2= [];
gdjs.evtsExt__functionText__colorTextCorrect.GDtxtA1vlObjects1= [];
gdjs.evtsExt__functionText__colorTextCorrect.GDtxtA1vlObjects2= [];
gdjs.evtsExt__functionText__colorTextCorrect.GDtxtB1vlObjects1= [];
gdjs.evtsExt__functionText__colorTextCorrect.GDtxtB1vlObjects2= [];

gdjs.evtsExt__functionText__colorTextCorrect.conditionTrue_0 = {val:false};
gdjs.evtsExt__functionText__colorTextCorrect.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__functionText__colorTextCorrect.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Respostas"), gdjs.evtsExt__functionText__colorTextCorrect.GDRespostasObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("txtA1"), gdjs.evtsExt__functionText__colorTextCorrect.GDtxtA1Objects1);
gdjs.copyArray(eventsFunctionContext.getObjects("txtA1vl"), gdjs.evtsExt__functionText__colorTextCorrect.GDtxtA1vlObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("txtB1"), gdjs.evtsExt__functionText__colorTextCorrect.GDtxtB1Objects1);
gdjs.copyArray(eventsFunctionContext.getObjects("txtB1vl"), gdjs.evtsExt__functionText__colorTextCorrect.GDtxtB1vlObjects1);
{for(var i = 0, len = gdjs.evtsExt__functionText__colorTextCorrect.GDRespostasObjects1.length ;i < len;++i) {
    gdjs.evtsExt__functionText__colorTextCorrect.GDRespostasObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.evtsExt__functionText__colorTextCorrect.GDRespostasObjects1.length ;i < len;++i) {
    gdjs.evtsExt__functionText__colorTextCorrect.GDRespostasObjects1[i].setColor("126;211;33");
}
}{for(var i = 0, len = gdjs.evtsExt__functionText__colorTextCorrect.GDRespostasObjects1.length ;i < len;++i) {
    gdjs.evtsExt__functionText__colorTextCorrect.GDRespostasObjects1[i].setString("A Resposta está correta");
}
}{for(var i = 0, len = gdjs.evtsExt__functionText__colorTextCorrect.GDtxtA1Objects1.length ;i < len;++i) {
    gdjs.evtsExt__functionText__colorTextCorrect.GDtxtA1Objects1[i].setColor("74;74;74");
}
}{for(var i = 0, len = gdjs.evtsExt__functionText__colorTextCorrect.GDtxtB1Objects1.length ;i < len;++i) {
    gdjs.evtsExt__functionText__colorTextCorrect.GDtxtB1Objects1[i].setColor("74;74;74");
}
}{for(var i = 0, len = gdjs.evtsExt__functionText__colorTextCorrect.GDtxtA1vlObjects1.length ;i < len;++i) {
    gdjs.evtsExt__functionText__colorTextCorrect.GDtxtA1vlObjects1[i].setColor("126;211;33");
}
}{for(var i = 0, len = gdjs.evtsExt__functionText__colorTextCorrect.GDtxtB1vlObjects1.length ;i < len;++i) {
    gdjs.evtsExt__functionText__colorTextCorrect.GDtxtB1vlObjects1[i].setColor("126;211;33");
}
}}

}


};

gdjs.evtsExt__functionText__colorTextCorrect.func = function(runtimeScene, Respostas, txtA1, txtB1, txtA1vl, txtB1vl, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Respostas": Respostas
, "txtA1": txtA1
, "txtB1": txtB1
, "txtA1vl": txtA1vl
, "txtB1vl": txtB1vl
},
  _objectArraysMap: {
"Respostas": gdjs.objectsListsToArray(Respostas)
, "txtA1": gdjs.objectsListsToArray(txtA1)
, "txtB1": gdjs.objectsListsToArray(txtB1)
, "txtA1vl": gdjs.objectsListsToArray(txtA1vl)
, "txtB1vl": gdjs.objectsListsToArray(txtB1vl)
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

gdjs.evtsExt__functionText__colorTextCorrect.GDRespostasObjects1.length = 0;
gdjs.evtsExt__functionText__colorTextCorrect.GDRespostasObjects2.length = 0;
gdjs.evtsExt__functionText__colorTextCorrect.GDtxtA1Objects1.length = 0;
gdjs.evtsExt__functionText__colorTextCorrect.GDtxtA1Objects2.length = 0;
gdjs.evtsExt__functionText__colorTextCorrect.GDtxtB1Objects1.length = 0;
gdjs.evtsExt__functionText__colorTextCorrect.GDtxtB1Objects2.length = 0;
gdjs.evtsExt__functionText__colorTextCorrect.GDtxtA1vlObjects1.length = 0;
gdjs.evtsExt__functionText__colorTextCorrect.GDtxtA1vlObjects2.length = 0;
gdjs.evtsExt__functionText__colorTextCorrect.GDtxtB1vlObjects1.length = 0;
gdjs.evtsExt__functionText__colorTextCorrect.GDtxtB1vlObjects2.length = 0;

gdjs.evtsExt__functionText__colorTextCorrect.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

