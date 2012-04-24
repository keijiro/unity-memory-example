#pragma strict

private static var textures = new Array();

function Start() {
    for (var r in gameObject.GetComponentsInChildren(Renderer)) {
        textures.Add((r as Renderer).material.mainTexture);
    }
}
