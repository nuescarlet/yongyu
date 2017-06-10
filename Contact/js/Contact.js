// 百度地图API功能
var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL});
var map = new BMap.Map("allmap");
var point = new BMap.Point(112.928133,28.146329);
map.centerAndZoom(point,16);
var marker2 = new BMap.Marker(point);  // 创建标注
map.addOverlay(marker2);              // 将标注添加到地图中
map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用
map.addControl(top_right_navigation);  //添加比例尺