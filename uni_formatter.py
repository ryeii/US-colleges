import json
import hashlib


uni = json.load(open('uni.json'))
for d in uni:
    print(d['institution'])
    print(str(hashlib.sha256(d['institution'].encode('utf-8')).hexdigest())[:6])

with open('target.txt', 'w') as f:
    for d in uni:
        f.write('{name: "' + d['institution'] + '", sha256: "'+str(hashlib.sha256(d['institution'].encode('utf-8')).hexdigest())[:6]+'"},\n')