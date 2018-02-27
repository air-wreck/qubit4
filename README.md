# qubit4
live stats for QuBIT IV quizbowl tournament @ High Tech

## stats
If you were looking for the live stats and stumbled across this page accidentally, you can find them [here](stats.html).

### about QuBIT
QuBIT is an annual quizbowl tournament run by the High Technology High School Academic Team (Lincroft, NJ). This year, we are using TJ/Charter's FACTS set. You can find more information from our forum post.

### this repository
Scorekeeping is handled in Google Sheets and, stats are hosted from this repository. To make things simple, the HTML web reports are generated directly from SQBS, with the following lines added for styling:

```
<link rel="stylesheet" href="sqbs.css" type="text/css">
```

and

```
<script src="sqbs.js" type="text/javascript"></script>
```

Note that the Javascript must come *after* all the HTML, or it will not work. These lines can automatically be appended by the `copy.py` file. Actually, the entire process can be automated with the `move.sh` script, assuming you put your sqbs reports in a logical place in the sqbs directory. 
