// �ٶȵ�ͼAPI����
var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL});
var map = new BMap.Map("allmap");
var point = new BMap.Point(112.928133,28.146329);
map.centerAndZoom(point,16);
var marker2 = new BMap.Marker(point);  // ������ע
map.addOverlay(marker2);              // ����ע��ӵ���ͼ��
map.enableScrollWheelZoom();   //���ù��ַŴ���С��Ĭ�Ͻ���
map.enableContinuousZoom();    //���õ�ͼ������ק��Ĭ�Ͻ���
map.addControl(top_right_navigation);  //��ӱ�����