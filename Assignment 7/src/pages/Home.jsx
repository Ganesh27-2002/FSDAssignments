import "./Home.css"

const Home = () => (
  <div className="container d-flex flex-column flex-lg-row my-5">
    <div className="my-5 mx-lg-5">
      <h1 className="fs-1">Welcome to <br />Innomatics Research Labs</h1>
      <h4 className="fs-4 mt-1">Get access to all the learning material on this portal</h4>
      
      <div className="mt-5">
        <p className="fs-5 mt-3">
          <span className="star">★</span> <a href="#curriculum" className="text-decoration-none text-dark fw-bold">Course Curriculum</a>
        </p>
        <p className="fs-5">
          <span className="star">★</span> <a href="#live-sessions" className="text-decoration-none text-dark fw-bold">LIVE Session Recording</a>
        </p>
        <p className="fs-5">
          <span className="star">★</span> <a href="#class-material" className="text-decoration-none text-dark fw-bold">Class Material</a>
        </p>
        <p className="fs-5">
          <span className="star">★</span> <a href="#assignments" className="text-decoration-none text-dark fw-bold">Assignments and Quizzes</a>
        </p>
        <p className="fs-5">
          <span className="star">★</span> <a href="#projects" className="text-decoration-none text-dark fw-bold">Projects and Case Studies</a>
        </p>
      </div>

      <a className="btn btn-primary mt-4" href="/courses" onClick={() => alert('Explore more about our courses!')} >
        Explore Courses
      </a>
      <button className="btn btn-outline-success mt-3 ms-2" onClick={() => alert('Check the latest announcements!')}>
        View Announcements
      </button>
    </div>

<div>
<img src="https://dme2wmiz2suov.cloudfront.net/websitebuilder/679/utils/1917979-3.png" alt="Innomatics Illustration" className="img-fluid " />
<p className="text-center fs-6 mt-3">Join over 10,000 learners who have successfully transformed their careers with Innomatics Research Labs!</p>
</div>
  </div>
);

export default Home;
