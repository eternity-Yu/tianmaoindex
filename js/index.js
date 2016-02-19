$(function()
{



	/*热门品牌 换一换*/

	var contentConter=$(".content-conter")[0];
	var contentConterone=[];
	var contentContertwo=[];
	var contentConterthree=[];
	var contentConterfour=[];
	var contentConterInner=$(".content-conter-inner");
	var contentTopTwo=$(".content-top-two");
	for(var i=0;i<24;i++)
	{
		contentConterone.push("image/mingpai"+i+".jpg");
		contentContertwo.push("image/mingpai"+i+".jpg");
		contentConterthree.push("image/mingpai"+i+".jpg");
		contentConterfour.push("image/mingpai"+i+".jpg");
	}
	function randomImg(arr)
	{
		var newarr=[];
		for(var i=0;i<24;i++)
		{
			newarr.push(arr[parseInt(Math.random()*24)]);
		}
		return newarr;
	}
	var arr=[contentConterone,contentContertwo,contentConterthree,contentConterfour];
	function show(num)
	{
		var imgarr=randomImg(arr[num]);
		for(var i=0;i<24;i++)
		{
			var divs=document.createElement("div");
			divs.style.cssText="width:132px;height:68px;float:left;margin-right:2px;margin-bottom:2px;padding-top:6px;padding-bottom:6px;background:#fff;position:relative;";
			divs.className="xinboxs";
			contentConterInner[num].appendChild(divs);
			var as=document.createElement("a");
			as.href="#";
			divs.appendChild(as);
			var imgs=document.createElement("img");
			imgs.src=imgarr[i];
			as.appendChild(imgs);

			var xin=document.createElement("img");
			xin.src="image/xin.png";
			xin.style.cssText="width: 15px;height: 14px;position: absolute;right: 0px;top: 0px;display: none;";
			xin.className="xins";
			divs.appendChild(xin);
		}
		/* 桃心 */
		var xinboxs=$(".xinboxs");
		var xins=$(".xins");
		for(var i=0;i<xinboxs.length;i++)
		{

			xinboxs[i].index=i;
			xinboxs[i].onmouseover=function()
			{
				xins[this.index].style.display="block";
			}
			xinboxs[i].onmouseout=function()
			{
				xins[this.index].style.display="none";
			}

		}

	}
	show(0);

	for(var i=0;i<contentTopTwo.length;i++)
	{
		contentTopTwo[i].index=i;
		contentTopTwo[i].flag=true;
		contentTopTwo[0].flag=false;
		var now=0;
		contentTopTwo[i].onclick=function()
		{
			now=this.index;
			for(var j=0;j<contentConterInner.length;j++)
			{
				contentConterInner[j].style.display="none";
				contentTopTwo[j].style.color="#666";
				contentTopTwo[j].style.textDecoration="none";
			}
			contentConterInner[this.index].style.display="block";
			this.style.color="#000";
			this.style.textDecoration="underline";
			if(this.flag)
			{
				show(this.index);
				this.flag=false;
			}
		}

	}
	var contentTopWords=$(".content-top-words")[0];
	contentTopWords.onclick=function()
	{
		contentConterInner[now].innerHTML="";
		show(now);
	}


	//banner轮播
	var sidebarConterImg=$(".sidebar-conter-img");
	var sidebarXuhaotwo=$(".sidebar-xuhaotwo");
	var sidebarbox=$(".sidebarbox")[0];
	var bannerColorArr=["#ccc","yellow","#ccc","#67cfae","#ccc","yellow"];

	var num=1;
	function move()
	{
		if(num==6)
		{
			num=0;
		}
		for(var i=0;i<sidebarConterImg.length;i++)
		{
			sidebarConterImg[i].style.zIndex=2;
			sidebarXuhaotwo[i].style.background="#000";
		}
		sidebarConterImg[num].style.zIndex=3;
		sidebarbox.style.background=bannerColorArr[num];
		sidebarXuhaotwo[num].style.background="#f00000";
		num++;
	}
	var t1=setInterval(move,2000);

	for(var i=0;i<sidebarXuhaotwo.length;i++)
	{
		sidebarXuhaotwo[i].index=i;
		sidebarXuhaotwo[i].onmouseover=function()
		{
			clearInterval(t1);
			for(var k=0;k<sidebarConterImg.length;k++)
			{
				sidebarConterImg[k].style.zIndex=2;
				sidebarXuhaotwo[k].style.background="#000";
			}
			sidebarConterImg[this.index].style.zIndex=3;
			sidebarbox.style.background=bannerColorArr[this.index];
			sidebarXuhaotwo[this.index].style.background="#f00000";
		}
		sidebarXuhaotwo[i].onmouseout=function()
		{
			t1=setInterval(move,2000);
			num=this.index+1;
		}
	}

	//banner特效
	var sidebarLeftLi=$(".sidebar-left-li");
	var center=$(".center");
	var sidebarLeftWord=$(".sidebar--left-word");
	for(var i=0;i<sidebarLeftLi.length;i++)
	{
		sidebarLeftLi[i].index=i;
		sidebarLeftLi[i].onmouseover=function()
		{
			clearInterval(t1);
			for(var j=0;j<center.length;j++)
			{
				center[j].style.display="none";	
				sidebarLeftWord[j].style.textDecoration="none";
			}
			center[this.index].style.display="block";
			//sidebarLeftLi[this.index].style.cssText='background-image:url(image/cenlan.png)';
			sidebarLeftLi[this.index].style.backgroundImage="url(image/cenlan.png)";
			sidebarLeftWord[this.index].style.textDecoration="underline";
			//sidebarLeftLi[this.index].style.backgroundColor="red";
			
		}
		sidebarLeftLi[i].onmouseout=function()
		{
			t1=setInterval(move,2000);
			for(var i=0;i<center.length;i++)
			{
				center[i].style.display="none";
				sidebarLeftWord[i].style.textDecoration="none";
			}
			sidebarLeftLi[this.index].style.backgroundImage="";
		}
	}

	//搜索框
	var text=$("#text");
	text.onfocus=function(){
		if(text.value=="猫猫狗狗购物狂欢，给它最好的")
		{
			text.value="";
		}
	}
	text.onblur=function(){
		if(text.value=="")
		{
			text.value="猫猫狗狗购物狂欢，给它最好的";
		}
	}


	var text1=$("#text1");
	text1.onfocus=function(){
		if(text1.value=="猫猫狗狗购物狂欢，给它最好的")
		{
			text1.value="";
		}
	}
	text1.onblur=function(){
		if(text1.value=="")
		{
			text1.value="猫猫狗狗购物狂欢，给它最好的";
		}
	}

	//顶部出没
	var top1=$(".top")[0];
	var flagdown=true;
	var flagup=true;

	//楼层跳转
	var zleft=$(".left")[0];
	var zword=$(".zword",zleft);
	var zcon=$(".con");

	for(var i=0;i<zword.length;i++)
	{
		zword[i].index=i;
		zword[i].onclick=function(){
			var obj=document.documentElement.scrollTop?document.documentElement:document.body;
			animate(obj,{scrollTop:zcon[this.index].t})
		}
	}
		
	window.onscroll=function()
	{
		var scrollT=getScrollT();
		if(scrollT>=200)
		{
			if(flagdown)
			{
				animate(top1,{top:0},500);
				flagdown=false;
				flagup=true;
			}
		}
		else
		{
			if(flagup)
			{
				animate(top1,{top:-50},500);
				flagup=false;
				flagdown=true;
			}
		}
		var scrollT=getScrollT();
		if(scrollT>=560&&scrollT<=6850)
		{
			zleft.style.display="block";
		}
		else
		{
			zleft.style.display="none";
		}
		for(var i=0;i<zcon.length;i++)
		{
			zcon[i].t=zcon[i].offsetTop;
			if(zcon[i].t<scrollT)
			{
				for(var j=0;j<zword.length;j++)
				{
					zword[j].style.backgroundColor="#333";
				}
				zword[i].style.backgroundColor="red";
			}
		}

		//图片按需加载

		var ch=document.documentElement.clientHeight;
		var scon=$(".con");
		var scrollT=getScrollT();
		document.title=scrollT;
		for(var i=0;i<scon.length;i++)
		{
			if(scon[i].offsetTop<scrollT+ch)
			{
				var simg=$(".con-img",scon[i]);
				for(var j=0;j<simg.length;j++)
				{
					simg[j].src=simg[j].getAttribute("aa");
				}
			}
		}
	}


	//1F左边轮播
	function LunBo(a)
	{
		var conLeftImg3=$(".con-left-img3")[a];
		var conLeftImg5=$(".con-left-img5")[a];
		var conLeftConcerInner=$(".con-left-concer-inner")[a];
		function moveleft()
		{
			animate(conLeftConcerInner,{left:-108},600,Tween.Linear,function(){
				var first=getFirst(conLeftConcerInner);
				var last=getLast(conLeftConcerInner);
				conLeftConcerInner.insertAfter(first,last);
				conLeftConcerInner.style.left=0;
			})
		}
		function moveright()
		{
			var first=getFirst(conLeftConcerInner);
			var last=getLast(conLeftConcerInner);
			conLeftConcerInner.insertBefore(last,first);
			conLeftConcerInner.style.left=-108+"px";
			animate(conLeftConcerInner,{left:0},600,Tween.Linear);
		}
		var t2=setInterval(moveleft,2000);

		conLeftImg3.onmouseover=function(){
			clearInterval(t2);
		}
		conLeftImg5.onmouseover=function(){
			clearInterval(t2);
		}
		conLeftImg3.onmouseout=conLeftImg5.onmouseout=function(){
			t2=setInterval(moveleft,2000);
		}

		conLeftImg3.onclick=function(){
			moveleft();
		}
		conLeftImg5.onclick=function(){
			moveright();
		}
	}
	for(var i=0;i<6;i++)
	{
		LunBo(i);
	}

	//1F右边 左移效果
	function getMoveLeft(a)
	{
		var conRight=$(".con-right")[a];
		var conRightTop=$(".con-right-top",conRight);
		var conRightBottom=$(".con-right-bottom",conRight);
		for(var i=0;i<conRightTop.length;i++)
		{
			conRightTop[i].index=i;
			conRightTop[i].onmouseover=function()
			{
				conRightTop[this.index].style.cssText="position:relative;left:-3px;box-shadow:2px 0px 5px rgba(0,0,0,0.3)";
			}
			conRightTop[i].onmouseout=function()
			{
				conRightTop[this.index].style.cssText="position:relative;left:0px;";
			}
		}
		for(var i=0;i<conRightBottom.length;i++)
		{
			conRightBottom[i].index=i;
			conRightBottom[i].onmouseover=function()
			{
				conRightBottom[this.index].style.cssText="position:relative;left:-3px;box-shadow:2px 0px 5px rgba(0,0,0,0.3)";
			}
			conRightBottom[i].onmouseout=function()
			{
				conRightBottom[this.index].style.cssText="position:relative;left:0px";
			}
		}
	}
	for(var i=0;i<12;i++)
	{
		getMoveLeft(i);
	}







	//右侧栏特效
	var zimg=$(".zimg");
	var right1=$(".right1");
	for(var i=0;i<zimg.length;i++)
	{
		zimg[i].index=i;
		zimg[i].onmouseover=function()
		{
			for(var j=0;j<right1.length;j++)
			{
				zimg[j].style.backgroundColor="black";
				animate(right1[j],{left:-127,opacity:0},600,Tween.Linear);
				//right1[j].style.display="none";	
			}
			zimg[this.index].style.backgroundColor="red";
			animate(right1[this.index],{left:-90,opacity:1},600,Tween.Linear);
			right1[this.index].style.display="block";
		}
		zimg[i].onmouseout=function()
		{
			for(var j=0;j<right1.length;j++)
			{
				zimg[j].style.backgroundColor="#000";
				animate(right1[j],{left:-127,opacity:0},600,Tween.Linear);
				// right1[j].style.display="none";
			}
			
		}
	}

	var zimgs=$(".zimgs")[0];
	var right2=$(".right2")[0];
	zimgs.onmouseover=function()
	{
		zimgs.style.backgroundColor="red";
		right2.style.display="block";
	}
	zimgs.onmouseout=function(){
		zimgs.style.backgroundColor="black";
		right2.style.display="none";
	}


	//顶部导航
	var topyiji=$(".top-yiji");
	var toperji=$(".top-erji");
	var topRight=$(".topbav-right")[0];
	var topbavRightWord=$("p",topRight);
	var topbavRightWordA=$(".topbav-right-word-a");
	//alert(topbavRightWord.length);

	//var toperjiLi=$("li",toperji);
	//alert(toperjiLi.length);
	for(var i=0;i<topyiji.length;i++)
	{
		topyiji[i].index=i;
		topyiji[i].onmouseover=function()
		{
			for(var j=0;j<toperji.length;j++)
			{
				toperji[j].style.display="none";
				topyiji[j].style.backgroundColor="";
			}
			toperji[this.index].style.display="block";
			topyiji[this.index].style.backgroundColor="#fff";
		}
		topyiji[i].onmouseout=function()
		{
			for(var i=0;i<toperji.length;i++)
			{
				toperji[i].style.display="none";
				topyiji[i].style.backgroundColor="";
			}
			
		}
	}
	for(var i=0;i<topbavRightWordA.length;i++)
	{
		topbavRightWordA[i].index=i;
		topbavRightWordA[i].onmouseover=function()
		{
			for(var j=0;j<topbavRightWordA.length;j++)
			{
				topbavRightWordA[j].style.color="";
				topbavRightWordA[j].style.textDecoration="none";
				topbavRightWordA[j].style.textDecorationColor="";
			}
			topbavRightWordA[this.index].style.color="red";
			topbavRightWordA[this.index].style.textDecoration="underline";
			topbavRightWordA[this.index].style.textDecorationColor="red";
		}
		topbavRightWordA[i].onmouseout=function()
		{
			for(var k=0;k<topbavRightWordA.length;k++)
			{
				topbavRightWordA[k].style.color="";
				topbavRightWordA[k].style.textDecoration="none";
				topbavRightWordA[k].style.textDecorationColor="";
			}
			
		}
		
	}
	var topLiShoujiban=$(".top-lishoujiban")[0];
	var topRightShoujiban=$(".top-right-shoujiban")[0];
	topLiShoujiban.onmouseover=function()
	{
		topRightShoujiban.style.display="block";
	}
	topLiShoujiban.onmouseout=function()
	{
		topRightShoujiban.style.display="none";
	}

})