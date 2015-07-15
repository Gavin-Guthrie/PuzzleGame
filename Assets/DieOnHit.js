#pragma strict

function OnTriggerEnter (){
	var enemy = transform.GetComponentInParent (enemy);
	enemy.Die();
}