
const Welcome = () => {

    return (
        <div className='main container'>
            <ul>{Array.from(Array(100), (e, i) => {
                return <li key={i}>{i}</li>
            })}</ul>
        </div>
    )
}

export default Welcome;