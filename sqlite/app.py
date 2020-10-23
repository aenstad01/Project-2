import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///beersDb.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
beers = Base.classes.beers
breweries = Base.classes.breweries


#################################################
# Flask Setup
#################################################
app = Flask(__name__)
# prevent key sorting from jsonify
app.config['JSON_SORT_KEYS'] = False

#################################################
# Flask Routes
#################################################


@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/beers<br/>"
        f"/api/v1.0/breweries<br/>"
        f"/api/v1.0/beersBrewJoin"
    )


@app.route("/api/v1.0/beers")
def returnBeers():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return beers tables as json"""
    """ ['beer_id','beer_name','beer_style','brewery_id','abv','ibu','ounces']"""

    # Query all beers
    results = session.query(beers.beer_id, beers.beer_name, beers.beer_style, beers.brewery_id, beers.abv, beers.ibu, beers.ounces).all()

    session.close()

    # Create a dictionary from the row data and append to a list of beers
    all_beers= []
    for id, name, style, brew_id, abv, ibu, ounces in results:
        beers_dict = {}
        beers_dict["beer_id"] = id
        beers_dict["beer_name"] = name
        beers_dict["beer_style"] = style
        beers_dict["brewery_id"] = brew_id
        beers_dict["abv"] = abv
        beers_dict["ibu"] = ibu
        beers_dict["ounces"] = ounces
        all_beers.append(beers_dict)

    return jsonify(all_beers)

@app.route("/api/v1.0/breweries")
def returnBreweries():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of breweries data including the brewery_id, name, city, and state of each brewery"""
    # Query all breweries
    results = session.query(breweries.brewery_id, breweries.brewery_name, breweries.city, breweries.state).all()

    session.close()

    # Create a dictionary from the row data and append to a list of breweries
    all_breweries= []
    for id, name, city, state in results:
        breweries_dict = {}
        breweries_dict["brewery_id"] = id
        breweries_dict["brewery_name"] = name
        breweries_dict["city"] = city
        breweries_dict["state"] = state
        all_breweries.append(breweries_dict)

    return jsonify(all_breweries)

@app.route("/api/v1.0/beersBrewJoin")
def beersAndBreweries():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return join tables as json"""
    """ ['beer_id','beer_name','beer_style','brewery_id','abv','ibu','ounces']"""
    """ ['brewery_id','brewery_name','city','state']"""

    # joinTable = session.query(beers).join(breweries, beers.brewery_id==breweries.brewery_id)
    joinTable = session.query(beers.beer_id,beers.beer_name, beers.beer_style, beers.abv, beers.ibu, beers.ounces, breweries.brewery_id, breweries.brewery_name, breweries.city, breweries.state ).join(breweries, beers.brewery_id==breweries.brewery_id).all()

    session.close()


    # Create a dictionary from the row data and append to a list of beerBrew
    all_beerBrew= []
    for beer_id, beer_name, style, abv, ibu, ounces, brew_id,  brew_name, city, state in joinTable:
        beerBrew_dict = {}
        beerBrew_dict["beer_id"] = beer_id
        beerBrew_dict["beer_name"] = beer_name
        beerBrew_dict["beer_style"] = style
        beerBrew_dict["abv"] = abv
        beerBrew_dict["ibu"] = ibu
        beerBrew_dict["ounces"] = ounces
        beerBrew_dict["brewery_id"] = brew_id
        beerBrew_dict["brewery_name"] = brew_name
        beerBrew_dict["city"] = city
        beerBrew_dict["state"] = state

        all_beerBrew.append(beerBrew_dict)

    return jsonify(all_beerBrew)


if __name__ == '__main__':
    app.run(debug=True)
