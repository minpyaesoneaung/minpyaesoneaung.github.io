function validateText(form){
    var text = form.elements["text"];
    if(text.validity.valueMissing){                 
        text.setCustomValidity("You must fill this field.");
        return false;
    }
    else{
        text.setCustomValidity("");
        return true;
    }
}

function changePathLabels(form){
    var path1 = form.elements["path1"].value;
    var targetPath1 = document.querySelectorAll('label[id="path1name"],span[id="path1name"]');
    for (i=0;i<6;i++){
        targetPath1[i].innerText = path1;
    }

    var path2 = form.elements["path2"].value;
    var targetPath2 = document.querySelectorAll('label[id="path2name"],span[id="path2name"]');
    for (i=0;i<6;i++){
        targetPath2[i].innerText = path2;
    }

    var path3 = form.elements["path3"].value;
    var targetPath3 = document.querySelectorAll('label[id="path3name"],span[id="path3name"]');
    for (i=0;i<6;i++){
        targetPath3[i].innerText = path3;
    }

    var path4 = form.elements["path4"].value;
    var targetPath4 = document.querySelectorAll('label[id="path4name"],span[id="path4name"]');
    for (i=0;i<6;i++){
        targetPath4[i].innerText = path4;
    }
}

function changeCriteriaLabels(form){
    var criteria1 = form.elements["criteria1"].value;
    var targetCriteria1 = document.querySelectorAll('label[id="criteria1name"],legend[id="criteria1name"],span[id="criteria1name"]');
    for (i=0;i<3;i++){
        targetCriteria1[i].innerText = criteria1;
    }

    var criteria2 = form.elements["criteria2"].value;
    var targetCriteria2 = document.querySelectorAll('label[id="criteria2name"],legend[id="criteria2name"],span[id="criteria2name"]');
    for (i=0;i<3;i++){
        targetCriteria2[i].innerText = criteria2;
    }

    var criteria3 = form.elements["criteria3"].value;
    var targetCriteria3 = document.querySelectorAll('label[id="criteria3name"],legend[id="criteria3name"],span[id="criteria3name"]');
    for (i=0;i<3;i++){
        targetCriteria3[i].innerText = criteria3;
    }

    var criteria4 = form.elements["criteria4"].value;
    var targetCriteria4 = document.querySelectorAll('label[id="criteria4name"],legend[id="criteria4name"],span[id="criteria4name"]');
    for (i=0;i<3;i++){
        targetCriteria4[i].innerText = criteria4;
    }
}

var path1Points = 0;
var path2Points = 0;
var path3Points = 0;
var path4Points = 0;


function calculatePoints1(form){
    if(document.getElementById("1pathOne1st").checked){
        path1Points = path1Points + 4;
    }
    
    if(document.getElementById("1pathOne2nd").checked){
        path1Points = path1Points + 3;
    }
    
    if(document.getElementById("1pathOne3rd").checked){
        path1Points = path1Points + 2;
    }
    
    if(document.getElementById("1pathOne4th").checked){
        path1Points = path1Points + 1;
    }
    
    if(document.getElementById("1pathTwo1st").checked){
        path2Points = path2Points + 4;
    }
    
    if(document.getElementById("1pathTwo2nd").checked){
        path2Points = path2Points + 3;
    }
    
    if(document.getElementById("1pathTwo3rd").checked){
        path2Points = path2Points + 2;
    }
    
    if(document.getElementById("1pathTwo4th").checked){
        path2Points = path2Points + 1;
    }
    
    if(document.getElementById("1pathThree1st").checked){
        path3Points = path3Points + 4;
    }
    
    if(document.getElementById("1pathThree2nd").checked){
        path3Points = path3Points + 3;
    }
    
    if(document.getElementById("1pathThree3rd").checked){
        path3Points = path3Points + 2;
    }
    
    if(document.getElementById("1pathThree4th").checked){
        path3Points = path3Points + 1;
    }
    
    if(document.getElementById("1pathFour1st").checked){
        path4Points = path4Points + 4;
    }
    
    if(document.getElementById("1pathFour2nd").checked){
        path4Points = path4Points + 3;
    }
    
    if(document.getElementById("1pathFour3rd").checked){
        path4Points = path4Points + 2;
    }
    
    if (document.getElementById("1pathFour4th").checked){
        path4Points = path4Points + 1;
    }
}

