import * as BABYLON from "babylonjs";
import { createScene } from "./scene.js";
import { drawHexTexture } from "./hex.js";

window.addEventListener("DOMContentLoaded", function () {
  // get the canvas DOM element
  var canvas = document.getElementById("renderCanvas");

  let _2d = false;

  if (_2d) {
    // 2d stuff
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    let ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    drawHexTexture(ctx);
  } else {
    // load the 3D engine
    var engine = new BABYLON.Engine(canvas, true);
    // call the createScene function
    var scene = createScene(engine, canvas);

    // run the render loop
    engine.runRenderLoop(function () {
      scene.render();
    });

    // the canvas/window resize event handler
    window.addEventListener("resize", function () {
      engine.resize();
    });
  }
});
