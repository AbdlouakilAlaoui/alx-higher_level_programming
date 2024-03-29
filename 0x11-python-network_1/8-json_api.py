#!/usr/bin/python3
import requests
import sys
letter = sys.argv[1] if len(sys.argv) > 1 else ""
response = requests.post("http://0.0.0.0:5000/search_user", data={'q': letter})

try:
     data = response.json()
      if data and isinstance(data, dict):
        print(f"[{data['id']}] {data['name']}")
    else:
        print("No result")

except ValueError:
    print("Not a valid JSON")
