const students = [
    {
        name:"shan",
        regNo : 22,  
        courses:["c","c++","java"]
    },
    {
        name:"vel",
        regNo : 24,
        courses:["html","css"]
    },
    {
        name:"Sara",
        regNo : 19,
        courses:["JS","TS","angularjs"]
    }
]

const studentsDiv = document.getElementById('id')
for(var i=0; i<students.length; i++){
    const mainDiv =document.createElement('div');
    mainDiv.classList.add('card','mt-3','col-3','mx-auto');
    
    const nameElem = document.createElement('h2');
    nameElem.classList.add('text-center');
    const nameTitle = document.createElement('h1');
    nameTitle.classList.add('text-center')
    nameTitle.innerText = "Name";
    
    const regNo = document.createElement('h2');
    
    nameElem.innerText = students[i].name;
    regNo.textContent = students[i].regNo;
    mainDiv.appendChild(nameTitle)
    mainDiv.appendChild(nameElem);
    mainDiv.appendChild(regNo);
    studentsDiv.appendChild(mainDiv);
    const courses= students[i].courses;
    const ulElem =document.createElement('ul');
    //Looping courses
    for(var j=0; j<courses.length ; j++){
        const liElem = document.createElement('li');
        liElem.textContent= courses[j];
        ulElem.appendChild(liElem);
    }
    mainDiv.appendChild(ulElem);
}
/*
<div id = "thing">
</div>

thing.appendChild(h1);
<div id="thing">
<h1> </h1>.texContent ="b"
<h1> b </h1>
</div>
["Biology","Chemistry","Math"]

<ul>
<li> Biology</li>
....
....
...
</ul>
*/