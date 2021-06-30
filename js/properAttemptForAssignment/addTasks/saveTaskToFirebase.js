import { displayTasks, todos } from "../showTasks/displayTodos";
import { createTask } from "./createTaskUsingFactory";

let db = firebase.firestore();
export let addTasksInFirestore = taskObj => {
    let {title,createdDate,dueDate,priority, note} = taskObj;
    let data = {createdDate, dueDate, priority, note}
    // console.log(title,createdDate,dueDate,priority, note);
    db.collection('allTodos').doc(title).set(data).then(()=>console.log("success!!")).catch(err=>console.log('error!!', err));
}

export let updateTaskInFirestore = (docName, prop) => {
    db.collection('allTodos').doc(docName).update(prop).then(()=>console.log("updated!!")).catch(err=>console.log('error!!', err));
}

export let convertFirestoreDataIntoDomElements = (todoObj, docName) => {
    let {title,createdDate,dueDate,priority, note} = todoObj;
    let makeObject = createTask(title=docName, createdDate, dueDate, priority, note);
    
    todos.push(makeObject);
    displayTasks(makeObject.domElem);
}



























/**
 * 
 * 
 // let includeTasksProjectNamesIfAny = (taskDomNodeID, projectName) => {
//     // let taskNode = document.querySelector(`"#${taskDomNodeID}"`);
//     let taskNode = document.getElementById(taskDomNodeID);
//     // console.log(taskNode);
//     // let id = taskDomNodeID.split('-')[2];
//     // let findProjectDropdownDiv = taskNode.querySelector('.choose-project');
//     // if(findProjectDropdownDiv.id)
//     // console.log(findProjectDropdownDiv, "<><>");

//     let findProjectDropdownDiv = taskNode.querySelector('.choose-project');
//     // findProjectDropdownDiv.value = projectName;
//     if(findProjectDropdownDiv.id.includes(taskDomNodeID.split('-')[2])) findProjectDropdownDiv.value = projectName;
//     console.log(projectName, findProjectDropdownDiv.id);
// }

// export let includeTasksProjectNamesIntoDOM = (docName, projectName, distinguishableID) => {
//     let projectDiv = document.querySelector('.choose-project');
//     projectDiv.value = projectName;

//     let taskIdentifier = document.querySelector('.task-text').textContent;
//     if(taskIdentifier == docName) {
//         // console.log(docName, taskIdentifier, "here!!!!", distinguishableID)
//         projectDiv.value = projectName;
//     }
// }
 *
 *  
// firebase app is always a required import
// import firebase from "firebase/app";
// let firebase = require("firebase");
// for analytics
// import "firebase/analytics";
// firebase products in use for project
// import "firebase/auth";
// import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyC7pRxD7iUpgQJ3jQvrHzU8cudJ65LbTP8",
//     authDomain: "todoapp-7412f.firebaseapp.com",
//     projectId: "todoapp-7412f",
//     storageBucket: "todoapp-7412f.appspot.com",
//     messagingSenderId: "839524545719",
//     appId: "1:839524545719:web:dacd8a6460d2f6ffb98932",
//     measurementId: "G-2RQRGGJMB8"
// };

// firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export let testFirestore = () => {
    
    // console.log(db, "here!!");
    let collection = db.collection('todosList');
    
    // with add documents are generated with an ID
    collection.add({name: "test", text: "test test"})
    .then(docRef => console.log('document ID', docRef.id))
    .catch(err=>console.log('error in adding document', err));

    // when specifying docujment name instead of firestore generated ID, we can use set() instead of add()
    db.collection('todosList').doc('withName').set({name: "test2", text: "test2 test2"})
    .then(docRef => console.log('document ID', docRef))
    .catch(err=>console.log('error in adding document', err));
}

export let readData = () => {
    db.collection('todosList').get()
    .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            // console.log(`document ID ${doc.id} and Name "${doc.data().name}" test text "${doc.data().text}" entire object${doc.data()}`)
            // console.log(doc.data(), doc.data().name, doc.data().text)
            if(doc.data().name == 'test') {
                console.log(doc.data())
            }
            if(doc.data().name == 'test2') {
                console.log(doc.data())
            }
        })
    })
}

export let localChanges = () => {
    db.collection('todosList').doc('withName').onSnapshot(doc => {
        let source = doc.metadata.hasPenfingWrites ? "local" : 'server'
        console.log(doc.data(), source);
    })
}

let nameRef = db.collection('todosList');

export let simpleQueries = () => { 
    // let names = nameRef.where('name', '==', true);
    // let names = nameRef.where('name', '==', "true");
    let names = nameRef.where('name', '==', "test2");
    console.log(names, "?!");
    
    nameRef.where('text', '==', 'test2 test2').get()
    .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            console.log(doc.data(), 'from query')
        })
    })

    // nameRef.doc('withName').where('name', '==', true).get()
    // .then(querySnapshot => {
    //     querySnapshot.forEach(doc => console.log(doc.data(), 'query to a document'))
    // })
}

// to update some fields of a document without overwriting entire document, we can use update()
export let updateDocument = () => {
    return nameRef.doc('withName').update({
        name: 'updatedName'
    }).then(() => console.log('document updated'))
    .catch(err => console.log('error while updating document', err))
}

export let deleteDocument = () => {
    db.collection('todosList').doc('withName').delete().then(()=>console.log('success!!')).catch(err=>console.log('error!!'));
    // db.collection('todosList').get().then(snpashot=> {
    //     console.log(snpashot, "<>")
    //     // snpashot.delete();
    //     snpashot.doc(0).delete();
    // }).then(()=>console.log('success!!')).catch(err=>console.log('error!!'))
    // db.collection('todosList').delete().then(()=>console.log('success!!')).catch(err=>console.log('error!!'))
    // db.collection('todosList').doc([...arguments]).forEach((doc, idx) => {
    //     if(idx<6) {
    //         doc.delete();
    //     }
    // })
}
*/