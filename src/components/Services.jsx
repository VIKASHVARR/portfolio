import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    { title: "🚀 Full-Stack Development", desc: "Building robust back-end applications with Java Spring Boot and enhancing user interfaces with ReactJS for seamless user experiences." },
    { title: "🤖 AI & Search Optimization", desc: "Developing AI solutions using Retrieval-Augmented Generation (RAG) and vector databases to streamline knowledge retrieval and improve accuracy." },
    { title: "📦 Micro-Frontend Architecture", desc: "Designing modular architectures with React and Webpack Module Federation for scalable and maintainable applications." },
    { title: "🔧 System Design & Automation", desc: "Applying system design principles and automating tasks with schedulers and integrations for efficient operations." },
    { title: "👨‍💻 Mentoring & Leadership", desc: "Leading PoC initiatives, mentoring junior developers, and improving code quality through testing and best practices." },
    { title: "🔗 Third-Party Integrations", desc: "Integrated DocuSign and SIG APIs to streamline NDA signing and automate vendor risk assessments, enhancing workflow efficiency." }
  ];

  return (
    <section id="services">
        <div className="container">
            <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
            >
                Professional Summary
            </motion.h2>
            <motion.div 
                className="services-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                    visible: { transition: { staggerChildren: 0.1 } }
                }}
            >
                {services.map((service, idx) => (
                    <motion.div 
                        key={idx} 
                        className="service"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                        }}
                    >
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
  );
}
