#pragma strict

import System;

function Start () {
    print("Initial - " + GC.GetTotalMemory(false));

    while (true) {
        var bigArray = new int [8 * 1024 * 1024];
        print("Allocated - " + GC.GetTotalMemory(false));

        yield WaitForSeconds(1.0);

        bigArray = null;
        System.GC.Collect();

        print("Collected - " + GC.GetTotalMemory(false));

        yield WaitForSeconds(1.0);
    }
}
