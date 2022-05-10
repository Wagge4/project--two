let output = document.getElementById('output');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                output.innerText = '';
             default:
                output.innerText += e.target.innerText;
        }
    });
});