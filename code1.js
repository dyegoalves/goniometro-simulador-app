gdjs.goniometro_95simulador2Code = {};
gdjs.goniometro_95simulador2Code.GDmolduraObjects1= [];
gdjs.goniometro_95simulador2Code.GDmolduraObjects2= [];
gdjs.goniometro_95simulador2Code.GDmolduraObjects3= [];
gdjs.goniometro_95simulador2Code.GDtxtVoltarObjects1= [];
gdjs.goniometro_95simulador2Code.GDtxtVoltarObjects2= [];
gdjs.goniometro_95simulador2Code.GDtxtVoltarObjects3= [];
gdjs.goniometro_95simulador2Code.GDtxtAvancarObjects1= [];
gdjs.goniometro_95simulador2Code.GDtxtAvancarObjects2= [];
gdjs.goniometro_95simulador2Code.GDtxtAvancarObjects3= [];
gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects1= [];
gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2= [];
gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects3= [];
gdjs.goniometro_95simulador2Code.GDbtVoltarObjects1= [];
gdjs.goniometro_95simulador2Code.GDbtVoltarObjects2= [];
gdjs.goniometro_95simulador2Code.GDbtVoltarObjects3= [];
gdjs.goniometro_95simulador2Code.GDbtAvancarObjects1= [];
gdjs.goniometro_95simulador2Code.GDbtAvancarObjects2= [];
gdjs.goniometro_95simulador2Code.GDbtAvancarObjects3= [];
gdjs.goniometro_95simulador2Code.GDbtFecharObjects1= [];
gdjs.goniometro_95simulador2Code.GDbtFecharObjects2= [];
gdjs.goniometro_95simulador2Code.GDbtFecharObjects3= [];
gdjs.goniometro_95simulador2Code.GDaguardeTrocaObjects1= [];
gdjs.goniometro_95simulador2Code.GDaguardeTrocaObjects2= [];
gdjs.goniometro_95simulador2Code.GDaguardeTrocaObjects3= [];
gdjs.goniometro_95simulador2Code.GDtxt01Objects1= [];
gdjs.goniometro_95simulador2Code.GDtxt01Objects2= [];
gdjs.goniometro_95simulador2Code.GDtxt01Objects3= [];
gdjs.goniometro_95simulador2Code.GDpaineltxtObjects1= [];
gdjs.goniometro_95simulador2Code.GDpaineltxtObjects2= [];
gdjs.goniometro_95simulador2Code.GDpaineltxtObjects3= [];
gdjs.goniometro_95simulador2Code.GDtxtPainelObjects1= [];
gdjs.goniometro_95simulador2Code.GDtxtPainelObjects2= [];
gdjs.goniometro_95simulador2Code.GDtxtPainelObjects3= [];
gdjs.goniometro_95simulador2Code.GDtransferidorAngularObjects1= [];
gdjs.goniometro_95simulador2Code.GDtransferidorAngularObjects2= [];
gdjs.goniometro_95simulador2Code.GDtransferidorAngularObjects3= [];
gdjs.goniometro_95simulador2Code.GDstopTgObjects1= [];
gdjs.goniometro_95simulador2Code.GDstopTgObjects2= [];
gdjs.goniometro_95simulador2Code.GDstopTgObjects3= [];

gdjs.goniometro_95simulador2Code.conditionTrue_0 = {val:false};
gdjs.goniometro_95simulador2Code.condition0IsTrue_0 = {val:false};
gdjs.goniometro_95simulador2Code.condition1IsTrue_0 = {val:false};
gdjs.goniometro_95simulador2Code.condition2IsTrue_0 = {val:false};
gdjs.goniometro_95simulador2Code.condition3IsTrue_0 = {val:false};


