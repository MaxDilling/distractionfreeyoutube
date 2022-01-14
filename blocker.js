// ==UserScript==
// @name        Youtube Homescreen Contentblocker
// @description This is your new file, start writing code
// @match       *://www.youtube.com/*
// ==/UserScript==


function removeDistraction (){
  if(false) {
   let shelfs = document.getElementsByTagName('ytd-shelf-renderer')
   
   for (var i = 1; i < shelfs.length; i++) {
     shelfs[i].style.display = 'none';
   }
   
  } else { 
    document.getElementById('contents').style.display = 'none';
  }
}


removeDistraction();
