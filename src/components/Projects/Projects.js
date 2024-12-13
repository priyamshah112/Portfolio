import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/assets/hotanalytics.png"
              isBlog={false}
              title="Hotanalytics.ai"
              description="An advanced analytics platform on GCP leveraging multi-LLM and ML models (e.g., Llama 3.1, Vertex AI) with a hybrid Knowledge Graph and RAG solution, achieving 83% query accuracy for enterprise-level data analysis."
              ghLink="https://github.com/priyamshah112/hotanalytics"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/assets/ridex.png"
              isBlog={false}
              title="RideX"
              description="A decentralized ride-hailing app leveraging Express.js, Solidity, and IPFS for pricing transparency and user privacy in a blockchain environment."
              ghLink="https://github.com/priyamshah112/ridex"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/assets/kjsce-canteen.png"
              isBlog={false}
              title="KJSCE Canteen System"
              description="A distributed Golang REST microservice that automated order processing, optimizing kitchen workflows, and reducing customer wait times by 42%."
              ghLink="https://github.com/priyamshah112/kjsce-canteen"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/assets/mental-health-bot.png"
              isBlog={false}
              title="AI Mental Health Bot"
              description="An AI-driven bot using OpenAI and Botpress for mental health support, automating lead qualification and boosting engagement by 42%."
              ghLink="https://github.com/priyamshah112/mental-health-bot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/assets/analytics-alerts.png"
              isBlog={false}
              title="Analytics Alert System"
              description="Automated critical campaign metric alerts and root-cause analysis for 700+ tracking sources, saving marketing analysts over 4 hours daily."
              ghLink="https://github.com/priyamshah112/analytics-alerts"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/assets/rust-transcription.png"
              isBlog={false}
              title="Asynchronous Transcription Service"
              description="A high-performance Rust-based transcription service leveraging Redis Cluster, AlloyDB, and Kubernetes, achieving a 99.99% SLA."
              ghLink="https://github.com/priyamshah112/transcription-service"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/assets/claimchain.png"
              isBlog={false}
              title="ClaimChain"
              description="A blockchain-based family tree application ensuring data integrity and security."
              ghLink="https://github.com/priyamshah112/ClaimChain"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/assets/fakenews.png"
              isBlog={false}
              title="Fake-News Suspector"
              description="A tool designed to detect and analyze fake news using machine learning techniques."
              ghLink="https://github.com/priyamshah112/Fake-News-Suspector"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/assets/medicyl.png"
              isBlog={false}
              title="Medicyl"
              description="A blockchain-based decentralized health record management system, providing patients with better access and control over their medical records."
              ghLink="https://github.com/priyamshah112/Medicyl"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/assets/billprint.png"
              isBlog={false}
              title="Bill-Print-Format"
              description="An invoice format developed using HTML, CSS, and JavaScript, with a desktop version built on Electron.js for cross-platform compatibility."
              ghLink="https://github.com/priyamshah112/Bill-Print-Format"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/assets/decency.png"
              isBlog={false}
              title="Decency"
              description="An open-source decency checker to analyze and sanitize text content using NLP techniques."
              ghLink="https://github.com/priyamshah112/Decency"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/assets/hirechain.png"
              isBlog={false}
              title="HireChain"
              description="A platform facilitating global job placements and freelance work, ensuring fairness and security through smart contracts."
              ghLink="https://github.com/priyamshah112/HireChain"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
