(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();

var rellax = new Rellax(".rellax")
config ={
    "particles": {
        "number": {
          "value": 50,
          "density": {
            "enable": true,
            "value_area": 700 // Denser the smaller the number.
          }
        },
        "color": { // The color for every node, not the connecting lines.
          "value": "#01579b" // Or use an array of colors like ["#9b0000", "#001378", "#0b521f"]
        },
        "shape": {
            "type": "circle", // Can show circle, edge (a square), triangle, polygon, star, img, or an array of multiple.
            "stroke": { // The border
              "width": 1,
              "color": "#145ea8"
            },
            "polygon": { // if the shape is a polygon
              "nb_sides": 5
            },
            "image": { // If the shape is an image
              "src": "",
              "width": 100,
              "height": 100
            }
        },
        "opacity": {
          "value": 0.7,
          "random": true
        },
        "size": {
          "value": 10,
          "random": true
        },
        "line_linked": {
          "enable": true,
          "distance": 200, // The radius before a line is added, the lower the number the more lines.
          "color": "#007ecc",
          "opacity": 0.5,
          "width": 2
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "top", // Move them off the canvas, either "none", "top", "right", "bottom", "left", "top-right", "bottom-right" et cetera...
          "random": true,
          "straight": false, // Whether they'll shift left and right while moving.
          "out_mode": "out", // What it'll do when it reaches the end of the canvas, either "out" or "bounce".
          "bounce": false,
          "attract": { // Make them start to clump together while moving.
            "enable": true,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      }
}
particleJS.load('particle',config)