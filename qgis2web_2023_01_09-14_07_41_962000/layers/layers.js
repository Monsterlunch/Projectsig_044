var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_PEKALONGAN_0 = new ol.format.GeoJSON();
var features_PEKALONGAN_0 = format_PEKALONGAN_0.readFeatures(json_PEKALONGAN_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEKALONGAN_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PEKALONGAN_0.addFeatures(features_PEKALONGAN_0);var lyr_PEKALONGAN_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEKALONGAN_0, 
                style: style_PEKALONGAN_0,
    title: 'PEKALONGAN<br />\
    <img src="styles/legend/PEKALONGAN_0_0.png" />  999 - 3027 <br />\
    <img src="styles/legend/PEKALONGAN_0_1.png" />  3027 - 5054 <br />\
    <img src="styles/legend/PEKALONGAN_0_2.png" />  5054 - 7082 <br />'
        });

lyr_PEKALONGAN_0.setVisible(true);
var layersList = [baseLayer,lyr_PEKALONGAN_0];
lyr_PEKALONGAN_0.set('fieldAliases', {'WADMKC': 'WADMKC', 'Sekolah': 'Sekolah', 'Guru': 'Guru', 'Murid': 'Murid', });
lyr_PEKALONGAN_0.set('fieldImages', {'WADMKC': 'TextEdit', 'Sekolah': 'TextEdit', 'Guru': 'TextEdit', 'Murid': 'TextEdit', });
lyr_PEKALONGAN_0.set('fieldLabels', {'WADMKC': 'no label', 'Sekolah': 'header label', 'Guru': 'header label', 'Murid': 'header label', });
lyr_PEKALONGAN_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});