// export default function ToDo({task, isDone}) {
//     return(
//         <li>Task: {task} {isDone} </li>
//     )
// }

// export default function ToDo({ task, isDone }) {
//   return (
//     <li>
//       Task: {task} — {isDone ? "✅ Done" : "❌ Not Done"}
//     </li>
//   );
// }

// export default function ToDo({task, isDone}) {
//    if (isDone) {
//     return <li>{task} ✅</li>
//    }
//    else {
//     return <li>{task} ❌</li>
//    }
// }

// export default function ToDo({task, isDone, time="100"}) {
//     if(isDone) {
//         return <li>Done: {task} {time} min✅ </li>
//     }
//     // else {
//     //     return <li>Pending: {task}⏳ </li>
//     // }
//     return <li>Pending: {task}⏳ </li>
// }

// conditional rendering: 3 ternary
// condition ? true : false

// export default function ToDo({task, isDone, time=0}) {
//     return isDone ? <li>Done: {task} time: {time} </li> : <li>Not Done: {task} </li>
    
// }

// conditional rendering: 4 &&
// export default function ToDo({task, isDone, time=0}) {
//     return isDone && <li>Done Task: {task} time: {time} </li>
// }

// conditional rendering: 5 ||
// export default function ToDo({task, isDone, time=0}) {
//     return isDone || <li> Not Done Task: {task} time: {time} </li>
// }

// export default function ToDo({task, isDone}) {
//    if (isDone) {
//     return null
//    }
//    else {
//     return <li>{task}</li>
//    }
// }


// conditional rendering: 6 variable
// export default function ToDo({task, isDone, time}) {

//     const displayTime = time ? time : 70;
//     let listItem;

//    if (isDone) {
//     listItem = <li>Task: {task} <br/> Time: {displayTime} ✅</li>
//    }
//    else {
//     listItem = <li>{task} ❌</li>
//    }

//    return listItem
// }

export default function ToDo({task, isDone, time}) {

    // const displayTime = time ? time : 70;
    let listItem;

   if (isDone) {
    listItem = <li>Task: {task} <br/> Time: {time ? 'I am done' : 'Not done yet'} ✅</li>
   }
   else {
    listItem = <li>{task} ❌</li>
   }

   return listItem
}
