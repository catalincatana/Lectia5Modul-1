$(document).ready(function() {
	$("img").hide();
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
					$("#wrongChecked1 > img").show("slow");
					$("#wrongChecked1 > img").hide("slow");
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
					$("#wrongChecked1 > img").show("slow");
					$("#wrongChecked1 > img").hide("slow");
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
	
	//Casuta 2
	if(isNaN(inputs[2])) {
		$("#in2").keyup(function() {
			inputs[2] = $(this).val();
			inputs[2] = parseInt(inputs[2], 10);

			if(!(isNaN(inputs[2]))) {
				if(inputs[2] == 4) {
					ok[2] = 1;
					$("#wrongChecked1 > img").show("slow");
					$("#wrongChecked1 > img").hide("slow");
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
	
	//Casuta 3
	if(isNaN(inputs[3])) {
		$("#in3").keyup(function() {
			inputs[3] = $(this).val();
			inputs[3] = parseInt(inputs[3], 10);

			if(!(isNaN(inputs[3]))) {
				if(inputs[3] == 8) {
					ok[3] = 1;
					$("#wrongChecked1 > img").show("slow");
					$("#wrongChecked1 > img").hide("slow");
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
	
	//Casuta 4
	if(isNaN(inputs[4])) {
		$("#in4").keyup(function() {
			inputs[4] = $(this).val();
			inputs[4] = parseInt(inputs[4], 10);

			if(!(isNaN(inputs[4]))) {
				if(inputs[4] == 1) {
				} else if(inputs[4] == 16) {
					ok[4] = 1;
					$("#wrongChecked1 > img").show("slow");
					$("#wrongChecked1 > img").hide("slow");
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
	
	//Casuta 5
	if(isNaN(inputs[5])) {
		$("#in5").keyup(function() {
			inputs[5] = $(this).val();
			inputs[5] = parseInt(inputs[5], 10);

			if(!(isNaN(inputs[5]))) {
				if(inputs[5] == 3) {
				} else if(inputs[5] == 32) {
					ok[5] = 1;
					$("#wrongChecked1 > img").show("slow");
					$("#wrongChecked1 > img").hide("slow");
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
	
	//Casuta 6
	if(isNaN(inputs[6])) {
		$("#in6").keyup(function() {
			inputs[6] = $(this).val();
			inputs[6] = parseInt(inputs[6], 10);

			if(!(isNaN(inputs[6]))) {
				if(inputs[6] == 6) {
				} else if(inputs[6] == 64) {
					ok[6] = 1;
					$("#wrongChecked1 > img").show("slow");
					$("#wrongChecked1 > img").hide("slow");
				} else {
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
			if(GT == "<") {
				$("#empty").append("<img src='check.jpg'>");
			} else {
				$("#empty").append("<img src='wrong.png'>").delay(5000).empty();
			}
		}).keydown();
	}
});