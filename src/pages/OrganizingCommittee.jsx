import React from "react";
import "./OrganizingCommittee.css";

const OrganizingCommittee = () => {
  return (
    <section className="committee-section">
      <h1 className="committee-title">ORGANIZING COMMITTEE</h1>

      {/* Chief Patron */}
      <div className="committee-block">
        <h2 className="committee-heading">CHIEF PATRON</h2>
        <p>
          Dr. M. S. Gujral
          <br />
          Principal, Chandigarh College of Engineering and Technology
        </p>
      </div>

      {/* General Chair */}
      <div className="committee-block">
        <h2 className="committee-heading">GENERAL CHAIR</h2>
        <p>
          Dr. D. S. Saini
          <br />
          Professor, ECE Department
        </p>
      </div>

      {/* Conference Convener */}
      <div className="committee-block">
        <h2 className="committee-heading">CONFERENCE CONVENER</h2>
        <ul>
          <li>Dr. Krishna Gopal Sharma, Professor, ECE Department</li>
          <li>Dr. Bhasker Gupta, Professor, ECE Department</li>
          <li>Dr. Anil Kumar, Professor, ECE Department</li>
        </ul>
      </div>

      {/* Example for Long Sections */}
      <div className="committee-block">
        <h2 className="committee-heading">TECHNICAL PROGRAM COMMITTEE</h2>
        <h3>Chair:</h3>
        <ul>
          <li>
            Dr. Krishna Gopal Sharma, Professor, Chandigarh College of
            Engineering and Technology, Chandigarh, India
          </li>
          <li>
            Dr. Nitin, Associate Prof. Educator, Department of Electrical and
            Computer Engineering, Cincinnati, Ohio, USA
          </li>
        </ul>
        <h3>Co-Chair(s):</h3>
        <ul>
          <li>
            Dr. Pradeep Kumar, Associate Prof. (ECE), Durban, South Africa
          </li>
          <li>
            Dr. Shilpa Jindal, Chandigarh College of Engineering and Technology,
            Chandigarh, India
          </li>
        </ul>
        <h3>Technical Program Committee Members</h3>
        <ul className="long-list">
          <li>
            Dr. Rahul Dwivedi, Assistant Prof., Computer Info System, Texas A &
            M University, Central Texas
          </li>
          <li>
            Neeraj Kohli, Sr. Engineer, University Florida, San Francisco,
            California, US
          </li>
          <li>
            Dr. Abhhimanyu Vatsa, Assistant Prof., Department of CSE, Faulingh
            Dickinson University, Teaneck NJ University of Missouri Columbia,
            NJ, US
          </li>
          <li>
            Prof. (Dr.) Xiao-Zhi Gao, Professor at University of Eastern
            Finland, Finland
          </li>
          <li>
            Prof. Rocío Pérez de Prado, Associate professor (Titular de
            Universidad) at the Telecommunication Engineering Dpt., University
            of Jaén, Spain
          </li>
          <li>
            Dr. Muthu Ramachandran, Principal Lecturer (Associate Professor)
            Department School of Built Environment Engineering and Computing,
            Leeds Beckett University Leeds, United Kingdom
          </li>
          <li>
            Dr. Prof. Rashid Mehmood, Professor and Research Director,
            Department High Performance Computing Center, King Abdulaziz
            University Jeddah, Saudi Arabia
          </li>
          <li>
            Prof. Antonio Sedeño-Noda, Associate Professor, Department of
            Statistics, Operations Research and Computing, Spain
          </li>
          <li>
            Dr. Petar Popovski, Professor in Wireless Communications, Head of
            the Section on Connectivity, Department of Electronic Systems,
            Aalborg University, Denmark
          </li>
          <li>
            Francoise Lamnabhi-Lagarrigue, CNRS-INS2I, Laboratoire des Signaux
            et Systemes (L2S) & European Embedded Control Institute (EECI),
            Greater Paris Metropolitan Region, France
          </li>
          <li>
            Dr. Alexandar Djordjevich, Associate Professor, City University of
            Hong Kong
          </li>
          <li>
            Dr. Muhammad Usman, Senior Lecturer in Cyber Security Faculty of
            Computing Engineering and Science University of South Wales
            Pontypridd, UK
          </li>
          <li>
            Prof. Yashwant K. Malaiya, Professor Computer Science Dept,
            California State University, USA
          </li>
          <li>Dr. Ranjana Sodhi, Associate Prof., ECE, IIT Ropar</li>
          <li>Gaurav Joshi, Sr. RF Engineer, Phoenix, Arizona, US</li>
          <li>Dr. Balwinder Sodhi, Associate Prof., IIT Ropar, CSE</li>
          <li>Dr. Ghanshyam Singh, Prof., ECE, MNIT Jaipur</li>
          <li>Prof. Buajesh Kaushik, IIT Rorkee, ECE</li>
          <li>
            Dr. Yashwant Singh, Prof & HOD (CSE) & Registrar, Central Univ,
            Jammu
          </li>
          <li>
            Dr. Brajesh Kumar, Associate Prof. (CSE), Mahatama Ghandhi Jyotiba
            Phule (MJP), Rohilkhand University
          </li>
          <li>Dr. Yograj Singh Duksh, Prof. ECE, MJP Rohilkhand University</li>
          <li>Dr. Mohammed Wajid, Associate Prof., (ECE), AMU</li>
          <li>
            Dr. Vinay Kumar, Associate Prof., ECE, Thapar University, Patiala
          </li>
          <li>Prof. Iqbal Ali, ECE, Jamia Millia University</li>
          <li>Dr. Bharat Singh Rajpurohit, Associate Prof. ECE, IIT Mandi</li>
          <li>
            Prof. Sukhdeep Singh, DCR University of Science and Technology,
            Sonipat/Murthal DCCRUST
          </li>
          <li>Prof. Rahul Kataria (CSE), DTU, Delhi</li>
          <li>Prof. Surinder Singh (ECE), NIT Hamirpur</li>
          <li>Prof. Sidhartha Chauhan (CSE), NIT Hamirpur</li>
          <li>Prof. Jeetender Deegwal, HOD (ECE), Women Polytechnic, Ajmer</li>
          <li>Dr. Neeru Sharma, Associate Prof. (ECE), HPU</li>
          <li>Dr. Umesh Tiwari, Scientist, CSIO</li>
          <li>Dr. Rajat Bhatia, Prof. (CSE), PEC Chandigarh</li>
          <li>
            Dr. Himanshu Monga, Director-cum-Principal Govt. Hydro Engineering
            College Bilaspur, DTE, Govt. Of HP
          </li>
          <li>
            Dr. Ajay Kumar Aggarwal, Process Development Technologies, IIT Delhi
          </li>
          <li>Prof. Nitin Rakesh, HOD (CSE), Sharda University</li>
          <li>
            Dr. Kaushlendra Pandey, Assistant Prof. Central Institute of
            Technology, Kokarghar
          </li>
          <li>Dr. Jyoti Kedia, Associate Prof. (ECE), PEC</li>
          <li>Dr. Komal Jhanghol, Assistant Prof. (ECE), IIT Guwahati</li>
          <li>Dr. Dheeraj Sharma, Assistant Prof. (ECE), NIT Kurukshetra</li>
          <li>Dr. Bhupender Kumar, A.P., IIIT Vadodra</li>
          <li>Dr. Tapan Jain, Assistant Prof. (ECE), IIIT Nagpur</li>
          <li>
            Prof. (Dr.) Jayanthi Ranjan, Director, GITAM Hyderabad Business
            School, GITAM (Deemed to be University), Rudraram (V), Patancheru(M)
            Sangareddy(Dist.) - 502 329, Telangana, India
          </li>
          <li>
            Mr. Jaspreet Singh, Director & Founder, Kirat Communications Mumbai,
            Maharashtra, India
          </li>
          <li>
            Dr. Vinod Kumar, Deputy Project Director at ISRO, Executive
            Secretary, Astronautical Society of India, Bengaluru Urban,
            Karnataka, India
          </li>
          <li>
            Dr. Gaurav Khanna, Center of Reliability, IIT Kharagpur, India
          </li>
          <li>
            Dr. Gargi Khanna, Associate Professor, E&CE Department, NIT Hamirpur
            HP, India
          </li>
          <li>
            Dr. Anwar Shahzad Siddiqui, Professor Department of Electrical
            Engineering, Jamia Millia Islamia, New Delhi, India
          </li>
          <li>
            Prof. Mashuq un–Nabi, Associate Professor, Dept. of Electrical
            Engg., Indian Institute of Technology (IIT)-Delhi
          </li>
          <li>
            Dr. Parthapratim De, Department of Electronics and Communication
            Engineering, Andhra Pradesh, India
          </li>
          <li>Prof. C.C. Tripathi, Kurukshetra University, Haryana, India</li>
          <li>Prof. Rajendar Bahl, CARE, IIT Delhi, India</li>
          <li>Dr. Syed Azeemuddin, IIIT Hyderabad, India</li>
          <li>
            Dr. G. N. Pillai, Head, Department of Electrical Engineering, IIT
            Roorkee
          </li>
          <li>
            Dr. Vijayalakshmi Ahanathapillai, Biomedical Engineering, Birmingham
            City School of Health Sciences
          </li>
          <li>Dr. Manisha Pattanaik, ABV IIITM Gwalior</li>
          <li>Prof. Binod Kumar Kanaujia, Director NIT Jalandhar, India</li>
          <li>
            Dr. Ashutosh Sharma, Institute of Computer Technology and
            Information Security, Southern Federal University, Russia
          </li>
          <li>Dr. Surender Soni, NIT Hamirpur, India</li>
          <li>Dr. Brajesh Kumar Kaushik, IIT Roorkee, India</li>
          <li>
            Dr. Nikose Mastorakis, Technical University of Sofia, BULGARIA
          </li>
          <li>Dr. R N Sharma, NIT Hamirpur, India</li>
          <li>
            Dr. Viranjay Srivastava, University of KwaZulu-Natal, Durban, South
            Africa
          </li>
          <li>Dr. Ravinder Nath, NIT Hamirpur, India</li>
          <li>Dr. Kumar Pandey, NIT Hamirpur, India</li>
          <li>Dr. Ashok Kumar, NIT Hamirpur, India</li>
          <li>Prof. A. Swarup, NIT Kurukshetra, India</li>
          <li>Dr. Veena B. Mendiratta, Nokia Bell Labs, USA</li>
          <li>
            Prof. G. S. Tomar, Birla Institute of Applied Sciences, UK, India
          </li>
          <li>Dr. Balwinder Singh, Joint Director & Head, ACSD, CDAC Mohali</li>
          <li>Prof. M. J. Nigam, Ex Prof. IIT Roorkee</li>
          <li>Dr. Balwinder Raj, NIT Jalandhar Chandigarh</li>
          <li>Dr. Neeru Sharma, HPU Shimla, India</li>
          <li>Dr. Rman Singh, Thapar University Patiala, India</li>
          <li>Dr. Anjali Sharma, HPU Shimla, India</li>
          <li>Dr. Pradeep Dixit, Asst Professor, Mech Dept, IIT, Mumbai</li>
          <li>Prof. Vineet Sahula, ECE Department, MNIT, Jaipur</li>
          <li>Dr. Kanika Sharma, NITTTR, Chandigarh, India</li>
          <li>Dr. Tilak Thakur, Professor (EE), PEC, Chd</li>
          <li>
            Dr. Anmol R. Saxena, Associate Professor (EEE), National Institute
            of Technology, Delhi
          </li>
          <li>
            Dr. Tanwir Haider, Professor (CSE), National Institute of
            Technology, Patna
          </li>
          <li>Dr. Shimi S.L., Associate Professor (EEE), PEC, Chd</li>
        </ul>
      </div>

      <div className="committee-block">
        <h2 className="committee-heading">FINANCE CHAIR</h2>
        <ul>
          <h3>Chair:</h3>
          <li>
            Dr. Bhasker Gupta, Professor, Chandigarh College of Engineering and
            Technology, Chandigarh, India
          </li>
          <h3>Members: </h3>
          <li>
            Dr. Dinesh Sharma, Chandigarh College of Engineering and Technology,
            Chandigarh, India
          </li>
          <li>
            Sh. Akhil Kumar, AC&FA, Chandigarh College of Engineering and
            Technology, Chandigarh, India
          </li>
          <li>
            Sh. Rakesh, Section Officer, Chandigarh College of Engineering and
            Technology, Chandigarh, India
          </li>
          <li>
            Aman Goel, IEEE Student member, Chandigarh College of Engineering
            and Technology, Chandigarh, India
          </li>
          <li>
            Ritika Thakur, IEEE Student member, Chandigarh College of
            Engineering and Technology, Chandigarh, India
          </li>
        </ul>
      </div>

      <div className="committee-block">
        <h2 className="committee-heading">PUBLICATION COMMITTEE</h2>
        <ul>
          <h3>Chair(s):</h3>
          <li>
            Prof. Anil Kumar, Professor, Chandigarh College of Engineering and
            Technology, Chandigarh, India
          </li>
          <h3>Member(s):</h3>
          <li>
            Dr. Dinesh Sharma, Chandigarh College of Engineering and Technology,
            Chandigarh, India
          </li>
          <li>
            Dr. Anil Kumar Vaghmare, Chandigarh College of Engineering and
            Technology, Chandigarh, India
          </li>
          <li>
            Akshita Agarwal, IEEE Student member, Chandigarh College of
            Engineering and Technology, Chandigarh, India
          </li>
          <li>
            Aman Gupta, IEEE Student member, Chandigarh College of Engineering
            and Technology, Chandigarh, India
          </li>
        </ul>
      </div>

      <div className="committee-block">
        <h2 className="committee-heading">PUBLICITY COMMITTEE</h2>
        <ul>
          <h3>Chair(s):</h3>
          <li>
            Prof. Arun Khosla, Professor, Dr. B. R. Ambedkar National Institute
            of Technology, Jalandhar, India
          </li>
          <li>Prof. Ghanshyam Singh, Professor, MNIT Jaipur, India</li>
          <li>
            Dr. Parvinder Kaur, Chandigarh College of Engineering and
            Technology, Chandigarh, India
          </li>
          <li>
            Dr. Vipin Balyan, Sr. Lecturer, Cape Peninsula University of
            Technology, California
          </li>

          <h3>Member(s) - INDIA:</h3>
          <li>
            Dr. Victor Gambhir, Vice Chancellor, JERC University Gurugram, India
          </li>
          <li>
            Prof. Rajesh Khanna, Professor, Thapar Institute of Engineering and
            Technology, Patiala, India
          </li>
          <li>
            Prof. Sunil K Singh, Professor, University Institute of Engineering
            and Technology, Chandigarh
          </li>
          <li>
            Prof. Arun Singh, Professor, Panjab Engineering College, Chandigarh
          </li>
          <li>
            Dr. Sarita Sharma, Chandigarh College of Engineering and Technology,
            Chandigarh, India
          </li>
          <li>
            Dr. Irfan Mohammad Khan, Chandigarh College of Engineering and
            Technology, Chandigarh, India
          </li>
          <li>
            Dr. Ritula Thakur, National Institute of Technical Teacher Training
            and Research, Chandigarh
          </li>
          <li>Dr. Babban Kumar, CSIR-CSIO, Chandigarh, India</li>
          <li>
            Dr. Amar Partap Singh, Professor, Sant Longowal Institute of
            Engineering and Technology, Longowal, Punjab, India
          </li>
          <li>Prof. Prerna Gaur, Director, WEST Campus NSUT, Delhi, India</li>
          <li>
            Prof. Arun Kumar, Panjab Engineering College, Chandigarh, India
          </li>
          <li>Prof. Tripti Sharma, Chandigarh University, Mohali, India</li>
        </ul>
      </div>

      <div className="committee-block">
        <h2 className="committee-heading">PUBLICITY COMMITTEE</h2>
        <ul>
          <h3>Chair(s):</h3>
          <li>
            Prof. Arun Khosla, Professor, Dr. B. R. Ambedkar National Institute
            of Technology, Jalandhar, India
          </li>
          <li>Prof. Ghanshyam Singh, Professor, MNIT Jaipur, India</li>
          <li>
            Dr. Parvinder Kaur, Chandigarh College of Engineering and
            Technology, Chandigarh, India
          </li>
          <li>
            Dr. Vipin Balyan, Sr. Lecturer, Cape Peninsula University of
            Technology, California
          </li>

          <h3>Member(s) - INDIA:</h3>
          <li>
            Dr. Victor Gambhir, Vice Chancellor, JERC University Gurugram, India
          </li>
          <li>
            Prof. Rajesh Khanna, Professor, Thapar Institute of Engineering and
            Technology, Patiala, India
          </li>
          <li>
            Prof. Sunil K Singh, Professor, University Institute of Engineering
            and Technology, Chandigarh
          </li>
          <li>
            Prof. Arun Singh, Professor, Panjab Engineering College, Chandigarh
          </li>
          <li>
            Dr. Sarita Sharma, Chandigarh College of Engineering and Technology,
            Chandigarh, India
          </li>
          <li>
            Dr. Irfan Mohammad Khan, Chandigarh College of Engineering and
            Technology, Chandigarh, India
          </li>
          <li>
            Dr. Ritula Thakur, National Institute of Technical Teacher Training
            and Research, Chandigarh
          </li>
          <li>Dr. Babban Kumar, CSIR-CSIO, Chandigarh, India</li>
          <li>
            Dr. Amar Partap Singh, Professor, Sant Longowal Institute of
            Engineering and Technology, Longowal, Punjab, India
          </li>
          <li>Prof. Prerna Gaur, Director, WEST Campus NSUT, Delhi, India</li>
          <li>
            Prof. Arun Kumar, Panjab Engineering College, Chandigarh, India
          </li>
          <li>Prof. Tripti Sharma, Chandigarh University, Mohali, India</li>

          <h3>Member(s) - ABROAD:</h3>
          <li>
            Dr. Rajesh Verma, Associate Professor (EE), King Khalid University,
            Abha, Saudi Arabia
          </li>
          <li>
            Dr. Rahul Dwivedi, Assistant Prof., Computer Info System, Texas A &
            M University, Central Texas
          </li>
          <li>
            Neeraj Kohli, Sr. Engineer, University Florida, San Francisco,
            California, US
          </li>
          <li>Gaurav Joshi, Sr. RF Engineer, Phoenix, Arizona, US</li>
          <li>Dr. Shubhalaxmi J Kher, Arkansas State University, USA</li>
          <li>Dr. Ivo R. Draganov, Technical University of Sofia, Bulgaria</li>
        </ul>
      </div>

      <div className="committee-block">
        <h2 className="committee-heading">WEB MAINTENANCE COMMITTEE</h2>
        <ul>
          <li>
            Dr. Shilpa Jindal, Chandigarh College of Engineering and Technology,
            Chandigarh, India
          </li>
          <li>
            Er. Animesh Singh, Chandigarh College of Engineering and Technology,
            Chandigarh, India
          </li>
          <li>
            Mr. Yuvraj Singh, Chandigarh College of Engineering and Technology,
            Chandigarh, India
          </li>
        </ul>
      </div>

      <div className="committee-block">
        <h2 className="committee-heading">REGISTRATION COMMITTEE</h2>
        <ul>
          <h3>Chair(s):</h3>
          <li>
            Dr. Bhasker Gupta, Professor, Chandigarh College of Engineering and
            Technology, Chandigarh, India
          </li>

          <h3>Member(s):</h3>
          <li>
            Dr. Shilpa Jindal, Chandigarh College of Engineering and Technology,
            Chandigarh, India
          </li>
          <li>
            Dr. Sarita Sharma, Chandigarh College of Engineering and Technology,
            Chandigarh, India
          </li>
          <li>
            Ms. Vandanna, Chandigarh College of Engineering and Technology,
            Chandigarh, India
          </li>
          <li>
            Ms. Mokesh, Chandigarh College of Engineering and Technology,
            Chandigarh, India
          </li>
          <li>
            Aakashika Sharma, IEEE Student member, Chandigarh College of
            Engineering and Technology, Chandigarh, India
          </li>
          <li>
            Anju Devi, IEEE Student member, Chandigarh College of Engineering
            and Technology, Chandigarh, India
          </li>
        </ul>
      </div>

      <div className="committee-block">
        <h2 className="committee-heading">LOCAL ARRANGEMENT COMMITTEE</h2>
        <ul>
          <h3>Chair(s):</h3>
          <li>
            Dr. Dinesh Sharma, Chandigarh College of Engineering and Technology,
            Chandigarh, India
          </li>

          <h3>Member(s):</h3>
          <li>
            Dr. Hardeep Saini, Chandigarh College of Engineering and Technology,
            Chandigarh, India
          </li>
        </ul>
      </div>

      <div className="committee-block">
        <h2 className="committee-heading">SPONSORSHIP COMMITTEE</h2>
        <ul>
          <h3>Chair(s):</h3>
          <li>
            Dr. Krishna Gopal Sharma, Chandigarh College of Engineering and
            Technology, Chandigarh, India
          </li>

          <h3>Co-Chair(s):</h3>
          <li>
            Dr. Parvinder Kaur, Chandigarh College of Engineering and
            Technology, Chandigarh, India
          </li>
          <li>
            Karanpreet Singh, IEEE Student member, Chandigarh College of
            Engineering and Technology, Chandigarh, India
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OrganizingCommittee;
