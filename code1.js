gdjs.AdvancedCode = {};
gdjs.AdvancedCode.forEachIndex2 = 0;

gdjs.AdvancedCode.forEachObjects2 = [];

gdjs.AdvancedCode.forEachTemporary2 = null;

gdjs.AdvancedCode.forEachTotalCount2 = 0;

gdjs.AdvancedCode.GDChange_95sceneObjects1= [];
gdjs.AdvancedCode.GDChange_95sceneObjects2= [];
gdjs.AdvancedCode.GDChange_95sceneObjects3= [];
gdjs.AdvancedCode.GDTexteObjects1= [];
gdjs.AdvancedCode.GDTexteObjects2= [];
gdjs.AdvancedCode.GDTexteObjects3= [];
gdjs.AdvancedCode.GDInputObjects1= [];
gdjs.AdvancedCode.GDInputObjects2= [];
gdjs.AdvancedCode.GDInputObjects3= [];
gdjs.AdvancedCode.GDtext_95entryObjects1= [];
gdjs.AdvancedCode.GDtext_95entryObjects2= [];
gdjs.AdvancedCode.GDtext_95entryObjects3= [];
gdjs.AdvancedCode.GDTitleObjects1= [];
gdjs.AdvancedCode.GDTitleObjects2= [];
gdjs.AdvancedCode.GDTitleObjects3= [];
gdjs.AdvancedCode.GDInfoObjects1= [];
gdjs.AdvancedCode.GDInfoObjects2= [];
gdjs.AdvancedCode.GDInfoObjects3= [];
gdjs.AdvancedCode.GDDebugObjects1= [];
gdjs.AdvancedCode.GDDebugObjects2= [];
gdjs.AdvancedCode.GDDebugObjects3= [];
gdjs.AdvancedCode.GDButton_95change_95sceneObjects1= [];
gdjs.AdvancedCode.GDButton_95change_95sceneObjects2= [];
gdjs.AdvancedCode.GDButton_95change_95sceneObjects3= [];

gdjs.AdvancedCode.conditionTrue_0 = {val:false};
gdjs.AdvancedCode.condition0IsTrue_0 = {val:false};
gdjs.AdvancedCode.condition1IsTrue_0 = {val:false};
gdjs.AdvancedCode.condition2IsTrue_0 = {val:false};
gdjs.AdvancedCode.condition3IsTrue_0 = {val:false};
gdjs.AdvancedCode.condition4IsTrue_0 = {val:false};
gdjs.AdvancedCode.conditionTrue_1 = {val:false};
gdjs.AdvancedCode.condition0IsTrue_1 = {val:false};
gdjs.AdvancedCode.condition1IsTrue_1 = {val:false};
gdjs.AdvancedCode.condition2IsTrue_1 = {val:false};
gdjs.AdvancedCode.condition3IsTrue_1 = {val:false};
gdjs.AdvancedCode.condition4IsTrue_1 = {val:false};


gdjs.AdvancedCode.mapOfGDgdjs_46AdvancedCode_46GDInputObjects1Objects = Hashtable.newFrom({"Input": gdjs.AdvancedCode.GDInputObjects1});gdjs.AdvancedCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.AdvancedCode.GDTexteObjects1, gdjs.AdvancedCode.GDTexteObjects2);


gdjs.AdvancedCode.condition0IsTrue_0.val = false;
gdjs.AdvancedCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.AdvancedCode.GDTexteObjects2.length;i<l;++i) {
    if ( gdjs.AdvancedCode.GDTexteObjects2[i].getString() == (gdjs.RuntimeObject.getVariableString(gdjs.AdvancedCode.GDTexteObjects2[i].getVariables().get("Text"))) ) {
        gdjs.AdvancedCode.condition0IsTrue_0.val = true;
        gdjs.AdvancedCode.GDTexteObjects2[k] = gdjs.AdvancedCode.GDTexteObjects2[i];
        ++k;
    }
}
gdjs.AdvancedCode.GDTexteObjects2.length = k;}if ( gdjs.AdvancedCode.condition0IsTrue_0.val ) {
{
{gdjs.AdvancedCode.conditionTrue_1 = gdjs.AdvancedCode.condition1IsTrue_0;
gdjs.AdvancedCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7866412);
}
}}
if (gdjs.AdvancedCode.condition1IsTrue_0.val) {
/* Reuse gdjs.AdvancedCode.GDTexteObjects2 */
{for(var i = 0, len = gdjs.AdvancedCode.GDTexteObjects2.length ;i < len;++i) {
    gdjs.AdvancedCode.GDTexteObjects2[i].setColor("127;127;127");
}
}{for(var i = 0, len = gdjs.AdvancedCode.GDTexteObjects2.length ;i < len;++i) {
    gdjs.AdvancedCode.GDTexteObjects2[i].setString("");
}
}}

}


