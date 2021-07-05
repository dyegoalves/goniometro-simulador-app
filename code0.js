gdjs.SimpleCode = {};
gdjs.SimpleCode.GDChange_95sceneObjects1= [];
gdjs.SimpleCode.GDChange_95sceneObjects2= [];
gdjs.SimpleCode.GDChange_95sceneObjects3= [];
gdjs.SimpleCode.GDTexte_952Objects1= [];
gdjs.SimpleCode.GDTexte_952Objects2= [];
gdjs.SimpleCode.GDTexte_952Objects3= [];
gdjs.SimpleCode.GDTexteObjects1= [];
gdjs.SimpleCode.GDTexteObjects2= [];
gdjs.SimpleCode.GDTexteObjects3= [];
gdjs.SimpleCode.GDInputObjects1= [];
gdjs.SimpleCode.GDInputObjects2= [];
gdjs.SimpleCode.GDInputObjects3= [];
gdjs.SimpleCode.GDtext_95entryObjects1= [];
gdjs.SimpleCode.GDtext_95entryObjects2= [];
gdjs.SimpleCode.GDtext_95entryObjects3= [];
gdjs.SimpleCode.GDTitleObjects1= [];
gdjs.SimpleCode.GDTitleObjects2= [];
gdjs.SimpleCode.GDTitleObjects3= [];
gdjs.SimpleCode.GDInfoObjects1= [];
gdjs.SimpleCode.GDInfoObjects2= [];
gdjs.SimpleCode.GDInfoObjects3= [];
gdjs.SimpleCode.GDDebugObjects1= [];
gdjs.SimpleCode.GDDebugObjects2= [];
gdjs.SimpleCode.GDDebugObjects3= [];
gdjs.SimpleCode.GDtext_95entry_952Objects1= [];
gdjs.SimpleCode.GDtext_95entry_952Objects2= [];
gdjs.SimpleCode.GDtext_95entry_952Objects3= [];

gdjs.SimpleCode.conditionTrue_0 = {val:false};
gdjs.SimpleCode.condition0IsTrue_0 = {val:false};
gdjs.SimpleCode.condition1IsTrue_0 = {val:false};
gdjs.SimpleCode.condition2IsTrue_0 = {val:false};
gdjs.SimpleCode.condition3IsTrue_0 = {val:false};
gdjs.SimpleCode.condition4IsTrue_0 = {val:false};
gdjs.SimpleCode.conditionTrue_1 = {val:false};
gdjs.SimpleCode.condition0IsTrue_1 = {val:false};
gdjs.SimpleCode.condition1IsTrue_1 = {val:false};
gdjs.SimpleCode.condition2IsTrue_1 = {val:false};
gdjs.SimpleCode.condition3IsTrue_1 = {val:false};
gdjs.SimpleCode.condition4IsTrue_1 = {val:false};


gdjs.SimpleCode.mapOfGDgdjs_46SimpleCode_46GDInputObjects1Objects = Hashtable.newFrom({"Input": gdjs.SimpleCode.GDInputObjects1});gdjs.SimpleCode.mapOfGDgdjs_46SimpleCode_46GDInputObjects1Objects = Hashtable.newFrom({"Input": gdjs.SimpleCode.GDInputObjects1});gdjs.SimpleCode.mapOfGDgdjs_46SimpleCode_46GDInputObjects1Objects = Hashtable.newFrom({"Input": gdjs.SimpleCode.GDInputObjects1});gdjs.SimpleCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.SimpleCode.GDInputObjects1, gdjs.SimpleCode.GDInputObjects2);


