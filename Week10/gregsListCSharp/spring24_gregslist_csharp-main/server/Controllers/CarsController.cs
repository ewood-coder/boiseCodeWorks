namespace csharp_gregslist_api.Controllers;

[ApiController]
[Route("api/[controller]")]
// [Route("api/cars")]
public class CarsController : ControllerBase
{
  private readonly CarsService _carsService;
  private readonly Auth0Provider _auth0Provider;

  public CarsController(CarsService carsService, Auth0Provider auth0Provider)
  {
    _carsService = carsService;
    _auth0Provider = auth0Provider;
  }

  [Authorize]
  [HttpPost]
  public async Task<ActionResult<Car>> CreateCar([FromBody] Car carData)
  {
    try
    {

      // node equivalent: const userInfo = request.userInfo
      // HttpContext request and response wrapped into one object
      Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);

      carData.CreatorId = userInfo.Id;

      Car car = _carsService.CreateCar(carData);
      return Ok(car);
    }
    catch (Exception exception)
    {
      return BadRequest(exception.Message);
    }
  }

  [HttpGet]
  public ActionResult<List<Car>> GetCars()
  {
    try
    {
      List<Car> cars = _carsService.GetCars();
      return Ok(cars);
    }
    catch (Exception exception)
    {
      return BadRequest(exception.Message);
    }
  }

  [HttpGet("{carId}")]
  public ActionResult<Car> GetCarById(int carId)
  {
    try
    {
      Car car = _carsService.GetCarById(carId);
      return Ok(car);
    }
    catch (Exception exception)
    {
      return BadRequest(exception.Message);
    }
  }

  [Authorize]
  [HttpPut("{carId}")]
  public async Task<ActionResult<Car>> UpdateCar(int carId, [FromBody] Car carData)
  {
    try
    {
      Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
      Car car = _carsService.UpdateCar(carId, userInfo.Id, carData);
      return Ok(car);
    }
    catch (Exception exception)
    {
      return BadRequest(exception.Message);
    }
  }

  [Authorize]
  [HttpDelete("{carId}")]
  public async Task<ActionResult<string>> DestroyCar(int carId)
  {
    try
    {
      Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
      string message = _carsService.DestroyCar(carId, userInfo.Id);
      return Ok(message);
    }
    catch (Exception exception)
    {
      return BadRequest(exception.Message);
    }
  }
}