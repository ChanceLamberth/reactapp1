import React from "react";
import Container from 'react-bootstrap/Container'
import "../styles/contentPage.css"
import ContentTable from "../components/table";
import AppForm from "../components/form";

function HomePage() {
    return(
        <div>
            <Container className="">
                <p>Homepage content goes here</p>
                {/* <ContentTable/> */}
                <AppForm/>
            </Container>
            
        </div>
    )

}
export default HomePage;