gdjs.SimpleCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SimpleCode.GDInputObjects2.length;i<l;++i) {
    if ( gdjs.SimpleCode.GDInputObjects2[i].getVariableString(gdjs.SimpleCode.GDInputObjects2[i].getVariables().get("ID_bind")) == "NAME" ) {
        gdjs.SimpleCode.condition0IsTrue_0.val = true;
        gdjs.SimpleCode.GDInputObjects2[k] = gdjs.SimpleCode.GDInputObjects2[i];
        ++k;
    }
}
gdjs.SimpleCode.GDInputObjects2.length = k;}if (gdjs.SimpleCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("text_entry"), gdjs.SimpleCode.GDtext_95entryObjects2);
gdjs.copyArray(runtimeScene.getObjects("text_entry_2"), gdjs.SimpleCode.GDtext_95entry_952Objects2);
{for(var i = 0, len = gdjs.SimpleCode.GDtext_95entryObjects2.length ;i < len;++i) {
    gdjs.SimpleCode.GDtext_95entryObjects2[i].getBehavior("Text_for_mobile").openKeyboard((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.SimpleCode.GDtext_95entryObjects2.length ;i < len;++i) {
    gdjs.SimpleCode.GDtext_95entryObjects2[i].activate(true);
}
}{for(var i = 0, len = gdjs.SimpleCode.GDtext_95entry_952Objects2.length ;i < len;++i) {
    gdjs.SimpleCode.GDtext_95entry_952Objects2[i].activate(false);
}
}}

}