{

gdjs.copyArray(gdjs.AdvancedCode.GDTexteObjects1, gdjs.AdvancedCode.GDTexteObjects2);


gdjs.AdvancedCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.AdvancedCode.GDTexteObjects2.length;i<l;++i) {
    if ( gdjs.AdvancedCode.GDTexteObjects2[i].getString() == "" ) {
        gdjs.AdvancedCode.condition0IsTrue_0.val = true;
        gdjs.AdvancedCode.GDTexteObjects2[k] = gdjs.AdvancedCode.GDTexteObjects2[i];
        ++k;
    }
}
gdjs.AdvancedCode.GDTexteObjects2.length = k;}if (gdjs.AdvancedCode.condition0IsTrue_0.val) {
/* Reuse gdjs.AdvancedCode.GDTexteObjects2 */
{for(var i = 0, len = gdjs.AdvancedCode.GDTexteObjects2.length ;i < len;++i) {
    gdjs.AdvancedCode.GDTexteObjects2[i].setColor("127;127;127");
}
}{for(var i = 0, len = gdjs.AdvancedCode.GDTexteObjects2.length ;i < len;++i) {
    gdjs.AdvancedCode.GDTexteObjects2[i].setString((gdjs.RuntimeObject.getVariableString(gdjs.AdvancedCode.GDTexteObjects2[i].getVariables().get("Text"))));
}
}}

}


{


{
/* Reuse gdjs.AdvancedCode.GDTexteObjects1 */
/* Reuse gdjs.AdvancedCode.GDtext_95entryObjects1 */
{for(var i = 0, len = gdjs.AdvancedCode.GDTexteObjects1.length ;i < len;++i) {
    gdjs.AdvancedCode.GDTexteObjects1[i].setColor("0;0;0");
}
}{for(var i = 0, len = gdjs.AdvancedCode.GDTexteObjects1.length ;i < len;++i) {
    gdjs.AdvancedCode.GDTexteObjects1[i].setString((( gdjs.AdvancedCode.GDtext_95entryObjects1.length === 0 ) ? "" :gdjs.AdvancedCode.GDtext_95entryObjects1[0].getString()));
}
}{for(var i = 0, len = gdjs.AdvancedCode.GDTexteObjects1.length ;i < len;++i) {
    gdjs.AdvancedCode.GDTexteObjects1[i].returnVariable(gdjs.AdvancedCode.GDTexteObjects1[i].getVariables().get("Default_Text_Possible")).setString("yes");
}
}}

}


};gdjs.AdvancedCode.mapOfGDgdjs_46AdvancedCode_46GDInputObjects1Objects = Hashtable.newFrom({"Input": gdjs.AdvancedCode.GDInputObjects1});gdjs.AdvancedCode.mapOfGDgdjs_46AdvancedCode_46GDTexteObjects1Objects = Hashtable.newFrom({"Texte": gdjs.AdvancedCode.GDTexteObjects1});gdjs.AdvancedCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.AdvancedCode.GDTexteObjects2 */

