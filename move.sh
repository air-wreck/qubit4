#!/bin/sh

# just to automate this and make my life easier
cp sqbs/uploads-combined/combined_standings.html stats.html
cp sqbs/uploads-combined/combined_individuals.html individuals.html
cp sqbs/uploads-playoffs/playoffs_standings.html playoffs-stats.html
cp sqbs/uploads-playoffs/playoffs_individuals.html playoffs-individuals.html
cp sqbs/uploads-prelims/prelims_standings.html prelims-stats.html
cp sqbs/uploads-prelims/prelims_individuals.html prelims-individuals.html

# use copy.py to copy over the right lines
./copy.py
