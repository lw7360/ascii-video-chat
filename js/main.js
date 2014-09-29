(function() {
        var asciiContainer = document.getElementById("video");
        var capturing = false;

        camera.init({
                width: 160,
                height: 120,
                fps: 30,
                mirror: true,

                onFrame: function(canvas) {
                        ascii.fromCanvas(canvas, {
                                // contrast: 128,
                                callback: function(asciiString) {
                                        asciiContainer.innerHTML = asciiString;
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
