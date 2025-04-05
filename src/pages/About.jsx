import React from "react";
import { useNavigate } from "react-router";
import person from "./data";

function About() {
  const navigate = useNavigate();

  return (
    <>
        <div className="head">
        <h1>about page </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cum
        quia optio exercitationem animi tenetur a laborum magnam eligendi omnis,
        blanditiis error, quibusdam sequi natus similique repudiandae debitis
        cumque necessitatibus! Nulla molestiae impedit accusamus, maxime
        voluptatum facere repellendus temporibus explicabo illo dolorem, unde
        autem incidunt enim itaque, ab officia sequi.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        soluta. Tempora alias et similique voluptates assumenda id omnis
        doloremque quos consequuntur cumque! Assumenda corporis eius deleniti!
        Laboriosam odit quia ad et praesentium? Voluptas voluptatibus
        laboriosam, repudiandae repellendus maxime, omnis, beatae ex nisi magni
        doloremque ducimus! Fuga pariatur voluptates quisquam tenetur!
      </p>
        </div>

            <div className="card">

                {person.map((person,)=>(
                    <div key={person.id } className="sub_card">
                        <h1>{person.name}</h1>
                        <h1>age: {person.age}</h1>
                        <h3>job: {person.job}</h3>
                        <p>{person.desc}</p>
                    </div>
                ))}



            </div>


      <button className="button"
        onClick={() => {
          navigate("/");
        }}
      >
        go to home{" "}
      </button>
    </>
  );
}

export default About;
