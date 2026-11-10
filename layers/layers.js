var wms_layers = [];

var format_ostatni_pozemky_0 = new ol.format.GeoJSON();
var features_ostatni_pozemky_0 = format_ostatni_pozemky_0.readFeatures(json_ostatni_pozemky_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ostatni_pozemky_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ostatni_pozemky_0.addFeatures(features_ostatni_pozemky_0);
var lyr_ostatni_pozemky_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ostatni_pozemky_0, 
                style: style_ostatni_pozemky_0,
                popuplayertitle: 'ostatni_pozemky',
                interactive: true,
    title: 'ostatni_pozemky<br />\
    <img src="styles/legend/ostatni_pozemky_0_0.png" /> 7 - 63252<br />\
    <img src="styles/legend/ostatni_pozemky_0_1.png" /> 63252 - 356034<br />\
    <img src="styles/legend/ostatni_pozemky_0_2.png" /> 356034 - 1214101<br />\
    <img src="styles/legend/ostatni_pozemky_0_3.png" /> 1214101 - 3135874<br />\
    <img src="styles/legend/ostatni_pozemky_0_4.png" /> 3135874 - 15104033<br />' });
var format_zastavene_plochy_1 = new ol.format.GeoJSON();
var features_zastavene_plochy_1 = format_zastavene_plochy_1.readFeatures(json_zastavene_plochy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zastavene_plochy_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zastavene_plochy_1.addFeatures(features_zastavene_plochy_1);
var lyr_zastavene_plochy_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zastavene_plochy_1, 
                style: style_zastavene_plochy_1,
                popuplayertitle: 'zastavene_plochy',
                interactive: true,
    title: 'zastavene_plochy<br />\
    <img src="styles/legend/zastavene_plochy_1_0.png" /> 1 - 473<br />\
    <img src="styles/legend/zastavene_plochy_1_1.png" /> 473 - 1922<br />\
    <img src="styles/legend/zastavene_plochy_1_2.png" /> 1922 - 5981<br />\
    <img src="styles/legend/zastavene_plochy_1_3.png" /> 5981 - 18225<br />\
    <img src="styles/legend/zastavene_plochy_1_4.png" /> 18225 - 147599<br />' });
var format_zemedelska_ostatni_2 = new ol.format.GeoJSON();
var features_zemedelska_ostatni_2 = format_zemedelska_ostatni_2.readFeatures(json_zemedelska_ostatni_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zemedelska_ostatni_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zemedelska_ostatni_2.addFeatures(features_zemedelska_ostatni_2);
var lyr_zemedelska_ostatni_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zemedelska_ostatni_2, 
                style: style_zemedelska_ostatni_2,
                popuplayertitle: 'zemedelska_ostatni',
                interactive: true,
    title: 'zemedelska_ostatni<br />\
    <img src="styles/legend/zemedelska_ostatni_2_0.png" /> 0 - 420<br />\
    <img src="styles/legend/zemedelska_ostatni_2_1.png" /> 420 - 1497<br />\
    <img src="styles/legend/zemedelska_ostatni_2_2.png" /> 1497 - 4080<br />\
    <img src="styles/legend/zemedelska_ostatni_2_3.png" /> 4080 - 9531<br />\
    <img src="styles/legend/zemedelska_ostatni_2_4.png" /> 9531 - 41041<br />' });
var format_orna_puda_3 = new ol.format.GeoJSON();
var features_orna_puda_3 = format_orna_puda_3.readFeatures(json_orna_puda_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_orna_puda_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_orna_puda_3.addFeatures(features_orna_puda_3);
var lyr_orna_puda_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_orna_puda_3, 
                style: style_orna_puda_3,
                popuplayertitle: 'orna_puda',
                interactive: true,
    title: 'orna_puda<br />\
    <img src="styles/legend/orna_puda_3_0.png" /> 0 - 2456<br />\
    <img src="styles/legend/orna_puda_3_1.png" /> 2456 - 8713<br />\
    <img src="styles/legend/orna_puda_3_2.png" /> 8713 - 23657<br />\
    <img src="styles/legend/orna_puda_3_3.png" /> 23657 - 68371<br />\
    <img src="styles/legend/orna_puda_3_4.png" /> 68371 - 141922<br />' });
