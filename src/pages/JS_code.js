
function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

function GetXml(yourUrl){
    var Httpreq2 = new XMLHttpRequest(); // a new request
    Httpreq2.open("GET",yourUrl,false);
    Httpreq2.send(null);
    return Httpreq2.responseXML;          
}




	










var json_obj = JSON.parse(Get("http://demo2469824.mockable.io/best-restaurants"));
var select = document.querySelector('.first-box-details');
var res_title = select.querySelector('.restaurant-title');
var img_rest = select.querySelector('#img-rest');
var rating_text = select.querySelector('.rating-text');
var num_rate = select.querySelector('.num-text');
var res_address = select.querySelector('.restaurant-address');
const food = select.querySelector('.food-type');
var items = food.querySelectorAll('li');
var star1 = select.querySelector('.first-span');

const starTotal = 5;
onnload=init();
 function init(){
 	for(var i=0;i<3;i++){
  var starPercentage = (json_obj.restaurants[i].rate / starTotal) * 100;
  var starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
  document.getElementsByClassName("first-span")[i].style.width = starPercentageRounded; 
  }

}


if(json_obj.restaurants[0].foods[0]==="pizza"){
	items[0].innerHTML="پیتزا";
}
if(json_obj.restaurants[0].foods[1]==="fastfood"){
	items[1].innerHTML="فست فود";
}

if(json_obj.restaurants[0].foods[2]==="sandwich"){
	items[2].innerHTML="ساندویچ";
}

if(json_obj.restaurants[0].foods[3]==="burger"){
	items[3].innerHTML="برگر";
}

rating_text.innerHTML = json_obj.restaurants[0].rate;
num_rate.innerHTML = json_obj.restaurants[0].numOfRates;
 res_address.innerHTML = json_obj.restaurants[0].address;
res_title.innerHTML = json_obj.restaurants[0].name;
img_rest.src = json_obj.restaurants[0].imgUrl;

/////////////////////////////////////////////////////////////
var select2 = document.querySelector('.second-box-details');
var res_title2 = select2.querySelector('.restaurant-title');
var img_rest2 = select2.querySelector('#img-rest2');
var rating_text2 = select2.querySelector('.rating-text');
var num_rate2 = select2.querySelector('.num-text');
var res_address2 = select2.querySelector('.restaurant-address');
const food2 = select2.querySelector('.food-type');
var items2 = food2.querySelectorAll('li');



if(json_obj.restaurants[1].foods[0]==="pizza"){
	items2[0].innerHTML="پیتزا";
}
if(json_obj.restaurants[1].foods[1]==="fastfood"){
	items2[1].innerHTML="فست فود";
}

if(json_obj.restaurants[1].foods[2]==="sandwich"){
	items2[2].innerHTML="ساندویچ";
}

if(json_obj.restaurants[1].foods[3]==="burger"){
	items2[3].innerHTML="برگر";
}

rating_text2.innerHTML = json_obj.restaurants[1].rate;
num_rate2.innerHTML = json_obj.restaurants[1].numOfRates;
 res_address2.innerHTML = json_obj.restaurants[1].address;
res_title2.innerHTML = json_obj.restaurants[1].name;
img_rest2.src = json_obj.restaurants[1].imgUrl;

////////////////////////////////////////////////////////////

var select3 = document.querySelector('.third-box-details');
var res_title3 = select3.querySelector('.restaurant-title');
var img_rest3 = select3.querySelector('#img-rest3');
var rating_text3 = select3.querySelector('.rating-text');
var num_rate3 = select3.querySelector('.num-text');
var res_address3 = select3.querySelector('.restaurant-address');
const food3 = select3.querySelector('.food-type');
var items3 = food3.querySelectorAll('li');




if(json_obj.restaurants[2].foods[0]==="pizza"){
	items3[0].innerHTML="پیتزا";
}
if(json_obj.restaurants[2].foods[1]==="fastfood"){
	items3[1].innerHTML="فست فود";
}

if(json_obj.restaurants[2].foods[2]==="sandwich"){
	items3[2].innerHTML="ساندویچ";
}

if(json_obj.restaurants[2].foods[3]==="burger"){
	items3[3].innerHTML="برگر";
}

