#!/usr/bin/python3
import requests
import sys
url = sys.argv[1]

response = requests.get(url)
if 'X-Request-Id' in response.headers:
    request_id = response.headers['X-Request-Id']
    print("X-Request-Id:", request_id)
else:
    print("X-Request-Id header not found in the response.")
