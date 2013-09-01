$(document).ready(function() {
	$("img").hide();
	$("#subtabel1").hide();
	$("#subtabel2").hide();
	var inputs = new Array();
	var ok = new Array(7);

//////Punctul a)
	
	//Casuta 0
	if(isNaN(inputs[0])) {
		$("#in0").keyup(function() {
			inputs[0] = $(this).val();
			inputs[0] = parseInt(inputs[0], 10);

			if(!(isNaN(inputs[0]))) {
				if(inputs[0] == 1) {
					ok[0] = 1;
					if((((ok[0]==1 && ok[1]==1)&& (ok[2]==1 && ok[3] ==1)) && (ok[4]==1 && ok[5]==1))&&ok[6] ==1){
						$("#wrongChecked1 > img").hide("slow");
						$("#wrongChecked1 > img").show("slow");
					}
					else{
					$("#wrongChecked1 > img").show("slow");
					$("#wrongChecked1 > img").hide("slow");
					}
				} else {
					$("#wrongChecked2 > img").show("slow");
					$("#wrongChecked2 > img").hide("slow");
				}
			}
		}).keydown();
		if(inputs[0] == 1 &&
				inputs[1] == 2 &&
				inputs[2] == 4 &&
				inputs[3] == 8 &&
				inputs[4] == 16 &&
				inputs[5] == 32 &&
				inputs[6] == 64)
			$("#wrongChecked1 > img").show("slow");
	}
	
	//Casuta 1
	if(isNaN(inputs[1])) {
		$("#in1").keyup(function() {
			inputs[1] = $(this).val();
			inputs[1] = parseInt(inputs[1], 10);

			if(!(isNaN(inputs[1]))) {
				if(inputs[1] == 2) {
					ok[1] = 1;
					if((((ok[0]==1 && ok[1]==1)&& (ok[2]==1 && ok[3] ==1)) && (ok[4]==1 && ok[5]==1))&&ok[6] ==1){
						$("#wrongChecked1 > img").hide("slow");
						$("#wrongChecked1 > img").show("slow");
						}
						else{
					$("#wrongChecked1 > img").show("slow");
					$("#wrongChecked1 > img").hide("slow");
					}
				} else {
					$("#wrongChecked1 > img").hide("slow");
					$("#wrongChecked2 > img").show("slow");
					$("#wrongChecked2 > img").hide("slow");
				}
			}
		}).keydown();
		if(inputs[0] == 1 &&
				inputs[1] == 2 &&
				inputs[2] == 4 &&
				inputs[3] == 8 &&
				inputs[4] == 16 &&
				inputs[5] == 32 &&
				inputs[6] == 64)
			$("#wrongChecked1 > img").show("slow");
	}
	
	//Casuta 2
	if(isNaN(inputs[2])) {
		$("#in2").keyup(function() {
			inputs[2] = $(this).val();
			inputs[2] = parseInt(inputs[2], 10);

			if(!(isNaN(inputs[2]))) {
				if(inputs[2] == 4) {
					ok[2] = 1;
					if((((ok[0]==1 && ok[1]==1)&& (ok[2]==1 && ok[3] ==1)) && (ok[4]==1 && ok[5]==1))&&ok[6] ==1){
						$("#wrongChecked1 > img").hide("slow");
						$("#wrongChecked1 > img").show("slow");
						}
						else{
					$("#wrongChecked1 > img").show("slow");
					$("#wrongChecked1 > img").hide("slow");
					}
				} else {
					$("#wrongChecked1 > img").hide("slow");
					$("#wrongChecked2 > img").show("slow");
					$("#wrongChecked2 > img").hide("slow");
				}
			}
		}).keydown();
		if(inputs[0] == 1 &&
				inputs[1] == 2 &&
				inputs[2] == 4 &&
				inputs[3] == 8 &&
				inputs[4] == 16 &&
				inputs[5] == 32 &&
				inputs[6] == 64)
			$("#wrongChecked1 > img").show("slow");
	}
	
	//Casuta 3
	if(isNaN(inputs[3])) {
		$("#in3").keyup(function() {
			inputs[3] = $(this).val();
			inputs[3] = parseInt(inputs[3], 10);

			if(!(isNaN(inputs[3]))) {
				if(inputs[3] == 8) {
					ok[3] = 1;
					if((((ok[0]==1 && ok[1]==1)&& (ok[2]==1 && ok[3] ==1)) && (ok[4]==1 && ok[5]==1))&&ok[6] ==1){
						$("#wrongChecked1 > img").hide("slow");
						$("#wrongChecked1 > img").show("slow");
						}
						else{
					$("#wrongChecked1 > img").show("slow");
					$("#wrongChecked1 > img").hide("slow");
					}
				} else {
					$("#wrongChecked1 > img").hide("slow");
					$("#wrongChecked2 > img").show("slow");
					$("#wrongChecked2 > img").hide("slow");
				}
			}
		}).keydown();
		if(inputs[0] == 1 &&
				inputs[1] == 2 &&
				inputs[2] == 4 &&
				inputs[3] == 8 &&
				inputs[4] == 16 &&
				inputs[5] == 32 &&
				inputs[6] == 64)
			$("#wrongChecked1 > img").show("slow");
	}
	
	//Casuta 4
	if(isNaN(inputs[4])) {
		$("#in4").keyup(function() {
			inputs[4] = $(this).val();
			inputs[4] = parseInt(inputs[4], 10);

			if(!(isNaN(inputs[4]))) {
				if(inputs[4] == 1) {
				} else if(inputs[4] == 16) {
					ok[4] = 1;
					if((((ok[0]==1 && ok[1]==1)&& (ok[2]==1 && ok[3] ==1)) && (ok[4]==1 && ok[5]==1))&&ok[6] ==1){
						$("#wrongChecked1 > img").hide("slow");
						$("#wrongChecked1 > img").show("slow");
						}
						else{
					$("#wrongChecked1 > img").show("slow");
					$("#wrongChecked1 > img").hide("slow");
					}
				} else {
					$("#wrongChecked1 > img").hide("slow");
					$("#wrongChecked2 > img").show("slow");
					$("#wrongChecked2 > img").hide("slow");
				}
			}
		}).keydown();
		if(inputs[0] == 1 &&
				inputs[1] == 2 &&
				inputs[2] == 4 &&
				inputs[3] == 8 &&
				inputs[4] == 16 &&
				inputs[5] == 32 &&
				inputs[6] == 64)
			$("#wrongChecked1 > img").show("slow");
	}
	
	//Casuta 5
	if(isNaN(inputs[5])) {
		$("#in5").keyup(function() {
			inputs[5] = $(this).val();
			inputs[5] = parseInt(inputs[5], 10);

			if(!(isNaN(inputs[5]))) {
				if(inputs[5] == 3) {
				} else if(inputs[5] == 32) {
					ok[5] = 1;
					if((((ok[0]==1 && ok[1]==1)&& (ok[2]==1 && ok[3] ==1)) && (ok[4]==1 && ok[5]==1))&&ok[6] ==1){
						$("#wrongChecked1 > img").hide("slow");
						$("#wrongChecked1 > img").show("slow");
						}
						else{
					$("#wrongChecked1 > img").show("slow");
					$("#wrongChecked1 > img").hide("slow");
					}
				} else {
					$("#wrongChecked1 > img").hide("slow");
					$("#wrongChecked2 > img").show("slow");
					$("#wrongChecked2 > img").hide("slow");
				}
			}
		}).keydown();
		if(inputs[0] == 1 &&
				inputs[1] == 2 &&
				inputs[2] == 4 &&
				inputs[3] == 8 &&
				inputs[4] == 16 &&
				inputs[5] == 32 &&
				inputs[6] == 64)
			$("#wrongChecked1 > img").show("slow");
	}
	
	//Casuta 6
	if(isNaN(inputs[6])) {
		$("#in6").keyup(function() {
			inputs[6] = $(this).val();
			inputs[6] = parseInt(inputs[6], 10);

			if(!(isNaN(inputs[6]))) {
				if(inputs[6] == 6) {
				} else if(inputs[6] == 64) {
					ok[6] = 1;
					if((((ok[0]==1 && ok[1]==1)&& (ok[2]==1 && ok[3] ==1)) && (ok[4]==1 && ok[5]==1))&&ok[6] ==1){
						$("#wrongChecked1 > img").hide("slow");
						$("#wrongChecked1 > img").show("slow");
						console.log('corect');
						}
						else{
					$("#wrongChecked1 > img").show("slow");
					$("#wrongChecked1 > img").hide("slow");
					}
				} else {
					$("#wrongChecked1 > img").hide("slow");
					$("#wrongChecked2 > img").show("slow");
					$("#wrongChecked2 > img").hide("slow");
				}
			}
		}).keydown();
	}
	
//////Punctul b)
	//Aici trebuie o validare, iar :(
	var GT;
	if(isNaN(GT)) {
		$("#inGT").keyup(function() {
			GT = $("#inGT").val();
			//GT= parseInt(GT,10);
			if(isNaN(GT)){
			if(GT == "<") {
				$("#empty").empty();
				$("#empty").append("<img src='check.jpg'>");
				
			} 
			else {
				$("#empty").empty();
				$("#empty").append("<img src='wrong.png'>");
			}
			}
		}).keydown();
	}
	//se coloreaza primul tabel
	$("#radio1").click(function(){
	var	elements = document.getElementsByClassName("orange");
    for (var i = 0; i < elements.length; i++) {
        elements[i].bgColor="orange";
	 }
	
	var	elements2 = document.getElementsByClassName("red");
    for (var i = 0; i < elements2.length; i++) {
        elements2[i].bgColor="red";
	 }
	 $("#subtabel1").show("slow");
	});
	//se coloreaza al doilea tabel
	$("#radio2").click(function(){
	var	elements = document.getElementsByClassName("blue");
    for (var i = 0; i < elements.length; i++) {
        elements[i].bgColor="blue";
	 }
	
	var	elements2 = document.getElementsByClassName("orange2");
    for (var i = 0; i < elements2.length; i++) {
        elements2[i].bgColor="orange";
	 }
	 
	 var	elements3 = document.getElementsByClassName("red2");
    for (var i = 0; i < elements3.length; i++) {
        elements3[i].bgColor="red";
	 }
	 
	 var	elements4 = document.getElementsByClassName("green");
    for (var i = 0; i < elements4.length; i++) {
        elements4[i].bgColor="green";
	 }
	 
	 $("#subtabel2").show("slow");
	});
	
	//Punctul c;
	var check=0;
	//verifica daca s-a selectat casuta
	$( "#input1" ).click(function() {
	console.log("checked");
	check = 1;
	});
	$( "#input2" ).click(function() {
	check = 2;
	console.log("check2");
	});
	$( "#input3" ).click(function() {
	check = 3;
	console.log("check3");
	});
	$( "#input4" ).click(function() {
	check = 4;
	console.log("check4");
	});
	
	//pune semnele
	$("#l1").click(function() {
		if(check == 1){
		var l1 = document.getElementById("input1");
		l1.value = "<";
		$("#check1").show("slow");
		
		}
		else if (check == 2){
		var l2 = document.getElementById("input2");
		l2.value = "<";
		$("#check2").show("slow");
		//$("#wrong2").show("slow");
		//$("#wrong2").hide("slow");
		}
		
		else if (check == 3){
		var l3 = document.getElementById("input3");
		l3.value = "<";
		$("#check3").show("slow");
		//$("#wrong3").show("slow");
		//$("#wrong3").hide("slow");
		}
		
		else if (check == 4){
		var l4 = document.getElementById("input4");
		l4.value = "<";
		$("#check4").hide("slow");
		$("#wrong4").show("slow");
		$("#wrong4").hide("slow");
		}
		});
		
		$("#e1").click(function() {
		if(check == 1){
		var e1 = document.getElementById("input1");
		e1.value = "=";
		$("#check1").hide("slow");
		$("#wrong1").show("slow");
		$("#wrong1").hide("slow");
		}
		else if(check ==2){
		var e2 = document.getElementById("input2");
		e2.value = "=";
		$("#check2").hide("slow");
		$("#wrong2").show("slow");
		$("#wrong2").hide("slow");
		}
		else if(check ==3){
		var e3 = document.getElementById("input3");
		e3.value = "=";
		$("#check3").hide("slow");
		$("#wrong3").show("slow");
		$("#wrong3").hide("slow");
		}
		else if(check ==4){
		var e4 = document.getElementById("input4");
		e4.value = "=";
		$("#check4").hide("slow");
		$("#wrong4").show("slow");
		$("#wrong4").hide("slow");
		}
		});
		
		$("#b1").click(function() {
		if(check == 1){
		var b1 = document.getElementById("input1");
		b1.value = ">";
		$("#check1").hide("slow");
		$("#wrong1").show("slow");
		$("#wrong1").hide("slow");
		}
		else if(check ==2){
		var e2 = document.getElementById("input2");
		e2.value = ">";
		$("#check2").hide("slow");
		$("#wrong2").show("slow");
		$("#wrong2").hide("slow");
		}
		else if(check ==3){
		var e3 = document.getElementById("input3");
		e3.value = ">";
		$("#check3").hide("slow");
		$("#wrong3").show("slow");
		$("#wrong3").hide("slow");
		}
		else if(check ==4){
		var e4 = document.getElementById("input4");
		e4.value = ">";
		$("#check4").show("slow");
		}
		});
});