gdjs.AdvancedCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.AdvancedCode.GDTexteObjects2.length;i<l;++i) {
    if ( gdjs.AdvancedCode.GDTexteObjects2[i].getString() != (gdjs.RuntimeObject.getVariableString(gdjs.AdvancedCode.GDTexteObjects2[i].getVariables().get("Text"))) ) {
        gdjs.AdvancedCode.condition0IsTrue_0.val = true;
        gdjs.AdvancedCode.GDTexteObjects2[k] = gdjs.AdvancedCode.GDTexteObjects2[i];
        ++k;
    }
}
gdjs.AdvancedCode.GDTexteObjects2.length = k;}if (gdjs.AdvancedCode.condition0IsTrue_0.val) {
/* Reuse gdjs.AdvancedCode.GDTexteObjects2 */
/* Reuse gdjs.AdvancedCode.GDtext_95entryObjects2 */
{for(var i = 0, len = gdjs.AdvancedCode.GDtext_95entryObjects2.length ;i < len;++i) {
    gdjs.AdvancedCode.GDtext_95entryObjects2[i].setString((( gdjs.AdvancedCode.GDTexteObjects2.length === 0 ) ? "" :gdjs.AdvancedCode.GDTexteObjects2[0].getString()));
}
}}

}


};gdjs.AdvancedCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.AdvancedCode.GDTexteObjects1, gdjs.AdvancedCode.GDTexteObjects2);


gdjs.AdvancedCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.AdvancedCode.GDTexteObjects2.length;i<l;++i) {
    if ( gdjs.AdvancedCode.GDTexteObjects2[i].getString() != "" ) {
        gdjs.AdvancedCode.condition0IsTrue_0.val = true;
        gdjs.AdvancedCode.GDTexteObjects2[k] = gdjs.AdvancedCode.GDTexteObjects2[i];
        ++k;
    }
}
gdjs.AdvancedCode.GDTexteObjects2.length = k;}if (gdjs.AdvancedCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.AdvancedCode.GDtext_95entryObjects1, gdjs.AdvancedCode.GDtext_95entryObjects2);

{for(var i = 0, len = gdjs.AdvancedCode.GDtext_95entryObjects2.length ;i < len;++i) {
    gdjs.AdvancedCode.GDtext_95entryObjects2[i].setString("");
}
}
{ //Subevents
gdjs.AdvancedCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.AdvancedCode.GDTexteObjects1 */

gdjs.AdvancedCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.AdvancedCode.GDTexteObjects1.length;i<l;++i) {
    if ( gdjs.AdvancedCode.GDTexteObjects1[i].getString() == (gdjs.RuntimeObject.getVariableString(gdjs.AdvancedCode.GDTexteObjects1[i].getVariables().get("Text"))) ) {
        gdjs.AdvancedCode.condition0IsTrue_0.val = true;
        gdjs.AdvancedCode.GDTexteObjects1[k] = gdjs.AdvancedCode.GDTexteObjects1[i];
        ++k;
    }
}
gdjs.AdvancedCode.GDTexteObjects1.length = k;}if (gdjs.AdvancedCode.condition0IsTrue_0.val) {
/* Reuse gdjs.AdvancedCode.GDTexteObjects1 */
/* Reuse gdjs.AdvancedCode.GDtext_95entryObjects1 */
{for(var i = 0, len = gdjs.AdvancedCode.GDtext_95entryObjects1.length ;i < len;++i) {
    gdjs.AdvancedCode.GDtext_95entryObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.AdvancedCode.GDTexteObjects1.length ;i < len;++i) {
    gdjs.AdvancedCode.GDTexteObjects1[i].setColor("127;127;127");
}
}}

}


};gdjs.AdvancedCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Texte"), gdjs.AdvancedCode.GDTexteObjects1);

