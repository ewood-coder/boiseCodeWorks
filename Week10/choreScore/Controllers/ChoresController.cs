namespace choreScore.Controllers;

[ApiController]

// NOTE: [controller] will look at the public class name, shave off the controller, and input whats left into the route to make it work. You can do this or just put the name of the pathway that you want manually.
// [Route("api/[controller]")]

[Route("api/chores")]




public class ChoresController : ControllerBase
{

	private readonly ChoresService _choresService;

	public ChoresController(ChoresService choresService)
	{
		_choresService = choresService;
	}



	[HttpGet]
	public ActionResult<List<Chore>> GetAllChores()
	{
		try
		{
			List<Chore> chores = _choresService.GetAllChores();

			return Ok(chores);
		}
		catch (Exception error)
		{
			return BadRequest(error.Message);
		}
	}


	[HttpPost]
	public ActionResult<Chore> CreateChore([FromBody] Chore choreData)
	{
		try
		{
			Chore chore = _choresService.CreateChore(choreData);
			return Ok(chore);
		}
		catch (Exception error)
		{
			return BadRequest(error.Message);
		}
	}


	[HttpDelete("{choreId}")]
	public ActionResult<string> DestroyChore(int choreId)
	{
		try
		{
			string message = _choresService.DestroyChore(choreId);
			return Ok(message);
		}
		catch (Exception exception)
		{
			return BadRequest(exception.Message);
		}
	}






	[HttpGet("{choreId}")]
	public ActionResult<Chore> GetChoreById(int choreId)
	{
		try
		{
			Chore chore = _choresService.GetChoreById(choreId);
			return Ok(chore);
		}
		catch (Exception exception)
		{
			return BadRequest(exception.Message);
		}
	}

}