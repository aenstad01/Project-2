import requests
import json
import csv
# from config import api_key


cached_business_data = {}

def get_businesses(location, categories, api_key):
    if (location, categories) in cached_business_data.keys():
        return cached_business_data [(location, categories)]
    
    headers = {'Authorization': 'Bearer %s' % api_key}
    url = 'https://api.yelp.com/v3/businesses/search'

    data = []
    for offset in range(0, 50):

        # 1000 back in offset
        params = {
            'limit': 50, 
            'location': location.replace(' ', '+'),
            'categories': categories.replace(' ', '+'),
            # 'offset': offset
        }

        response = requests.get(url, headers=headers, params=params)
        if response.status_code == 200:
            data += response.json()['businesses']
        elif response.status_code == 400:
            print('400 Bad Request')
            break
            
    cached_business_data[(location, categories)] = data
    return data

data = get_businesses("Minnesota", "breweries", "65iVvvgkBUN_P0Dd8VY3OZ9NcC0WO8hc3aQwAktg4Nqp_msv56vTiOrxhJ5Y9ZZDEPEi45KVR9prAYbyddZfIGI4WS0akIdxr_FRiS9zhAOxZrpfTxPPq4D2JfqIX3Yx")

print (data)