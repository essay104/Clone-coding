var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
var options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(37.6513398, 127.0362835), //지도의 중심좌표.
  level: 4, //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

var mapTypeControl = new kakao.maps.MapTypeControl();

map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

const store01 = document.querySelector(".store01");
const store02 = document.querySelector(".store02");
const store03 = document.querySelector(".store03");
const store04 = document.querySelector(".store04");
const store05 = document.querySelector(".store05");
const store06 = document.querySelector(".store06");
const store07 = document.querySelector(".store07");

// 커스텀 오버레이가 표시될 위치입니다
var position = new kakao.maps.LatLng(37.6488869, 127.0345172);
var position2 = new kakao.maps.LatLng(37.6439061, 127.0219999);
var position3 = new kakao.maps.LatLng(37.6527757, 127.0465799);
var position4 = new kakao.maps.LatLng(37.6475847, 127.0329248);
var position5 = new kakao.maps.LatLng(37.6593819, 127.0326097);
var position6 = new kakao.maps.LatLng(37.6569418, 127.0384327);
var position7 = new kakao.maps.LatLng(37.6553521, 127.0372859);

// 커스텀 오버레이를 생성합니다
var customOverlay = new kakao.maps.CustomOverlay({
  position: position,
  content: store01,
  xAnchor: 0.3,
  yAnchor: 0.91,
});

var customOverlay2 = new kakao.maps.CustomOverlay({
  position: position2,
  content: store02,
  xAnchor: 0.3,
  yAnchor: 0.91,
});

var customOverlay3 = new kakao.maps.CustomOverlay({
  position: position3,
  content: store03,
  xAnchor: 0.3,
  yAnchor: 0.91,
});

var customOverlay4 = new kakao.maps.CustomOverlay({
  position: position4,
  content: store04,
  xAnchor: 0.3,
  yAnchor: 0.91,
});

var customOverlay5 = new kakao.maps.CustomOverlay({
  position: position5,
  content: store05,
  xAnchor: 0.3,
  yAnchor: 0.91,
});

var customOverlay6 = new kakao.maps.CustomOverlay({
  position: position6,
  content: store06,
  xAnchor: 0.3,
  yAnchor: 0.91,
});

var customOverlay7 = new kakao.maps.CustomOverlay({
  position: position7,
  content: store07,
  xAnchor: 0.3,
  yAnchor: 0.91,
});

// 커스텀 오버레이를 지도에 표시합니다
customOverlay.setMap(map);
customOverlay2.setMap(map);
customOverlay3.setMap(map);
customOverlay4.setMap(map);
customOverlay5.setMap(map);
customOverlay6.setMap(map);
customOverlay7.setMap(map);

// 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
kakao.maps.event.addListener(marker, "click", function () {
  overlay.setMap(map);
});

// 커스텀 오버레이를 닫기 위해 호출되는 함수입니다
function closeOverlay() {
  overlay.setMap(null);
}
