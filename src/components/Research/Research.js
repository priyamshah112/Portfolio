import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards"; // Reusing the same component
import researchImg from "../../Assets/research.webp"

function Research() {
  const researchPapers = [
    {
      title: "Self Driving RC Car Using Behavioral Cloning",
      description: "This paper presents the development of a self-driving RC car utilizing behavioral cloning techniques.",
      arxivLink: "https://arxiv.org/abs/1910.06734",
    },
    {
      title: "Decentralized Freelancing System-Trust and Transparency",
      description: "This study explores a decentralized system aimed at enhancing trust and transparency in freelancing.",
      arxivLink: "https://www.irjet.net/archives/V6/i9/IRJET-V6I929.pdf",
    },
    {
      title: "Survey the Storage Systems Used in HPC and BDA Ecosystems",
      description: "A comprehensive survey of storage systems employed in High-Performance Computing and Big Data Analytics ecosystems.",
      arxivLink: "https://arxiv.org/abs/2112.12142",
    },
    {
      title: "Autonomous Underwater Vehicle: Electronics and Software Implementation of the Proton AUV",
      description: "This paper details the electronics and software implementation of the Proton Autonomous Underwater Vehicle.",
      arxivLink: "https://arxiv.org/abs/1909.03472",
    },
    {
      title: "Sign Language Recognition Using Convolutional Neural Network",
      description: "The study focuses on recognizing sign language gestures using convolutional neural networks.",
      arxivLink: "https://link.springer.com/chapter/10.1007/978-981-16-0365-0_5",
    },
  ];

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Research</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few research papers I have authored or co-authored. For a complete list, visit my &nbsp;
          <a
            href="https://scholar.google.com/citations?user=PX8ctjwAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#c770f0", textDecoration: "underline" }}
          >
             Google Scholar profile
          </a>.          
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {researchPapers.map((paper, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={researchImg} // Add a generic research image
                title={paper.title}
                description={paper.description}
                arxivLink={paper.arxivLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Research;
