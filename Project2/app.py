# Import
from flask import Flask
from flask import render_template 
from flask import jsonify
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import numpy as np


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///sqlite/beersDb.sqlite")

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

# serve  the home page html
@app.route("/")
def IndexRoute():
    """This runs the browser and load the index route"""
    indexWebPage = render_template("index.html")
    return indexWebPage  

# serve  the analysis page
@app.route("/analysis.html")
def analysisRoute():
    """This runs the browser and load the analysis route"""
    analysisWebPage = render_template("analysis.html")
    return analysisWebPage    

# serve  the recommendation page
@app.route("/recommendation.html")
def recomendationRoute():
    """This runs the browser and load the recommendation route"""
    recWebPage = render_template("recommendation.html")
    return recWebPage    

# serve  the map page html
@app.route("/map.html")
def mapRoute():
    """This runs the browser and load the index route"""
    mapWebPage = render_template("map.html")
    return mapWebPage    

# serve  the about-this-data page html
@app.route("/about-this-data.html")
def aboutThisDataRoute():
    """This runs the browser and load the index route"""
    aboutDataWebPage = render_template("about-this-data.html")
    return aboutDataWebPage    

# create api for the database
# api end-point for beers
@app.route("/api/beers")
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

# api end-point for breweries
@app.route("/api/breweries")
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

# api end-point for beers and breweries database joined
@app.route("/api/beersBrewJoin")
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
