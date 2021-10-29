import React, {useState} from "react";
import database from "../firebase"
import "../styles/companyPage.css"

const CompanyInfo = () => {
    const [companyName, setcompanyName] = useState(""); // Company Name
    const [companyLink, setCompanyLink] = useState(""); // Company Link
    const [positionType, setPositionType] = useState(""); // Category
    const [jobTitle, setJobTitle] = useState(""); // Job Posting
    const [jobLink, setJobLink] = useState(""); // Job Link
    const [alumni, setAlumni] = useState("N"); // Alumni
    const [location, setLocation] = useState(""); // Location
    const [date, setDate] = useState(""); // Date of last visit
    const [linkedin, setLinkedin] = useState(""); // Linkedin Link
    const [notes, setNotes] = useState(""); // notes
    
    const handleSubmit = (e) => {
        e.preventDefault();

        database.collection("value").add({
            companyName:companyName, 
            companyLink: companyLink,
            positionType:positionType,
            jobTitle:jobTitle,
            jobLink: jobLink,
            alumni:alumni,
            location: location,
            date: date,
            linkedin: linkedin,
            notes:notes
            
        })
        .then(() =>{
            // This is where I should put my snackbar
            alert("Sucess! Form processed.")
        })
        .catch(error => {
            alert("Failed: Form not successfully processes.")
            alert(error.message);
        });

        setcompanyName('');
        setCompanyLink('');
        setPositionType("");
        setJobTitle('');
        setJobLink('');
        setAlumni("N");
        setLocation('');
        setDate('');
        setNotes('');
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1>Add A New Company</h1>

            <label>Company Name</label>
            <input placeholder="company name" value={companyName} onChange={(e) => setcompanyName(e.target.value)}></input>

            <label>Company Link</label>
            <input placeholder="https://companyLink.com" value={companyLink} onChange={(e) => setCompanyLink(e.target.value)}></input>
            

            <label>Category</label>
            <select placeholder="select one" value={positionType} onChange={(e) => setPositionType(e.target.value)}>
                <option>Internship</option>
                <option>Full-time</option>
                <option>Post-align</option>
            </select>


            <label>Job Posting</label>
            <input placeholder="name" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}></input>
            <label>Job Link</label>
            <input placeholder="https://companyLink/careers" value={jobLink} onChange={(e) => setJobLink(e.target.value)}></input>

            <label>Alumni</label>
            <input placeholder="" value={alumni} onChange={(e) => setAlumni(e.target.value)}></input>

            <label>Location</label>
            <input placeholder="City, State" value={location} onChange={(e) => setLocation(e.target.value)}></input>

            <label>Date of Visit</label>
            <input placeholder="mm/dd/yyyy" value={date} onChange={(e) => setDate(e.target.value)}></input>

            <label>Linkedin Link</label>
            <input placeholder="https://Linkedin.com" value={linkedin} onChange={(e) => setLinkedin(e.target.value)}></input>

            <label>Notes</label>
            <textarea placeholder="message" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>

            <button type>Submit</button>
        </form> 
    );
}

export default CompanyInfo;