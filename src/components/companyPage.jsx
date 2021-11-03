import React, {useState} from "react";
import database from "../firebase"
import "../styles/formStyles.css"

const CompanyInfo = () => {
    const [companyName, setCompanyName] = useState(""); // Company Name
    const [companyLink, setCompanyLink] = useState(""); // Company Link
    const [positionType, setPositionType] = useState(""); // Category
    // const [jobTitle, setJobTitle] = useState(""); // Job Posting
    const [careerPageLink, setCareerPageLink] = useState(""); // careerPage Link
    // const [alumni, setAlumni] = useState("N"); // Alumni
    // const [location, setLocation] = useState(""); // Location
    const [date, setDate] = useState(""); // Date of last visit
    // const [linkedin, setLinkedin] = useState(""); // Linkedin Link
    const [notes, setNotes] = useState(""); // notes

    const handleSubmit = (e) => {
        e.preventDefault();

        database.collection("value").add({
            companyName:companyName, 
            companyLink: companyLink,
            positionType:positionType,
            // jobTitle:jobTitle,
            careerPageLink: careerPageLink,
            // alumni:alumni,
            // location: location,
            date: date,
            // linkedin: linkedin,
            notes:notes
            
        })
        .then(() =>{
            console.log("THIS RAN1")
            // This is where I should put my snackbar
            alert("Sucess! Form processed.")
        })
        .catch(error => {
            console.log("THIS RAN2")
            alert(error.message);
        });

        setCompanyName('');
        setCompanyLink('');
        setPositionType("");
        // setJobTitle('');
        setCareerPageLink('');
        // setAlumni("N");
        // setLocation('');
        setDate('');
        setNotes('');
    };

    return(
        <form className="form" onSubmit={handleSubmit}>
           <h1>Add a New Company</h1>
           <div className="container">
                <label>Company Name</label>
                {/* May wnat to make this into a select when I get firebase company names */}
            
                <input placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />

                <label>Company Link</label>
                <input placeholder="https://CompanyHome.com" value={companyLink} onChange={(e) => setCompanyLink(e.target.value)} />

                <label>Category</label>
                <select placeholder="select one" value={positionType} onChange={(e) => setPositionType(e.target.value)}>
                    <option>Internship</option>
                    <option>Full-time</option>
                    <option>Post-align</option>
                </select>

                <label>Career Page Link</label>
                <input placeholder="https://Company/Careers.com" value={careerPageLink} onChange={(e) => setCareerPageLink(e.target.value)} />

                <label>Date of Visit</label>
                <input placeholder="mm/dd/yyyy" type="date" style={{fontFamily: "arial"}} value={date} onChange={(e) => setDate(e.target.value)}></input>

                <label>Notes</label>
                <input placeholder="message" type="text" style={{fontFamily: "arial"}} value={notes} onChange={(e) => setNotes(e.target.value)}></input>

                
            </div>

            <button>Submit</button>
        </form>
    )
}

export default CompanyInfo;