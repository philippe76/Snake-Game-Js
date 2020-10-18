
/*-------- Random Function ----------*/
const getRandomInt = (min, max) =>{
    return Math.floor(Math.random() * (max-min) + min)
}


/*-------- Creating Apple ----------*/
let apple = document.createElement('div');
document.getElementById('game').appendChild(apple);
apple.classList.add('apple')
apple.style.top = getRandomInt(0,562)+'px';
apple.style.left = getRandomInt(0,562)+'px';



/*-------- Creating Snake ----------*/
let long_snake = [0]; 

for(let i = 0; i< long_snake.length; i++) {
    let snake_square = document.createElement('div');
    document.querySelector('#game').appendChild(snake_square);
    snake_square.classList.add('snake');
    snake_square.style.top = '0px'    
}


/*-------- Original Snake Move ----------*/
document.querySelector('.snake').style.setProperty('--animation', 'move');


let snake_head = document.querySelectorAll('.snake')[long_snake.length -1];

/*-------- Variables for CSS keyframe ----------*/
document.querySelector('.snake').style.setProperty('--move_left_start', '0px');
document.querySelector('.snake').style.setProperty('--move_left_end', '562px');
document.querySelector('.snake').style.setProperty('--move_top_start', '0px');
document.querySelector('.snake').style.setProperty('--move_top_end', '0px');

/*-------- Getting dynamic element position ----------*/
function position(element) {
       return {
        top: element.getBoundingClientRect().top + document.body.scrollTop,
        left: element.getBoundingClientRect().left + document.body.scrollLeft
    }
}


/*-------- Keyboard Snake Move ----------*/
document.addEventListener('keydown', e => {
    switch(e.key) {
        case 'ArrowDown': document.querySelector('.snake').style.setProperty('--animation', 'down');       
                        //   document.querySelector('.snake').style.setProperty('--down_left_start', `${position(snake_head).left}px`);    
                        //   document.querySelector('.snake').style.setProperty('--down_left_end', `${position(snake_head).left}px`);    
                          document.querySelector('.snake').style.setProperty('--down_top_start', `${position(snake_head).top}px`); 
                          document.querySelector('.snake').style.setProperty('--down_top_end', '562px');    
        break;
        default: console.log('other');
    }
})








// document.addEventListener('keydown', e => {
//     // if(e.key ==='ArrowRight') 
//     //     part_snake.style.width += 40+'px'

//     long_snake.push(5)
//     createSnake()
//     // long_snake.pop(5)
//     // createSnake()
    
// })

// document.addEventListener('keyup', e => {

//     long_snake.shift(5)
//     createSnake()
    
// })


/////////////////////////////////////////////////////////////////




// avoid giving same place to both apple and snake
// while (snake.style.top === apple.style.top || snake.style.left === apple.style.left) {
//     apple.style.top = getRandomInt(0,562)+'px';
//     apple.style.left = getRandomInt(0,562)+'px';
// }






// document.addEventListener('keydown', e => {
//     switch(e.key) {
//         case 'ArrowDown' : snake.style.top = parseInt(snake.style.top)< 552 && 
//          parseInt(snake.style.top)+10+'px';
//         break;
//         case 'ArrowUp' : snake.style.top = parseInt(snake.style.top) > -10 && 
//         parseInt(snake.style.top)-10+'px';
//         break;
//         case 'ArrowLeft' : snake.style.left = parseInt(snake.style.left)> 11 && 
//         parseInt(snake.style.left)-10+'px';
//         break;
//         case 'ArrowRight' : snake.style.left = parseInt(snake.style.left)< 571 && 
//         parseInt(snake.style.left)+10+'px';        
//         break;
//         default: console.log('other');
//     }
// })

