#pragma strict

var url = "Asset bundle URL";

function Start() {
    var www = new WWW(url);
    yield www;
    Debug.Log(www.assetBundle.mainAsset);
}
