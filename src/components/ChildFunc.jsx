function ChildFunc(props){

const data = "from child"


return(
    <div>
    
    {/* <button onClick={props.cToPFun(data)} />click</button>     */}

    <button onClick={props.cToPFun(data)} >click</button>
    </div>
  
)

}
export default ChildFunc;