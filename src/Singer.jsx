import './App.css'

export default function Singer ({singer}) {
    console.log(singer);
    return (
        <div className='singer'>
            <h3>Gayok: {singer.name} </h3>
            <p>Age: {singer.age} </p>
        </div>
    )
}

// export default function Singer ({singer}) {
//     return (
//         <div style={{
//             border: '2px solid olive',
//             borderRadius: '10px',
//             padding: '20px',
//             margin: '20px'
//         }}>
//             <h3>Gayok: {singer.name} </h3>
//             <p>Age: {singer.age} </p>
//         </div>
//     )
// }