

export default function Comp(props)
{
    // const da = props.data
    // console.log(props.id)
    const id = props.id
    const data = props.data
    // console.log(data.id.title)
    return (
        <>
                    <h1 className="destinatin--section--title">{data[id].title}</h1>
                    <p className="destination--section--detail">{data[id].par}</p>
                    <hr className="hr"/>
                    <div className="destination--info">
                        <div>
                            <p className="destination-info--p">AVG. DISTANCE</p>
                            <h1 className="destinationn--info--h1">{data[id].dist}</h1>
                        </div>

                        <div>
                            <p>AVG. DISTANCE</p>
                            <h1>{data[id].time}</h1>
                        </div>
                    </div>
        </>
    )
}