var format_stavby_ostatni_4 = new ol.format.GeoJSON();
var features_stavby_ostatni_4 = format_stavby_ostatni_4.readFeatures(json_stavby_ostatni_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stavby_ostatni_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stavby_ostatni_4.addFeatures(features_stavby_ostatni_4);
var lyr_stavby_ostatni_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_stavby_ostatni_4, 
                style: style_stavby_ostatni_4,
                popuplayertitle: 'stavby_ostatni',
                interactive: true,
    title: 'stavby_ostatni<br />\
    <img src="styles/legend/stavby_ostatni_4_0.png" /> 38 - 24136<br />\
    <img src="styles/legend/stavby_ostatni_4_1.png" /> 24136 - 105644<br />\
    <img src="styles/legend/stavby_ostatni_4_2.png" /> 105644 - 328265<br />\
    <img src="styles/legend/stavby_ostatni_4_3.png" /> 328265 - 745780<br />\
    <img src="styles/legend/stavby_ostatni_4_4.png" /> 745780 - 3308760<br />' });
var format_stavby_bydleni_5 = new ol.format.GeoJSON();
var features_stavby_bydleni_5 = format_stavby_bydleni_5.readFeatures(json_stavby_bydleni_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stavby_bydleni_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stavby_bydleni_5.addFeatures(features_stavby_bydleni_5);
var lyr_stavby_bydleni_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_stavby_bydleni_5, 
                style: style_stavby_bydleni_5,
                popuplayertitle: 'stavby_bydleni',
                interactive: true,
    title: 'stavby_bydleni<br />\
    <img src="styles/legend/stavby_bydleni_5_0.png" /> 59 - 1589<br />\
    <img src="styles/legend/stavby_bydleni_5_1.png" /> 1589 - 3584<br />\
    <img src="styles/legend/stavby_bydleni_5_2.png" /> 3584 - 7763<br />\
    <img src="styles/legend/stavby_bydleni_5_3.png" /> 7763 - 19271<br />\
    <img src="styles/legend/stavby_bydleni_5_4.png" /> 19271 - 44933<br />' });
var group_daneopraveno = new ol.layer.Group({
                                layers: [lyr_ostatni_pozemky_0,lyr_zastavene_plochy_1,lyr_zemedelska_ostatni_2,lyr_orna_puda_3,lyr_stavby_ostatni_4,lyr_stavby_bydleni_5,],
                                fold: 'open',
                                title: 'dane – opraveno'});

