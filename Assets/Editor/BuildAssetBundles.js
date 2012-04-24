#pragma strict

import System.IO;

@MenuItem("Custom Tools/Build Asset Bundles")
static function BuildAssetBundles() {
    var path = EditorUtility.SaveFolderPanel("Save asset bundles to directory", "", "");
    if (path.Length == 0) return;
    
    BuildBundleOfTarget(BuildTarget.WebPlayer, Path.Combine(path, "textures-webplayer.unity3d"));
    BuildBundleOfTarget(BuildTarget.iPhone, Path.Combine(path, "textures-ios.unity3d"));
    BuildBundleOfTarget(BuildTarget.Android, Path.Combine(path, "textures-android.unity3d"));
}

private static function BuildBundleOfTarget(target : BuildTarget, path : String) {
    var objects = new Array();
    for (var filepath in Directory.GetFiles("Assets/Resources")) {
        if (filepath.EndsWith(".png")) {
            objects.Add(AssetDatabase.LoadAssetAtPath(filepath, Texture2D));
        }
    }
    
    BuildPipeline.BuildAssetBundle(
        objects[0] as UnityEngine.Object,
        objects.ToBuiltin(UnityEngine.Object) as UnityEngine.Object[],
        path, 0, target
    );
}
