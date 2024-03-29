#!/usr/bin/python3
import urllib.request
import sys
from urllib.error import HTTPError
url = sys.argv[1]

try:
    with urllib.request.urlopen(url) as response:
        body = response.read().decode('utf-8')
        print(body)
except HTTPError as e:
    print(f"Error code: {e.code}")
