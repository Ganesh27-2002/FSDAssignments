const Courses = () => (
  <div className="container my-5">
    <h1 className="text-center my-5">Our Courses</h1>

    <div className="d-flex flex-wrap justify-content-center" style={{ gap: "20px" }}>
      
      <div className="card p-3 flex-grow-1" style={{ minWidth: "300px", maxWidth: "400px", flexBasis: "calc(33.333% - 20px)" }}>
        <img className="card-img-top" src="https://www.innomatics.in/wp-content/uploads/2023/01/No-1-best-data-science-course-training-institute-in-hyderabad.jpg" alt="Data Science" />
        <h2>Data Science</h2>
        <p>This course is perfect for aspiring data scientists, tech enthusiasts, and working professionals. You'll master data analysis, machine learning, and the foundations of AI to prepare for a data-driven future.</p>
        <h4>Syllabus:</h4>
        <ul>
          <li>Introduction to Data Science</li>
          <li>Python for Data Science</li>
          <li>Statistics and Probability</li>
          <li>Data Wrangling and Visualization</li>
          <li>Machine Learning Algorithms</li>
          <li>Deep Learning with TensorFlow</li>
          <li>Capstone Project</li>
        </ul>
        <a className="btn btn-primary">Enroll Now</a>
      </div>

      <div className="card p-3 flex-grow-1" style={{ minWidth: "300px", maxWidth: "400px", flexBasis: "calc(33.333% - 20px)" }}>
        <img className="card-img-top" src="https://www.innomatics.in/wp-content/uploads/2023/01/Full-Stack-Web-Development-training-program-Innomatics-research-labs-india.png" alt="Full Stack Development" />
        <h2>Full Stack Development</h2>
        <p>This course provides a comprehensive overview of both frontend and backend development. Learn the skills required to build modern web applications and become a proficient full-stack developer.</p>
        <h4>Syllabus:</h4>
        <ul>
          <li>HTML, CSS, JavaScript Fundamentals</li>
          <li>Responsive Web Design with Bootstrap</li>
          <li>React.js and Frontend Frameworks</li>
          <li>Node.js and Express.js for Backend</li>
          <li>Database Management with MongoDB</li>
          <li>Version Control with Git & GitHub</li>
          <li>Final Project: Build a Full-Stack Web Application</li>
        </ul>
        <a className="btn btn-primary">Enroll Now</a>
      </div>

      <div className="card p-3 flex-grow-1" style={{ minWidth: "300px", maxWidth: "400px", flexBasis: "calc(33.333% - 20px)" }}>
        <img className="card-img-top" src="https://www.innomatics.in/wp-content/uploads/2023/01/AWS-training-institute-Innomatics-research-labs-Kukatpallihyderabad.jpg" alt="Amazon Web Services (AWS)" />
        <h2>Amazon Web Services (AWS)</h2>
        <p>Designed for cloud computing enthusiasts, this course helps you master AWS, the world’s most popular cloud platform. Gain the skills needed to manage AWS infrastructure and prepare for AWS certification exams.</p>
        <h4>Syllabus:</h4>
        <ul>
          <li>Introduction to Cloud Computing and AWS</li>
          <li>AWS Services Overview (EC2, S3, RDS, Lambda, etc.)</li>
          <li>Networking and Security in AWS</li>
          <li>Deploying and Managing Applications</li>
          <li>Scaling and Monitoring AWS Resources</li>
          <li>Serverless Architecture with AWS Lambda</li>
          <li>AWS Certification Preparation</li>
        </ul>
        <a className="btn btn-primary">Enroll Now</a>
      </div>

      <div className="card p-3 flex-grow-1" style={{ minWidth: "300px", maxWidth: "400px", flexBasis: "calc(33.333% - 20px)" }}>
        <img className="card-img-top" src="https://www.innomatics.in/wp-content/uploads/2023/01/Devops-institute-Innomatics-research-labs-KukatpallyHyderabad.jpg" alt="DevOps" />
        <h2>DevOps</h2>
        <p>This course is tailored for professionals looking to optimize the software development lifecycle. Learn the tools and practices of DevOps to bridge the gap between development and operations.</p>
        <h4>Syllabus:</h4>
        <ul>
          <li>Introduction to DevOps and Agile Practices</li>
          <li>Continuous Integration and Continuous Delivery (CI/CD)</li>
          <li>Containerization with Docker</li>
          <li>Infrastructure as Code (IaC) with Terraform</li>
          <li>Configuration Management with Ansible</li>
          <li>Monitoring and Logging with Prometheus and Grafana</li>
          <li>Cloud Deployment with AWS</li>
        </ul>
        <a className="btn btn-primary">Enroll Now</a>
      </div>
    </div>

    <div className="importance my-5">
      <h2 className="text-center">Why Our Courses Are Important</h2>
      <p className="mt-4">
        Our courses are designed to empower learners with cutting-edge skills in high-demand industries such as Data Science, Full Stack Development, AWS, and DevOps. The curriculum is tailored for both beginners and professionals looking to upskill, ensuring that everyone receives practical knowledge and hands-on experience. These courses provide the foundation needed to excel in the digital economy and make you job-ready.
      </p>
    </div>

    <div className="placement-assistance my-5">
      <h2 className="text-center">Placement Assistance</h2>
      <p className="mt-4">
        At Innomatics Research Labs, we offer dedicated placement support to our students. Our team works closely with leading companies to facilitate interviews and help students secure roles in top tech firms. Our partnerships with recruiters ensure that you have access to real opportunities and can seamlessly transition from learning to working.
      </p>
    </div>

    <div className="career-opportunities my-5">
      <h2 className="text-center">Career Opportunities After Completion</h2>
      <p className="mt-4">
        Graduates of our programs have landed jobs in prestigious companies with competitive salaries. Upon completing the Data Science course, you can work as a Data Analyst, Machine Learning Engineer, or AI Specialist. The Full Stack Development course opens doors to roles such as Frontend Developer, Backend Developer, and Full Stack Developer. AWS and DevOps courses prepare you for roles in cloud computing, system administration, and DevOps engineering, with significant growth opportunities in the tech industry.
      </p>
    </div>
  </div>
);

export default Courses;