gdjs.AdvancedCode.condition0IsTrue_0.val = false;
gdjs.AdvancedCode.condition1IsTrue_0.val = false;
{
gdjs.AdvancedCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.AdvancedCode.mapOfGDgdjs_46AdvancedCode_46GDTexteObjects1Objects);
}if ( gdjs.AdvancedCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.AdvancedCode.GDTexteObjects1.length;i<l;++i) {
    if ( gdjs.AdvancedCode.GDTexteObjects1[i].getVariableString(gdjs.AdvancedCode.GDTexteObjects1[i].getVariables().get("ID_bind")) == gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) ) {
        gdjs.AdvancedCode.condition1IsTrue_0.val = true;
        gdjs.AdvancedCode.GDTexteObjects1[k] = gdjs.AdvancedCode.GDTexteObjects1[i];
        ++k;
    }
}
gdjs.AdvancedCode.GDTexteObjects1.length = k;}}
if (gdjs.AdvancedCode.condition1IsTrue_0.val) {
/* Reuse gdjs.AdvancedCode.GDtext_95entryObjects1 */
{for(var i = 0, len = gdjs.AdvancedCode.GDtext_95entryObjects1.length ;i < len;++i) {
    gdjs.AdvancedCode.GDtext_95entryObjects1[i].setString("");
}
}
{ //Subevents
gdjs.AdvancedCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.AdvancedCode.mapOfGDgdjs_46AdvancedCode_46GDInputObjects1Objects = Hashtable.newFrom({"Input": gdjs.AdvancedCode.GDInputObjects1});gdjs.AdvancedCode.mapOfGDgdjs_46AdvancedCode_46GDInputObjects1Objects = Hashtable.newFrom({"Input": gdjs.AdvancedCode.GDInputObjects1});gdjs.AdvancedCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Texte"), gdjs.AdvancedCode.GDTexteObjects1);

gdjs.AdvancedCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.AdvancedCode.GDTexteObjects1.length;i<l;++i) {
    if ( gdjs.AdvancedCode.GDTexteObjects1[i].getString() == "" ) {
        gdjs.AdvancedCode.condition0IsTrue_0.val = true;
        gdjs.AdvancedCode.GDTexteObjects1[k] = gdjs.AdvancedCode.GDTexteObjects1[i];
        ++k;
    }
}
gdjs.AdvancedCode.GDTexteObjects1.length = k;}if (gdjs.AdvancedCode.condition0IsTrue_0.val) {
/* Reuse gdjs.AdvancedCode.GDTexteObjects1 */
{for(var i = 0, len = gdjs.AdvancedCode.GDTexteObjects1.length ;i < len;++i) {
    gdjs.AdvancedCode.GDTexteObjects1[i].setColor("127;127;127");
}
}{for(var i = 0, len = gdjs.AdvancedCode.GDTexteObjects1.length ;i < len;++i) {
    gdjs.AdvancedCode.GDTexteObjects1[i].setString((gdjs.RuntimeObject.getVariableString(gdjs.AdvancedCode.GDTexteObjects1[i].getVariables().get("Text"))));
}
}}

}


};gdjs.AdvancedCode.mapOfGDgdjs_46AdvancedCode_46GDTexteObjects2Objects = Hashtable.newFrom({"Texte": gdjs.AdvancedCode.GDTexteObjects2});gdjs.AdvancedCode.mapOfGDgdjs_46AdvancedCode_46GDTexteObjects2Objects = Hashtable.newFrom({"Texte": gdjs.AdvancedCode.GDTexteObjects2});gdjs.AdvancedCode.eventsList5 = function(runtimeScene) {

};gdjs.AdvancedCode.eventsList6 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Debug"), gdjs.AdvancedCode.GDDebugObjects2);
gdjs.copyArray(runtimeScene.getObjects("Texte"), gdjs.AdvancedCode.GDTexteObjects2);
gdjs.copyArray(runtimeScene.getObjects("text_entry"), gdjs.AdvancedCode.GDtext_95entryObjects2);
{for(var i = 0, len = gdjs.AdvancedCode.GDDebugObjects2.length ;i < len;++i) {
    gdjs.AdvancedCode.GDDebugObjects2[i].setString("Focus_input : " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + gdjs.evtTools.string.newLine() + "Previous_Focus_input : " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Previous_Focus_input")) + gdjs.evtTools.string.newLine() + "getInputValue(\"PSEUDO\"): " + gdjs.evtsExt__Input_Manager__getInputValue.func(runtimeScene, gdjs.AdvancedCode.mapOfGDgdjs_46AdvancedCode_46GDTexteObjects2Objects, "PSEUDO", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + gdjs.evtTools.string.newLine() + "getInputValue(\"NAME\"): " + gdjs.evtsExt__Input_Manager__getInputValue.func(runtimeScene, gdjs.AdvancedCode.mapOfGDgdjs_46AdvancedCode_46GDTexteObjects2Objects, "NAME", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + gdjs.evtTools.string.newLine() + "text entry memory: " + (( gdjs.AdvancedCode.GDtext_95entryObjects2.length === 0 ) ? "" :gdjs.AdvancedCode.GDtext_95entryObjects2[0].getString()) + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Texte"), gdjs.AdvancedCode.GDTexteObjects1);

for(gdjs.AdvancedCode.forEachIndex2 = 0;gdjs.AdvancedCode.forEachIndex2 < gdjs.AdvancedCode.GDTexteObjects1.length;++gdjs.AdvancedCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Debug"), gdjs.AdvancedCode.GDDebugObjects2);
gdjs.AdvancedCode.GDTexteObjects2.length = 0;


gdjs.AdvancedCode.forEachTemporary2 = gdjs.AdvancedCode.GDTexteObjects1[gdjs.AdvancedCode.forEachIndex2];
gdjs.AdvancedCode.GDTexteObjects2.push(gdjs.AdvancedCode.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.AdvancedCode.GDDebugObjects2.length ;i < len;++i) {
    gdjs.AdvancedCode.GDDebugObjects2[i].setString(gdjs.AdvancedCode.GDDebugObjects2[i].getString() + ("Text Input " + (gdjs.RuntimeObject.getVariableString(((gdjs.AdvancedCode.GDTexteObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.AdvancedCode.GDTexteObjects2[0].getVariables()).get("ID_bind"))) + ": " + (( gdjs.AdvancedCode.GDTexteObjects2.length === 0 ) ? "" :gdjs.AdvancedCode.GDTexteObjects2[0].getString()) + gdjs.evtTools.string.newLine()));
}
}}
}

}


};gdjs.AdvancedCode.eventsList7 = function(runtimeScene) {

{



}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Input"), gdjs.AdvancedCode.GDInputObjects1);

gdjs.AdvancedCode.condition0IsTrue_0.val = false;
gdjs.AdvancedCode.condition1IsTrue_0.val = false;
gdjs.AdvancedCode.condition2IsTrue_0.val = false;
gdjs.AdvancedCode.condition3IsTrue_0.val = false;
{
gdjs.AdvancedCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.AdvancedCode.condition0IsTrue_0.val ) {
{
gdjs.AdvancedCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.AdvancedCode.mapOfGDgdjs_46AdvancedCode_46GDInputObjects1Objects, runtimeScene, true, false);
}if ( gdjs.AdvancedCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.AdvancedCode.GDInputObjects1.length;i<l;++i) {
    if ( gdjs.AdvancedCode.GDInputObjects1[i].getVariableString(gdjs.AdvancedCode.GDInputObjects1[i].getVariables().get("Type")) == "scene" ) {
        gdjs.AdvancedCode.condition2IsTrue_0.val = true;
        gdjs.AdvancedCode.GDInputObjects1[k] = gdjs.AdvancedCode.GDInputObjects1[i];
        ++k;
    }
}
gdjs.AdvancedCode.GDInputObjects1.length = k;}if ( gdjs.AdvancedCode.condition2IsTrue_0.val ) {
{
{gdjs.AdvancedCode.conditionTrue_1 = gdjs.AdvancedCode.condition3IsTrue_0;
gdjs.AdvancedCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9348644);
}
}}
}
}
if (gdjs.AdvancedCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Simple", true);
}}

}


