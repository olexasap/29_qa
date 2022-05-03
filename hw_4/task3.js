const enterprises = [
    {
        id: 1,
        name: "Предприятие 1",
        departments: [
            {
                id: 2,
                name: "Отдел тестирования",
                employees_count: 10,
            },
            {
                id: 3,
                name: "Отдел маркетинга",
                employees_count: 20,
            },
            {
                id: 4,
                name: "Администрация",
                employees_count: 15,
            },
        ]
    },
    {
        id: 5,
        name: "Предприятие 2",
        departments: [
            {
                id: 6,
                name: "Отдел разработки",
                employees_count: 50,
            },
            {
                id: 7,
                name: "Отдел маркетинга",
                employees_count: 20,
            },
            {
                id: 8,
                name: "Отдел охраны труда",
                employees_count: 5,
            },
        ]
    },
    {
        id: 9,
        name: "Предприятие 3",
        departments: [
            {
                id: 10,
                name: "Отдел аналитики",
                employees_count: 0,
            },
        ]
    }
]

//variables

let company;
let deptsName = [], deptsEmp = [];
function getLastId() {
    let lastId = 0;
    for (let i=0; i < enterprises.length; i++) {
        enterprises[i].departments.forEach(item => {
            if (item.id > lastId) {
                lastId = item.id;
            }
        })
        if (enterprises[i].id > lastId) {
            lastId = enterprises[i].id;
        }
    }
    return lastId;
}
function entIndexSearch(entId){
    return enterprises.findIndex(item => item.id === entId);
}
function depIndexSearch(depId) {
    for (let i=0; i < enterprises.length; i++) {
        for (let j=0; j < enterprises[i].departments.length; j++) {
            if (enterprises[i].departments[j].id === depId) {
                let index = [i, j];
                return index;
            }
        }
    }
}

//variables for html
const aside = document.querySelector(".aside");
const task3_2 = document.querySelector(".task3_2");
const task3_8 = document.querySelector(".task3_8");
const task3_9 = document.querySelector(".task3_9");

// 1st

function printList() {
    aside.innerHTML = '';
    for (let i = 0; i < enterprises.length; i++) {
        company = enterprises[i].name;
        for (let j = 0; j < enterprises[i].departments.length; j++) {
            deptsName[j] = enterprises[i].departments[j].name;
            deptsEmp[j] = enterprises[i].departments[j].employees_count;
        }
        if (deptsEmp.reduce((a, b) => a + b) === 0) {
            aside.innerHTML += "<b>" + company + " (нет сотрудников) id: " + enterprises[i].id + "</b><br/>";
        } else {
            aside.innerHTML += "<b>" + company + ' (' + deptsEmp.reduce((a, b) => a + b) + ' сотрудников) id: ' + enterprises[i].id + "</b><br/>";
        }
        for (let j = 0; j < enterprises[i].departments.length; j++) {
            if (deptsName[j] == undefined) {
                aside.innerHTML += '';
            }
            else if (deptsEmp[j] === 0) {
                aside.innerHTML += '- ' + deptsName[j] + ' (нет сотрудников) id: ' + enterprises[i].departments[j].id + "<br/>";
            } else {
                aside.innerHTML += '- ' + deptsName[j] + ' (' + deptsEmp[j] + ' сотрудников) id: ' + enterprises[i].departments[j].id + "<br/>";
            }
        }
        deptsEmp = [];
    }
}
printList();

// 2nd

function getEnterpriseName(value) {
    task3_2.innerHTML = '';
    for (let i=0; i < enterprises.length; i++) {
        enterprises[i].departments.forEach(item => {
            if (item.name === value || item.id === +value) {
            task3_2.innerHTML += enterprises[i].name + "<br/>";
            }
        })
    }
}

// 3rd

function addEnterprise(value) {
    enterprises.push({id: getLastId() + 1, name: value, departments: [{employees_count: 0,}]});
    printList();
}

//4th

function addDepartment(id, value) {
    enterprises[entIndexSearch(+id)].departments.push({id: getLastId() + 1, name: value, employees_count: 0,});
    printList();
}

// 5th

function editEnterprise(id, value) {
    enterprises[entIndexSearch(+id)].name = value;
    printList();
}

//6th

function editDepartment(id, value) {
    let index = depIndexSearch(+id);
    enterprises[index[0]].departments[index[1]].name = value;
    printList();
}

//7th

function deleteEnterprise(id) {
    enterprises.splice(entIndexSearch(+id), 1);
    printList();
}

//8th

function deleteDepartment(id) {
    task3_8.innerHTML = '';
    let index = depIndexSearch(+id);
    if (enterprises[index[0]].departments[index[1]].employees_count <= 0 ) {
        if (enterprises[index[0]].departments.length > 1) {
            enterprises[index[0]].departments.splice(index[1], 1);
        }
        else {
            enterprises[index[0]].departments[index[1]].name = undefined;
        }
    }
    else {
        task3_8.innerHTML += 'В отделе есть сотрудники';
    }
    printList();
}

//9th

function moveEmployees(fromDep, toDep) {
    task3_8.innerHTML = '';
    let fromInd = depIndexSearch(+fromDep);
    let toInd = depIndexSearch(+toDep);
    if (fromInd[0] != toInd[0]) {
        task3_9.innerHTML += 'Перемещаем только в рамках одного предприятия';
    }
    else {
        enterprises[fromInd[0]].departments[toInd[1]].employees_count += enterprises[fromInd[0]].departments[fromInd[1]].employees_count;
        enterprises[fromInd[0]].departments[fromInd[1]].employees_count = 0;
    }
    printList();
}