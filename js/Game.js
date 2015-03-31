/*!
 * HTML5 Drag and Drop with quiz for Moodle v1.0.0
 * http://github.com/davidluz
 * Date: 2015-01-03 
 */

Atividade1 = {};

//States da Atividade
Atividade1.Game = function(){ }; 
Atividade1.Play = function(){ }; 
Atividade1.Feedback = function(){ }; 
 

//Global configuration
var game = new Phaser.Game(680, 900, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update});

vazio = [];
drag = [];
function preload(){

game.load.image('bg', 'imgs/bg.png');
game.load.image('drag1', 'imgs/drag1.png');
game.load.image('drag2', 'imgs/drag2.png');
game.load.image('drag3', 'imgs/drag3.png');
game.load.image('drag4', 'imgs/drag4.png');
game.load.image('vazio', 'imgs/vazio.png');
game.load.image('enviar', 'imgs/enviar.png');


}

	


function create(){
game.add.sprite(0,  0,'bg');
enviar = game.add.sprite(230,820, 'enviar'); 
vazio[1] = game.add.sprite(358,78,'vazio');
vazio[2] = game.add.sprite(358,168,'vazio');
vazio[3] = game.add.sprite(358,255,'vazio');
vazio[4] = game.add.sprite(358,435,'vazio');
vazio[5] = game.add.sprite(358,572,'vazio');
vazio[6] = game.add.sprite(358,780,'vazio');

vazio[1].resposta = 1;
vazio[2].resposta = 2;
vazio[3].resposta = 3;
vazio[4].resposta = 4;
vazio[5].resposta = 5;
vazio[6].resposta = 6;

drag[1] = game.add.sprite(520, 50, 'drag1');
drag[2] = game.add.sprite(520, 100,'drag2');
drag[3] = game.add.sprite(520, 150,'drag3');
drag[4] = game.add.sprite(520, 200,'drag4');
drag[5] = game.add.sprite(520, 250,'drag1');
drag[6] = game.add.sprite(520, 300,'drag3');



enviar.inputEnabled = true;
enviar.events.onInputDown.add(enviarResposta, this);

for (var i=1; i<=6; i++){
drag[i].inputEnabled = true;
drag[i].input.enableDrag(true);
drag[i].events.onDragStop.add(largar, this);
} 


} 


function  enviarResposta(){

if(
drag[1].resposta===1&&
drag[2].resposta===2&&
drag[3].resposta===3&&
drag[4].resposta===4&&
drag[5].resposta===5&&
drag[6].resposta===6
){

alert("acertou!");

}




else{
alert("errou!");
}

}

function largar(dropedItem){

              
				for (var i=1; i<=6; i++){
                	
                      				
				    var boundsA = vazio[i].getBounds();
					var boundsB = dropedItem.getBounds();
					if(Phaser.Rectangle.intersects(boundsA, boundsB)){
					dropedItem.x = vazio[i].x;
    				dropedItem.y = vazio[i].y;
					dropedItem.resposta = vazio[i].resposta;
    				console.log(drag[1].resposta);  		
    				}    
    				
				
				}

				//Testa se largou sobre outro drag

				for(var i=1; i<=6; i++){
					var boundsA = dropedItem.getBounds();
					var boundsB = drag[i].getBounds();
					if(Phaser.Rectangle.intersects(boundsA, boundsB)&& boundsA!=boundsB){
						dropedItem.y = dropedItem.y+20;
					}

				}

		
			

			}

function update(){


}






