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

export default function ToDo({task, isDone, time="100"}) {
    if(isDone) {
        return <li>Done: {task} {time} min✅ </li>
    }
    // else {
    //     return <li>Pending: {task}⏳ </li>
    // }
    return <li>Pending: {task}⏳ </li>
}