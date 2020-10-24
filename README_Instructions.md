## Project 2 - Group 7</br>

## Team Members: 
Amanda Enstad, Chi Tran, Matt Russell, Barbara MacGregor

### After you clone our repository to your desktop, please follow these instructions to successfully load our website with all relevant data: </br>
1. Find the folder that contains our "app.py" and launch a Terminal if you are a Mac user, or a GitBash if you have a PC. </br>
2. The first command you should type is "source activate NewPythonData" and hit ENTER. NewPythonData has all of the necessary packages to open up our website successfully. These packages include Flask and SQL Alchemy.</br>
3. After NewPythonData is updated, please find the app.py file and type "python app.py" and then hit ENTER.</br>
4. The output will tell you what port the Flask server is running on. Do not close this window.</br>
5. With the Flask server running, enter this address in your Google Chrome browser http://127.0.0.1:5000. This should load the index page.</br>
6. Please set up a config.py file and save it into the js folder within the static folder with your MapBox API key. Make sure the variable is called "mapbox_api_key". 
<br></br>
<br></br>

# Welcome to our Brewery Hopper website! Here you can navigate to our Beer Analysis, Recommendation, Local Brewery Finder and "About" pages. </br>

## Beer Characteristics Page </br>
Please navigate to the "Beer by the Lines" dropdown box and select a style. The beer page displays measured characteristics of different beer styles. It opens with the charts describing these characteristics. There is an introduction describing the scatter polar charts used to display the data. A dropdown menu allows the user to select a beer style family and scatter polar charts are displayed for the styles within the family.</br>

## Get Recommendations Page </br>
Find your ideal beer from our beer database that includes over 2,600 beers. You are able to filter by name, style, and then sliders on bitterness and alcohol content. If you know what brewery you want to look at or find beer by location, please use the "Search by Brewery" options to focus in on certain brews. There is also a link called "View Overall Patterns in IBU and ABV. The landing page for this contains chart that shows the bitterness and alcohol content of each beer by Beer ID. Our source (Kaggle Craft Beers Dataset) also directs to where we got the data.</br>

## Find a Local Brewery Page </br>
As a reminder, before the map loads, please ensure you have your Mapbox API key ready. You should have one from our class activities. There are over 30 breweries choose to from and the pop-Up window includes their ratings and # of reviews from Yelp. These records are in a JSON, not an API request, so you will not need to request a Yelp API key.  </br>

## About this Data page </br>
We always cite our sources and this is no different. Here you will find what programs we used to create this webpage. You can also have fun playing with our chart that compares the bitterness units and alcohol content to the Beer IDs in the recommendation page.  </br>
<br></br>
<br></br>
# Other things to consider </br>
1. PostgreSQL. You will have to update the password to yours. The username is probably identical. </br>
2. We have met all of the requirements necessary to complete this project. </br>
<ul> 
<li>We have more than three views of our data</li>
<li>A non-standard D3 Visualization (see Beer Analysis Page)</li>
<li>A website having separate pages</li>
<li>A flask server with at least one API endpoint and pulls data from a database before returning to the website</li>
<li>Our project uses PostGreSQL and SQLite</li>
<li>Our dataset on the "Get Recommendations Page" has well over 100 records and user-driven interaction</li>
<li>Everything is submitted in a single GitHub repo with all of the necessary files for you to receate our work</li>
</ul>