var map = L.map('map').setView([36.575,135.984], 5);    // 日本を中心に設定

var geojsonFeature = [];                                // マーカー情報を格納する配列
var popupContents = ["東京", "大阪", "札幌", "那覇"];      // ポップアップで表示する内容
var lat = [35.69, 34.69, 43.06, 26.2125];               // 緯度
var lon = [139.69, 135.5, 141.35, 127.6811];            // 経度


// GeoJSON形式で複数個のマーカーを設定する
for (var i = 0; i < 4; i++){
    geojsonFeature.push({     // 1つのマーカーの情報を格納する
        "type": "Feature",
        "properties": {
            "popupContent": popupContents[i]
        },
        "geometry": {
            "type": "Point",
            "coordinates": [lon[i], lat[i]]
        }
    });
}

// クリックしたらポップアップが出るように設定する
L.geoJson(geojsonFeature,
    {
       onEachFeature: function(feature, layer){
        if (feature.properties && feature.properties.popupContent) {
          layer.bindPopup(feature.properties.popupContent);
        } 
      },
      // オリジナル画像を設定する
      pointToLayer: function(feature, latlng){
            var myIcon = L.icon({
                iconUrl: 'marker-red.png',  // 画像のURI
                iconSize: [25, 41],         // 画像のサイズ設定
                iconAnchor: [12, 40],       // 画像の位置設定
                popupAnchor: [0, -40]       //　　ポップアップの表示を開始する位置設定
            });
            return L.marker(latlng, {icon: myIcon});  // マーカーに画像情報を設定
        }
      }
    }).addTo(map);
    