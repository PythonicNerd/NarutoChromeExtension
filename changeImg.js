var images = document.getElementsByTagName("img");

var imgLen = images.length;

var narutoList = ["https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQf10GL2pqEhnpUZci2auGNvu6KKzB6oioToCNaG0BLiOd7P2d94A","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcStJisKBRMCVYL5m3ZVXjfRUD6Mkh98MOThPTbKIeuv76bhIVw2","https://s-media-cache-ak0.pinimg.com/originals/2f/f5/32/2ff53206b1ec6cbbdae926b457367ef3.jpg","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTpRSwXPvLoBI50muETDEFPO32obKollu2F9KnFDAC-pB7EhfUT"]

for(var i = 0; i <= imgLen; i++){
  var foreverTrue = true;
while(foreverTrue === true){
  var curImg = images[i];

 
  var narutoImg = narutoList[Math.floor((Math.random() * narutoList.length) + 1)];
  
  curImg.src = narutoImg;
  if (curImg.src !== undefined){
    break;
  }

}
}
