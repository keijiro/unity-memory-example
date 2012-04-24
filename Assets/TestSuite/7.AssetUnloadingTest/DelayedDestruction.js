#pragma strict

var delay : float;

function Start () {
    yield WaitForSeconds(delay);
    Destroy(gameObject);
}
