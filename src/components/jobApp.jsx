import React, {useState} from "react";
import database from "../firebase";

function Application() {
    const [companyName, setCompanyName] = useState("");
    const [positionTitle, setPositionTitle] = useState("");
    const [dateApplied, setDateApplied] = useState("");
    const [positionType, setPositionType] = useState("none");

    const handleSubmit = (e) => {
        e.preventDefault();

        database.collection("application").add({
            companyName:companyName,
            positionTitle: positionTitle,
            dateApplied: dateApplied,
            positionType: positionType
            
        })
        .then(() =>{
            // console.log("THIS RAN1")
            // This is where I should put my snackbar
            alert("Sucess! Form processed.")
        })
        .catch(error => {
            // console.log("THIS RAN2")
            alert("Failed: Form not successfully processes.")
            alert(error.message);
        });

        setCompanyName('');
        setPositionTitle('');
        setDateApplied('');
        setPositionTitle('');
    };

    return(
        <form className="form" onSubmit={handleSubmit}>
           <h1>Add a new application</h1>
           <div className="container">
                <label>Company Name</label>
                {/* May wnat to make this into a select when I get firebase company names */}
            
                <input placeholder="Company Name" vlaue={companyName} onChange={(e) => setCompanyName(e.target.value)} />

                <label>Position</label>
                <input placeholder="Software Engineer" vlaue={positionTitle} onChange={(e) => setPositionTitle(e.target.value)} />

                <label>Date of Visit</label>
                <input placeholder="mm/dd/yyyy" type="date" style={{fontFamily: "arial"}} value={dateApplied} onChange={(e) => setDateApplied(e.target.value)}></input>

                <label>Category</label>
                <select placeholder="select one" value={positionType} onChange={(e) => setPositionType(e.target.value)}>
                    <option>Internship</option>
                    <option>Full-time</option>
                    <option>Post-align</option>
                </select>
            </div>

            <button type>Submit</button>
        </form>
    )

}
export default Application