#pragma strict

var stack = new Array();

function Start () {
    print("Initial - " + GC.GetTotalMemory(false));

    while (true) {
        stack.Push(new int[8 * 1024 * 1024]);
        print("Allocated - " + GC.GetTotalMemory(false));
        yield WaitForSeconds(1.0);
    }
}
