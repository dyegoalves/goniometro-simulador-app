
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile = gdjs.evtsExt__Mobile_keyboard__Text_for_mobile || {};

/**
 * Behavior generated from Behavior
 */
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile = class Text_for_mobile extends gdjs.RuntimeBehavior {
  constructor(runtimeScene, behaviorData, owner) {
    super(runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Properties:
  
}

// Methods:
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onCreatedContext = {};
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onCreatedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onCreatedContext.userFunc0x8d45b8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._extensionMobileKeyboard = gdjs._extensionMobileKeyboard || {};

//Select and focus input for open keyboard, by id in HTML input
gdjs._extensionMobileKeyboard.openKeyboard = function (eventsFunctionContext) {
    var uniqueID = gdjs._extensionMobileKeyboard.getUniqueIdInObject(eventsFunctionContext);
    var input = document.getElementById(uniqueID);
    if (input) {
        var text_entry = eventsFunctionContext.getObjects("Object")[0];
        input.value = text_entry.getString();
        input.style.removeProperty("visibility");
        input.focus();
    }
}

//Close input by id in input catch from keyup event
gdjs._extensionMobileKeyboard.closeKeyboardById = function (uniqueID) {
    var input = document.getElementById(uniqueID);
    if (input) {
        var text_entry = eventsFunctionContext.getObjects("Object")[0];
        text_entry.setString(input.value);
        input.blur();
        input.style.setProperty("visibility", "hidden");
    }
}

//Call the function with id from HTML input, for close keyboard
gdjs._extensionMobileKeyboard.closeKeyboard = function (eventsFunctionContext) {
    var uniqueID = gdjs._extensionMobileKeyboard.getUniqueIdInObject(eventsFunctionContext);
    gdjs._extensionMobileKeyboard.closeKeyboardById(uniqueID);
}

//Save ID insode the object
var setUniqueIdInObject = function (id) {
    var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
    eventsFunctionContext.getObjects("Object")[0]._mobileKeyboardExtensionInput = { "_uniqueId": id };
}

//Return id catch when keyboard will be closed
gdjs._extensionMobileKeyboard.getUniqueIdInObject = function (eventsFunctionContext) {
    var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
    return eventsFunctionContext.getObjects("Object")[0]._mobileKeyboardExtensionInput._uniqueId;
}


//INIT
const input = document.createElement("input");//Create HTML input
input.type = "text";
input.setAttribute("spellcheck", "false"); //Disable spell checking (blue line on mobile under words)
input.style = "background-color: transparent;border: 0px;outline: transparent;color: #0000;";

//Create an identifier that is unique
var uniqueId = "GDevelop_Mobile_Keyboard_Input" + Date.now() + '-' + Math.floor(Math.random() * 100000);
input.id = uniqueId; //Apply unique id
//Save id for HTML input in object
setUniqueIdInObject(uniqueId);

document.body.appendChild(input);//Add input in HTML

input.addEventListener("keyup", function (event) {
    input.focus();

    var length_string = input.value.length;
    input.setSelectionRange(length_string, length_string); //Set selection cursor at end

    if (event.keyCode == 8 || event.keyCode == 46) {//8=Backspace, 46=Del
        input.value = input.value.slice(0, -1);//Remove the last character
    }

    var text_entry = eventsFunctionContext.getObjects("Object")[0];
    text_entry.setString(input.value);//Edit text_entry _str value

    if (event.keyCode === 13) {//Enter key
        //Send id to function for close keyboard
        gdjs._extensionMobileKeyboard.closeKeyboard != undefined ? gdjs._extensionMobileKeyboard.closeKeyboardById(uniqueId) : null;
    }


}, { passive: false });

};
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onCreatedContext.userFunc0x8d45b8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onCreatedContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onCreatedContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onCreatedContext.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onCreatedContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onCreatedContext.eventsList1(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.openKeyboardContext = {};
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.openKeyboardContext.GDObjectObjects1= [];
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.openKeyboardContext.GDObjectObjects2= [];

gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.openKeyboardContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.openKeyboardContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.openKeyboardContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.openKeyboardContext.userFunc0x8d45b8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._extensionMobileKeyboard = gdjs._extensionMobileKeyboard || {};
gdjs._extensionMobileKeyboard.openKeyboard != undefined ? gdjs._extensionMobileKeyboard.openKeyboard(eventsFunctionContext) : null;
};
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.openKeyboardContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.openKeyboardContext.userFunc0x8d45b8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.openKeyboardContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.openKeyboardContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.openKeyboardContext.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.openKeyboardContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.openKeyboardContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.openKeyboard = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.openKeyboardContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.openKeyboardContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.openKeyboardContext.eventsList1(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.closeKeyboardContext = {};
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.closeKeyboardContext.GDObjectObjects1= [];
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.closeKeyboardContext.GDObjectObjects2= [];

gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.closeKeyboardContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.closeKeyboardContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.closeKeyboardContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.closeKeyboardContext.userFunc0x8d45b8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._extensionMobileKeyboard = gdjs._extensionMobileKeyboard || {};
gdjs._extensionMobileKeyboard.closeKeyboard != undefined ? gdjs._extensionMobileKeyboard.closeKeyboard(eventsFunctionContext) : null;
};
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.closeKeyboardContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.closeKeyboardContext.userFunc0x8d45b8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.closeKeyboardContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.closeKeyboardContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.closeKeyboardContext.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.closeKeyboardContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.closeKeyboardContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.closeKeyboard = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.closeKeyboardContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.closeKeyboardContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.closeKeyboardContext.eventsList1(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onOwnerRemovedFromSceneContext = {};
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onOwnerRemovedFromSceneContext.GDObjectObjects1= [];
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onOwnerRemovedFromSceneContext.GDObjectObjects2= [];

gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onOwnerRemovedFromSceneContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onOwnerRemovedFromSceneContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onOwnerRemovedFromSceneContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onOwnerRemovedFromSceneContext.userFunc0x8d45b8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._extensionMobileKeyboard = gdjs._extensionMobileKeyboard || {};

var uniqueID = gdjs._extensionMobileKeyboard.getUniqueIdInObject(eventsFunctionContext);
var element = document.getElementById(uniqueID);
element.parentNode.removeChild(element);
};
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onOwnerRemovedFromSceneContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onOwnerRemovedFromSceneContext.userFunc0x8d45b8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onOwnerRemovedFromSceneContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onOwnerRemovedFromSceneContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onOwnerRemovedFromSceneContext.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onOwnerRemovedFromSceneContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onOwnerRemovedFromSceneContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onOwnerRemovedFromScene = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onOwnerRemovedFromSceneContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onOwnerRemovedFromSceneContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onOwnerRemovedFromSceneContext.eventsList1(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.onDestroy = function() {
  // Redirect call to onOwnerRemovedFromScene (the old name of onDestroy)
  if (this.onOwnerRemovedFromScene) this.onOwnerRemovedFromScene();
};

gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("Mobile_keyboard::Text_for_mobile", gdjs.evtsExt__Mobile_keyboard__Text_for_mobile.Text_for_mobile);
