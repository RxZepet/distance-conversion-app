(function(){

    "use strict"

    let convertType = "miles";
    const heading = document.querySelector('h1');
    const intro = document.querySelector('p');
    const answerDiv = document.getElementById('answer');
    const form = document.getElementById('convert')

    document.addEventListener('keydown', function(event){

        var key = event.code; // or event.key --- this is to capture the key that was pressed

        if(key === 'KeyK'){
            // change the value of the convertType vriable.
            convertType = 'kilometers';
            // change the heading.
            heading.innerHTML = "Kilometers to Miles converter";
            // change the intro paragraph
            intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to Miles.";
            


        }
        else if(key === 'KeyM'){
            // change the value of the convertType vriable.
            convertType = 'miles';
            // change the heading.
            heading.innerHTML = "Miles to Kilometers converter";
            // change the intro paragraph
            intro.innerHTML = "Type in a number of Miles and click the button to convert the distance to Kilometers.";

        }	


    });

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const distance = parseFloat(document.getElementById("distance").value);

        if(distance){
            // convert M to K 1.609344
            if(convertType === 'miles'){
                const converted = (distance * 1.609344).toFixed(3);
                answerDiv.innerHTML = `${distance} miles converts to ${converted} kilometers`;
            }
            else{
                // convert K to M 0.621371192
                const converted = (distance * 0.621371192).toFixed(3);
                answerDiv.innerHTML = `${distance} kilometers converts to ${converted} miles`;

            }
            
        }
        else{
            answerDiv.innerHTML = '<h2>Please provide a number</h2>';
        }



    });
})();