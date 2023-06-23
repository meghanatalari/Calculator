let input = '';
let buttons = document.querySelectorAll('.button');
let display = document.getElementById('display');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{

        let btn = e.target.innerHTML;

        // AC button pressed
        if(btn === 'AC')
        {
            input = ' ';
            display.innerHTML = input;
        }

        // = button pressed
        else if(btn === '=')
        {
            let result = eval(input);
            input = result;
            display.innerHTML = input;
        }

        // sqrt() button pressed
        else if(btn ==='Sqrt()'){
            
            let result = Math.sqrt(input).toFixed(6);
            input = result;
            display.innerHTML = input;
        }
        else if(btn ==='Sin()'){
            let result = Math.sin(input).toFixed(6);
            input = result;
            display.innerHTML = input;
        }
        else if(btn ==='Cos()'){
            let result = Math.cos(input).toFixed(6);
            input = result;
            display.innerHTML = input;
        }
        else if(btn ==='Tan()'){
            let result = Math.tan(input).toFixed(6);
            input = result;
            display.innerHTML = input;
        }
        else
        {
            input += btn;
            display.innerHTML = input;
        }
    });
});