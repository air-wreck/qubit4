#!/usr/bin/env python

files = ['stats.html',
         'individuals.html',
         'playoffs-stats.html',
         'playoffs-individuals.html',
         'prelims-stats.html',
         'prelims-individuals.html']
css = '<link rel="stylesheet" href="sqbs.css" type="text/css">'
js = '<script src="sqbs.js" type="text/javascript"></script>\n'

for filename in files:
    buf = []
    with open(filename, 'r') as fin:
        for i, line in enumerate(fin):
            buf += [line]
        buf[3] = css
        buf += [buf[-1]]
        buf[-1] = buf[-2]
        buf[-2] = buf[-3]
        buf[-3] = js

    with open(filename, 'w') as fout:
        for line in buf:
            fout.write('%s' % line)
    buf = []
