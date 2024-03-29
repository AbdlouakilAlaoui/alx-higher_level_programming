#!/usr/bin/python3
import requests
import sys
url = sys.argv[1]

response = requests.get(url)
print(response.text)
if response.status_code >= 400:
    print(f"Error code: {response.status_code}")
