export default function TechnoComponent(props){
    console.log(props.id)
    const id = props.id
    const data = props.data
    return(
        <div className="technology--section">
            {/* <img src="../public/crew/li.svg" /> */}
            <h4 className="technology--section--title">{data[id].title}</h4>
            <h1 className="technology--section--name">{data[id].type}</h1>
            <p className="technology--section--detail">{data[id].descr}</p>
        </div>
    )
}