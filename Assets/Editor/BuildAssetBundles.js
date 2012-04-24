#pragma strict

import System.IO;

@MenuItem("Custom Tools/Build Asset Bundles")
static function BuildAssetBundles() {
    var path = EditorUtility.SaveFolderPanel("Save asset bundles to directory", "", "");
    if (path.Length == 0) return;
    
    var objects = new Array();
    for (var filepath in Directory.GetFiles("Assets/Resources")) {
        if (filepath.EndsWith(".png")) {
            objects.Add(AssetDatabase.LoadAssetAtPath(filepath, Texture2D));
        }
    }
    
    BuildPipeline.BuildAssetBundle(
        objects[0] as UnityEngine.Object,
        objects.ToBuiltin(UnityEngine.Object) as UnityEngine.Object[],
        Path.Combine(path, "textures.unity3d")
    );
}
