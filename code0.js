gdjs.goniometro_95simuladorCode = {};
gdjs.goniometro_95simuladorCode.GDmolduraObjects1= [];
gdjs.goniometro_95simuladorCode.GDmolduraObjects2= [];
gdjs.goniometro_95simuladorCode.GDmolduraObjects3= [];
gdjs.goniometro_95simuladorCode.GDtxtVoltarObjects1= [];
gdjs.goniometro_95simuladorCode.GDtxtVoltarObjects2= [];
gdjs.goniometro_95simuladorCode.GDtxtVoltarObjects3= [];
gdjs.goniometro_95simuladorCode.GDtxtAvancarObjects1= [];
gdjs.goniometro_95simuladorCode.GDtxtAvancarObjects2= [];
gdjs.goniometro_95simuladorCode.GDtxtAvancarObjects3= [];
gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects1= [];
gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2= [];
gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects3= [];
gdjs.goniometro_95simuladorCode.GDbtVoltarObjects1= [];
gdjs.goniometro_95simuladorCode.GDbtVoltarObjects2= [];
gdjs.goniometro_95simuladorCode.GDbtVoltarObjects3= [];
gdjs.goniometro_95simuladorCode.GDbtAvancarObjects1= [];
gdjs.goniometro_95simuladorCode.GDbtAvancarObjects2= [];
gdjs.goniometro_95simuladorCode.GDbtAvancarObjects3= [];
gdjs.goniometro_95simuladorCode.GDbtFecharObjects1= [];
gdjs.goniometro_95simuladorCode.GDbtFecharObjects2= [];
gdjs.goniometro_95simuladorCode.GDbtFecharObjects3= [];
gdjs.goniometro_95simuladorCode.GDtxtTelaObjects1= [];
gdjs.goniometro_95simuladorCode.GDtxtTelaObjects2= [];
gdjs.goniometro_95simuladorCode.GDtxtTelaObjects3= [];
gdjs.goniometro_95simuladorCode.GDtxt01Objects1= [];
gdjs.goniometro_95simuladorCode.GDtxt01Objects2= [];
gdjs.goniometro_95simuladorCode.GDtxt01Objects3= [];
gdjs.goniometro_95simuladorCode.GDpaineltxtObjects1= [];
gdjs.goniometro_95simuladorCode.GDpaineltxtObjects2= [];
gdjs.goniometro_95simuladorCode.GDpaineltxtObjects3= [];
gdjs.goniometro_95simuladorCode.GDtxtPainelObjects1= [];
gdjs.goniometro_95simuladorCode.GDtxtPainelObjects2= [];
gdjs.goniometro_95simuladorCode.GDtxtPainelObjects3= [];
gdjs.goniometro_95simuladorCode.GDreguaTopObjects1= [];
gdjs.goniometro_95simuladorCode.GDreguaTopObjects2= [];
gdjs.goniometro_95simuladorCode.GDreguaTopObjects3= [];
gdjs.goniometro_95simuladorCode.GDreguaBotObjects1= [];
gdjs.goniometro_95simuladorCode.GDreguaBotObjects2= [];
gdjs.goniometro_95simuladorCode.GDreguaBotObjects3= [];
gdjs.goniometro_95simuladorCode.GDanguloObjects1= [];
gdjs.goniometro_95simuladorCode.GDanguloObjects2= [];
gdjs.goniometro_95simuladorCode.GDanguloObjects3= [];
gdjs.goniometro_95simuladorCode.GDtxtanguloObjects1= [];
gdjs.goniometro_95simuladorCode.GDtxtanguloObjects2= [];
gdjs.goniometro_95simuladorCode.GDtxtanguloObjects3= [];
gdjs.goniometro_95simuladorCode.GDaguardeTrocaObjects1= [];
gdjs.goniometro_95simuladorCode.GDaguardeTrocaObjects2= [];
gdjs.goniometro_95simuladorCode.GDaguardeTrocaObjects3= [];
gdjs.goniometro_95simuladorCode.GDblockObjects1= [];
gdjs.goniometro_95simuladorCode.GDblockObjects2= [];
gdjs.goniometro_95simuladorCode.GDblockObjects3= [];

