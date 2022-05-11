/**  
 * Targets the output ID
*/
let output = document.getElementById('output');
/**
 * Targets the class button and makes it line up in an array
 */
let buttons = Array.from(document.getElementsByClassName('button'));

/**
 * This is where the code for the calculator to actually work begins.
 * It makes the C key on the calculator Clear all data in the output, 
 * it makes the left arrow remove one button click.
 * The code does also make the equal sign make the calculation put in
 * by the user.
 * This code also includes a message saying "Syntax Error!" in case
 * the user puts in some wrong math.
 */
buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                output.innerText = '';
                break;
            case '←':
                if(output.innerText){
                    output.innerText = output.innerText.slice(0, -1);
                }
                break;
            case '=':
                try{
                    output.innerText = eval(output.innerText);
                } catch {
                    output.innerText = 'Syntax Error!';
                }
                break;
             default:
                output.innerText += e.target.innerText;
        }
    });
});