{

/* Reuse gdjs.SimpleCode.GDInputObjects1 */

gdjs.SimpleCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SimpleCode.GDInputObjects1.length;i<l;++i) {
    if ( gdjs.SimpleCode.GDInputObjects1[i].getVariableString(gdjs.SimpleCode.GDInputObjects1[i].getVariables().get("ID_bind")) == "PSEUDO" ) {
        gdjs.SimpleCode.condition0IsTrue_0.val = true;
        gdjs.SimpleCode.GDInputObjects1[k] = gdjs.SimpleCode.GDInputObjects1[i];
        ++k;
    }
}
gdjs.SimpleCode.GDInputObjects1.length = k;}if (gdjs.SimpleCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("text_entry"), gdjs.SimpleCode.GDtext_95entryObjects1);
gdjs.copyArray(runtimeScene.getObjects("text_entry_2"), gdjs.SimpleCode.GDtext_95entry_952Objects1);
{for(var i = 0, len = gdjs.SimpleCode.GDtext_95entry_952Objects1.length ;i < len;++i) {
    gdjs.SimpleCode.GDtext_95entry_952Objects1[i].getBehavior("Text_for_mobile").openKeyboard((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.SimpleCode.GDtext_95entryObjects1.length ;i < len;++i) {
    gdjs.SimpleCode.GDtext_95entryObjects1[i].activate(false);
}
}{for(var i = 0, len = gdjs.SimpleCode.GDtext_95entry_952Objects1.length ;i < len;++i) {
    gdjs.SimpleCode.GDtext_95entry_952Objects1[i].activate(true);
}
}}

}


};gdjs.SimpleCode.eventsList1 = function(runtimeScene) {

{


{

{ //Subevents
gdjs.SimpleCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.SimpleCode.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Debug"), gdjs.SimpleCode.GDDebugObjects1);
gdjs.copyArray(runtimeScene.getObjects("text_entry"), gdjs.SimpleCode.GDtext_95entryObjects1);
gdjs.copyArray(runtimeScene.getObjects("text_entry_2"), gdjs.SimpleCode.GDtext_95entry_952Objects1);
{for(var i = 0, len = gdjs.SimpleCode.GDDebugObjects1.length ;i < len;++i) {
    gdjs.SimpleCode.GDDebugObjects1[i].setString("text entry (Left): " + (( gdjs.SimpleCode.GDtext_95entryObjects1.length === 0 ) ? "" :gdjs.SimpleCode.GDtext_95entryObjects1[0].getString()) + gdjs.evtTools.string.newLine() + "text entry 2 (Right): " + (( gdjs.SimpleCode.GDtext_95entry_952Objects1.length === 0 ) ? "" :gdjs.SimpleCode.GDtext_95entry_952Objects1[0].getString()) + gdjs.evtTools.string.newLine() + "Focus : " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


};gdjs.SimpleCode.eventsList3 = function(runtimeScene) {

{



}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Input"), gdjs.SimpleCode.GDInputObjects1);

gdjs.SimpleCode.condition0IsTrue_0.val = false;
gdjs.SimpleCode.condition1IsTrue_0.val = false;
gdjs.SimpleCode.condition2IsTrue_0.val = false;
gdjs.SimpleCode.condition3IsTrue_0.val = false;
{
gdjs.SimpleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SimpleCode.condition0IsTrue_0.val ) {
{
gdjs.SimpleCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SimpleCode.mapOfGDgdjs_46SimpleCode_46GDInputObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SimpleCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SimpleCode.GDInputObjects1.length;i<l;++i) {
    if ( gdjs.SimpleCode.GDInputObjects1[i].getVariableString(gdjs.SimpleCode.GDInputObjects1[i].getVariables().get("Type")) == "scene" ) {
        gdjs.SimpleCode.condition2IsTrue_0.val = true;
        gdjs.SimpleCode.GDInputObjects1[k] = gdjs.SimpleCode.GDInputObjects1[i];
        ++k;
    }
}
gdjs.SimpleCode.GDInputObjects1.length = k;}if ( gdjs.SimpleCode.condition2IsTrue_0.val ) {
{
{gdjs.SimpleCode.conditionTrue_1 = gdjs.SimpleCode.condition3IsTrue_0;
gdjs.SimpleCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7819236);
}
}}
}
}
if (gdjs.SimpleCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Advanced", true);
}}

}


{


gdjs.SimpleCode.condition0IsTrue_0.val = false;
{
gdjs.SimpleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SimpleCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("text_entry"), gdjs.SimpleCode.GDtext_95entryObjects1);
gdjs.copyArray(runtimeScene.getObjects("text_entry_2"), gdjs.SimpleCode.GDtext_95entry_952Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("None");
}{for(var i = 0, len = gdjs.SimpleCode.GDtext_95entryObjects1.length ;i < len;++i) {
    gdjs.SimpleCode.GDtext_95entryObjects1[i].activate(false);
}
}{for(var i = 0, len = gdjs.SimpleCode.GDtext_95entry_952Objects1.length ;i < len;++i) {
    gdjs.SimpleCode.GDtext_95entry_952Objects1[i].activate(false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Texte"), gdjs.SimpleCode.GDTexteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Texte_2"), gdjs.SimpleCode.GDTexte_952Objects1);
gdjs.copyArray(runtimeScene.getObjects("text_entry"), gdjs.SimpleCode.GDtext_95entryObjects1);
gdjs.copyArray(runtimeScene.getObjects("text_entry_2"), gdjs.SimpleCode.GDtext_95entry_952Objects1);
{for(var i = 0, len = gdjs.SimpleCode.GDTexteObjects1.length ;i < len;++i) {
    gdjs.SimpleCode.GDTexteObjects1[i].setString((( gdjs.SimpleCode.GDtext_95entryObjects1.length === 0 ) ? "" :gdjs.SimpleCode.GDtext_95entryObjects1[0].getString()));
}
}{for(var i = 0, len = gdjs.SimpleCode.GDTexte_952Objects1.length ;i < len;++i) {
    gdjs.SimpleCode.GDTexte_952Objects1[i].setString((( gdjs.SimpleCode.GDtext_95entry_952Objects1.length === 0 ) ? "" :gdjs.SimpleCode.GDtext_95entry_952Objects1[0].getString()));
}
}}

}


{


gdjs.SimpleCode.condition0IsTrue_0.val = false;
{
gdjs.SimpleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
}if (gdjs.SimpleCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("text_entry"), gdjs.SimpleCode.GDtext_95entryObjects1);
{for(var i = 0, len = gdjs.SimpleCode.GDtext_95entryObjects1.length ;i < len;++i) {
    gdjs.SimpleCode.GDtext_95entryObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Input"), gdjs.SimpleCode.GDInputObjects1);

gdjs.SimpleCode.condition0IsTrue_0.val = false;
gdjs.SimpleCode.condition1IsTrue_0.val = false;
{
gdjs.SimpleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SimpleCode.condition0IsTrue_0.val ) {
{
gdjs.SimpleCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SimpleCode.mapOfGDgdjs_46SimpleCode_46GDInputObjects1Objects, runtimeScene, false, true);
}}
if (gdjs.SimpleCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("text_entry"), gdjs.SimpleCode.GDtext_95entryObjects1);
gdjs.copyArray(runtimeScene.getObjects("text_entry_2"), gdjs.SimpleCode.GDtext_95entry_952Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("None");
}{for(var i = 0, len = gdjs.SimpleCode.GDtext_95entryObjects1.length ;i < len;++i) {
    gdjs.SimpleCode.GDtext_95entryObjects1[i].getBehavior("Text_for_mobile").closeKeyboard((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.SimpleCode.GDtext_95entry_952Objects1.length ;i < len;++i) {
    gdjs.SimpleCode.GDtext_95entry_952Objects1[i].getBehavior("Text_for_mobile").closeKeyboard((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.SimpleCode.GDtext_95entry_952Objects1.length ;i < len;++i) {
    gdjs.SimpleCode.GDtext_95entry_952Objects1[i].activate(false);
}
}{for(var i = 0, len = gdjs.SimpleCode.GDtext_95entryObjects1.length ;i < len;++i) {
    gdjs.SimpleCode.GDtext_95entryObjects1[i].activate(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Input"), gdjs.SimpleCode.GDInputObjects1);

gdjs.SimpleCode.condition0IsTrue_0.val = false;
gdjs.SimpleCode.condition1IsTrue_0.val = false;
{
gdjs.SimpleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SimpleCode.condition0IsTrue_0.val ) {
{
gdjs.SimpleCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SimpleCode.mapOfGDgdjs_46SimpleCode_46GDInputObjects1Objects, runtimeScene, false, false);
}}
if (gdjs.SimpleCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SimpleCode.GDInputObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setString((gdjs.RuntimeObject.getVariableString(((gdjs.SimpleCode.GDInputObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SimpleCode.GDInputObjects1[0].getVariables()).get("ID_bind"))));
}
{ //Subevents
gdjs.SimpleCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.SimpleCode.eventsList2(runtimeScene);
}


};

gdjs.SimpleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SimpleCode.GDChange_95sceneObjects1.length = 0;
gdjs.SimpleCode.GDChange_95sceneObjects2.length = 0;
gdjs.SimpleCode.GDChange_95sceneObjects3.length = 0;
gdjs.SimpleCode.GDTexte_952Objects1.length = 0;
gdjs.SimpleCode.GDTexte_952Objects2.length = 0;
gdjs.SimpleCode.GDTexte_952Objects3.length = 0;
gdjs.SimpleCode.GDTexteObjects1.length = 0;
gdjs.SimpleCode.GDTexteObjects2.length = 0;
gdjs.SimpleCode.GDTexteObjects3.length = 0;
gdjs.SimpleCode.GDInputObjects1.length = 0;
gdjs.SimpleCode.GDInputObjects2.length = 0;
gdjs.SimpleCode.GDInputObjects3.length = 0;
gdjs.SimpleCode.GDtext_95entryObjects1.length = 0;
gdjs.SimpleCode.GDtext_95entryObjects2.length = 0;
gdjs.SimpleCode.GDtext_95entryObjects3.length = 0;
gdjs.SimpleCode.GDTitleObjects1.length = 0;
gdjs.SimpleCode.GDTitleObjects2.length = 0;
gdjs.SimpleCode.GDTitleObjects3.length = 0;
gdjs.SimpleCode.GDInfoObjects1.length = 0;
gdjs.SimpleCode.GDInfoObjects2.length = 0;
gdjs.SimpleCode.GDInfoObjects3.length = 0;
gdjs.SimpleCode.GDDebugObjects1.length = 0;
gdjs.SimpleCode.GDDebugObjects2.length = 0;
gdjs.SimpleCode.GDDebugObjects3.length = 0;
gdjs.SimpleCode.GDtext_95entry_952Objects1.length = 0;
gdjs.SimpleCode.GDtext_95entry_952Objects2.length = 0;
gdjs.SimpleCode.GDtext_95entry_952Objects3.length = 0;

gdjs.SimpleCode.eventsList3(runtimeScene);
return;

}

gdjs['SimpleCode'] = gdjs.SimpleCode;