rating_text3.innerHTML = json_obj.restaurants[2].rate;
num_rate3.innerHTML = json_obj.restaurants[2].numOfRates;
 res_address3.innerHTML = json_obj.restaurants[2].address;
res_title3.innerHTML = json_obj.restaurants[2].name;
img_rest3.src = json_obj.restaurants[2].imgUrl;

///////////////////////////////////////////////////////

var good_rest = document.querySelector('.good-restaurants').children;
var logo_txt1 = good_rest[1].querySelectorAll('h3');
var img1 = good_rest[1].querySelectorAll('img');


var logo_txt2 = good_rest[2].querySelectorAll('h3');
var img2 = good_rest[2].querySelectorAll('img');


var logo_txt3 = good_rest[3].querySelectorAll('h3');
var img3 = good_rest[3].querySelectorAll('img');

var logo_txt4 = good_rest[4].querySelectorAll('h3');
var img4 = good_rest[4].querySelectorAll('img');

var logo_txt5 = good_rest[5].querySelectorAll('h3');
var img5 = good_rest[5].querySelectorAll('img');

var logo_txt6 = good_rest[6].querySelectorAll('h3');
var img6 = good_rest[6].querySelectorAll('img');

var logo_txt7 = good_rest[7].querySelectorAll('h3');
var img7 = good_rest[7].querySelectorAll('img');

var logo_txt8 = good_rest[8].querySelectorAll('h3');
var img8 = good_rest[8].querySelectorAll('img');

var logo_txt9 = good_rest[9].querySelectorAll('h3');
var img9 = good_rest[9].querySelectorAll('img');

var logo_txt10 = good_rest[10].querySelectorAll('h3');
var img10 = good_rest[10].querySelectorAll('img');

var logo_txt11 = good_rest[11].querySelectorAll('h3');
var img11 = good_rest[11].querySelectorAll('img');

var logo_txt12 = good_rest[12].querySelectorAll('h3');
var img12 = good_rest[12].querySelectorAll('img');


logo_txt1[0].innerHTML = json_obj.restaurants[3].name;
img1[0].src = json_obj.restaurants[3].imgUrl;

logo_txt2[0].innerHTML = json_obj.restaurants[4].name;
img2[0].src = json_obj.restaurants[4].imgUrl;

logo_txt3[0].innerHTML = json_obj.restaurants[5].name;
img3[0].src = json_obj.restaurants[5].imgUrl;

logo_txt4[0].innerHTML = json_obj.restaurants[6].name;
img4[0].src = json_obj.restaurants[6].imgUrl;

logo_txt5[0].innerHTML = json_obj.restaurants[7].name;
img5[0].src = json_obj.restaurants[7].imgUrl;

logo_txt6[0].innerHTML = json_obj.restaurants[8].name;
img6[0].src = json_obj.restaurants[8].imgUrl;

logo_txt7[0].innerHTML = json_obj.restaurants[9].name;
img7[0].src = json_obj.restaurants[9].imgUrl;

logo_txt8[0].innerHTML = json_obj.restaurants[10].name;
img8[0].src = json_obj.restaurants[10].imgUrl;


logo_txt9[0].innerHTML = json_obj.restaurants[11].name;
img9[0].src = json_obj.restaurants[11].imgUrl;

logo_txt10[0].innerHTML = json_obj.restaurants[12].name;
img10[0].src = json_obj.restaurants[12].imgUrl;

logo_txt11[0].innerHTML = json_obj.restaurants[13].name;
img11[0].src = json_obj.restaurants[13].imgUrl;

logo_txt12[0].innerHTML = json_obj.restaurants[14].name;
img12[0].src = json_obj.restaurants[14].imgUrl;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////



var sand_title = document.querySelector('.sandwich-title');
var sand_pic = document.querySelector('.sandwich-pic');
var sand_subtitle = document.querySelector('.sandwich-subtitle');

var burger_title = document.querySelector('.burger-title');
var burger_pic = document.querySelector('.burger-pic');
var burger_subtitle = document.querySelector('.burger-subtitle');

var pizza_title = document.querySelector('.pizza-title');
var pizza_pic = document.querySelector('.pizza-pic');
var pizza_subtitle = document.querySelector('.pizza-subtitle');

