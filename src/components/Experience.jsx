export default function Experience() {
  return (
    <section id="experience">
        <div className="container">
            <h2>Experience</h2>
            <div className="experience-item">
                <h3>Associate Software Engineer</h3>
                <p>RESPONSIVE | Jul 2024 – Present</p>
                <ul>
                    <li>Micro-Frontend Architecture: Designed and maintained a robust architecture using React and Webpack Module Federation, enabling modular development and significantly reducing deployment time.</li>
                    <li>AI & Search Optimization: Developed an AI Agent for automated profile building using Solr’s semantic and vector search (RAG), enhancing result accuracy and retrieval efficiency.</li>
                    <li>Code Quality: Improved JUnit test coverage for the Profile Center from ~40% to ~90%, drastically increasing system maintainability.</li>
                    <li>Third-Party Integrations: Integrated DocuSign and SIG APIs into the Profile Center to streamline NDA signing and automate vendor risk assessments.</li>
                    <li>Feature Development: Embedded GrapesJS with React to enable dynamic website template creation and implemented Quartz Scheduler to automate periodic system tasks.</li>
                    <li>Leadership: Led PoC initiatives (SSR, API integrations) and mentored junior developers on engineering best practices.</li>
                </ul>
            </div>
            <div className="experience-item">
                <h3>Software Engineer Intern</h3>
                <p>RESPONSIVE | Jul 2023 – Jul 2024</p>
                <ul>
                    <li>Database Solutions: Implemented scalable solutions using MongoDB Vector for efficient AI model data storage and retrieval.</li>
                    <li>Backend Automation: Built Spring Batch jobs for secure user account deletions and bulk document downloads, ensuring reliability through polling mechanisms.</li>
                    <li>Full-Stack Development: Contributed to the Profile Center redesign using React and TypeScript, improving user accessibility by 20% and optimizing backend aggregation pipelines.</li>
                    <li>System Design: Applied high-level system design skills to approach diverse business problems, focusing on scalability and performance.</li>
                </ul>
            </div>
        </div>
    </section>
  );
}
