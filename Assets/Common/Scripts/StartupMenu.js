#pragma strict

var sceneNames : String[];

function OnGUI () {
    GUILayout.BeginArea(Rect(0, 0, Screen.width, Screen.height));
    GUILayout.BeginVertical();
    for (var name in sceneNames) {
        if (GUILayout.Button(name, GUILayout.ExpandHeight(true))) {
            Application.LoadLevel(name);
        }
    }
    GUILayout.EndVertical();
    GUILayout.EndArea();
}
