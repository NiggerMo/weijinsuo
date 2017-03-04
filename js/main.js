
$(function(){
	
	// resize事件函数
	function resize(){
		//获得屏幕大小
		var windowWidth = $(window).width();
		//判断小大屏幕
		var isSmallScreen = windowWidth < 768;
		//分别在不同屏幕下，给每一个盒子加上不同url的背景图
		$("#main_ad > .carousel-inner > .item").each(function(index,element){
			//获得dom对象数组转jq
			var $element = $(element);

			var imgSrc = isSmallScreen ? $element.data("image-xs") : $element.data("image-lg");
			//设置背景图片
			$element.css("backgroundImage",'url("'+ imgSrc +'")');
			//窗口<786的时候，动态生成img标签来呈现轮播图片
			if (isSmallScreen) {
				$element.html('<img src="'+ imgSrc +'" alt="" />')
			}else{
				$element.empty();
			}

		});


		//给产品推荐的标签页的容器加宽度,出现滚动条滚动标签页标题效果
		var $ulContainer = $(".nav-tabs");

		//获得子元素的宽度和
		var width = 30;

		//对每个li遍历进行累加宽度
		$ulContainer.children().each(function(index,element){
			//获得ul下li的总宽
			width += element.clientWidth;
			//给容器加宽度样式
			if (width > $(window).width()) {
				$ulContainer.css("width",width)
							.parent().css("overflow","scroll")
					
			};

		});
	}

	$(window).on("resize",resize);
	$(window).trigger("resize");



	//初始化产品推荐的工具提示
	$('[data-toggle="tooltip"]').tooltip();
	//新闻列表点击切换文字功能
	$("#news .nav-pills a").on("click",function(){
		var $newTitle = $(".news-title");
		var $this = $(this);
		//获得自定义data标签属性的值
		var title = $this.data("title");
		//把值设置到对应位置
		$newTitle.text(title);
	});

	//获得轮播图界面上的容器
	var $carousel = $(".carousel");
	var mouseStarX = 0;
	var mouseEndX = 0;
	var offset = 50;
	$carousel.on("touchstart",function(e){
		mouseStarX = e.touches[0].clientX;
		// console.log(e.touches[0].clientX);
	});
	$carousel.on("touchmove",function(e){
		mouseEndX = e.touches[0].clientX;
		// console.log(e.touches[0].clientX);
	});
	//注册滑动事件
	$carousel.on("touchend",function(e){
		//每次的滑动，给定一个距离，当每次滑动大于这个距离认为有方向变化
		var distance = Math.abs(mouseEndX - mouseStarX);
		if (distance > offset) {
			//1.获得手指在轮播图元素上的滑动方向
			//2.根据获得到的方向选择上一张和下一张
			$(this).carousel(mouseStarX > mouseEndX ? "next" : "prev");
		};
	});
	
		
		


	
})