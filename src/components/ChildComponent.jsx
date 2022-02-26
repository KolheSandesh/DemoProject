const ChildComponent = (cToPFun) => {
    // const data = props.pdataa
    const data = "data"

    const data2 = "data from child" 

    const func1 = async () =>{
        cToPFun(data2);
    }

    return ( <>
    <h3>child comp</h3>
    <br></br>

    <h3>{data}</h3>
    <button onClick={func1} >click</button>
    
    
    </> )
}
export default ChildComponent;