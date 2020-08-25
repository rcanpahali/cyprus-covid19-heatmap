import { Component } from "@angular/core";
import * as L from "leaflet";
import "leaflet.heat/dist/leaflet-heat.js";
import { addressPoints } from "./../assets/realworld.10000";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  options = {
    layers: [
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 17,
        minZoom: 10,
        attribution: "R. Can PAHALI",
        opacity: 1,
      }),
    ],
    zoom: 13,
    center: L.latLng(35.175921, 33.364245),
  };

  onMapReady(map) {
    let heatLayerOptions = {
      minOpacity: 0.80,
      radius: 60,
      blur: 25,
      //gradient: {0.4: 'blue', 0.65: 'lime', 1: 'red'}
    };    
    let newAddressPoints = addressPoints.map(function (p) {
      return [p[0], p[1]];
    });
    const heat = (L as any)
      .heatLayer(newAddressPoints, heatLayerOptions)
      .addTo(map);
  }
}
