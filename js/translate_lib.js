function initTranslate() {
    try{
        translate.listener.start();
        translate.language.setLocal('chinese_simplified');
        translate.setAutoDiscriminateLocalLanguage();
        translate.language.setUrlParamControl();
        translate.ignore.class.push('notTranslate');
    }
    catch(e){console.log(e);}
    translate.setUseVersion2();
    translate.execute();
}

window.addEventListener('load', initTranslate);