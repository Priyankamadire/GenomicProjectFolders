import React from 'react'
import { Outlet, Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <>
  
  <br />
  <br />
  <br />
  <img
    src="https://tse4.mm.bing.net/th?id=OIP.802L7Zq82yxrwPcuD9gOzAHaEc&pid=Api&P=0&h=180"
    style={{ float: "right", width: 500 }}
  />
  <strong className="text-light">
    <em>
      <p>
        The Genomic Interpreter project aims to develop a cutting-edge deep
        learning model that has the capability to{" "}
      </p>
      <p>
        accurately predict genomic assays, with a specific focus on the
        prediction of gene expression from given genomic sequences.
      </p>
      <p>
        Genomic assays are indispensable tools in genomics and molecular
        biology, playing a pivotal role in understanding gene
      </p>
      <p>
        regulation and uncovering the underlying mechanisms of various diseases.
        However, these assays are often resource-intensive, costly,
      </p>
      <p>
        and time-consuming to perform, which can be a significant bottleneck for
        researchers and clinicians seeking to gain insights into the
      </p>
      <p>genetic basis of health and disease.</p>
    </em>
  </strong>
</>

    </div>
  )
}

export default About