function calculatePoints2(form){
    if(document.getElementById("2pathOne1st").checked){
        path1Points = path1Points + 4;
    }
    
    if(document.getElementById("2pathOne2nd").checked){
        path1Points = path1Points + 3;
    }
    
    if(document.getElementById("2pathOne3rd").checked){
        path1Points = path1Points + 2;
    }
    
    if(document.getElementById("2pathOne4th").checked){
        path1Points = path1Points + 1;
    }
    
    if(document.getElementById("2pathTwo1st").checked){
        path2Points = path2Points + 4;
    }
    
    if(document.getElementById("2pathTwo2nd").checked){
        path2Points = path2Points + 3;
    }
    
    if(document.getElementById("2pathTwo3rd").checked){
        path2Points = path2Points + 2;
    }
    
    if(document.getElementById("2pathTwo4th").checked){
        path2Points = path2Points + 1;
    }
    
    if(document.getElementById("2pathThree1st").checked){
        path3Points = path3Points + 4;
    }
    
    if(document.getElementById("2pathThree2nd").checked){
        path3Points = path3Points + 3;
    }
    
    if(document.getElementById("2pathThree3rd").checked){
        path3Points = path3Points + 2;
    }
    
    if(document.getElementById("2pathThree4th").checked){
        path3Points = path3Points + 1;
    }
    
    if(document.getElementById("2pathFour1st").checked){
        path4Points = path4Points + 4;
    }
    
    if(document.getElementById("2pathFour2nd").checked){
        path4Points = path4Points + 3;
    }
    
    if(document.getElementById("2pathFour3rd").checked){
        path4Points = path4Points + 2;
    }
    
    if (document.getElementById("2pathFour4th").checked){
        path4Points = path4Points + 1;
    }
}

function calculatePoints3(form){

    if(document.getElementById("3pathOne1st").checked){
        path1Points = path1Points + 4;
    }
    
    if(document.getElementById("3pathOne2nd").checked){
        path1Points = path1Points + 3;
    }
    
    if(document.getElementById("3pathOne3rd").checked){
        path1Points = path1Points + 2;
    }
    
    if(document.getElementById("3pathOne4th").checked){
        path1Points = path1Points + 1;
    }
    
    if(document.getElementById("3pathTwo1st").checked){
        path2Points = path2Points + 4;
    }
    
    if(document.getElementById("3pathTwo2nd").checked){
        path2Points = path2Points + 3;
    }
    
    if(document.getElementById("3pathTwo3rd").checked){
        path2Points = path2Points + 2;
    }
    
    if(document.getElementById("3pathTwo4th").checked){
        path2Points = path2Points + 1;
    }
    
    if(document.getElementById("3pathThree1st").checked){
        path3Points = path3Points + 4;
    }
    
    if(document.getElementById("3pathThree2nd").checked){
        path3Points = path3Points + 3;
    }
    
    if(document.getElementById("3pathThree3rd").checked){
        path3Points = path3Points + 2;
    }
    
    if(document.getElementById("3pathThree4th").checked){
        path3Points = path3Points + 1;
    }
    
    if(document.getElementById("3pathFour1st").checked){
        path4Points = path4Points + 4;
    }
    
    if(document.getElementById("3pathFour2nd").checked){
        path4Points = path4Points + 3;
    }
    
    if(document.getElementById("3pathFour3rd").checked){
        path4Points = path4Points + 2;
    }
    
    if (document.getElementById("3pathFour4th").checked){
        path4Points = path4Points + 1;
    }
}

function calculatePoints4(form){

    if(document.getElementById("4pathOne1st").checked){
        path1Points = path1Points + 4;
    }
    
    if(document.getElementById("4pathOne2nd").checked){
        path1Points = path1Points + 3;
    }
    
    if(document.getElementById("4pathOne3rd").checked){
        path1Points = path1Points + 2;
    }
    
    if(document.getElementById("4pathOne4th").checked){
        path1Points = path1Points + 1;
    }
    
    if(document.getElementById("4pathTwo1st").checked){
        path2Points = path2Points + 4;
    }
    
    if(document.getElementById("4pathTwo2nd").checked){
        path2Points = path2Points + 3;
    }
    
    if(document.getElementById("4pathTwo3rd").checked){
        path2Points = path2Points + 2;
    }
    
    if(document.getElementById("4pathTwo4th").checked){
        path2Points = path2Points + 1;
    }
    
    if(document.getElementById("4pathThree1st").checked){
        path3Points = path3Points + 4;
    }
    
    if(document.getElementById("4pathThree2nd").checked){
        path3Points = path3Points + 3;
    }
    
    if(document.getElementById("4pathThree3rd").checked){
        path3Points = path3Points + 2;
    }
    
    if(document.getElementById("4pathThree4th").checked){
        path3Points = path3Points + 1;
    }
    
    if(document.getElementById("4pathFour1st").checked){
        path4Points = path4Points + 4;
    }
    
    if(document.getElementById("4pathFour2nd").checked){
        path4Points = path4Points + 3;
    }
    
    if(document.getElementById("4pathFour3rd").checked){
        path4Points = path4Points + 2;
    }
    
    if (document.getElementById("4pathFour4th").checked){
        path4Points = path4Points + 1;
    }
}

function displayPoints(form){
    document.getElementById("path1points").innerText = path1Points + " points";
    document.getElementById("path2points").innerText = path2Points + " points";
    document.getElementById("path3points").innerText = path3Points + " points";
    document.getElementById("path4points").innerText = path4Points + " points";
}
