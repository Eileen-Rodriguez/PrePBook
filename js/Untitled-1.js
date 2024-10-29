
const imgArr = ["pics/1.jpg","pics/2.jpg","pics/3.jpg","pics/4.jpg","pics/5.jpg",
	"pics/6.jpg","pics/7.jpg","pics/8.jpg","pics/9.jpg","pics/10.jpg",
	"pics/11.jpg","pics/12.jpg","pics/13.jpg","pics/14.jpg","pics/15.jpg",
	"pics/16.jpg","pics/17.jpg","pics/18.jpg","pics/19.jpg","pics/20.jpg","pics/21.jpg"];
const imgPlay = [[],[],
["pics/P1-1.PNG","pics/P1-2.PNG","pics/P1-3.PNG"],
["pics/P2-1.PNG","pics/P2-2.PNG","pics/P2-3.PNG"],
["pics/P3-1.PNG","pics/P3-2.PNG","pics/P3-3.PNG"],
["pics/P4-1.PNG","pics/P4-2.PNG","pics/P4-3.PNG"],
["pics/P5-1.PNG","pics/P5-2.PNG","pics/P5-3.PNG"],
["pics/P6-1.PNG","pics/P6-2.PNG","pics/P6-3.PNG"],
["pics/P7-1.PNG","pics/P7-2.PNG","pics/P7-3.PNG"],
["pics/P8-1.PNG","pics/P8-2.PNG","pics/P8-3.PNG"],
["pics/P9-1.PNG","pics/P9-2.PNG","pics/P9-3.PNG"],
["pics/12.1.png","pics/12.2.png","pics/12.3.png","pics/12.4.png","pics/12.5.png"],
["pics/13.1.png","pics/13.2.png","pics/13.3.png"],
["pics/14.1.png","pics/14.2.png","pics/14.3.png","pics/14.4.png"],
["pics/15.1.png","pics/15.2.png","pics/15.3.png","pics/15.4.png"],
["pics/16.1.png","pics/16.2.png","pics/16.3.png","pics/16.4.png"],
["pics/17.1.png","pics/17.2.png","pics/17.3.png","pics/17.4.png"],
["pics/18.1.png","pics/18.2.png","pics/18.3.png","pics/18.4.png","pics/18.5.png"],
["pics/19.1.png","pics/19.2.png","pics/19.3.png","pics/19.4.png"],
["pics/20.1.png","pics/20.2.png","pics/20.3.png","pics/20.4.png"],
[]
];
window.onload = function(){
	var prev = document.getElementById("left");
	var next = document.getElementById("right");
	var imgs = document.getElementsByTagName("img");
	var play = document.getElementById("play");
	var currentIndex = 0;
	var currentSubIndex = 0;//子数组的索引 
	const intersectionObserver = new IntersectionObserver((entries,
		observer) => {
			entries.forEach(entry =>{
				if(entry.isIntersecting){
					const img = entry.target;
					img.src = img.dataset.src;//加载实际图片
					observer.unobserve(img);//停止观察
				}
			});
		},{rootMargin: '0px 0px 200px 0px'});


	function loadImage(index){
		currentIndex = index;
		var imgSrc = imgArr[currentIndex];
		imgs[0].src = imgSrc;
		imgs[0].dataset.src = imgSrc;
		intersectionObserver.observe(imgs[0]);
	}
	var index = 0;
	prev.onclick = function(){
		index--;
		if(index < 0){
			alert("当前已是第一张图片！");
			index++;
		}else{
			loadImage(index);
		}
	};
	next.onclick = function(){
		index++;
		if(index >20){
			alert("当前已是最后一张图片！");
			index=0;
			imgs[0].src = imgArr[index];
		}
	    else{
			loadImage(index);
	    }
	};
	loadImage(0);//初始化第一张图片

	function loadImagePart1(index,i){
		currentIndex = index;
		var imgSrc = imgPlay[currentIndex][i];
		imgs[1].src = imgSrc;
		imgs[1].dataset.src = imgSrc;
		intersectionObserver.observe(imgs[1]);
	}
	function loadImagePart2(index,i){
		currentIndex = index;
		var imgSrc = imgPlay[currentIndex][i];
		imgs[0].src = imgSrc;
		imgs[0].dataset.src = imgSrc;
		intersectionObserver.observe(imgs[0]);
	}
	play.onclick = function(){
	var length = imgPlay[index].length;
	var i = 0;
	var using = null;
	// if(index==11||index==12||index==13||index==16){
	// 	// var part = document.getElementById("part");
	// 	// console.log(part);
	// 	// console.log(part.style);
	// 	// console.log(part.style.display);
	// 	// part.style.display = 'block';
	// 	imgs[1].style.display = 'block';
	// 	imgs[1].class = 'part'+index;
	// 	// console.log(imgs[1].class);
	// 	function nextImage(){
	// 		if(i<length){
	// 			loadImagePart1(index,i);
	// 			i++;
	// 			using = setTimeout(nextImage,500);
	// 		}else{
	// 			imgs[1].style.display = 'none';
	// 			clearTimeout(using);
	// 		}
	// 	}
	// 	nextImage();
	// }
	// else{
		function nextImage(){
		if(i<length){
			loadImagePart2(index,i);
			console.log(imgs[0]);
			console.log(imgs[0].src);
			i++;
			using = setTimeout(nextImage,500);
		}else{
			imgs[0].src = imgArr[index];
			clearTimeout(using);
		}
	}
	nextImage();
// }
	};

};

