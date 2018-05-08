var turn = true;
var won = false;
var playerOne = 0;
var playerTwo = 0;
var game = 3;


function checkWinner(){
	if($(".oneScore").text() == $(".winReq").text()){
		$(".oneScore").css('color','green');
	}

	if($(".twoScore").text() == $(".winReq").text()){
		$(".twoScore").css('color','green');
	}
}

function checkVertical(){
	if(($("div[id=1]").text()=="x" && $("div[id=4]").text()=="x" && $("div[id=7]").text()=="x") && $("div[id=1]").text()=="x"){
		playerOne++;
		$(".oneScore").text(playerOne);
		won = !won;
		checkWinner();
		alert("X won!!!")
	}

	if(($("div[id=1]").text()=="o" && $("div[id=4]").text()=="o" && $("div[id=7]").text()=="o") && $("div[id=1]").text()=="o"){
		playerTwo++;
		$(".twoScore").text(playerTwo);
		won = !won;
		checkWinner();
		alert("O won!!!")
	}


	if(($("div[id=2]").text()=="x" && $("div[id=5]").text()=="x" && $("div[id=8]").text()=="x") && $("div[id=2]").text()=="x"){
		playerOne++;
		$(".oneScore").text(playerOne);
		won = !won;
		checkWinner();
		alert("X won!!!")
	}

	if(($("div[id=2]").text()=="o" && $("div[id=5]").text()=="o" && $("div[id=8]").text()=="o") && $("div[id=2]").text()=="o"){
		playerTwo++;
		$(".twoScore").text(playerTwo);
		won = !won;
		checkWinner();
		alert("O won!!!")
	}

	if(($("div[id=3]").text()=="x" && $("div[id=6]").text()=="x" && $("div[id=9]").text()=="x") && $("div[id=3]").text()=="x"){
		playerOne++;
		$(".oneScore").text(playerOne);
		won = !won;
		checkWinner();
		alert("X won!!!")
	}

	if(($("div[id=3]").text()=="o" && $("div[id=6]").text()=="o" && $("div[id=9]").text()=="o") && $("div[id=3]").text()=="o"){
		playerTwo++;
		won = !won;
		checkWinner();
		alert("O won!!!")
	}
}

function checkHorizontal(){
	if(($("div[id=1]").text()=="x" && $("div[id=2]").text()=="x" && $("div[id=3]").text()=="x") && $("div[id=1]").text()=="x"){
		playerOne++;
		$(".oneScore").text(playerOne);
		won = !won;
		checkWinner();
		alert("X won!!!")
	}

	if(($("div[id=1]").text()=="o" && $("div[id=2]").text()=="o" && $("div[id=3]").text()=="o") && $("div[id=1]").text()=="o"){
		playerTwo++;
		$(".twoScore").text(playerTwo);
		won = !won;
		checkWinner();
		alert("O won!!!")
	}


	if(($("div[id=4]").text()=="x" && $("div[id=5]").text()=="x" && $("div[id=6]").text()=="x") && $("div[id=4]").text()=="x"){
		playerOne++;
		$(".oneScore").text(playerOne);
		won = !won;
		checkWinner();
		alert("X won!!!")
	}

	if(($("div[id=4]").text()=="o" && $("div[id=5]").text()=="o" && $("div[id=6]").text()=="o") && $("div[id=4]").text()=="o"){
		playerTwo++;
		$(".twoScore").text(playerTwo);
		won = !won;
		checkWinner();
		alert("O won!!!")
	}

	if(($("div[id=7]").text()=="x" && $("div[id=8]").text()=="x" && $("div[id=9]").text()=="x") && $("div[id=7]").text()=="x"){
		playerOne++;
		$(".oneScore").text(playerOne);
		won = !won;
		checkWinner();
		alert("X won!!!")
	}

	if(($("div[id=7]").text()=="o" && $("div[id=8]").text()=="o" && $("div[id=9]").text()=="o") && $("div[id=7]").text()=="o"){
		playerTwo++;
		$(".twoScore").text(playerTwo);
		won = !won;
		checkWinner();
		alert("O won!!!")
	}
}

function checkDiagonal(){
	if(($("div[id=1]").text()=="x" && $("div[id=5]").text()=="x" && $("div[id=9]").text()=="x") && $("div[id=1]").text()=="x"){
		playerOne++;
		$(".oneScore").text(playerOne);
		won = !won;
		checkWinner();
		alert("X won!!!")
	}

	if(($("div[id=1]").text()=="o" && $("div[id=5]").text()=="o" && $("div[id=9]").text()=="o") && $("div[id=1]").text()=="o"){
		playerTwo++;
		$(".twoScore").text(playerTwo);
		won = !won;
		checkWinner();
		alert("O won!!!")
	}


	if(($("div[id=3]").text()=="x" && $("div[id=5]").text()=="x" && $("div[id=7]").text()=="x") && $("div[id=3]").text()=="x"){
		playerOne++;
		$(".oneScore").text(playerOne);
		won = !won;
		checkWinner();
		alert("X won!!!")
	}

	if(($("div[id=3]").text()=="o" && $("div[id=5]").text()=="o" && $("div[id=7]").text()=="o") && $("div[id=3]").text()=="o"){
		playerTwo++;
		$(".twoScore").text(playerTwo);
		won = !won;
		checkWinner();
		alert("O won!!!")
	}

	
}


$("td > div").on("click",function(){
	if(!won){
		if(turn){
			$(this).text("x");
			$(this).addClass("xo");
			turn = false;
		}

		else{
			$(this).text("o");
			$(this).addClass("xo");
			turn = true;

		}
		
		checkVertical();
		checkHorizontal();
		checkDiagonal();
	}		
});	


$("#reset").on("click", function(){	
	for(var i = 1; i < 10; i++){
		$("div[id=" + i + "]").text("-");
		$("div[id=" + i + "]").removeClass("xo");
	}
	

	won = false;
	turn = true;
});


$("#resetScores").on("click", function(){	
	for(var i = 1; i < 10; i++){
		$("div[id=" + i + "]").text("-");
		$("div[id=" + i + "]").removeClass("xo");
	}
	
	$(".oneScore").css('color','black');
	$(".twoScore").css('color','black');

	$(".oneScore").text(0);
	$(".twoScore").text(0);
	$(".winReq").text(3);
	won = false;
	turn = true;
});




$(".winReq").on("click",function(){
	game++;
	$(".winReq").text(game);
});

$(".oneScore").text(playerOne);
$(".twoScore").text(playerTwo);
$(".winReq").text(game);
