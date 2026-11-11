var wms_layers = [];

var lyr_BasiskaartAmsterdamZWWebMercator_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://map.data.amsterdam.nl/maps/topografie?VERSION%3D1.1.0%26",
                              attributions: ' ',
                              params: {
                                "LAYERS": "topo_wm_zw",
                                "TILED": "true",
                                "VERSION": "1.1.0"},
                            })),
                            title: 'Basiskaart Amsterdam - ZW (Web Mercator)',
                            popuplayertitle: 'Basiskaart Amsterdam - ZW (Web Mercator)',
                            type: 'base',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_BasiskaartAmsterdamZWWebMercator_0, 0]);
var format_Aantalvertrekkendeelmobiliteit_1 = new ol.format.GeoJSON();
var features_Aantalvertrekkendeelmobiliteit_1 = format_Aantalvertrekkendeelmobiliteit_1.readFeatures(json_Aantalvertrekkendeelmobiliteit_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aantalvertrekkendeelmobiliteit_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aantalvertrekkendeelmobiliteit_1.addFeatures(features_Aantalvertrekkendeelmobiliteit_1);
var lyr_Aantalvertrekkendeelmobiliteit_1 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Aantalvertrekkendeelmobiliteit_1, 
                radius: 10 * 2,
                gradient: ['#2b83ba', '#abdda4', '#ffffbf', '#fdae61', '#d7191c'],
                blur: 15,
                shadow: 250,
                opacity: 1.0,
    weight: function(feature){
        var weightField = 'aantal_vertrekken';
        var featureWeight = feature.get(weightField);
        var maxWeight = 136;
        var calibratedWeight = featureWeight/maxWeight;
        return calibratedWeight;
    },
                title: 'Aantal vertrekken deelmobiliteit'
            });
var lyr_Stadsdeel_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://map.data.amsterdam.nl/maps/gebieden?VERSION%3D1.1.0%26",
                              attributions: ' ',
                              params: {
                                "LAYERS": "stadsdeel",
                                "TILED": "true",
                                "VERSION": "1.1.0"},
                            })),
                            title: 'Stadsdeel',
                            popuplayertitle: 'Stadsdeel',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Stadsdeel_2, 0]);
var lyr_Wijk_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://map.data.amsterdam.nl/maps/gebieden?VERSION%3D1.1.0%26",
                              attributions: ' ',
                              params: {
                                "LAYERS": "wijk",
                                "TILED": "true",
                                "VERSION": "1.1.0"},
                            })),
                            title: 'Wijk',
                            popuplayertitle: 'Wijk',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Wijk_3, 0]);
var lyr_Buurt_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://map.data.amsterdam.nl/maps/gebieden?VERSION%3D1.1.0%26",
                              attributions: ' ',
                              params: {
                                "LAYERS": "buurt",
                                "TILED": "true",
                                "VERSION": "1.1.0"},
                            })),
                            title: 'Buurt',
                            popuplayertitle: 'Buurt',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Buurt_4, 0]);
var format_Vertreklocatiesdeelmobiliteit_5 = new ol.format.GeoJSON();
var features_Vertreklocatiesdeelmobiliteit_5 = format_Vertreklocatiesdeelmobiliteit_5.readFeatures(json_Vertreklocatiesdeelmobiliteit_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vertreklocatiesdeelmobiliteit_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vertreklocatiesdeelmobiliteit_5.addFeatures(features_Vertreklocatiesdeelmobiliteit_5);
var lyr_Vertreklocatiesdeelmobiliteit_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vertreklocatiesdeelmobiliteit_5,
maxResolution:4.3387319409699465,
 
                style: style_Vertreklocatiesdeelmobiliteit_5,
                popuplayertitle: 'Vertreklocaties deelmobiliteit',
                interactive: true,
    title: 'Vertreklocaties deelmobiliteit<br />\
    <img src="styles/legend/Vertreklocatiesdeelmobiliteit_5_0.png" /> 1 vertrek<br />\
    <img src="styles/legend/Vertreklocatiesdeelmobiliteit_5_1.png" /> 2-5 vertrekken<br />\
    <img src="styles/legend/Vertreklocatiesdeelmobiliteit_5_2.png" /> 6-10 vertrekken<br />\
    <img src="styles/legend/Vertreklocatiesdeelmobiliteit_5_3.png" /> > 10 vertrekken<br />' });

lyr_BasiskaartAmsterdamZWWebMercator_0.setVisible(true);lyr_Aantalvertrekkendeelmobiliteit_1.setVisible(true);lyr_Stadsdeel_2.setVisible(true);lyr_Wijk_3.setVisible(true);lyr_Buurt_4.setVisible(true);lyr_Vertreklocatiesdeelmobiliteit_5.setVisible(true);
var layersList = [lyr_BasiskaartAmsterdamZWWebMercator_0,lyr_Aantalvertrekkendeelmobiliteit_1,lyr_Stadsdeel_2,lyr_Wijk_3,lyr_Buurt_4,lyr_Vertreklocatiesdeelmobiliteit_5];
lyr_Vertreklocatiesdeelmobiliteit_5.set('fieldAliases', {'id': 'id', 'x': 'x', 'y': 'y', 'longitude': 'longitude', 'latitude': 'latitude', 'aantal_vertrekken': 'aantal_vertrekken', });
lyr_Vertreklocatiesdeelmobiliteit_5.set('fieldImages', {'id': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'aantal_vertrekken': 'TextEdit', });
lyr_Vertreklocatiesdeelmobiliteit_5.set('fieldLabels', {'id': 'no label', 'x': 'no label', 'y': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'aantal_vertrekken': 'no label', });
lyr_Vertreklocatiesdeelmobiliteit_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});