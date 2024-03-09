var windowWidth = $(window).width();
layer.config({
  extend: 'kzhomepage/style.css', //加载扩展样式
  skin: 'layer-ext-kzhomepage'
});

// Nav buttons
$('.kz-nav-btn').on('click', function() {
  let btn = $(this);
  let type = btn.data('window') // pop current newtab
  let content = btn.data('href')
  switch (type) {
    case 'pop':
      let title = btn.data('title')
      let shadeClose = btn.data('shade') === 'true' ? false : true
      let anim = btn.data('anim') ? btn.data('anim')*1 : 4
      let area_w = btn.data('area-w') ? btn.data('area-w') : '80%'
      let area_h = btn.data('area-h') ? btn.data('area-h') : '90%'
      layer.open({
          type: 2,
          title: title,
          shadeClose: shadeClose,
          anim:anim,
          closeBtn: 2,
          isOutAnim: false,
          area: [area_w, area_h],
          content: content
      });
      break;
    case 'current':
      window.location = content
      break;
    case 'newtab':
      window.open('_blank').location = content
      break;
  }
});

console.log(
    "\n" +
      " %c KZHomePage v1.2.0 by kaygb " +
      " %c https://blog.170601.xyz/archives/25.html " +
      "\n" +
      "\n",
    "color: #fff; background: #fd79a8; padding:5px 0;",
    "background: #FFF; padding:5px 0;"
  );

function refresh_yiyan(){
  ref_button = '<a href="javascript:refresh_yiyan();" aria-hidden="true"><i class="fa-solid fa-rotate-right" aria-hidden="true"></i></i></a>';
  o_random = Math.floor(Math.random()*10);
  if (o_random>=7) {
  $.get("https://el-bot-api.xxtg666.top/api/words/young", function (data) {
    $("#yiyan").html(data[0]+ref_button);
  });
} else if (o_random>=6) {
  $.get("https://el-bot-api.xxtg666.top/api/words/aoligei", function (data) {
    $("#yiyan").html(data[0]+ref_button);
  });
} else {
  $.get("https://v1.hitokoto.cn/", function (data) {
    $("#yiyan").html(data["hitokoto"]+ref_button);
  });
} }
refresh_yiyan();
