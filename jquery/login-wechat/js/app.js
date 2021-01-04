/**
 * @Author: Jason
 * @Date:   2020-01-13T10:21:45+08:00
 * @Email:  jasonworks@qq.com
 * @Last modified by:   Jason
 * @Last modified time: 2020-01-14T12:24:06+08:00
 */
$(document).ready(function(){
  if($(".wechat-login-tabs").length){
    var defaultID = 1;
    $(".wechat-login-item[data-tabID="+defaultID+"]").hide();
    // use
    $(".wechat-login-item").click(function(event){
      event.preventDefault();
      // get ID of data attribute
      var boxID = $(this).attr('data-id'),
          tabID = $(this).attr('data-tabID');

      // hide tabs
      if(tabID==1){
        $(".wechat-login-item").show();
        $(this).hide();
      }else if(tabID==2){
        $(".wechat-login-item").show();
        $(this).hide();
      }

      // hide all tabs content box
      $(".wechat-login-box").removeClass("active");
      // show match tabs
      $("#"+boxID).addClass("active");
    });
  }
});
