#!/usr/bin/python3
import urllib.request
import sys
url = sys.argv[1]

with urllib.request.urlopen(url) as response:
    if 'X-Request-Id' in response.headers:
        request_id = response.headers['X-Request-Id']
        print("X-Request-Id:", request_id)
    else:
        print("X-Request-Id header not found in the response.")
