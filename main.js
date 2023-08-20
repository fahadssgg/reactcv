const react1 = document.getElementById("root");

let cv = (
  <>
    <div className="contaner">
      <div>
        <h1>Fahad Saad Alghamdi</h1>
        <p>Computer Science</p>
      </div>
      <div className="cont2">
        <div className="paragraf">
          <h3>Summary</h3>
          <p>
            My ambition is to join a work environment that enables me to develop
            my abilities and practical skills in line with my qualifications,
            and to contribute to the development of myself and the entity for
            which I work.
          </p>
        </div>

        <div className="paragraf2">
          <h3>Details</h3>
          <p>
            Riyadh, Saudi Arabia.<br></br> 0537320028 <br></br>
            fahadguzai@gmail.com <br></br>
            <a href="https://www.linkedin.com/in/fahad-saad-alghamdi">
              LinkedIn
            </a>
          </p>
        </div>
      </div>

      <div className="cont2">
        <div className="paragraf">
          <h3>Education</h3>
          <p>
            <b>4.67, Bachelor of Computer Science </b> <br></br>September 2017 —
            January 2022
          </p>
          <ul>
            <li>Najran university</li>
            <li>Graduated with second honors</li>
          </ul>
        </div>

        <div className="paragraf2">
          <h3>Technical Skills</h3>
          <p>
            MySQL<br></br> HTML <br></br>
            JavaScript <br></br>CSS<br></br>Microsoft office<br></br>Database
          </p>
        </div>
      </div>

      <div className="cont2">
        <div className="paragraf">
          <h3>PROJECT</h3>
          <p>
            <b>Implementing Smart Gate at Najran University </b> <br></br>March
            2021 — January 2022
          </p>
          <ul>
            <li>
              Design and implementation of a smart gate for Najran University.
            </li>
          </ul>
        </div>

        <div className="paragraf2">
          <h3>Languages</h3>
          <p>
            Arabic<br></br> English
          </p>
        </div>
      </div>

      <div className="cont2">
        <div className="paragraf">
          <h3>Experience</h3>
          <p>
            <b>Business Analyst at Aramco, Dhahran </b> <br></br>January 2022 —
            July 2022
          </p>
          <ul>
            <li>Gather and organize information on problems or procedures.</li>
            <li>
              Analyze data gathered and develop solutions or alternative methods
              of proceeding.
            </li>
          </ul>
        </div>

        <div className="paragraf2">
          <h3>Soft skills</h3>
          <p>
            Computer Proficiency <br></br> Teamwork <br></br>
            Decision-Making and Problem-Solving <br></br>Planning and Organizing
            <br></br>Fast learner <br></br>Passionate about work
          </p>
        </div>
      </div>

      <div className="cont2">
        <div className="paragraf">
          <h3>Courses</h3>

          <ul>
            <li>Certified Support Technician (CCST) Cybersecurity, Cisco</li>
            <li>Full-Stack JavaScript, Satr Platform</li>
          </ul>
        </div>
      </div>
    </div>
  </>
);

ReactDOM.render(cv, react1);
