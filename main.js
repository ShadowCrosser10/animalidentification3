function start() {
    model = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/LFzq9q7ds/model.json", modelLoaded);
}

function modelLoaded() {
    console.log("Model is loaded!");
    model.classify(gotResult);
}

function gotResult(error, results) {
    if(error){
        console.error(error); 
    } else {
        console.log(results);
        r = Math.floor(Math.random()*255)+1;
        g = Math.floor(Math.random()*255)+1;
        b = Math.floor(Math.random()*255)+1; 

        document.getElementById("hear").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = (results[0].confidence*100).toFixed(2)+"%"; 
        document.getElementById("hear").style.color = "rgb("+r+","+g+","+b+")";
        document.getElementById("accuracy").style.color = "rgb("+r+","+g+","+b+")";

        ear  = document.getElementById("hearing");
        
        if(results[0] == "Bark") {
            ear.src = "dog.jpg";
        } else if (results[0] == "Meow"){
            ear.src = "cat.jpg"
        } else {
            ear.src = "ear.jpg"
        }
    }
}