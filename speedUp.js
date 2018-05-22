function SetSpeed(e) {
  var evtobj = window.event ? event : e
  if (evtobj.ctrlKey)
  {
    var playbackRate = document.getElementsByTagName("video")[0].playbackRate;
    if (evtobj.keyCode == 49) document.getElementsByTagName("video")[0].playbackRate = 0.25;
    else if (evtobj.keyCode == 50) document.getElementsByTagName("video")[0].playbackRate = 0.5;
    else if (evtobj.keyCode == 51) document.getElementsByTagName("video")[0].playbackRate = 1;
    else if (evtobj.keyCode == 52) document.getElementsByTagName("video")[0].playbackRate = 1.5;
    else if (evtobj.keyCode == 53) document.getElementsByTagName("video")[0].playbackRate = 2;
    else if (evtobj.keyCode == 54) document.getElementsByTagName("video")[0].playbackRate = 2.5;
    else if (evtobj.keyCode == 55) document.getElementsByTagName("video")[0].playbackRate = 3;
    else if (evtobj.keyCode == 189) document.getElementsByTagName("video")[0].playbackRate = playbackRate - 0.5;
    else if (evtobj.keyCode == 187) document.getElementsByTagName("video")[0].playbackRate = playbackRate + 0.5;
  }
}

document.addEventListener('keydown', (event) => { SetSpeed(event); });