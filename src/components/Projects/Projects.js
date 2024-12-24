import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import civilThumbnail from "../../Assets/Projects/civil.webp"
import claimchainThumbnail from "../../Assets/Projects/claimchain.png"
import hirechainThumbnail from "../../Assets/Projects/hirechain.webp"
import kjscecanteenThumbnail from "../../Assets/Projects/kjsce-canteen.webp"
import medicylThumbnail from "../../Assets/Projects/medicyl.png"
import newsThumbnail from "../../Assets/Projects/news.webp"
import ridexThumbnail from "../../Assets/Projects/ridex.png"
import tipsplitThumbnail from "../../Assets/Projects/tipsplit.webp"
import weatherThumbnail from "../../Assets/Projects/weather.webp"
import notesThumbnail from "../../Assets/Projects/notes.webp"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently. &nbsp;
          <a
            href="https://github.com/priyamshah112"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#c770f0", textDecoration: "underline" }}
          >
             Github
          </a> &nbsp;and&nbsp; 
          <a
            href="https://gitlab.com/Priyam112"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#c770f0", textDecoration: "underline" }}
          >
             Gitlab
          </a> &nbsp;
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ridexThumbnail}
              isBlog={false}
              title="RideX"
              description="A decentralized ride-hailing app leveraging Express.js, Solidity, and IPFS for pricing transparency and user privacy in a blockchain environment."
              ghLink="https://github.com/priyamshah112/ridex"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kjscecanteenThumbnail}
              isBlog={false}
              title="KJSCE Canteen System"
              description="A distributed Golang REST microservice that automated order processing, optimizing kitchen workflows, and reducing customer wait times by 42%."
              ghLink="https://apkpure.net/de/kjsce-canteen/com.canteenapp.canteen_app#google_vignette"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={claimchainThumbnail}
              isBlog={false}
              title="ClaimChain"
              description="A blockchain-based family tree application ensuring data integrity and security."
              ghLink="https://github.com/priyamshah112/ClaimChain"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medicylThumbnail}
              isBlog={false}
              title="Medicyl"
              description="A blockchain-based decentralized health record management system, providing patients with better access and control over their medical records."
              ghLink="https://github.com/priyamshah112/Medicyl"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hirechainThumbnail}
              isBlog={false}
              title="HireChain"
              description="A platform facilitating global job placements and freelance work, ensuring fairness and security through smart contracts."
              ghLink="https://github.com/priyamshah112/HireChain"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={civilThumbnail}
              isBlog={false}
              title="Civil Advocacy App"
              description="An app designed to empower users by providing easy access to advocacy tools and resources."
              ghLink="https://github.com/priyamshah112/civil-advocacy-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsThumbnail}
              isBlog={false}
              title="News App"
              description="A real-time news aggregation app built to keep users updated with the latest headlines from various sources."
              ghLink="https://github.com/priyamshah112/news-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherThumbnail}
              isBlog={false}
              title="Weather App"
              description="A user-friendly weather forecasting app providing accurate and up-to-date weather information."
              ghLink="https://github.com/priyamshah112/weather-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notesThumbnail}
              isBlog={false}
              title="Notes App"
              description="A simple and efficient note-taking application to organize and manage your ideas."
              ghLink="https://github.com/priyamshah112/notes-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tipsplitThumbnail}
              isBlog={false}
              title="Tip Split App"
              description="An app that helps users split tips among group members fairly and efficiently."
              ghLink="https://github.com/priyamshah112/Tip-Split-App"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
