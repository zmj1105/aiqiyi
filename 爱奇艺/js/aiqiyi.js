var pictureMove=document.getElementById("pictureMove");
var ulList=document.getElementById("ulList");
(function(){
    bindData();
    function bindData(){
        var reg=document.createDocumentFragment();
        var frg=document.createDocumentFragment();
        for(var i=0;i<centerAry.length;i++){
            var cur=centerAry[i];
            var oImg=document.createElement("img");
            var oList=document.createElement("li");
            oImg.src=cur["img"];
            oList.innerHTML=cur["title"];
            reg.appendChild(oImg);
            frg.appendChild(oList);
        }
        pictureMove.appendChild(reg);
        ulList.appendChild(frg);
        frg=null;
        var left2Ul=document.getElementById("left2Ul");
        reg=document.createDocumentFragment();
        for(i=0;i<left2Ary.length;i++){
            cur=left2Ary[i];
            var oList1=document.createElement("li");
            oList1.innerHTML="<i>"+"</i>"+"<a href=''>"+cur["title"]+"</a>";
            reg.appendChild(oList1);
        }
        left2Ul.appendChild(reg);
        var left2=document.getElementById("left2");
        reg=document.createDocumentFragment();
        for(i=0;i<left2AryImg.length;i++){
            cur=left2AryImg[i];
            var oList2=document.createElement("div");
            oList2.innerHTML="<img src='"+cur["img"]+"'/>" + "<a href=''>"+cur["title"]+"</a>";
            reg.appendChild(oList2);
        }
        left2Ul.appendChild(reg);

        var center=document.getElementById("center1");
        reg=document.createDocumentFragment();
        for(i=0;i<firstCenterAry.length;i++){
            cur=firstCenterAry[i];
            var oDiv=document.createElement("div");

            oDiv.innerHTML="<div class='tu'>"+"<img src='"+cur["img"]+"'/>"+"</div>"+
                "<div class='wold'>"+"<a class='a1' href=''>"+"</a>"+"<a class='a2' href=''>"
                +cur["title"]+"</a>"+"</div>";
            reg.appendChild(oDiv);
        }
        center.appendChild(reg);
        reg=document.createDocumentFragment();
        var left2Ul1=document.getElementById("left2Ul1");
        for(i=0;i<firstCenterAry1.length;i++){
            cur=firstCenterAry1[i];
            var oList3=document.createElement("li");
            oList3.innerHTML="<i>"+"</i>"+"<a href=''>"+cur["title"]+"</a>";
            reg.appendChild(oList3);
        }
        left2Ul1.appendChild(reg);

        var right1=document.getElementById("right1");
        reg=document.createDocumentFragment();
        for(i=0;i<rightAry.length;i++){
            cur=rightAry[i];
            var oList4=document.createElement("li");
            oList4.innerHTML="<img src='"+cur["img"]+"'/>" + "<a href=''>"+cur["title"]+"</a>";
            reg.appendChild(oList4);
        }
        right1.appendChild(reg);
    }
})();
(function(){
    pictureChange();
    function pictureChange(){
        var imgList=pictureMove.getElementsByTagName("img");
        imgList[0].className = "show";
        var oLists=ulList.getElementsByTagName("li");
        for (var i = 0; i < oLists.length; i++) {
            var cur = oLists[i];
            cur.index = i;
            cur.onmouseover = function () {
                imgList[this.index].className = "show";

                for (var k = 0; k < oLists.length; k++) {
                    if (k !== this.index) {
                        imgList[k].className = null;
                    }
                }
            }
        }
    }

})();
(function(){
    var deepInner=document.getElementById("deepInner");
    var oDivs=deepInner.getElementsByTagName("div");
    var gg3=utils.getElementsByClass("gg3");
    for(var i=0;i<oDivs.length-1;i++){
         var oDiv=oDivs[i];
        oDiv.index=i;
        oDiv.onmouseenter=function(){
            for(var a=0;a<oDivs.length;a++){
                var fre=oDivs[a];
                if(a>this.index){
                    animate(fre,{left:760-190*this.index},100*a);
                }else if(a<=this.index){
                    animate(fre,{left:-190*a},100*a);
                }
            }
            var chil=utils.children(gg3[this.index]);
            animate(chil[0],{opacity:1},200);
        };
        oDiv.onmouseleave=function(){
            for(var a=0;a<oDivs.length;a++){
                var fre=oDivs[a];
                if(a>this.index){
                    animate(fre,{left:0},500,3);
                }else if(a<=this.index){
                    animate(fre,{left:0},200);
                }
            }
            var chil=utils.children(gg3[this.index]);
            animate(chil[0],{opacity:0},200);
        };
    }
    oDivs[5].onmouseenter=function(){
        animate(this,{left:-190*4},200);
        for(var a=0;a<oDivs.length-1;a++){
               var fre=oDivs[a];
            animate(fre,{left:-190*a},200);
        }
        var chil=utils.children(gg3[5]);
        animate(chil[0],{opacity:1},200);
    };
    oDivs[5].onmouseleave=function(){
        animate(this,{left:0},200);
        for(var a=0;a<oDivs.length-1;a++){
            var fre=oDivs[a];
            animate(fre,{left:0},200,3);
        }
        var chil=utils.children(gg3[5]);
        animate(chil[0],{opacity:0},200);
    };
})();