lyr_ostatni_pozemky_0.setVisible(true);lyr_zastavene_plochy_1.setVisible(true);lyr_zemedelska_ostatni_2.setVisible(true);lyr_orna_puda_3.setVisible(true);lyr_stavby_ostatni_4.setVisible(true);lyr_stavby_bydleni_5.setVisible(true);
var layersList = [group_daneopraveno];
lyr_ostatni_pozemky_0.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'KmenoveCislo': 'KmenoveCislo', 'PododdeleniCisla': 'PododdeleniCisla', 'DruhPozemkuKod': 'DruhPozemkuKod', 'KatastralniUzemiKod': 'KatastralniUzemiKod', 'ku_nazev': 'ku_nazev', 'vymera_m2': 'vymera_m2', 'plocha_geom_m2': 'plocha_geom_m2', 'cena_m2': 'cena_m2', 'sazba': 'sazba', 'koef': 'koef', 'dan': 'dan', });
lyr_zastavene_plochy_1.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'KmenoveCislo': 'KmenoveCislo', 'PododdeleniCisla': 'PododdeleniCisla', 'DruhPozemkuKod': 'DruhPozemkuKod', 'KatastralniUzemiKod': 'KatastralniUzemiKod', 'ku_nazev': 'ku_nazev', 'vymera_m2': 'vymera_m2', 'plocha_geom_m2': 'plocha_geom_m2', 'cena_m2': 'cena_m2', 'sazba': 'sazba', 'koef': 'koef', 'dan': 'dan', });
lyr_zemedelska_ostatni_2.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'KmenoveCislo': 'KmenoveCislo', 'PododdeleniCisla': 'PododdeleniCisla', 'DruhPozemkuKod': 'DruhPozemkuKod', 'KatastralniUzemiKod': 'KatastralniUzemiKod', 'ku_nazev': 'ku_nazev', 'vymera_m2': 'vymera_m2', 'plocha_geom_m2': 'plocha_geom_m2', 'cena_m2': 'cena_m2', 'sazba': 'sazba', 'koef': 'koef', 'dan': 'dan', });
lyr_orna_puda_3.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'KmenoveCislo': 'KmenoveCislo', 'PododdeleniCisla': 'PododdeleniCisla', 'DruhPozemkuKod': 'DruhPozemkuKod', 'KatastralniUzemiKod': 'KatastralniUzemiKod', 'ku_nazev': 'ku_nazev', 'vymera_m2': 'vymera_m2', 'plocha_geom_m2': 'plocha_geom_m2', 'cena_m2': 'cena_m2', 'sazba': 'sazba', 'koef': 'koef', 'dan': 'dan', });
lyr_stavby_ostatni_4.set('fieldAliases', {'fid': 'fid', 'Kod': 'Kod', 'CisloDomovni': 'CisloDomovni', 'ZpusobVyuzitiKod': 'ZpusobVyuzitiKod', 'ZpusobVyuzitiNazev': 'ZpusobVyuzitiNazev', 'ZastavenaPlocha_ruian': 'ZastavenaPlocha_ruian', 'plocha_geom_m2': 'plocha_geom_m2', 'plocha_zaklad_m2': 'plocha_zaklad_m2', 'sazba': 'sazba', 'koef': 'koef', 'dan': 'dan', });
lyr_stavby_bydleni_5.set('fieldAliases', {'fid': 'fid', 'Kod': 'Kod', 'CisloDomovni': 'CisloDomovni', 'ZpusobVyuzitiKod': 'ZpusobVyuzitiKod', 'ZpusobVyuzitiNazev': 'ZpusobVyuzitiNazev', 'ZastavenaPlocha_ruian': 'ZastavenaPlocha_ruian', 'plocha_geom_m2': 'plocha_geom_m2', 'plocha_zaklad_m2': 'plocha_zaklad_m2', 'sazba': 'sazba', 'koef': 'koef', 'dan': 'dan', });
lyr_ostatni_pozemky_0.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'KmenoveCislo': 'Range', 'PododdeleniCisla': 'Range', 'DruhPozemkuKod': 'Range', 'KatastralniUzemiKod': 'Range', 'ku_nazev': 'TextEdit', 'vymera_m2': 'TextEdit', 'plocha_geom_m2': 'TextEdit', 'cena_m2': 'TextEdit', 'sazba': 'TextEdit', 'koef': 'TextEdit', 'dan': 'TextEdit', });
lyr_zastavene_plochy_1.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'KmenoveCislo': 'Range', 'PododdeleniCisla': 'Range', 'DruhPozemkuKod': 'Range', 'KatastralniUzemiKod': 'Range', 'ku_nazev': 'TextEdit', 'vymera_m2': 'TextEdit', 'plocha_geom_m2': 'TextEdit', 'cena_m2': 'TextEdit', 'sazba': 'TextEdit', 'koef': 'TextEdit', 'dan': 'TextEdit', });
lyr_zemedelska_ostatni_2.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'KmenoveCislo': 'Range', 'PododdeleniCisla': 'Range', 'DruhPozemkuKod': 'Range', 'KatastralniUzemiKod': 'Range', 'ku_nazev': 'TextEdit', 'vymera_m2': 'TextEdit', 'plocha_geom_m2': 'TextEdit', 'cena_m2': 'TextEdit', 'sazba': 'TextEdit', 'koef': 'TextEdit', 'dan': 'TextEdit', });
lyr_orna_puda_3.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'KmenoveCislo': 'Range', 'PododdeleniCisla': 'Range', 'DruhPozemkuKod': 'Range', 'KatastralniUzemiKod': 'Range', 'ku_nazev': 'TextEdit', 'vymera_m2': 'TextEdit', 'plocha_geom_m2': 'TextEdit', 'cena_m2': 'TextEdit', 'sazba': 'TextEdit', 'koef': 'TextEdit', 'dan': 'TextEdit', });
lyr_stavby_ostatni_4.set('fieldImages', {'fid': 'TextEdit', 'Kod': 'TextEdit', 'CisloDomovni': 'TextEdit', 'ZpusobVyuzitiKod': 'Range', 'ZpusobVyuzitiNazev': 'TextEdit', 'ZastavenaPlocha_ruian': 'TextEdit', 'plocha_geom_m2': 'TextEdit', 'plocha_zaklad_m2': 'TextEdit', 'sazba': 'TextEdit', 'koef': 'TextEdit', 'dan': 'TextEdit', });
lyr_stavby_bydleni_5.set('fieldImages', {'fid': 'TextEdit', 'Kod': 'TextEdit', 'CisloDomovni': 'TextEdit', 'ZpusobVyuzitiKod': 'Range', 'ZpusobVyuzitiNazev': 'TextEdit', 'ZastavenaPlocha_ruian': 'TextEdit', 'plocha_geom_m2': 'TextEdit', 'plocha_zaklad_m2': 'TextEdit', 'sazba': 'TextEdit', 'koef': 'TextEdit', 'dan': 'TextEdit', });
lyr_ostatni_pozemky_0.set('fieldLabels', {'fid': 'inline label - always visible', 'Id': 'inline label - always visible', 'KmenoveCislo': 'inline label - always visible', 'PododdeleniCisla': 'inline label - always visible', 'DruhPozemkuKod': 'inline label - always visible', 'KatastralniUzemiKod': 'inline label - always visible', 'ku_nazev': 'inline label - always visible', 'vymera_m2': 'inline label - always visible', 'plocha_geom_m2': 'inline label - always visible', 'cena_m2': 'inline label - always visible', 'sazba': 'inline label - always visible', 'koef': 'inline label - always visible', 'dan': 'inline label - always visible', });
lyr_zastavene_plochy_1.set('fieldLabels', {'fid': 'inline label - always visible', 'Id': 'inline label - always visible', 'KmenoveCislo': 'inline label - always visible', 'PododdeleniCisla': 'inline label - always visible', 'DruhPozemkuKod': 'inline label - always visible', 'KatastralniUzemiKod': 'inline label - always visible', 'ku_nazev': 'inline label - always visible', 'vymera_m2': 'inline label - always visible', 'plocha_geom_m2': 'inline label - visible with data', 'cena_m2': 'inline label - always visible', 'sazba': 'inline label - always visible', 'koef': 'inline label - always visible', 'dan': 'inline label - always visible', });
lyr_zemedelska_ostatni_2.set('fieldLabels', {'fid': 'inline label - always visible', 'Id': 'inline label - always visible', 'KmenoveCislo': 'inline label - always visible', 'PododdeleniCisla': 'inline label - always visible', 'DruhPozemkuKod': 'inline label - always visible', 'KatastralniUzemiKod': 'inline label - always visible', 'ku_nazev': 'inline label - always visible', 'vymera_m2': 'inline label - always visible', 'plocha_geom_m2': 'inline label - always visible', 'cena_m2': 'inline label - always visible', 'sazba': 'inline label - always visible', 'koef': 'inline label - always visible', 'dan': 'inline label - always visible', });
lyr_orna_puda_3.set('fieldLabels', {'fid': 'header label - always visible', 'Id': 'inline label - always visible', 'KmenoveCislo': 'inline label - always visible', 'PododdeleniCisla': 'inline label - always visible', 'DruhPozemkuKod': 'inline label - always visible', 'KatastralniUzemiKod': 'inline label - always visible', 'ku_nazev': 'inline label - always visible', 'vymera_m2': 'inline label - always visible', 'plocha_geom_m2': 'inline label - always visible', 'cena_m2': 'inline label - always visible', 'sazba': 'inline label - always visible', 'koef': 'inline label - always visible', 'dan': 'inline label - always visible', });
lyr_stavby_ostatni_4.set('fieldLabels', {'fid': 'inline label - always visible', 'Kod': 'inline label - always visible', 'CisloDomovni': 'inline label - always visible', 'ZpusobVyuzitiKod': 'inline label - always visible', 'ZpusobVyuzitiNazev': 'inline label - always visible', 'ZastavenaPlocha_ruian': 'inline label - always visible', 'plocha_geom_m2': 'inline label - always visible', 'plocha_zaklad_m2': 'inline label - always visible', 'sazba': 'inline label - always visible', 'koef': 'inline label - always visible', 'dan': 'inline label - always visible', });
lyr_stavby_bydleni_5.set('fieldLabels', {'fid': 'inline label - always visible', 'Kod': 'inline label - always visible', 'CisloDomovni': 'inline label - always visible', 'ZpusobVyuzitiKod': 'inline label - always visible', 'ZpusobVyuzitiNazev': 'inline label - always visible', 'ZastavenaPlocha_ruian': 'inline label - always visible', 'plocha_geom_m2': 'inline label - always visible', 'plocha_zaklad_m2': 'inline label - always visible', 'sazba': 'inline label - always visible', 'koef': 'inline label - always visible', 'dan': 'inline label - always visible', });
lyr_stavby_bydleni_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});