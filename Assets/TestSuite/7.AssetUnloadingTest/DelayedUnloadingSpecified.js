#pragma strict

var delay : float;
var textures : Texture2D[];

function Start () {
    yield WaitForSeconds(delay);
    for (var texture in textures) {
        Resources.UnloadAsset(texture);
    }
}