gdjs.goniometro_95simulador2Code.mapOfGDgdjs_46goniometro_9595simulador2Code_46GDbtVoltarObjects2Objects = Hashtable.newFrom({"btVoltar": gdjs.goniometro_95simulador2Code.GDbtVoltarObjects2});gdjs.goniometro_95simulador2Code.mapOfGDgdjs_46goniometro_9595simulador2Code_46GDbtAvancarObjects2Objects = Hashtable.newFrom({"btAvancar": gdjs.goniometro_95simulador2Code.GDbtAvancarObjects2});gdjs.goniometro_95simulador2Code.mapOfGDgdjs_46goniometro_9595simulador2Code_46GDbtFecharObjects1Objects = Hashtable.newFrom({"btFechar": gdjs.goniometro_95simulador2Code.GDbtFecharObjects1});gdjs.goniometro_95simulador2Code.eventsList0 = function(runtimeScene) {

{


gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val = false;
{
gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.goniometro_95simulador2Code.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("btAvancar"), gdjs.goniometro_95simulador2Code.GDbtAvancarObjects2);
gdjs.copyArray(runtimeScene.getObjects("btFechar"), gdjs.goniometro_95simulador2Code.GDbtFecharObjects2);
gdjs.copyArray(runtimeScene.getObjects("btVoltar"), gdjs.goniometro_95simulador2Code.GDbtVoltarObjects2);
{for(var i = 0, len = gdjs.goniometro_95simulador2Code.GDbtVoltarObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simulador2Code.GDbtVoltarObjects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.goniometro_95simulador2Code.GDbtAvancarObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simulador2Code.GDbtAvancarObjects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.goniometro_95simulador2Code.GDbtFecharObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simulador2Code.GDbtFecharObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btVoltar"), gdjs.goniometro_95simulador2Code.GDbtVoltarObjects2);

gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val = false;
{
gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.goniometro_95simulador2Code.mapOfGDgdjs_46goniometro_9595simulador2Code_46GDbtVoltarObjects2Objects, runtimeScene, true, false);
}if (gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.goniometro_95simulador2Code.GDbtVoltarObjects2 */
{for(var i = 0, len = gdjs.goniometro_95simulador2Code.GDbtVoltarObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simulador2Code.GDbtVoltarObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btAvancar"), gdjs.goniometro_95simulador2Code.GDbtAvancarObjects2);

gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val = false;
{
gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.goniometro_95simulador2Code.mapOfGDgdjs_46goniometro_9595simulador2Code_46GDbtAvancarObjects2Objects, runtimeScene, true, false);
}if (gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.goniometro_95simulador2Code.GDbtAvancarObjects2 */
{for(var i = 0, len = gdjs.goniometro_95simulador2Code.GDbtAvancarObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simulador2Code.GDbtAvancarObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btFechar"), gdjs.goniometro_95simulador2Code.GDbtFecharObjects1);

gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val = false;
{
gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.goniometro_95simulador2Code.mapOfGDgdjs_46goniometro_9595simulador2Code_46GDbtFecharObjects1Objects, runtimeScene, true, false);
}if (gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.goniometro_95simulador2Code.GDbtFecharObjects1 */
{for(var i = 0, len = gdjs.goniometro_95simulador2Code.GDbtFecharObjects1.length ;i < len;++i) {
    gdjs.goniometro_95simulador2Code.GDbtFecharObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.goniometro_95simulador2Code.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.goniometro_95simulador2Code.mapOfGDgdjs_46goniometro_9595simulador2Code_46GDtransferidorAngularObjects2Objects = Hashtable.newFrom({"transferidorAngular": gdjs.goniometro_95simulador2Code.GDtransferidorAngularObjects2});gdjs.goniometro_95simulador2Code.mapOfGDgdjs_46goniometro_9595simulador2Code_46GDstopTgObjects2Objects = Hashtable.newFrom({"stopTg": gdjs.goniometro_95simulador2Code.GDstopTgObjects2});gdjs.goniometro_95simulador2Code.mapOfGDgdjs_46goniometro_9595simulador2Code_46GDbtAvancarObjects2Objects = Hashtable.newFrom({"btAvancar": gdjs.goniometro_95simulador2Code.GDbtAvancarObjects2});gdjs.goniometro_95simulador2Code.mapOfGDgdjs_46goniometro_9595simulador2Code_46GDbtVoltarObjects2Objects = Hashtable.newFrom({"btVoltar": gdjs.goniometro_95simulador2Code.GDbtVoltarObjects2});gdjs.goniometro_95simulador2Code.eventsList2 = function(runtimeScene) {

{


gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val = false;
{
gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("aguardeTroca"), gdjs.goniometro_95simulador2Code.GDaguardeTrocaObjects2);
gdjs.copyArray(runtimeScene.getObjects("paineltxt"), gdjs.goniometro_95simulador2Code.GDpaineltxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("transferidorAngular"), gdjs.goniometro_95simulador2Code.GDtransferidorAngularObjects2);
gdjs.copyArray(runtimeScene.getObjects("txt01"), gdjs.goniometro_95simulador2Code.GDtxt01Objects2);
gdjs.copyArray(runtimeScene.getObjects("txtPainel"), gdjs.goniometro_95simulador2Code.GDtxtPainelObjects2);
gdjs.copyArray(runtimeScene.getObjects("txtTituloGONIOMETRO"), gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2);
{for(var i = 0, len = gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.goniometro_95simulador2Code.GDpaineltxtObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simulador2Code.GDpaineltxtObjects2[i].hide();
}
for(var i = 0, len = gdjs.goniometro_95simulador2Code.GDtxtPainelObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simulador2Code.GDtxtPainelObjects2[i].hide();
}
for(var i = 0, len = gdjs.goniometro_95simulador2Code.GDtxt01Objects2.length ;i < len;++i) {
    gdjs.goniometro_95simulador2Code.GDtxt01Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.goniometro_95simulador2Code.GDaguardeTrocaObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simulador2Code.GDaguardeTrocaObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.goniometro_95simulador2Code.GDtransferidorAngularObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simulador2Code.GDtransferidorAngularObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.goniometro_95simulador2Code.GDpaineltxtObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simulador2Code.GDpaineltxtObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.goniometro_95simulador2Code.GDtxtPainelObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simulador2Code.GDtxtPainelObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2[i].setOpacity(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("txtTituloGONIOMETRO"), gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2);

gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2.length;i<l;++i) {
    if ( gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2[i].timerElapsedTime("timer", 0.5) ) {
        gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val = true;
        gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2[k] = gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2[i];
        ++k;
    }
}
gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2.length = k;}if (gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2 */
{for(var i = 0, len = gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2[i].setOpacity(gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2[i].getOpacity() + (150 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("txtTituloGONIOMETRO"), gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2);

gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2.length;i<l;++i) {
    if ( gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2[i].timerElapsedTime("timer", 0.8) ) {
        gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val = true;
        gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2[k] = gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2[i];
        ++k;
    }
}
gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2.length = k;}if (gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("aguardeTroca"), gdjs.goniometro_95simulador2Code.GDaguardeTrocaObjects2);
{for(var i = 0, len = gdjs.goniometro_95simulador2Code.GDaguardeTrocaObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simulador2Code.GDaguardeTrocaObjects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("txtTituloGONIOMETRO"), gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2);

gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2.length;i<l;++i) {
    if ( gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2[i].timerElapsedTime("timer", 2.5) ) {
        gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val = true;
        gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2[k] = gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2[i];
        ++k;
    }
}
gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2.length = k;}if (gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("paineltxt"), gdjs.goniometro_95simulador2Code.GDpaineltxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("txt01"), gdjs.goniometro_95simulador2Code.GDtxt01Objects2);
gdjs.copyArray(runtimeScene.getObjects("txtPainel"), gdjs.goniometro_95simulador2Code.GDtxtPainelObjects2);
{for(var i = 0, len = gdjs.goniometro_95simulador2Code.GDpaineltxtObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simulador2Code.GDpaineltxtObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.goniometro_95simulador2Code.GDtxtPainelObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simulador2Code.GDtxtPainelObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.goniometro_95simulador2Code.GDtxt01Objects2.length ;i < len;++i) {
    gdjs.goniometro_95simulador2Code.GDtxt01Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.goniometro_95simulador2Code.GDpaineltxtObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simulador2Code.GDpaineltxtObjects2[i].setOpacity(gdjs.goniometro_95simulador2Code.GDpaineltxtObjects2[i].getOpacity() + (150 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.goniometro_95simulador2Code.GDtxtPainelObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simulador2Code.GDtxtPainelObjects2[i].setOpacity(gdjs.goniometro_95simulador2Code.GDtxtPainelObjects2[i].getOpacity() + (150 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("txtTituloGONIOMETRO"), gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2);

gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2.length;i<l;++i) {
    if ( gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2[i].timerElapsedTime("timer", 2.8) ) {
        gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val = true;
        gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2[k] = gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2[i];
        ++k;
    }
}
gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2.length = k;}if (gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("transferidorAngular"), gdjs.goniometro_95simulador2Code.GDtransferidorAngularObjects2);
{for(var i = 0, len = gdjs.goniometro_95simulador2Code.GDtransferidorAngularObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simulador2Code.GDtransferidorAngularObjects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("txtTituloGONIOMETRO"), gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2);

gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2.length;i<l;++i) {
    if ( gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2[i].timerElapsedTime("timer", 3) ) {
        gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val = true;
        gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2[k] = gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2[i];
        ++k;
    }
}
gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2.length = k;}if (gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("transferidorAngular"), gdjs.goniometro_95simulador2Code.GDtransferidorAngularObjects2);
{for(var i = 0, len = gdjs.goniometro_95simulador2Code.GDtransferidorAngularObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simulador2Code.GDtransferidorAngularObjects2[i].addForceTowardPosition(550, 550, 900, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("stopTg"), gdjs.goniometro_95simulador2Code.GDstopTgObjects2);
gdjs.copyArray(runtimeScene.getObjects("transferidorAngular"), gdjs.goniometro_95simulador2Code.GDtransferidorAngularObjects2);

gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val = false;
{
gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.goniometro_95simulador2Code.mapOfGDgdjs_46goniometro_9595simulador2Code_46GDtransferidorAngularObjects2Objects, gdjs.goniometro_95simulador2Code.mapOfGDgdjs_46goniometro_9595simulador2Code_46GDstopTgObjects2Objects, false, runtimeScene, false);
}if (gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("aguardeTroca"), gdjs.goniometro_95simulador2Code.GDaguardeTrocaObjects2);
/* Reuse gdjs.goniometro_95simulador2Code.GDtransferidorAngularObjects2 */
{for(var i = 0, len = gdjs.goniometro_95simulador2Code.GDtransferidorAngularObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simulador2Code.GDtransferidorAngularObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.goniometro_95simulador2Code.GDtransferidorAngularObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simulador2Code.GDtransferidorAngularObjects2[i].addForceTowardPosition(0, 0, 0, 0);
}
}{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getVariables().getFromIndex(0), true);
}{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getVariables().getFromIndex(1), true);
}{for(var i = 0, len = gdjs.goniometro_95simulador2Code.GDaguardeTrocaObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simulador2Code.GDaguardeTrocaObjects2[i].setString("Clique em Avançar para proseguir ou Voltar para retornar a tela anterior");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btAvancar"), gdjs.goniometro_95simulador2Code.GDbtAvancarObjects2);

gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val = false;
gdjs.goniometro_95simulador2Code.condition1IsTrue_0.val = false;
gdjs.goniometro_95simulador2Code.condition2IsTrue_0.val = false;
{
gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().getFromIndex(0), true);
}if ( gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val ) {
{
gdjs.goniometro_95simulador2Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.goniometro_95simulador2Code.mapOfGDgdjs_46goniometro_9595simulador2Code_46GDbtAvancarObjects2Objects, runtimeScene, true, false);
}if ( gdjs.goniometro_95simulador2Code.condition1IsTrue_0.val ) {
{
gdjs.goniometro_95simulador2Code.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
}
if (gdjs.goniometro_95simulador2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "goniometro_simulador3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btVoltar"), gdjs.goniometro_95simulador2Code.GDbtVoltarObjects2);

gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val = false;
gdjs.goniometro_95simulador2Code.condition1IsTrue_0.val = false;
gdjs.goniometro_95simulador2Code.condition2IsTrue_0.val = false;
{
gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().getFromIndex(1), true);
}if ( gdjs.goniometro_95simulador2Code.condition0IsTrue_0.val ) {
{
gdjs.goniometro_95simulador2Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.goniometro_95simulador2Code.mapOfGDgdjs_46goniometro_9595simulador2Code_46GDbtVoltarObjects2Objects, runtimeScene, true, false);
}if ( gdjs.goniometro_95simulador2Code.condition1IsTrue_0.val ) {
{
gdjs.goniometro_95simulador2Code.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
}
if (gdjs.goniometro_95simulador2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "goniometro_simulador", false);
}}

}


{


{
}

}


};gdjs.goniometro_95simulador2Code.eventsList3 = function(runtimeScene) {

{


gdjs.goniometro_95simulador2Code.eventsList1(runtimeScene);
}


{


gdjs.goniometro_95simulador2Code.eventsList2(runtimeScene);
}


};

gdjs.goniometro_95simulador2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.goniometro_95simulador2Code.GDmolduraObjects1.length = 0;
gdjs.goniometro_95simulador2Code.GDmolduraObjects2.length = 0;
gdjs.goniometro_95simulador2Code.GDmolduraObjects3.length = 0;
gdjs.goniometro_95simulador2Code.GDtxtVoltarObjects1.length = 0;
gdjs.goniometro_95simulador2Code.GDtxtVoltarObjects2.length = 0;
gdjs.goniometro_95simulador2Code.GDtxtVoltarObjects3.length = 0;
gdjs.goniometro_95simulador2Code.GDtxtAvancarObjects1.length = 0;
gdjs.goniometro_95simulador2Code.GDtxtAvancarObjects2.length = 0;
gdjs.goniometro_95simulador2Code.GDtxtAvancarObjects3.length = 0;
gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects1.length = 0;
gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects2.length = 0;
gdjs.goniometro_95simulador2Code.GDtxtTituloGONIOMETROObjects3.length = 0;
gdjs.goniometro_95simulador2Code.GDbtVoltarObjects1.length = 0;
gdjs.goniometro_95simulador2Code.GDbtVoltarObjects2.length = 0;
gdjs.goniometro_95simulador2Code.GDbtVoltarObjects3.length = 0;
gdjs.goniometro_95simulador2Code.GDbtAvancarObjects1.length = 0;
gdjs.goniometro_95simulador2Code.GDbtAvancarObjects2.length = 0;
gdjs.goniometro_95simulador2Code.GDbtAvancarObjects3.length = 0;
gdjs.goniometro_95simulador2Code.GDbtFecharObjects1.length = 0;
gdjs.goniometro_95simulador2Code.GDbtFecharObjects2.length = 0;
gdjs.goniometro_95simulador2Code.GDbtFecharObjects3.length = 0;
gdjs.goniometro_95simulador2Code.GDaguardeTrocaObjects1.length = 0;
gdjs.goniometro_95simulador2Code.GDaguardeTrocaObjects2.length = 0;
gdjs.goniometro_95simulador2Code.GDaguardeTrocaObjects3.length = 0;
gdjs.goniometro_95simulador2Code.GDtxt01Objects1.length = 0;
gdjs.goniometro_95simulador2Code.GDtxt01Objects2.length = 0;
gdjs.goniometro_95simulador2Code.GDtxt01Objects3.length = 0;
gdjs.goniometro_95simulador2Code.GDpaineltxtObjects1.length = 0;
gdjs.goniometro_95simulador2Code.GDpaineltxtObjects2.length = 0;
gdjs.goniometro_95simulador2Code.GDpaineltxtObjects3.length = 0;
gdjs.goniometro_95simulador2Code.GDtxtPainelObjects1.length = 0;
gdjs.goniometro_95simulador2Code.GDtxtPainelObjects2.length = 0;
gdjs.goniometro_95simulador2Code.GDtxtPainelObjects3.length = 0;
gdjs.goniometro_95simulador2Code.GDtransferidorAngularObjects1.length = 0;
gdjs.goniometro_95simulador2Code.GDtransferidorAngularObjects2.length = 0;
gdjs.goniometro_95simulador2Code.GDtransferidorAngularObjects3.length = 0;
gdjs.goniometro_95simulador2Code.GDstopTgObjects1.length = 0;
gdjs.goniometro_95simulador2Code.GDstopTgObjects2.length = 0;
gdjs.goniometro_95simulador2Code.GDstopTgObjects3.length = 0;

gdjs.goniometro_95simulador2Code.eventsList3(runtimeScene);
return;

}

gdjs['goniometro_95simulador2Code'] = gdjs.goniometro_95simulador2Code;
