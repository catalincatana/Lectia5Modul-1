$(document).ready(function() {
	$("#Ex1").hide();
	$("#Ex2").hide();
	$("#Ex3").hide();
	
	$( "#Exercitiul1" ).click(function() {
	$("#Ex1").show();
	$("#Ex2").hide();
	$("#Ex3").hide();
	
	});
	
	$( "#Exercitiul2" ).click(function() {
	$("#Ex1").hide();
	$("#Ex2").show();
	$("#Ex3").hide();
	$("#cub2x2gol").show();
	$("#cub3x3gol").show();
	$("#cub2x2plin").hide();
	$("#cub3x3plin").hide();
	$("#subtabel11").hide();
	//$("#subtabel22").hide();
	//$("img").hide();
	});

	$( "#Exercitiul3" ).click(function() {
	$("#Ex1").hide();
	$("#Ex2").hide();
	$("#Ex3").show();
	$("#subtabel13").hide();
	$("#subtabel23").hide();
	//$("img").hide();
	});
	//Exercitiul1
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
		
		////Exercitiul2
		var ok2 = new Array(7);
		////Validari ex 2
		//Casuta 0
	if(isNaN(inputs[0])) {
		$("#in02").keyup(function() {
			inputs[0] = $(this).val();
			inputs[0] = parseInt(inputs[0], 10);

			if(!(isNaN(inputs[0]))) {
				if(inputs[0] == 1) {
					ok2[0] = 1;
					if((((ok2[0]==1 && ok2[1]==1)&& (ok2[2]==1 && ok2[3] ==1)) && (ok2[4]==1 && ok2[5]==1))){
						$("#wrongChecked13 > img").hide("slow");
						$("#wrongChecked13 > img").show("slow");
					}
					else{
					$("#wrongChecked13 > img").show("slow");
					$("#wrongChecked13 > img").hide("slow");
					}
				} else {
					$("#wrongChecked23 > img").show("slow");
					$("#wrongChecked23 > img").hide("slow");
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
			$("#wrongChecked13 > img").show("slow");
	}
	
	//Casuta 1
	if(isNaN(inputs[1])) {
		$("#in12").keyup(function() {
			inputs[1] = $(this).val();
			inputs[1] = parseInt(inputs[1], 10);

			if(!(isNaN(inputs[1]))) {
				if(inputs[1] == 2) {
					ok2[1] = 1;
					if((((ok2[0]==1 && ok2[1]==1)&& (ok2[2]==1 && ok2[3] ==1)) && (ok2[4]==1 && ok2[5]==1))){
						$("#wrongChecked13 > img").hide("slow");
						$("#wrongChecked13 > img").show("slow");
						}
						else{
					$("#wrongChecked13 > img").show("slow");
					$("#wrongChecked13 > img").hide("slow");
					}
				} else {
					$("#wrongChecked13 > img").hide("slow");
					$("#wrongChecked23 > img").show("slow");
					$("#wrongChecked23 > img").hide("slow");
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
			$("#wrongChecked13 > img").show("slow");
	}
	
	//Casuta 2
	if(isNaN(inputs[2])) {
		$("#in22").keyup(function() {
			inputs[2] = $(this).val();
			inputs[2] = parseInt(inputs[2], 10);

			if(!(isNaN(inputs[2]))) {
				if(inputs[2] == 4) {
					ok2[2] = 1;
					if((((ok2[0]==1 && ok2[1]==1)&& (ok2[2]==1 && ok2[3] ==1)) && (ok2[4]==1 && ok2[5]==1))){
						$("#wrongChecked13 > img").hide("slow");
						$("#wrongChecked13 > img").show("slow");
						}
						else{
					$("#wrongChecked13 > img").show("slow");
					$("#wrongChecked13 > img").hide("slow");
					}
				} else {
					$("#wrongChecked13 > img").hide("slow");
					$("#wrongChecked23 > img").show("slow");
					$("#wrongChecked23 > img").hide("slow");
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
			$("#wrongChecked13 > img").show("slow");
	}
	
	//Casuta 3
	if(isNaN(inputs[3])) {
		$("#in32").keyup(function() {
			inputs[3] = $(this).val();
			inputs[3] = parseInt(inputs[3], 10);

			if(!(isNaN(inputs[3]))) {
				if(inputs[3] == 8) {
					ok2[3] = 1;
					if((((ok2[0]==1 && ok2[1]==1)&& (ok2[2]==1 && ok2[3] ==1)) && (ok2[4]==1 && ok2[5]==1))){
						$("#wrongChecked13 > img").hide("slow");
						$("#wrongChecked13 > img").show("slow");
						}
						else{
					$("#wrongChecked13 > img").show("slow");
					$("#wrongChecked13 > img").hide("slow");
					}
				} else {
					$("#wrongChecked13 > img").hide("slow");
					$("#wrongChecked23 > img").show("slow");
					$("#wrongChecked23 > img").hide("slow");
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
			$("#wrongChecked13 > img").show("slow");
	}
	
	//Casuta 4
	if(isNaN(inputs[4])) {
		$("#in42").keyup(function() {
			inputs[4] = $(this).val();
			inputs[4] = parseInt(inputs[4], 10);

			if(!(isNaN(inputs[4]))) {
				if(inputs[4] == 1) {
				} else if(inputs[4] == 16) {
					ok2[4] = 1;
					if((((ok2[0]==1 && ok2[1]==1)&& (ok2[2]==1 && ok2[3] ==1)) && (ok2[4]==1 && ok2[5]==1))){
						$("#wrongChecked13 > img").hide("slow");
						$("#wrongChecked13 > img").show("slow");
						}
						else{
					$("#wrongChecked13 > img").show("slow");
					$("#wrongChecked13 > img").hide("slow");
					}
				} else {
					$("#wrongChecked13 > img").hide("slow");
					$("#wrongChecked23 > img").show("slow");
					$("#wrongChecked23 > img").hide("slow");
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
			$("#wrongChecked13 > img").show("slow");
	}
	
	//Casuta 5
	if(isNaN(inputs[5])) {
		$("#in52").keyup(function() {
			inputs[5] = $(this).val();
			inputs[5] = parseInt(inputs[5], 10);

			if(!(isNaN(inputs[5]))) {
				if(inputs[5] == 3) {
				} else if(inputs[5] == 32) {
					ok2[5] = 1;
					if((((ok2[0]==1 && ok2[1]==1)&& (ok2[2]==1 && ok2[3] ==1)) && (ok2[4]==1 && ok2[5]==1))){
						$("#wrongChecked13 > img").hide("slow");
						$("#wrongChecked13 > img").show("slow");
						}
						else{
					$("#wrongChecked13 > img").show("slow");
					$("#wrongChecked13 > img").hide("slow");
					}
				} else {
					$("#wrongChecked13 > img").hide("slow");
					$("#wrongChecked23 > img").show("slow");
					$("#wrongChecked23 > img").hide("slow");
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
			$("#wrongChecked13 > img").show("slow");
	}
	
	//linia 2 ex a
	var ok3 = new Array(7);
	//Casuta 0
	if(isNaN(inputs[0])) {
		$("#in03").keyup(function() {
			inputs[0] = $(this).val();
			inputs[0] = parseInt(inputs[0], 10);

			if(!(isNaN(inputs[0]))) {
				if(inputs[0] == 1) {
					ok3[0] = 1;
					if((((ok3[0]==1 && ok3[1]==1)&& (ok3[2]==1 && ok3[3] ==1)) && (ok3[4]==1 && ok3[5]==1))){
						$("#wrongChecked12 > img").hide("slow");
						$("#wrongChecked12 > img").show("slow");
					}
					else{
					$("#wrongChecked12 > img").show("slow");
					$("#wrongChecked12 > img").hide("slow");
					}
				} else {
					$("#wrongChecked22 > img").show("slow");
					$("#wrongChecked22 > img").hide("slow");
				}
			}
		}).keydown();
		if(inputs[0] == 1 &&
				inputs[1] == 3 &&
				inputs[2] == 9 &&
				inputs[3] == 27 &&
				inputs[4] == 81 &&
				inputs[5] == 243)
			$("#wrongChecked12 > img").show("slow");
	}
	
	//Casuta 1
	if(isNaN(inputs[1])) {
		$("#in13").keyup(function() {
			inputs[1] = $(this).val();
			inputs[1] = parseInt(inputs[1], 10);

			if(!(isNaN(inputs[1]))) {
				if(inputs[1] == 3) {
					ok3[1] = 1;
					if((((ok3[0]==1 && ok3[1]==1)&& (ok3[2]==1 && ok3[3] ==1)) && (ok3[4]==1 && ok3[5]==1))){
						$("#wrongChecked12 > img").hide("slow");
						$("#wrongChecked12 > img").show("slow");
						}
						else{
					$("#wrongChecked12 > img").show("slow");
					$("#wrongChecked12 > img").hide("slow");
					}
				} else {
					$("#wrongChecked12 > img").hide("slow");
					$("#wrongChecked22 > img").show("slow");
					$("#wrongChecked22 > img").hide("slow");
				}
			}
		}).keydown();
		if(inputs[0] == 1 &&
				inputs[1] == 3 &&
				inputs[2] == 9 &&
				inputs[3] == 27 &&
				inputs[4] == 81 &&
				inputs[5] == 243)
			$("#wrongChecked12 > img").show("slow");
	}
	
	//Casuta 2
	if(isNaN(inputs[2])) {
		$("#in23").keyup(function() {
			inputs[2] = $(this).val();
			inputs[2] = parseInt(inputs[2], 10);

			if(!(isNaN(inputs[2]))) {
				if(inputs[2] == 9) {
					ok3[2] = 1;
					if((((ok3[0]==1 && ok3[1]==1)&& (ok3[2]==1 && ok3[3] ==1)) && (ok3[4]==1 && ok3[5]==1))){
						$("#wrongChecked12 > img").hide("slow");
						$("#wrongChecked12 > img").show("slow");
						}
						else{
					$("#wrongChecked12 > img").show("slow");
					$("#wrongChecked12 > img").hide("slow");
					}
				} else {
					$("#wrongChecked12 > img").hide("slow");
					$("#wrongChecked22 > img").show("slow");
					$("#wrongChecked22 > img").hide("slow");
				}
			}
		}).keydown();
		if(inputs[0] == 1 &&
				inputs[1] == 3 &&
				inputs[2] == 9 &&
				inputs[3] == 27 &&
				inputs[4] == 81 &&
				inputs[5] == 243 )
			$("#wrongChecked12 > img").show("slow");
	}
	
	//Casuta 3
	if(isNaN(inputs[3])) {
		$("#in33").keyup(function() {
			inputs[3] = $(this).val();
			inputs[3] = parseInt(inputs[3], 10);

			if(!(isNaN(inputs[3]))) {
				if(inputs[3] == 2) {}else
					if(inputs[3] == 27){
					ok3[3] = 1;
					if((((ok3[0]==1 && ok3[1]==1)&& (ok3[2]==1 && ok3[3] ==1)) && (ok3[4]==1 && ok3[5]==1))){
						$("#wrongChecked12 > img").hide("slow");
						$("#wrongChecked12 > img").show("slow");
						}
						else{
					$("#wrongChecked12 > img").show("slow");
					$("#wrongChecked12 > img").hide("slow");
					}
				} else {
					$("#wrongChecked12 > img").hide("slow");
					$("#wrongChecked22 > img").show("slow");
					$("#wrongChecked22 > img").hide("slow");
				}
			}
		}).keydown();
		if(inputs[0] == 1 &&
				inputs[1] == 3 &&
				inputs[2] == 9 &&
				inputs[3] == 27 &&
				inputs[4] == 81 &&
				inputs[5] == 243)
			$("#wrongChecked12 > img").show("slow");
	}
	
	//Casuta 4
	if(isNaN(inputs[4])) {
		$("#in43").keyup(function() {
			inputs[4] = $(this).val();
			inputs[4] = parseInt(inputs[4], 10);

			if(!(isNaN(inputs[4]))) {
				if(inputs[4] == 8) {
				} else if(inputs[4] == 81) {
					ok3[4] = 1;
					if((((ok3[0]==1 && ok3[1]==1)&& (ok3[2]==1 && ok3[3] ==1)) && (ok3[4]==1 && ok3[5]==1))){
						$("#wrongChecked12 > img").hide("slow");
						$("#wrongChecked12 > img").show("slow");
						}
						else{
					$("#wrongChecked12 > img").show("slow");
					$("#wrongChecked12 > img").hide("slow");
					}
				} else {
					$("#wrongChecked12 > img").hide("slow");
					$("#wrongChecked22 > img").show("slow");
					$("#wrongChecked22 > img").hide("slow");
				}
			}
		}).keydown();
		if(inputs[0] == 1 &&
				inputs[1] == 3 &&
				inputs[2] == 9 &&
				inputs[3] == 27 &&
				inputs[4] == 81 &&
				inputs[5] == 243 )
			$("#wrongChecked13 > img").show("slow");
	}
	
	//Casuta 5
	if(isNaN(inputs[5])) {
		$("#in53").keyup(function() {
			inputs[5] = $(this).val();
			inputs[5] = parseInt(inputs[5], 10);

			if(!(isNaN(inputs[5]))) {
				if(inputs[5] == 2) {
				} 
				else if(inputs[5]==24){}
				else if(inputs[5] == 243) {
					ok3[5] = 1;
					if((((ok3[0]==1 && ok3[1]==1)&& (ok3[2]==1 && ok3[3] ==1)) && (ok3[4]==1 && ok3[5]==1))){
						$("#wrongChecked12 > img").hide("slow");
						$("#wrongChecked12 > img").show("slow");
						}
						else{
					$("#wrongChecked12 > img").show("slow");
					$("#wrongChecked12 > img").hide("slow");
					}
				} else {
					$("#wrongChecked12 > img").hide("slow");
					$("#wrongChecked22 > img").show("slow");
					$("#wrongChecked22 > img").hide("slow");
				}
			}
		}).keydown();
		if(inputs[0] == 1 &&
				inputs[1] == 3 &&
				inputs[2] == 9 &&
				inputs[3] == 27 &&
				inputs[4] == 81 &&
				inputs[5] == 243)
			$("#wrongChecked12 > img").show("slow");
	}
	
	//punctul b, 
	
	$("#radio11").click(function(){
	$("#cub2x2gol").hide();
	$("#cub2x2plin").show();
	
	$("#subtabel11").show("slow");
	
	});
	//////////////////////////////////////////
	/////Daca ascund id-ul de jos, nu mai merge nici cel de deasupra :(
	//$("#subtabel22").hide();
	$("#radio22").click(function(){
	$("#cub3x3gol").hide();
	$("#cub3x3plin").show();
	$("#subtabel22").show("slow");
	});
	
	var inex2;
	if(isNaN(inex2)) {
		$("#inex2").keyup(function() {
			inex2 = $("#inex2").val();
			//GT= parseInt(GT,10);
			if(isNaN(inex2)){
			if(inex2 == "<") {
				$("#empty1").empty();
				$("#empty1").append("<img src='check.jpg'>");
				
			} 
			else {
				$("#empty1").empty();
				$("#empty1").append("<img src='wrong.png'>");
			}
			}
		}).keydown();
	}
	
	//Punctul c;
	var check2=0;
	//verifica daca s-a selectat casuta
	$( "#input1b" ).click(function() {
	console.log("checked");
	check2 = 1;
	});
	$( "#input2b" ).click(function() {
	check2 = 2;
	console.log("check2");
	});
	
	$("#l1b").click(function() {
		if(check2 == 1){
		var l1 = document.getElementById("input1b");
		l1.value = "<";
		$("#check1b").show("slow");
		
		}
		else if (check2 == 2){
		var l2 = document.getElementById("input2b");
		l2.value = "<";
		$("#check2b").hide("slow");
		$("#wrong2b").show("slow");
		$("#wrong2b").hide("slow");
		}
		});
	$("#e1b").click(function() {
		if(check2 == 1){
		var e1 = document.getElementById("input1b");
		e1.value = "=";
		$("#check1b").hide("slow");
		$("#wrong1b").show("slow");
		$("#wrong1b").hide("slow");
		}
		else if(check2 ==2){
		var e2 = document.getElementById("input2b");
		e2.value = "=";
		$("#check2b").hide("slow");
		$("#wrong2b").show("slow");
		$("#wrong2b").hide("slow");
		}
		});
	$("#b1b").click(function() {
		if(check2 == 1){
		var b1 = document.getElementById("input1b");
		b1.value = ">";
		$("#check1b").hide("slow");
		$("#wrong1b").show("slow");
		$("#wrong1b").hide("slow");
		}
		else if(check2 ==2){
		var e2 = document.getElementById("input2b");
		e2.value = ">";
		$("#check2b").show("slow");
		
		}
		});
		
		///// Exercitiul 3
		$("#radio13").click(function(){
			$("#cubex3").show("slow");
			$("#subtabel13").show("slow");
		});
		
		$("#radio23").click(function(){
			$("#patratex3").show("slow");
			$("#subtabel23").show("slow");
		});
		
		var inex3;
	if(isNaN(inex3)) {
		$("#inex3b").keyup(function() {
			inex3 = $("#inex3b").val();
			//GT= parseInt(GT,10);
			if(isNaN(inex3)){
			if(inex3 == "<") {
				$("#empty2").empty();
				$("#empty2").append("<img src='check.jpg'>");
				
			} 
			else {
				$("#empty2").empty();
				$("#empty2").append("<img src='wrong.png'>");
			}
			}
		}).keydown();
	}
	//// punctul b
	//////////////
	///////////
	//
	var check3=0;
	//verifica daca s-a selectat casuta
	$( "#input13" ).click(function() {
	console.log("checked");
	check3 = 1;
	});
	$( "#input23" ).click(function() {
	check3 = 2;
	console.log("check2");
	});
	$( "#input33" ).click(function() {
	check3 = 3;
	console.log("check3");
	});
	$( "#input43" ).click(function() {
	check3 = 4;
	console.log("check4");
	});
	
	//pune semnele
	$("#l13").click(function() {
		if(check3 == 1){
		var l1 = document.getElementById("input13");
		l1.value = "<";
		$("#check13").hide("slow");
		$("#wrong13").show("slow");
		$("#wrong13").hide("slow");
		}
		else if (check3 == 2){
		var l2 = document.getElementById("input23");
		l2.value = "<";
		$("#check23").hide("slow");
		$("#wrong23").show("slow");
		$("#wrong23").hide("slow");
		}
		
		else if (check3 == 3){
		var l3 = document.getElementById("input33");
		l3.value = "<";
		$("#check33").show("slow");
		//$("#wrong3").show("slow");
		//$("#wrong3").hide("slow");
		}
		
		else if (check3 == 4){
		var l4 = document.getElementById("input43");
		l4.value = "<";
		$("#check43").hide("slow");
		$("#wrong43").show("slow");
		$("#wrong43").hide("slow");
		}
		});
		
	$("#e13").click(function() {
		if(check3 == 1){
		var e1 = document.getElementById("input13");
		e1.value = "=";
		$("#check13").show("slow");
		
		}
		else if(check3 ==2){
		var e2 = document.getElementById("input23");
		e2.value = "=";
		$("#check23").hide("slow");
		$("#wrong23").show("slow");
		$("#wrong23").hide("slow");
		}
		else if(check3 ==3){
		var e3 = document.getElementById("input33");
		e3.value = "=";
		$("#check33").hide("slow");
		$("#wrong33").show("slow");
		$("#wrong33").hide("slow");
		}
		else if(check3 ==4){
		var e4 = document.getElementById("input43");
		e4.value = "=";
		$("#check43").hide("slow");
		$("#wrong43").show("slow");
		$("#wrong43").hide("slow");
		}
		});
		
	$("#b13").click(function() {
		if(check3 == 1){
		var b1 = document.getElementById("input13");
		b1.value = ">";
		$("#check13").hide("slow");
		$("#wrong13").show("slow");
		$("#wrong13").hide("slow");
		}
		else if(check3 ==2){
		var e2 = document.getElementById("input23");
		e2.value = ">";
		$("#check23").show("slow");
		
		}
		else if(check3 ==3){
		var e3 = document.getElementById("input33");
		e3.value = ">";
		$("#check33").hide("slow");
		$("#wrong33").show("slow");
		$("#wrong33").hide("slow");
		}
		else if(check3 ==4){
		var e4 = document.getElementById("input43");
		e4.value = ">";
		$("#check43").show("slow");
		
		}
		});
		
		//autotabs
		//ex1:
		$('#in0').autotab({ target: 'in1' });
		$('#in1').autotab({ target: 'in2',previous:'in0',type:'numeric' });
		$('#in2').autotab({ target: 'in3',previous:'in1',type:'numeric' });
		$('#in3').autotab({ target: 'in4',previous:'in2',type:'numeric' });
		$('#in4').autotab({ target: 'in5',previous:'in3',type:'numeric' });
		$('#in5').autotab({ target: 'in6',previous:'in4',type:'numeric' });
		$('#in6').autotab({ previous:'in5'});
		//ex2:
		$('#in02').autotab({ target: 'in12' });
		$('#in12').autotab({ target: 'in22',previous:'in02',type:'numeric' });
		$('#in22').autotab({ target: 'in32',previous:'in12',type:'numeric' });
		$('#in32').autotab({ target: 'in42',previous:'in22',type:'numeric' });
		$('#in42').autotab({ target: 'in52',previous:'in32',type:'numeric' });
		$('#in52').autotab({ target: 'in03',previous:'in42',type:'numeric' });
		$('#in03').autotab({ target: 'in13',previous:'in52',type:'numeric'});
		$('#in13').autotab({ target: 'in23',previous:'in03',type:'numeric' });
		$('#in23').autotab({ target: 'in33',previous:'in13',type:'numeric' });
		$('#in33').autotab({ target: 'in43',previous:'in23',type:'numeric' });
		$('#in43').autotab({ target: 'in53',previous:'in33',type:'numeric' });
		$('#in53').autotab({previous:'in43',type:'numeric' });
		
		
});