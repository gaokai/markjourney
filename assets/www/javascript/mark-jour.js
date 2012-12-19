(function () {
    var markJour = (function () {
        var map;
        var positionArr = [];

        /**
         * 初始化地图，返回地图实例
         */
        function initMap() {
            return map = new google.maps.Map(document.getElementById('map_canvas'), {
                zoom:15,
                mapTypeId:google.maps.MapTypeId.ROADMAP,
                panControl:false,
                zoomControl:true,
                mapTypeControl:false,
                scaleControl:false,
                streetViewControl:false,
                overviewMapControl:false
            });
        }

        function initOptEvent() {
            $('#start-go').click(function(e){

            });
        }


        return {
            init:function () {
                initMap();
                initOptEvent();
            }
        }
    })();

    markJour.init();

})();