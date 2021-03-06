/* disable links */
var links = document.getElementsByTagName('a');
for (let i = 0; i < links.length; ++i) {
  console.log(links[i].href);
  links[i].href = '';
}

/* change title text */
var title = document.getElementsByTagName('h1')[0];
//title.innerHTML = 'QuBIT IV ' + title.innerHTML;
var hrefs = document.createElement('div');
hrefs.style.cssText = 'text-align: center;';
hrefs.innerHTML = '<a style="text-decoration: underline;" href="prelims-stats.html">Prelims Teams</a>&nbsp;&nbsp<a style="text-decoration: underline;" href="prelims-individuals.html">Prelims Individuals</a>&nbsp;|&nbsp;<a style="text-decoration: underline;" href="playoffs-stats.html">Playoffs Teams</a>&nbsp;&nbsp;<a style="text-decoration: underline;" href="playoffs-individuals.html">Playoffs Individuals</a>&nbsp;|&nbsp;<a style="text-decoration: underline;" href="stats.html">Combined Teams</a>&nbsp;&nbsp;<a style="text-decoration: underline;" href="individuals.html">Combined Individuals</a>';
title.parentNode.insertBefore(hrefs, title.nextSibling);

/* add note on bottom */
document.body.innerHTML += '<p>These statistics reflect the most currently available state of the QuBIT IV quizbowl tournament at High Technology High School. They will probably lag behind by about one round.</p></div>';