(function(){
    var innerDeep=document.getElementById("innerDeep");
    var oDivs=innerDeep.getElementsByTagName("div");
    var gg3=utils.getElementsByClass("gg3");
    for(var i=0;i<oDivs.length-1;i++){
        var oDiv=oDivs[i];
        oDiv.index=i;
        oDiv.onmouseenter=function(){
            for(var a=0;a<oDivs.length;a++){
                var fre=oDivs[a];
                if(a>this.index){
                    animate(fre,{left:760-190*this.index},100*a);
                }else if(a<=this.index){
                    animate(fre,{left:-190*a},100*a);
                }
            }
        };
        oDiv.onmouseleave=function(){
            for(var a=0;a<oDivs.length;a++){
                var fre=oDivs[a];
                if(a>this.index){
                    animate(fre,{left:0},500,3);
                }else if(a<=this.index){
                    animate(fre,{left:0},200);
                }
            }
        };
    }
    oDivs[5].onmouseenter=function(){
        animate(this,{left:-190*4},200);
        for(var a=0;a<oDivs.length-1;a++){
            var fre=oDivs[a];
            animate(fre,{left:-190*a},200);
        }
    };
    oDivs[5].onmouseleave=function(){
        animate(this,{left:0},200);
        for(var a=0;a<oDivs.length-1;a++){
            var fre=oDivs[a];
            animate(fre,{left:0},200,3);
        }
    };
})();

var listContent=document.getElementById("listContent");
var father=document.getElementById("father");
var secondNavigation=document.getElementById("secondNavigation");
var topNavigation=document.getElementById("topNavigation");
(function(){
    var i=0;
        window.onscroll=function(){
            var moveH=document.body.scrollTop;

            if(moveH>0&&moveH<600){
                topNavigation.style.opacity=1;
                topNavigation.style.display="none";
            }else{
                topNavigation.style.display="block";
                topNavigation.style.opacity=0.95;

            }
            if(moveH<600){
                listContent.style.display="none";

            }else{
                listContent.style.display="block";
                listContent.className="listContent-navigation";

            }


    };
    listContent.onclick=function(){
        ++i;
        if(i%2!==0){
            listContent.className="change";
            secondNavigation.style.display="block";
            father.style.backgroundColor="black";
        }else{
            secondNavigation.style.display="none";
            father.style.backgroundColor="";
            listContent.className="listContent-navigation";
        }

    }


})();
(function(){
    var lginIn=document.getElementById("oLi1");
    var topDiv=document.getElementById("topDiv");
    var boxContain=document.getElementById("boxContain");
    var ff2=document.getElementById("ff2");
    var box=document.getElementById("box");
    lginIn.onclick=function(){
        box.style.display="block";
        boxContain.style.display="block";
    };
    ff2.onclick=function(){
        box.style.display="none";
        boxContain.style.display="none";
    };
})();
(function(){
    var nn2=document.getElementById("nn2");
    var boxG=document.getElementById("boxG");
    console.log(boxG);
    var nn3=document.getElementById("nn3");
    console.log(nn3);
    nn2.className="bg1";
    var i=0;
    nn2.onclick=function(){
       ++i;
        if(i%2!=0){
            this.className="bg2";
            boxG.style.display="block";
            nn3.style.display="none";
        }else{
            this.className="bg1";
            boxG.style.display="none";
            nn3.style.display="block";
        }

    }
})();


