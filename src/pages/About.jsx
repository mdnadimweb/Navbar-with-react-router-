
import React from "react";
import { useNavigate } from "react-router";


function About() {

        const navigate = useNavigate (); 

    return (  <>
    
    <h1>about page </h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cum quia optio exercitationem animi tenetur a laborum magnam eligendi omnis, blanditiis error, quibusdam sequi natus similique repudiandae debitis cumque necessitatibus! Nulla molestiae impedit accusamus, maxime voluptatum facere repellendus temporibus explicabo illo dolorem, unde autem incidunt enim itaque, ab officia sequi.</p>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, soluta. Tempora alias et similique voluptates assumenda id omnis doloremque quos consequuntur cumque! Assumenda corporis eius deleniti! Laboriosam odit quia ad et praesentium? Voluptas voluptatibus laboriosam, repudiandae repellendus maxime, omnis, beatae ex nisi magni doloremque ducimus! Fuga pariatur voluptates quisquam tenetur!</p>

<button onClick={()=>{ 

            navigate("/");
    
    }}
    
    
    >go to home </button>





    </>);
}

export default About;