var layerImage = new ol.layer.Image({
  source: new ol.source.ImageVector({
    source: new ol.source.Vector({
      url: 'http://rawgit.com/openlayers/openlayers.github.io/master/en/v3.18.2/examples/data/geojson/countries.geojson',
      format: new ol.format.GeoJSON()
    }),
    style: new ol.style.Style({
      fill: new ol.style.Fill({
        color: 'rgba(255, 255, 255, 0.6)'
      }),
      stroke: new ol.style.Stroke({
        color: '#319FD3',
        width: 1
      })
    })
  })
});

var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    }),
    layerImage
  ],
  target: 'map',
  view: new ol.View({
    center: [0, 0],
    zoom: 1
  })
});

var searchLayer = new ol.SearchLayer({
  layer: layerImage,
  colName: 'name',
  zoom: 10,
  collapsed: true,
  map: map
});

map.addControl(searchLayer);
