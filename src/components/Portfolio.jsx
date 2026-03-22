export default function Portfolio() {
  return (
    <section id="portfolio">
        <div className="container">
            <h2>Portfolio</h2>
            <div className="portfolio-grid">
                <div className="project">
                    <img src="https://via.placeholder.com/300x200" alt="Project 1" />
                    <h3>DevSecOps Pipeline – Netflix Clone on Kubernetes</h3>
                    <p>Designed and implemented an end-to-end DevSecOps pipeline to deploy a containerized Netflix-style application on Kubernetes. The pipeline automated build, test, security scanning, and deployment using Jenkins, Docker, Trivy, and SonarQube, with monitoring and observability enabled through Prometheus and Grafana to ensure secure, scalable, and reliable application delivery.</p>
                    <a href="https://github.com/example/repo" target="_blank" rel="noopener noreferrer">↗ GitHub</a>
                </div>
                <div className="project">
                    <img src="https://via.placeholder.com/300x200" alt="AWS Certified" />
                    <h3>AWS Certified Solutions Architect</h3>
                    <p>Associate Level Certification.</p>
                    <a href="https://www.credly.com/badges/example" target="_blank" rel="noopener noreferrer">↗ Certificate</a>
                </div>
                <div className="project">
                    <img src="https://via.placeholder.com/300x200" alt="AWS Lambda" />
                    <h3>AWS Lambda - KodeKloud</h3>
                    <p>AWS Lambda Certification.</p>
                    <a href="https://learn.kodekloud.com/certificate/example" target="_blank" rel="noopener noreferrer">↗ Certificate</a>
                </div>
            </div>
        </div>
    </section>
  );
}
