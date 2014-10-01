(function() {
  var asciiContainer = document.getElementById("video");
  var capturing = false;
  var patch;
  var differ = new diff_match_patch();
  differ.Diff_Timeout = 1/30;

  camera.init({
    width: 160,
    height: 120,
    fps: 30,
    mirror: true,

    onFrame: function(canvas) {
      ascii.fromCanvas(canvas, {
        callback: function(asciiString) {
          //asciiContainer.innerHTML = asciiString;
          patch = differ.patch_make(asciiContainer.innerHTML, asciiString);
          //console.log(patch);
          var newAscii = differ.patch_apply(patch, asciiContainer.innerHTML)[0];
          //console.log(newAscii);
          asciiContainer.innerHTML = newAscii;
        }
      });
    },

    onSuccess: function() {
      capturing = true;
      asciiContainer.style.display = "block";
    },

    onNotSupported: function() {
      document.getElementById("info").style.display = "none";
      asciiContainer.style.display = "none";
      document.getElementById("notSupported").style.display = "block";
    }
  });
})();