var kebab_title = document.querySelector('.kebab-title');
var kebab_pic = document.querySelector('.kebab-pic');
var kebab_subtitle = document.querySelector('.kebab-subtitle');

var other_foods = document.querySelector('.foods-tag').children;


var xml_obj = GetXml("http://demo2469824.mockable.io/foods");
var count1 = xml_obj.getElementsByTagName("food")[0].getElementsByTagName("count")[0].childNodes[0].nodeValue;
var count2 = xml_obj.getElementsByTagName("food")[1].getElementsByTagName("count")[0].childNodes[0].nodeValue;
var count3 = xml_obj.getElementsByTagName("food")[2].getElementsByTagName("count")[0].childNodes[0].nodeValue;
var count4 = xml_obj.getElementsByTagName("food")[3].getElementsByTagName("count")[0].childNodes[0].nodeValue;

var name1 = xml_obj.getElementsByTagName("food")[0].getElementsByTagName("name")[0].childNodes[0].nodeValue;
var name2 = xml_obj.getElementsByTagName("food")[1].getElementsByTagName("name")[0].childNodes[0].nodeValue;
var name3 = xml_obj.getElementsByTagName("food")[2].getElementsByTagName("name")[0].childNodes[0].nodeValue;
var name4 = xml_obj.getElementsByTagName("food")[3].getElementsByTagName("name")[0].childNodes[0].nodeValue;
var name5 = xml_obj.getElementsByTagName("food")[4].getElementsByTagName("name")[0].childNodes[0].nodeValue;
var name6 = xml_obj.getElementsByTagName("food")[5].getElementsByTagName("name")[0].childNodes[0].nodeValue;
var name7 = xml_obj.getElementsByTagName("food")[6].getElementsByTagName("name")[0].childNodes[0].nodeValue;
var name8 = xml_obj.getElementsByTagName("food")[7].getElementsByTagName("name")[0].childNodes[0].nodeValue;
var name9 = xml_obj.getElementsByTagName("food")[8].getElementsByTagName("name")[0].childNodes[0].nodeValue;
var name10 = xml_obj.getElementsByTagName("food")[9].getElementsByTagName("name")[0].childNodes[0].nodeValue;
var name11 = xml_obj.getElementsByTagName("food")[10].getElementsByTagName("name")[0].childNodes[0].nodeValue;
var name12 = xml_obj.getElementsByTagName("food")[11].getElementsByTagName("name")[0].childNodes[0].nodeValue;


var imgurl1 = xml_obj.getElementsByTagName("food")[0].getElementsByTagName("imgUrl")[0].childNodes[0].nodeValue;
var imgurl2 = xml_obj.getElementsByTagName("food")[1].getElementsByTagName("imgUrl")[0].childNodes[0].nodeValue;
var imgurl3 = xml_obj.getElementsByTagName("food")[2].getElementsByTagName("imgUrl")[0].childNodes[0].nodeValue;
var imgurl4 = xml_obj.getElementsByTagName("food")[3].getElementsByTagName("imgUrl")[0].childNodes[0].nodeValue;




sand_title.innerHTML = name1;
burger_title.innerHTML = name2;
pizza_title.innerHTML = name3;
kebab_title.innerHTML = name4;

other_foods[1].innerHTML = name5;
other_foods[2].innerHTML = name6;
other_foods[3].innerHTML = name7;
other_foods[5].innerHTML = name8;
other_foods[6].innerHTML = name9;
other_foods[7].innerHTML = name10;
other_foods[8].innerHTML = name11;
other_foods[9].innerHTML = name12;


sand_subtitle.innerHTML = count1 + " "+ "رستوران فعال";
burger_subtitle.innerHTML = count2 + " "+ "رستوران فعال";
pizza_subtitle.innerHTML = count3 + " "+ "رستوران فعال";
kebab_subtitle.innerHTML = count4 + " "+ "رستوران فعال";


sand_pic.style.background = url('imgurl1');
burger_pic.style.background = url('imgurl2');
pizza_pic.style.background = url('imgurl3');
kebab_pic.style.background = url('imgurl4');


///////////////////////////////////////////








