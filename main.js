/**
 * This example uses the Custom Elements build of Calcite Components.
 * Refer to the documentation if switching to the Distribution build:
 * https://developers.arcgis.com/calcite-design-system/get-started/#choose-a-build
 **/
import './style.css';
import '@esri/calcite-components/dist/calcite/calcite.css';
import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
import "@arcgis/map-components/dist/components/arcgis-map";

defineCalciteElements(window, {
  resourcesUrl: "https://js.arcgis.com/calcite-components/2.10.1/assets",
});

const loader = document.createElement('calcite-loader');
document.body.appendChild(loader);