gdjs.goniometro_95simuladorCode.conditionTrue_0 = {val:false};
gdjs.goniometro_95simuladorCode.condition0IsTrue_0 = {val:false};
gdjs.goniometro_95simuladorCode.condition1IsTrue_0 = {val:false};
gdjs.goniometro_95simuladorCode.condition2IsTrue_0 = {val:false};
gdjs.goniometro_95simuladorCode.condition3IsTrue_0 = {val:false};


gdjs.goniometro_95simuladorCode.mapOfGDgdjs_46goniometro_9595simuladorCode_46GDbtVoltarObjects2Objects = Hashtable.newFrom({"btVoltar": gdjs.goniometro_95simuladorCode.GDbtVoltarObjects2});gdjs.goniometro_95simuladorCode.mapOfGDgdjs_46goniometro_9595simuladorCode_46GDbtAvancarObjects2Objects = Hashtable.newFrom({"btAvancar": gdjs.goniometro_95simuladorCode.GDbtAvancarObjects2});gdjs.goniometro_95simuladorCode.mapOfGDgdjs_46goniometro_9595simuladorCode_46GDbtFecharObjects1Objects = Hashtable.newFrom({"btFechar": gdjs.goniometro_95simuladorCode.GDbtFecharObjects1});gdjs.goniometro_95simuladorCode.eventsList0 = function(runtimeScene) {

{


gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val = false;
{
gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.goniometro_95simuladorCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("btAvancar"), gdjs.goniometro_95simuladorCode.GDbtAvancarObjects2);
gdjs.copyArray(runtimeScene.getObjects("btFechar"), gdjs.goniometro_95simuladorCode.GDbtFecharObjects2);
gdjs.copyArray(runtimeScene.getObjects("btVoltar"), gdjs.goniometro_95simuladorCode.GDbtVoltarObjects2);
{for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDbtVoltarObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDbtVoltarObjects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDbtAvancarObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDbtAvancarObjects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDbtFecharObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDbtFecharObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btVoltar"), gdjs.goniometro_95simuladorCode.GDbtVoltarObjects2);

gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val = false;
{
gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.goniometro_95simuladorCode.mapOfGDgdjs_46goniometro_9595simuladorCode_46GDbtVoltarObjects2Objects, runtimeScene, true, false);
}if (gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val) {
/* Reuse gdjs.goniometro_95simuladorCode.GDbtVoltarObjects2 */
{for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDbtVoltarObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDbtVoltarObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btAvancar"), gdjs.goniometro_95simuladorCode.GDbtAvancarObjects2);

gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val = false;
{
gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.goniometro_95simuladorCode.mapOfGDgdjs_46goniometro_9595simuladorCode_46GDbtAvancarObjects2Objects, runtimeScene, true, false);
}if (gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val) {
/* Reuse gdjs.goniometro_95simuladorCode.GDbtAvancarObjects2 */
{for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDbtAvancarObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDbtAvancarObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btFechar"), gdjs.goniometro_95simuladorCode.GDbtFecharObjects1);

gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val = false;
{
gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.goniometro_95simuladorCode.mapOfGDgdjs_46goniometro_9595simuladorCode_46GDbtFecharObjects1Objects, runtimeScene, true, false);
}if (gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val) {
/* Reuse gdjs.goniometro_95simuladorCode.GDbtFecharObjects1 */
{for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDbtFecharObjects1.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDbtFecharObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.goniometro_95simuladorCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.goniometro_95simuladorCode.mapOfGDgdjs_46goniometro_9595simuladorCode_46GDbtAvancarObjects1Objects = Hashtable.newFrom({"btAvancar": gdjs.goniometro_95simuladorCode.GDbtAvancarObjects1});gdjs.goniometro_95simuladorCode.eventsList2 = function(runtimeScene) {

{


gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val = false;
{
gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("angulo"), gdjs.goniometro_95simuladorCode.GDanguloObjects2);
gdjs.copyArray(runtimeScene.getObjects("paineltxt"), gdjs.goniometro_95simuladorCode.GDpaineltxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("reguaBot"), gdjs.goniometro_95simuladorCode.GDreguaBotObjects2);
gdjs.copyArray(runtimeScene.getObjects("reguaTop"), gdjs.goniometro_95simuladorCode.GDreguaTopObjects2);
gdjs.copyArray(runtimeScene.getObjects("txt01"), gdjs.goniometro_95simuladorCode.GDtxt01Objects2);
gdjs.copyArray(runtimeScene.getObjects("txtPainel"), gdjs.goniometro_95simuladorCode.GDtxtPainelObjects2);
gdjs.copyArray(runtimeScene.getObjects("txtTituloGONIOMETRO"), gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2);
gdjs.copyArray(runtimeScene.getObjects("txtangulo"), gdjs.goniometro_95simuladorCode.GDtxtanguloObjects2);
{for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDpaineltxtObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDpaineltxtObjects2[i].hide();
}
for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDtxtPainelObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDtxtPainelObjects2[i].hide();
}
for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDtxt01Objects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDtxt01Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDanguloObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDanguloObjects2[i].hide();
}
for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDtxtanguloObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDtxtanguloObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDreguaTopObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDreguaTopObjects2[i].hide();
}
for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDreguaBotObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDreguaBotObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDpaineltxtObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDpaineltxtObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDanguloObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDanguloObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDtxtanguloObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDtxtanguloObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDreguaTopObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDreguaTopObjects2[i].setOpacity(0);
}
for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDreguaBotObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDreguaBotObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDtxtPainelObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDtxtPainelObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2[i].setOpacity(100);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("txtTituloGONIOMETRO"), gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2);

gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2.length;i<l;++i) {
    if ( gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2[i].timerElapsedTime("timer", 0.5) ) {
        gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val = true;
        gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2[k] = gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2[i];
        ++k;
    }
}
gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2.length = k;}if (gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val) {
/* Reuse gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2 */
{for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("txtTituloGONIOMETRO"), gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2);

gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2.length;i<l;++i) {
    if ( gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2[i].timerElapsedTime("timer", 0.6) ) {
        gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val = true;
        gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2[k] = gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2[i];
        ++k;
    }
}
gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2.length = k;}if (gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val) {
/* Reuse gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2 */
{for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2[i].setOpacity(gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2[i].getOpacity() + (150 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("txtTituloGONIOMETRO"), gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2);

gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2.length;i<l;++i) {
    if ( gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2[i].timerElapsedTime("timer", 1) ) {
        gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val = true;
        gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2[k] = gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2[i];
        ++k;
    }
}
gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2.length = k;}if (gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("paineltxt"), gdjs.goniometro_95simuladorCode.GDpaineltxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("reguaBot"), gdjs.goniometro_95simuladorCode.GDreguaBotObjects2);
gdjs.copyArray(runtimeScene.getObjects("reguaTop"), gdjs.goniometro_95simuladorCode.GDreguaTopObjects2);
gdjs.copyArray(runtimeScene.getObjects("txt01"), gdjs.goniometro_95simuladorCode.GDtxt01Objects2);
gdjs.copyArray(runtimeScene.getObjects("txtPainel"), gdjs.goniometro_95simuladorCode.GDtxtPainelObjects2);
{for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDpaineltxtObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDpaineltxtObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDtxtPainelObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDtxtPainelObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDtxt01Objects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDtxt01Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDreguaTopObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDreguaTopObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDreguaBotObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDreguaBotObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDpaineltxtObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDpaineltxtObjects2[i].setOpacity(gdjs.goniometro_95simuladorCode.GDpaineltxtObjects2[i].getOpacity() + (150 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDtxtPainelObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDtxtPainelObjects2[i].setOpacity(gdjs.goniometro_95simuladorCode.GDtxtPainelObjects2[i].getOpacity() + (150 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDreguaTopObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDreguaTopObjects2[i].setOpacity(gdjs.goniometro_95simuladorCode.GDreguaTopObjects2[i].getOpacity() + (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDreguaBotObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDreguaBotObjects2[i].setOpacity(gdjs.goniometro_95simuladorCode.GDreguaBotObjects2[i].getOpacity() + (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDreguaBotObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDreguaBotObjects2[i].addForceTowardPosition(810, 810, 600, 0);
}
}{for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDreguaTopObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDreguaTopObjects2[i].addForceTowardPosition(780, 780, 600, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("txtTituloGONIOMETRO"), gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2);

gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2.length;i<l;++i) {
    if ( gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2[i].timerElapsedTime("timer", 2.5) ) {
        gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val = true;
        gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2[k] = gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2[i];
        ++k;
    }
}
gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2.length = k;}if (gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("reguaBot"), gdjs.goniometro_95simuladorCode.GDreguaBotObjects2);
gdjs.copyArray(runtimeScene.getObjects("reguaTop"), gdjs.goniometro_95simuladorCode.GDreguaTopObjects2);
{for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDreguaTopObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDreguaTopObjects2[i].clearForces();
}
for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDreguaBotObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDreguaBotObjects2[i].clearForces();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("txtTituloGONIOMETRO"), gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2);

gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2.length;i<l;++i) {
    if ( gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2[i].timerElapsedTime("timer", 2.5) ) {
        gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val = true;
        gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2[k] = gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2[i];
        ++k;
    }
}
gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2.length = k;}if (gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("reguaTop"), gdjs.goniometro_95simuladorCode.GDreguaTopObjects2);
{for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDreguaTopObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDreguaTopObjects2[i].rotateTowardAngle(-(45), 50, runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("txtTituloGONIOMETRO"), gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2);

gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2.length;i<l;++i) {
    if ( gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2[i].timerElapsedTime("timer", 3.5) ) {
        gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val = true;
        gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2[k] = gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2[i];
        ++k;
    }
}
gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2.length = k;}if (gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("angulo"), gdjs.goniometro_95simuladorCode.GDanguloObjects2);
gdjs.copyArray(runtimeScene.getObjects("txtangulo"), gdjs.goniometro_95simuladorCode.GDtxtanguloObjects2);
{for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDanguloObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDanguloObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDtxtanguloObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDtxtanguloObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDanguloObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDanguloObjects2[i].setOpacity(gdjs.goniometro_95simuladorCode.GDanguloObjects2[i].getOpacity() + (150 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDtxtanguloObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDtxtanguloObjects2[i].setOpacity(gdjs.goniometro_95simuladorCode.GDtxtanguloObjects2[i].getOpacity() + (150 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("txtTituloGONIOMETRO"), gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2);

gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2.length;i<l;++i) {
    if ( gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2[i].timerElapsedTime("timer", 4.5) ) {
        gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val = true;
        gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2[k] = gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2[i];
        ++k;
    }
}
gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2.length = k;}if (gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("aguardeTroca"), gdjs.goniometro_95simuladorCode.GDaguardeTrocaObjects2);
{for(var i = 0, len = gdjs.goniometro_95simuladorCode.GDaguardeTrocaObjects2.length ;i < len;++i) {
    gdjs.goniometro_95simuladorCode.GDaguardeTrocaObjects2[i].setString("Clique em Avançar para proseguir");
}
}{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getVariables().getFromIndex(0), true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btAvancar"), gdjs.goniometro_95simuladorCode.GDbtAvancarObjects1);

gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val = false;
gdjs.goniometro_95simuladorCode.condition1IsTrue_0.val = false;
gdjs.goniometro_95simuladorCode.condition2IsTrue_0.val = false;
{
gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().getFromIndex(0), true);
}if ( gdjs.goniometro_95simuladorCode.condition0IsTrue_0.val ) {
{
gdjs.goniometro_95simuladorCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.goniometro_95simuladorCode.mapOfGDgdjs_46goniometro_9595simuladorCode_46GDbtAvancarObjects1Objects, runtimeScene, true, false);
}if ( gdjs.goniometro_95simuladorCode.condition1IsTrue_0.val ) {
{
gdjs.goniometro_95simuladorCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
}
if (gdjs.goniometro_95simuladorCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "goniometro_simulador2", false);
}}

}


};gdjs.goniometro_95simuladorCode.eventsList3 = function(runtimeScene) {

{


gdjs.goniometro_95simuladorCode.eventsList1(runtimeScene);
}


{


gdjs.goniometro_95simuladorCode.eventsList2(runtimeScene);
}


};

gdjs.goniometro_95simuladorCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.goniometro_95simuladorCode.GDmolduraObjects1.length = 0;
gdjs.goniometro_95simuladorCode.GDmolduraObjects2.length = 0;
gdjs.goniometro_95simuladorCode.GDmolduraObjects3.length = 0;
gdjs.goniometro_95simuladorCode.GDtxtVoltarObjects1.length = 0;
gdjs.goniometro_95simuladorCode.GDtxtVoltarObjects2.length = 0;
gdjs.goniometro_95simuladorCode.GDtxtVoltarObjects3.length = 0;
gdjs.goniometro_95simuladorCode.GDtxtAvancarObjects1.length = 0;
gdjs.goniometro_95simuladorCode.GDtxtAvancarObjects2.length = 0;
gdjs.goniometro_95simuladorCode.GDtxtAvancarObjects3.length = 0;
gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects1.length = 0;
gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects2.length = 0;
gdjs.goniometro_95simuladorCode.GDtxtTituloGONIOMETROObjects3.length = 0;
gdjs.goniometro_95simuladorCode.GDbtVoltarObjects1.length = 0;
gdjs.goniometro_95simuladorCode.GDbtVoltarObjects2.length = 0;
gdjs.goniometro_95simuladorCode.GDbtVoltarObjects3.length = 0;
gdjs.goniometro_95simuladorCode.GDbtAvancarObjects1.length = 0;
gdjs.goniometro_95simuladorCode.GDbtAvancarObjects2.length = 0;
gdjs.goniometro_95simuladorCode.GDbtAvancarObjects3.length = 0;
gdjs.goniometro_95simuladorCode.GDbtFecharObjects1.length = 0;
gdjs.goniometro_95simuladorCode.GDbtFecharObjects2.length = 0;
gdjs.goniometro_95simuladorCode.GDbtFecharObjects3.length = 0;
gdjs.goniometro_95simuladorCode.GDtxtTelaObjects1.length = 0;
gdjs.goniometro_95simuladorCode.GDtxtTelaObjects2.length = 0;
gdjs.goniometro_95simuladorCode.GDtxtTelaObjects3.length = 0;
gdjs.goniometro_95simuladorCode.GDtxt01Objects1.length = 0;
gdjs.goniometro_95simuladorCode.GDtxt01Objects2.length = 0;
gdjs.goniometro_95simuladorCode.GDtxt01Objects3.length = 0;
gdjs.goniometro_95simuladorCode.GDpaineltxtObjects1.length = 0;
gdjs.goniometro_95simuladorCode.GDpaineltxtObjects2.length = 0;
gdjs.goniometro_95simuladorCode.GDpaineltxtObjects3.length = 0;
gdjs.goniometro_95simuladorCode.GDtxtPainelObjects1.length = 0;
gdjs.goniometro_95simuladorCode.GDtxtPainelObjects2.length = 0;
gdjs.goniometro_95simuladorCode.GDtxtPainelObjects3.length = 0;
gdjs.goniometro_95simuladorCode.GDreguaTopObjects1.length = 0;
gdjs.goniometro_95simuladorCode.GDreguaTopObjects2.length = 0;
gdjs.goniometro_95simuladorCode.GDreguaTopObjects3.length = 0;
gdjs.goniometro_95simuladorCode.GDreguaBotObjects1.length = 0;
gdjs.goniometro_95simuladorCode.GDreguaBotObjects2.length = 0;
gdjs.goniometro_95simuladorCode.GDreguaBotObjects3.length = 0;
gdjs.goniometro_95simuladorCode.GDanguloObjects1.length = 0;
gdjs.goniometro_95simuladorCode.GDanguloObjects2.length = 0;
gdjs.goniometro_95simuladorCode.GDanguloObjects3.length = 0;
gdjs.goniometro_95simuladorCode.GDtxtanguloObjects1.length = 0;
gdjs.goniometro_95simuladorCode.GDtxtanguloObjects2.length = 0;
gdjs.goniometro_95simuladorCode.GDtxtanguloObjects3.length = 0;
gdjs.goniometro_95simuladorCode.GDaguardeTrocaObjects1.length = 0;
gdjs.goniometro_95simuladorCode.GDaguardeTrocaObjects2.length = 0;
gdjs.goniometro_95simuladorCode.GDaguardeTrocaObjects3.length = 0;
gdjs.goniometro_95simuladorCode.GDblockObjects1.length = 0;
gdjs.goniometro_95simuladorCode.GDblockObjects2.length = 0;
gdjs.goniometro_95simuladorCode.GDblockObjects3.length = 0;

gdjs.goniometro_95simuladorCode.eventsList3(runtimeScene);
return;

}

gdjs['goniometro_95simuladorCode'] = gdjs.goniometro_95simuladorCode;
