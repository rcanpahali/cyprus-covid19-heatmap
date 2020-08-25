import { Component } from "@angular/core";
import * as L from "leaflet";
import 'leaflet.heat/dist/leaflet-heat.js'
import { addressPoints } from './../assets/realworld.10000'

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  options = {
    layers: [
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: ""
      })
    ],
    zoom: 12,
    center: L.latLng(-37.87, 175.475)
  };

  onMapReady(map) {
    let newAddressPoints = addressPoints.map(function (p) { return [p[0], p[1]]; });
    const heat = (L as any).heatLayer(newAddressPoints).addTo(map);
  }
}
