/*
	12306 Assistant
	Copyright (C) 2012 flytreeleft (flytreeleft@126.com),Ruiqiang(swagle@163.com)
*/

var array_cities = [];// ���������б�
if( typeof(station_names) != "undefined" ) {
	// �ֲ������Ϣ
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
    // [Beijing, ����, 1100]
    for(var i=0; i<array_cities.length; i++){
        if(array_cities[i][1]==aCityname){
            return array_cities[i][2];
        }
    }
    return 0;
}

function MapCityName(aCidyID){
    // [Beijing, ����, 1100]
    for(var i=0; i<array_cities.length; i++) {
        if(array_cities[i][2]==aCidyID){
            return array_cities[i][1];
        }
    }
    return "";
} 



//�ı�����ʽ��������ʽ
function from_to_station_class_plain(obj) {
	obj.removeClass("input_20txt_gray");
	obj.addClass("input_20txt");
}

// �ı�����ʽ����ɫ����
function from_to_station_class_gray(obj) {
	obj.removeClass("input_20txt");
	obj.addClass("input_20txt_gray");
}

// ���ó�������ʽ
function setFromStationStyle() {
	var fromStationText = $("#fromStationText").val();
	var fromStation = $("#fromStation").val();
	if (fromStationText == "") {
		$("#fromStationText").val("����/����");
		from_to_station_class_gray($("#fromStationText"));
		$("#fromStation").val("");
	} else {
		from_to_station_class_plain($("#fromStationText"));
	}
}

//����Ŀ�ĵ���ʽ
function setToStationStyle() {
	var toStationText = $("#toStationText").val();
	var toStation = $("#toStation").val();
	if (toStationText == "") {
		$("#toStationText").val("����/����");
		from_to_station_class_gray($("#toStationText"));
		$("#toStation").val("");
	} else {
		from_to_station_class_plain($("#toStationText"));
	}
}


/*


// �������Ϲؼ��ֵĳ���
function filterCity(aKeyword){
	if(aKeyword.length==0){ 
		$("#top_cities").html("����/���ֻ����");
		return array_cities;
	}
	var aList = [];
	var isPinyin = /[^A-z]/.test( aKeyword );
	for(var i=0; i<array_cities.length; i++){
		if( isMatchCity(array_cities[i], aKeyword, isPinyin ))
			aList.push( array_cities[i]);
	}
	if(aList.length>0){
		$("#top_cities").html("��\"<font color=red>"+ aKeyword +"</font>\"������");
		return aList;
	}else{
		$("#top_cities").html("�޷�ƥ��:<font color=red>"+ aKeyword +"</font>");
		return [];
	}
}
function replaceChar(astring ,aindex, raha){ 
	return astring.substr(0, aindex) + raha+ astring.substr(aindex+1, astring.length-1);
}
// �ж�ĳ�����Ƿ������������,ֻҪƴ��������˳��������йؼ����ַ�Ԫ�ؼ���
function isMatchCity(aCityInfo, aKey, aisPinyin){
	var aKey = aKey.toLowerCase();
	var aInfo = [aCityInfo[0].toLowerCase(), aCityInfo[1]];
	// aCityInfo [shanghai, �Ϻ�, 1202]
	// �Ƿ��к���
	var lastIndex = -1;
	if(aisPinyin) {
		aKey = aKey.split("");
		for(var m=0; m< aKey.length; m++){
			var newIndex = aInfo[1].indexOf( aKey[m] );
			if(newIndex>lastIndex && newIndex<=m){// newIndex<=m ����ƥ��
				aInfo[1]= replaceChar(aInfo[1], newIndex,"-"); 
				lastIndex= newIndex;
			} else {
				return false;
			}
		}
	} else { // ����ƴ����
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




