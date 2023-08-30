export default function CrewComponent(props){
    const data = props.data
    const id = props.id
    console.log(data)
    return (
        <div className="crew--section">
            <h4 className="crew--section--title">{data[id].title}</h4>
            <h1 className="crew--section--name">{data[id].name}</h1>
            <p className="crew--section--detail">{data[id].descr}</p>
        </div>
    )
}