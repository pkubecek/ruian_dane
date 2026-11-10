var size = 0;
var placement = 'point';

var style_ostatni_pozemky_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("dan");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 7.000000 && value <= 63252.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(116,116,116,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.19}),fill: new ol.style.Fill({color: 'rgba(231,207,227,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 63252.000000 && value <= 356034.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(116,116,116,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.19}),fill: new ol.style.Fill({color: 'rgba(249,191,242,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 356034.000000 && value <= 1214101.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(116,116,116,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.19}),fill: new ol.style.Fill({color: 'rgba(243,128,229,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 1214101.000000 && value <= 3135874.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(116,116,116,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.19}),fill: new ol.style.Fill({color: 'rgba(237,64,216,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 3135874.000000 && value <= 15104033.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(116,116,116,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.19}),fill: new ol.style.Fill({color: 'rgba(231,0,203,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    };

    return style;
};
