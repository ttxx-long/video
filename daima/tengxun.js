(function () {
    var video = new tvp.VideoInfo();
    video.setVid("xxxxx");//视频vid
    var player = new tvp.Player(300, 150);//视频高宽
    player.setCurVideo(video);
    player.addParam("autoplay","0");//是否自动播放，1为自动播放，0为不自动播放
    player.addParam("wmode","opaque");
    player.addParam("showend",0);
    player.addParam("adplay",0);
    player.addParam("wmode","transparent");
    player.addParam("pic","<%=request.getContextPath()%>/images/cover.png");//默认图片地址
    player.addParam("flashskin", "http://imgcache.qq.com/minivideo_v1/vd/res/skins/web_small_loading.swf");//是否调用精简皮肤，不使用则删掉此行代码
    player.write("videoCon");

})()