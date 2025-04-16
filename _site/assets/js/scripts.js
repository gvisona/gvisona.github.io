
// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature coded by Andrew Moulden
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/
function decodeEmail()
                { coded = "OmY51IIm+v3A6mM3@O5m6YI1.nY2"
  key = "xpHFo0K25WrtJiw78ZIOGNsRcBSbefdaY9UhXqCMzmvEjVDLyQ64nglA3Pu1kT"		  
  shift=coded.length
  link=""
  for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i)
      link += (ltr)
    }
    else {     
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
      link += (key.charAt(ltr))
    }
  }
  var URL = "mailto:".concat(link);
  window.location.href = URL;
}
