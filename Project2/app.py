
# Import the functions we need from flask
from flask import Flask
from flask import render_template 
from flask import jsonify

# Import the functions we need from SQL Alchemy
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine




# # Define the database connection parameters
# username = 'postgres'  # Ideally this would come from config.py (or similar)
# password = 'postgresqladmin'  # Ideally this would come from config.py (or similar)
# database_name = 'GlobalFirePower' # Created in Week 9, Night 1, Exercise 08-Stu_CRUD 
# connection_string = f'postgresql://{username}:{password}@localhost:5432/{database_name}'