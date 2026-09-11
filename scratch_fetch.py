import urllib.request
import json
import re
import os

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9'
}

urls = [
    'https://www.makemytrip.com/hotels/zuri_cottages_pahalgam-details-pahalgam.html',
    'https://www.goibibo.com/hotels/zuri-cottages-pahalgam-hotel-in-pahalgam-8723652192131920831/',
    'https://www.goibibo.com/hotels/zuri-cottage-hotel-in-pahalgam-4796796328325603875/'
]

for url in urls:
    print("Trying:", url)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=12) as resp:
            content = resp.read().decode('utf-8', errors='ignore')
            print(f"Loaded {len(content)} bytes from {url}")
            # find all image urls
            matches = re.findall(r'https?://[a-zA-Z0-9_\-\.\/]+?\.(?:jpg|jpeg|png|webp)', content)
            hotel_imgs = [m for m in set(matches) if any(k in m.lower() for k in ['ibcdn', 'mmtcdn', 'makemytrip', 'goibibo', 'hotel', 'property', 'upload'])]
            print(f"Found {len(hotel_imgs)} matching images:")
            for img in hotel_imgs[:10]:
                print("  ", img)
    except Exception as e:
        print("Error:", e)

