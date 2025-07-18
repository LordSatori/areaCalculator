function sqCal(){
            let v = document.querySelector('.corner');
            const num = v.value;

            document.querySelector('.result').innerHTML =  Math.pow(num, 2);;
        }