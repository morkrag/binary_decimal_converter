function converter() {
    let input = document.getElementById("input-number").value;
    let inputKeeper = input;
    let output = 0;
    let biKeeper = "";
    let select = document.getElementById('convertation-type');

    console.log(select.value);
    console.log(typeof(select.value));
    if (select.value == "biToDec") {
        for (let i = 0; i < input.length; i++) {
            let a = parseInt(input[i]) * (2**i);
            console.log(a);
            output += a;
        }
        console.log("Input binary number: ", inputKeeper);
        console.log("Output decimal number: ", output);

        document.getElementById("input-message").innerHTML = "Input binary number: " + "<span>" + inputKeeper + "</span>" + "<br>";
        document.getElementById("output-message").innerHTML = "Output decimal number: " + "<span>" + output + "</span>";
    }
    else {
        while (input != 0) {
            biKeeper += (input%2).toString();
            input = (input - input%2) / 2;
        }
        output = '';
        for (let i = biKeeper.length - 1; i >= 0; i--) {
            output += biKeeper[i];
        }
        console.log("Input decimal number: ", inputKeeper);
        console.log("Output binary number: ", output);

        document.getElementById("input-message").innerHTML = "Input decimal number: " + "<span>" + inputKeeper + "</span>" + "<br>";
        document.getElementById("output-message").innerHTML = "Output binary number: " + "<span>" + output + "</span>";
    }
}



