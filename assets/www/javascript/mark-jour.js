/**
 * @fileOverview 负责旅途的"记录"部分的功能
 *               主要包括: 开始旅途，输入旅途名称，旅途过程中的拍照，录音，文字以及相应的数据存储。
 * @author shiba<shiba@taobao.com>
 *
 */
;
(function () {
    var markJour = (function () {
        var map;
        var positionArr = [];

        /**
         * 初始化地图，返回地图实例
         */
        function initMap() {
            return map = new google.maps.Map(document.getElementById('map_canvas'), {
                center:new google.maps.LatLng(30, 120),
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                panControl: false,
                zoomControl: true,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                overviewMapControl: false
            });
        }

        function initOptEvent() {
            $('#start-go').click(function (e) {

            });
        }


        return {
            init: function () {
                console.log(1122);
                initMap();
                initOptEvent();
            }
        }
    })();

    window.MJ = window.MJ || {};
    window.MJ.markJour = markJour;

})();