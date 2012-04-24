#pragma strict

var sceneName : String;
var delay : float = 1.0;

function Start () {
    yield WaitForSeconds(delay);
    Application.LoadLevel(sceneName);
}
