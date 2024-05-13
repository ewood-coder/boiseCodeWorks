namespace choreScore.Models;

public class Chore
{
	public int Id { get; set; }
	public string Name { get; set; }
	public string Description { get; set; }
	public bool IsComplete { get; set; }
}