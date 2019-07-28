function flameup() {

    var firstlist = document.getElementById('first-name').value.toUpperCase().split("");
    var secondlist = document.getElementById('second-name').value.toUpperCase().split("");

    console.log("Matched:");
    for (i = 0; i < firstlist.length; i++) {
        for (j = 0; j < secondlist.length; j++) {
            if (firstlist[i] == secondlist[j]) {
                console.log(firstlist[i]);
                firstlist.splice(i, 1);
                secondlist.splice(j, 1);
                // alert(firstlist+secondlist);
                i--;
                continue;
            }

        }

    }
    console.log("Unmatched: " + firstlist + "|" + secondlist);
    var count = firstlist.length + secondlist.length;
    console.log(count);
    count--;
    var flames = ['F', 'L', 'A', 'M', 'E', 'S'];
    var n = count;

    while (flames.length != 1) {

        flames.splice(n, 1);
        console.log(flames);
        n = (n + count) % flames.length;

    }
    var res=document.getElementById('flames_result');
    
    switch (flames[0]) {
        case 'F':
            res.innerHTML="Friends";
            break;
        case 'L':
            res.innerHTML="Lovers";
            break;
        case 'A':
            res.innerHTML="Ancestors";
            break;
        case 'M':
            res.innerHTML="Married Couple";
            break;
        case 'E':
            res.innerHTML="Enemies";
            break;
        case 'S':
            res.innerHTML="Soulmates";
            break;
    }
}