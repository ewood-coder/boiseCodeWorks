namespace csharp_gregslist_api.Models;

public class House
{

	// sqft,
	// bedrooms,
	// bathrooms,
	// imgUrl,
	// description,
	// price,
	// creatorId
	public int Id { get; set; }
	public DateTime CreatedAt { get; set; }
	public DateTime UpdatedAt { get; set; }
	public int? Sqft { get; set; }
	public int? Bedrooms { get; set; }
	public double? Bathrooms { get; set; }
	// if price is not present in request body, default to null instead of 0
	public string ImgUrl { get; set; }
	public string Description { get; set; }
	public int? Price { get; set; }
	public string CreatorId { get; set; }

	public Account Creator { get; set; }
}