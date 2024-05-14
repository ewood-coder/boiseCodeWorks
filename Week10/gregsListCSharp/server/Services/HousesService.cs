namespace csharp_gregslist_api.Services;


public class HousesService
{
	private readonly HousesRepository _housesRepository;

	public HousesService(HousesRepository housesRepository)
	{
		_housesRepository = housesRepository;
	}



	// SECTION: FUNCTIONS ---------------------------------------------

	// STUB: GET ALL HOUSES
	internal List<House> GetAllHouses()
	{
		List<House> houses = _housesRepository.GetAllHouses();
		return houses;
	}



	// STUB: CREATE HOUSE
	internal House CreateHouse(House houseData)
	{
		House house = _housesRepository.CreateHouse(houseData);
		return house;
	}



	// STUB: GET HOUSE BY ID
	internal House GetHouseById(int houseId)
	{
		House house = _housesRepository.GetHouseById(houseId);

		if (house == null)
		{
			throw new Exception($"Invalid id: {houseId}");
		}

		return house;
	}



	// STUB: DELETE HOUSE
	internal string DestroyHouse(int houseId, string userId)
	{
		House houseToDestroy = GetHouseById(houseId);

		if (houseToDestroy.CreatorId != userId)
		{
			throw new Exception("NOT YOUR HOUSE PAL");
		}

		_housesRepository.DestroyHouse(houseId);

		return $"The house with the ID: '{houseToDestroy.Id}' has been deleted!";
	}



	// STUB: UPDATE HOUSE
	internal House UpdateHouse(int houseId, string userId, House houseData)
	{
		House houseToUpdate = GetHouseById(houseId);

		if (houseToUpdate.CreatorId != userId)
		{
			throw new Exception("YOU ARE NOT THE CREATOR OF THIS HOUSE PAL");
		}

		houseToUpdate.Sqft = houseData.Sqft ?? houseToUpdate.Sqft;
		houseToUpdate.Bedrooms = houseData.Bedrooms ?? houseToUpdate.Bedrooms;
		houseToUpdate.Bathrooms = houseData.Bathrooms ?? houseToUpdate.Bathrooms;
		houseToUpdate.ImgUrl = houseData.ImgUrl ?? houseToUpdate.ImgUrl;
		houseToUpdate.Description = houseData.Description ?? houseToUpdate.Description;
		houseToUpdate.Price = houseData.Price ?? houseToUpdate.Price;

		House updatedHouse = _housesRepository.UpdateHouse(houseToUpdate);

		return updatedHouse;
	}
}