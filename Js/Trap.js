function trapCal(){
            let v1 = document.querySelector('.smallBase');
            let v2 = document.querySelector('.bigBase');
            let v3 = document.querySelector('.height');
            const num1 = v1.value;
            const num2 = v2.value;
            const num3 = v3.value;

            document.querySelector('.result').innerHTML =  (num1 + num2) * num3 / 2;
        }