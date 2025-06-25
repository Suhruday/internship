import {React,useState} from "react";
function Image(){

const [file,setFile]=useState(null);

const uploadFile = async(event)=>{
    event.preventDefault();
    const data = new FormData();
    data.append("file",file);

   const res = await fetch("http://localhost:4000/uploadfile",{
        method:'POST',
        body :data,
    })
    alert("hi");
    const msg=await res.text();
    alert("server Respone: "+msg);
}

    return(
        <div>
            <form onSubmit={uploadFile}>
            uploadimage<input type="file" accept="image"  onChange={(e)=>setFile(e.target.files[0])}></input>
            <input type="submit" value="submit"></input>
            </form>
        </div>
    );
}
export default Image;