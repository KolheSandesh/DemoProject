import ChildComponent from "./ChildComponent";
import ChildFunc from "./ChildFunc";


const ParentComponent = () => {


    const pData = "data from parent"
    const cToPFun1 = (e) => {
        console.log(e);
    }


    return ( <>

    <h1>parent component</h1>

    <ChildComponent
    
    cToPFun = {()=> { cToPFun1(); }}
    />
    
    {/* <ChildFunc
    cToPFun = {()=> { cToPFun1(); }}
        
    /> */}
    
    </>  )
}
export default ParentComponent;