function myFirstApp(name, age) {
    alert(`Привет, меня зовут ${name} и это моя не первая программа :)`);

    function showSkills() {
        let skills = ['html', 'css', 'js'];
        console.log('Я владею');
        document.write('Я владею');
        for (let i = 0; i < skills.length; i++) {
            console.log(skills[i]);
            document.write(`<br>${skills[i]}`);
        }

    }

    function checkAge(age) {
        if (age > 18) {
            alert('У тебя отличные шансы стать FrontEnd dev!');
        }
        else {
            alert('Круто что ты так рано задумался о своем будущем :)');
        }
    }

    function calcPow(num) {
        return num**2;
    }

    console.log(showSkills());
    console.log(checkAge(18));
    console.log(checkAge(19));
    console.log(calcPow(4));
    console.log(calcPow(6));

}

myFirstApp("Hoh");

