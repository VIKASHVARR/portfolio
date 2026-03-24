import { motion } from 'framer-motion';

export default function Portfolio() {
  const projects = [
    {
      img: "https://via.placeholder.com/300x200",
      title: "DevSecOps Pipeline – Netflix Clone on Kubernetes",
      desc: "Designed and implemented an end-to-end DevSecOps pipeline to deploy a containerized Netflix-style application on Kubernetes. The pipeline automated build, test, security scanning, and deployment using Jenkins, Docker, Trivy, and SonarQube, with monitoring and observability enabled through Prometheus and Grafana to ensure secure, scalable, and reliable application delivery.",
      link: "https://github.com/example/repo",
      linkText: "↗ GitHub"
    },
    {
      img: "https://via.placeholder.com/300x200",
      title: "AWS Certified Solutions Architect",
      desc: "Associate Level Certification.",
      link: "https://www.credly.com/badges/example",
      linkText: "↗ Certificate"
    },
    {
      img: "https://via.placeholder.com/300x200",
      title: "AWS Lambda - KodeKloud",
      desc: "AWS Lambda Certification.",
      link: "https://learn.kodekloud.com/certificate/example",
      linkText: "↗ Certificate"
    }
  ];

  return (
    <section id="portfolio">
        <div className="container">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
            >
                Portfolio
            </motion.h2>
            <motion.div 
                className="portfolio-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    visible: { transition: { staggerChildren: 0.2 } }
                }}
            >
                {projects.map((proj, idx) => (
                    <motion.div 
                        key={idx} 
                        className="project"
                        variants={{
                            hidden: { opacity: 0, scale: 0.9, y: 40 },
                            visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                        }}
                    >
                        <div style={{ overflow: "hidden", borderRadius: "10px", marginBottom: "1rem" }}>
                            <motion.img 
                                src={proj.img} 
                                alt={proj.title} 
                                style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }}
                                variants={{
                                    hidden: { scale: 1.2 },
                                    visible: { scale: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                                }}
                            />
                        </div>
                        <h3>{proj.title}</h3>
                        <p>{proj.desc}</p>
                        <a href={proj.link} target="_blank" rel="noopener noreferrer">{proj.linkText}</a>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
  );
}
