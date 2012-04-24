#pragma strict

#if UNITY_IPHONE
private var url = "https://github.com/downloads/keijiro/unity-memory-example/textures-ios.unity3d";
#elif UNITY_ANDROID
private var url = "https://github.com/downloads/keijiro/unity-memory-example/textures-android.unity3d";
#else
private var url = "https://github.com/downloads/keijiro/unity-memory-example/textures-webplayer.unity3d";
#endif

static function ShowMemoryUsage() {
    var textureMemory = 0;
    for (var texture in Resources.FindObjectsOfTypeAll(Texture)) {
        textureMemory += Profiler.GetRuntimeMemorySize(texture);
    }
    Debug.Log("HeapSize:" + Profiler.usedHeapSize + " / Textures:" + textureMemory);
}

function Start() {
    yield; yield; ShowMemoryUsage();

    Debug.Log("LoadFromCacheOrDownload");
    var www = new WWW.LoadFromCacheOrDownload(url, 0);
//    var www = new WWW(url);
    yield www;

    yield; yield; ShowMemoryUsage();

    Debug.Log("LoadAll");
    www.assetBundle.LoadAll(Texture2D);

    yield; yield; ShowMemoryUsage();

    Debug.Log("Unload(false)");
    www.assetBundle.Unload(false);
    www.Dispose();

    yield; yield; ShowMemoryUsage();

    Debug.Log("UnloadUnusedAssets");
    yield Resources.UnloadUnusedAssets();

    yield; yield; ShowMemoryUsage();

    Application.LoadLevel("Termination");
}
