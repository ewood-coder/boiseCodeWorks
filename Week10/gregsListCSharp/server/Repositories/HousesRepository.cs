namespace csharp_gregslist_api.Repositories;


public class HousesRepository
{
	private readonly IDbConnection _db;

	public HousesRepository(IDbConnection db)
	{
		_db = db;
	}



	// SECTION: FUNCTIONS ---------------------------------------------

	// STUB: GET ALL HOUSES
	internal List<House> GetAllHouses()
	{
		string sql = @"
		SELECT
		houses.*,
		accounts.*
		FROM houses
		JOIN accounts ON accounts.id = houses.creatorId;";

		List<House> houses = _db.Query<House, Account, House>(sql, (house, account) =>
		{
			house.Creator = account;
			return house;
		}).ToList();

		return houses;
	}



	// STUB: CREATE HOUSE
	internal House CreateHouse(House houseData)
	{
		string sql = @"
    INSERT INTO
    houses(
      sqft,
      bedrooms,
      bathrooms,
      imgUrl,
      description,
      price,
      creatorId
    )
    VALUES(
      @Sqft,
      @Bedrooms,
      @Bathrooms,
      @ImgUrl,
      @Description,
      @Price,
      @CreatorId
    );
    
    SELECT * FROM houses WHERE id = LAST_INSERT_ID();";

		House house = _db.Query<House>(sql, houseData).FirstOrDefault();

		return house;
	}



	// STUB: GET HOUSE BY ID
	internal House GetHouseById(int houseId)
	{
		string sql = @"
		SELECT
		houses.*,
		accounts.*
		FROM houses
		JOIN accounts ON accounts.id = houses.creatorId
		WHERE houses.id = @houseId;";

		House house = _db.Query<House, Account, House>(sql, (house, account) =>
		{
			house.Creator = account;
			return house;
		}, new { houseId }).FirstOrDefault();

		return house;
	}



	// STUB: DELETE HOUSE
	internal void DestroyHouse(int houseId)
	{
		string sql = "DELETE FROM houses WHERE id = @houseId;";

		_db.Execute(sql, new { houseId });
	}



	// STUB: UPDATE HOUSE
	internal House UpdateHouse(House houseToUpdate)
	{
		string sql = @"
		UPDATE houses
		SET
		sqft = @Sqft,
    	bedrooms = @Bedrooms,
    	bathrooms = @Bathrooms,
	 	imgUrl = @ImgUrl,
    	description = @Description,
    	price = @Price
		WHERE id = @Id;
		
		SELECT
		houses.*,
		accounts.*
		FROM houses
		JOIN accounts ON accounts.id = houses.creatorId
		WHERE houses.id = @Id;";

		House house = _db.Query<House, Account, House>(sql, (house, account) =>
		{
			house.Creator = account;
			return house;
		}, houseToUpdate).FirstOrDefault();

		return house;
	}

}