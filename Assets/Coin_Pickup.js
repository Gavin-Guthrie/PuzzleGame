#pragma strict

function OnTriggerEnter (info : Collider)
{
	if (info.tag == "Player")
	{
		Debug.Log("Coin picked up");
		Destroy(gameObject);
	}
}