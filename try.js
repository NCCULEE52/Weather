/*
Skycons is a set of ten animated weather glyphs, procedurally generated by JavaScript using the HTML5 canvas tag.
http://darkskyapp.github.io/skycons/
*/
var skycons = new Skycons();
  // on Android, a nasty hack is needed: {"resizeClear": true}
  // you can add a canvas by it's ID...
  skycons.add("today", Skycons.PARTLY_CLOUDY_DAY);
  skycons.add("day1", Skycons.CLEAR_DAY);
  skycons.add("day2", Skycons.CLOUDY);
  skycons.add("day3", Skycons.RAIN);
  // start animation!
  skycons.play();
  
  // want to change the icon? no problem:
  skycons.set("today", Skycons.PARTLY_CLOUDY_NIGHT);
  
/*
Get value from Bootstrap dropdown menu
*/
var location = {
    '臺北市' : 'taipei%20city',
    '新北市' : 'new%20taipei%20city',
    '台中市' : 'taichung',
    '臺南市' : 'tainan',
    '高雄市' : 'kaohsiung',
    '基隆市' : 'keelung',
    '桃園市' : 'taoyuan',
    '新竹市' : 'hsinchu%20city ',
    '新竹縣' : 'hsinchu%20county',
    '苗栗縣' : 'miaoli',
    '彰化縣' : 'changhua',
    '南投縣' : 'nantou',
    '雲林縣' : 'yunlin' ,
    '嘉義市' : 'chiayi%20city' ,
    '嘉義縣' : 'chiayi%20county',
    '屏東縣' : 'pingtung',
    '宜蘭縣' : 'yilan',
    '花蓮縣' : 'hualien',
    '台東縣' : 'taitung',
    '澎湖縣' : 'penghu',
    '金門縣' : 'kinmen',
    '連江縣' : 'lianjiang'
  };
var currentLocation;
$('#dropdown li').on('click', function(){
var TPE='https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22taipei%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
  $.getJSON(TPE,function(data){
  var currentTemperature = data.query.results.channel.item.condition.temp  ; // 就可以找到現在溫度
  var temp=$(".temperature");
  console.log("溫度:"+currentTemperature);  
})
});