{


gdjs.AdvancedCode.condition0IsTrue_0.val = false;
{
gdjs.AdvancedCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.AdvancedCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Texte"), gdjs.AdvancedCode.GDTexteObjects1);
gdjs.copyArray(runtimeScene.getObjects("text_entry"), gdjs.AdvancedCode.GDtext_95entryObjects1);
{for(var i = 0, len = gdjs.AdvancedCode.GDTexteObjects1.length ;i < len;++i) {
    gdjs.AdvancedCode.GDTexteObjects1[i].setString((gdjs.RuntimeObject.getVariableString(gdjs.AdvancedCode.GDTexteObjects1[i].getVariables().get("Text"))));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("null");
}{for(var i = 0, len = gdjs.AdvancedCode.GDtext_95entryObjects1.length ;i < len;++i) {
    gdjs.AdvancedCode.GDtext_95entryObjects1[i].activate(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Texte"), gdjs.AdvancedCode.GDTexteObjects1);

gdjs.AdvancedCode.condition0IsTrue_0.val = false;
gdjs.AdvancedCode.condition1IsTrue_0.val = false;
{
gdjs.AdvancedCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) != "null";
}if ( gdjs.AdvancedCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.AdvancedCode.GDTexteObjects1.length;i<l;++i) {
    if ( gdjs.AdvancedCode.GDTexteObjects1[i].getVariableString(gdjs.AdvancedCode.GDTexteObjects1[i].getVariables().get("ID_bind")) == gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) ) {
        gdjs.AdvancedCode.condition1IsTrue_0.val = true;
        gdjs.AdvancedCode.GDTexteObjects1[k] = gdjs.AdvancedCode.GDTexteObjects1[i];
        ++k;
    }
}
gdjs.AdvancedCode.GDTexteObjects1.length = k;}}
if (gdjs.AdvancedCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("text_entry"), gdjs.AdvancedCode.GDtext_95entryObjects1);
{for(var i = 0, len = gdjs.AdvancedCode.GDtext_95entryObjects1.length ;i < len;++i) {
    gdjs.AdvancedCode.GDtext_95entryObjects1[i].activate(true);
}
}
{ //Subevents
gdjs.AdvancedCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Input"), gdjs.AdvancedCode.GDInputObjects1);

gdjs.AdvancedCode.condition0IsTrue_0.val = false;
gdjs.AdvancedCode.condition1IsTrue_0.val = false;
{
gdjs.AdvancedCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.AdvancedCode.mapOfGDgdjs_46AdvancedCode_46GDInputObjects1Objects, runtimeScene, true, false);
}if ( gdjs.AdvancedCode.condition0IsTrue_0.val ) {
{
gdjs.AdvancedCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.AdvancedCode.condition1IsTrue_0.val) {
/* Reuse gdjs.AdvancedCode.GDInputObjects1 */
gdjs.copyArray(runtimeScene.getObjects("text_entry"), gdjs.AdvancedCode.GDtext_95entryObjects1);
{for(var i = 0, len = gdjs.AdvancedCode.GDtext_95entryObjects1.length ;i < len;++i) {
    gdjs.AdvancedCode.GDtext_95entryObjects1[i].getBehavior("Text_for_mobile").openKeyboard((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString((gdjs.RuntimeObject.getVariableString(((gdjs.AdvancedCode.GDInputObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.AdvancedCode.GDInputObjects1[0].getVariables()).get("ID_bind"))));
}
{ //Subevents
gdjs.AdvancedCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Input"), gdjs.AdvancedCode.GDInputObjects1);

gdjs.AdvancedCode.condition0IsTrue_0.val = false;
gdjs.AdvancedCode.condition1IsTrue_0.val = false;
gdjs.AdvancedCode.condition2IsTrue_0.val = false;
{
gdjs.AdvancedCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.AdvancedCode.mapOfGDgdjs_46AdvancedCode_46GDInputObjects1Objects);
}if ( gdjs.AdvancedCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.AdvancedCode.GDInputObjects1.length;i<l;++i) {
    if ( gdjs.AdvancedCode.GDInputObjects1[i].getVariableString(gdjs.AdvancedCode.GDInputObjects1[i].getVariables().get("ID_bind")) == gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) ) {
        gdjs.AdvancedCode.condition1IsTrue_0.val = true;
        gdjs.AdvancedCode.GDInputObjects1[k] = gdjs.AdvancedCode.GDInputObjects1[i];
        ++k;
    }
}
gdjs.AdvancedCode.GDInputObjects1.length = k;}if ( gdjs.AdvancedCode.condition1IsTrue_0.val ) {
{
{gdjs.AdvancedCode.conditionTrue_1 = gdjs.AdvancedCode.condition2IsTrue_0;
gdjs.AdvancedCode.condition0IsTrue_1.val = false;
gdjs.AdvancedCode.condition1IsTrue_1.val = false;
{
gdjs.AdvancedCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.AdvancedCode.mapOfGDgdjs_46AdvancedCode_46GDInputObjects1Objects, runtimeScene, true, true);
}if ( gdjs.AdvancedCode.condition0IsTrue_1.val ) {
{
gdjs.AdvancedCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.AdvancedCode.conditionTrue_1.val = true && gdjs.AdvancedCode.condition0IsTrue_1.val && gdjs.AdvancedCode.condition1IsTrue_1.val;
}
}}
}
if (gdjs.AdvancedCode.condition2IsTrue_0.val) {
/* Reuse gdjs.AdvancedCode.GDInputObjects1 */
gdjs.copyArray(runtimeScene.getObjects("text_entry"), gdjs.AdvancedCode.GDtext_95entryObjects1);
{for(var i = 0, len = gdjs.AdvancedCode.GDtext_95entryObjects1.length ;i < len;++i) {
    gdjs.AdvancedCode.GDtext_95entryObjects1[i].getBehavior("Text_for_mobile").closeKeyboard((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AdvancedCode.GDtext_95entryObjects1.length ;i < len;++i) {
    gdjs.AdvancedCode.GDtext_95entryObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.AdvancedCode.GDtext_95entryObjects1.length ;i < len;++i) {
    gdjs.AdvancedCode.GDtext_95entryObjects1[i].activate(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("reset");
}{runtimeScene.getGame().getVariables().get("Previous_Focus_input").setString((gdjs.RuntimeObject.getVariableString(((gdjs.AdvancedCode.GDInputObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.AdvancedCode.GDInputObjects1[0].getVariables()).get("ID_bind"))));
}
{ //Subevents
gdjs.AdvancedCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.AdvancedCode.eventsList6(runtimeScene);
}


};

gdjs.AdvancedCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AdvancedCode.GDChange_95sceneObjects1.length = 0;
gdjs.AdvancedCode.GDChange_95sceneObjects2.length = 0;
gdjs.AdvancedCode.GDChange_95sceneObjects3.length = 0;
gdjs.AdvancedCode.GDTexteObjects1.length = 0;
gdjs.AdvancedCode.GDTexteObjects2.length = 0;
gdjs.AdvancedCode.GDTexteObjects3.length = 0;
gdjs.AdvancedCode.GDInputObjects1.length = 0;
gdjs.AdvancedCode.GDInputObjects2.length = 0;
gdjs.AdvancedCode.GDInputObjects3.length = 0;
gdjs.AdvancedCode.GDtext_95entryObjects1.length = 0;
gdjs.AdvancedCode.GDtext_95entryObjects2.length = 0;
gdjs.AdvancedCode.GDtext_95entryObjects3.length = 0;
gdjs.AdvancedCode.GDTitleObjects1.length = 0;
gdjs.AdvancedCode.GDTitleObjects2.length = 0;
gdjs.AdvancedCode.GDTitleObjects3.length = 0;
gdjs.AdvancedCode.GDInfoObjects1.length = 0;
gdjs.AdvancedCode.GDInfoObjects2.length = 0;
gdjs.AdvancedCode.GDInfoObjects3.length = 0;
gdjs.AdvancedCode.GDDebugObjects1.length = 0;
gdjs.AdvancedCode.GDDebugObjects2.length = 0;
gdjs.AdvancedCode.GDDebugObjects3.length = 0;
gdjs.AdvancedCode.GDButton_95change_95sceneObjects1.length = 0;
gdjs.AdvancedCode.GDButton_95change_95sceneObjects2.length = 0;
gdjs.AdvancedCode.GDButton_95change_95sceneObjects3.length = 0;

gdjs.AdvancedCode.eventsList7(runtimeScene);
return;

}

gdjs['AdvancedCode'] = gdjs.AdvancedCode;
