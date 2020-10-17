CREATE TABLE breweries (
	brewery_id INT PRIMARY KEY,
	brewery_name VARCHAR(255) NOT NULL,
	city VARCHAR(255) NOT NULL,
	state VARCHAR(255) NOT NULL
);

CREATE TABLE beers (
	beer_id INT PRIMARY KEY,
	abv FLOAT,
	ibu FLOAT,
	beer_name VARCHAR(255) NOT NULL,
	beer_style VARCHAR(255),
	brewery_id INT NOT NULL,
	ounces FLOAT,
	FOREIGN KEY(brewery_id) REFERENCES breweries(brewery_id)
);

	
