/*
	12306 Assistant
	Copyright (C) 2012 flytreeleft (flytreeleft@126.com),Ruiqiang(swagle@163.com)
*/

var array_cities = [];// 完整城市列表
if( typeof(station_names) != "undefined" ) {
	// 分拆城市信息
	var cities = station_names.split('@');
	for(var i=0; i<cities.length; i++){
		var titem = cities[i];
		if(titem.length>0){
			titem = titem.split('|'); 
			array_cities.push( titem );			
		}
	}
}

function MapCityID(aCityname){
    // [Beijing, 北京, 1100]
    for(var i=0; i<array_cities.length; i++){
        if(array_cities[i][1]==aCityname){
            return array_cities[i][2];
        }
    }
    return 0;
}

function MapCityName(aCidyID){
    // [Beijing, 北京, 1100]
    for(var i=0; i<array_cities.length; i++) {
        if(array_cities[i][2]==aCidyID){
            return array_cities[i][1];
        }
    }
    return "";
} 



//文本框样式：正常样式
function from_to_station_class_plain(obj) {
	obj.removeClass("input_20txt_gray");
	obj.addClass("input_20txt");
}

// 文本框样式：灰色字体
function from_to_station_class_gray(obj) {
	obj.removeClass("input_20txt");
	obj.addClass("input_20txt_gray");
}

// 设置出发地样式
function setFromStationStyle() {
	var fromStationText = $("#fromStationText").val();
	var fromStation = $("#fromStation").val();
	if (fromStationText == "") {
		$("#fromStationText").val("简码/汉字");
		from_to_station_class_gray($("#fromStationText"));
		$("#fromStation").val("");
	} else {
		from_to_station_class_plain($("#fromStationText"));
	}
}

//设置目的地样式
function setToStationStyle() {
	var toStationText = $("#toStationText").val();
	var toStation = $("#toStation").val();
	if (toStationText == "") {
		$("#toStationText").val("简码/汉字");
		from_to_station_class_gray($("#toStationText"));
		$("#toStation").val("");
	} else {
		from_to_station_class_plain($("#toStationText"));
	}
}


/*


// 搜索符合关键字的城市
function filterCity(aKeyword){
	if(aKeyword.length==0){ 
		$("#top_cities").html("简码/汉字或↑↓");
		return array_cities;
	}
	var aList = [];
	var isPinyin = /[^A-z]/.test( aKeyword );
	for(var i=0; i<array_cities.length; i++){
		if( isMatchCity(array_cities[i], aKeyword, isPinyin ))
			aList.push( array_cities[i]);
	}
	if(aList.length>0){
		$("#top_cities").html("按\"<font color=red>"+ aKeyword +"</font>\"检索：");
		return aList;
	}else{
		$("#top_cities").html("无法匹配:<font color=red>"+ aKeyword +"</font>");
		return [];
	}
}
function replaceChar(astring ,aindex, raha){ 
	return astring.substr(0, aindex) + raha+ astring.substr(aindex+1, astring.length-1);
}
// 判断某城市是否符合搜索条件,只要拼音或中文顺序包含排列关键词字符元素即可
function isMatchCity(aCityInfo, aKey, aisPinyin){
	var aKey = aKey.toLowerCase();
	var aInfo = [aCityInfo[0].toLowerCase(), aCityInfo[1]];
	// aCityInfo [shanghai, 上海, 1202]
	// 是否含有汉字
	var lastIndex = -1;
	if(aisPinyin) {
		aKey = aKey.split("");
		for(var m=0; m< aKey.length; m++){
			var newIndex = aInfo[1].indexOf( aKey[m] );
			if(newIndex>lastIndex && newIndex<=m){// newIndex<=m 即左匹配
				aInfo[1]= replaceChar(aInfo[1], newIndex,"-"); 
				lastIndex= newIndex;
			} else {
				return false;
			}
		}
	} else { // 处理拼音的
		aKey = aKey.split("");
		for(var m=0; m< aKey.length; m++){
			var newIndex = aInfo[0].indexOf( aKey[m]);
			if(newIndex>lastIndex && newIndex<=m){
				aInfo[0]= replaceChar(aInfo[0], newIndex, "-"); 
				lastIndex= newIndex;
			}else{
				return false;
			} 
		}
	}
	return true;
}

*/




