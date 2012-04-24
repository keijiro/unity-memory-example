#pragma strict

private var textures : Texture[];

function Start() {
    yield WaitForSeconds(0.5);
    
    textures = new Texture[8];
    for (var i = 0; i < textures.Length; i++) {
        textures[i] = new Texture2D(1024, 1024);
    }
    
    yield WaitForSeconds(0.5);
    
    textures = null;
    System.GC.Collect();
}
