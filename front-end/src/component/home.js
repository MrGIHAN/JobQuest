import React from 'react';
import './home.css'; // Import your CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div className="container">
            <div className="navbar">
                <div className="right">
                    <img src="./image/LOGO.png" alt="LOGO" className='logo' />
                    <a href="#" className='a1'>Find Jobs</a>
                    <a href="#" className='a2'>Browse Courses</a>
                </div>
                <div className="left">
                    <a href="#" className='a3'>Login</a>
                    <a href="#" className='a4'>Sign Up</a>
                </div>
            </div>
            <div className='hero'>
                <div className='hero-text'>
                    <h1>Discover more than<br/>
                    <div className="hero-text2"> 5000+ Jobs and <br/>Courses</div></h1>
                </div>
            </div>
            <div className="search">
                <i className="bi bi-bag-fill"></i><input type="text" placeholder="Job title or keyword" className='search-bar'/>
                <i className="bi bi-geo-alt-fill"></i><input type="text" placeholder="Florence, Italy" className='search-bar'/>
                <button className='search-btn'> Search job or institutes</button>
            </div>
            <div className="para">
                <p>Popular : UI Designer, UX Researcher, Android, Admin</p>
            </div>
            <section className="job-cards">
                <div className="title">
                    <h2 className='Explorebyjobcategory'>Explore by <span className='Explorebyjobcategory2'> job category</span></h2>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="card-body">
                            <i className="bi bi-briefcase-fill"></i>
                            <h5 className="card-title bg-light text-danger" >Design</h5>
                            <p className='bg-light text-danger'>235 jobs available</p>
                            <i className="bi bi-arrow-right-short "></i>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <i className="bi bi-briefcase-fill"></i>
                            <h5 className="card-title bg-light text-danger" >Design</h5>
                            <p className='bg-light text-danger'>235 jobs available</p>
                            <i className="bi bi-arrow-right-short "></i>
                        </div>
                    </div><div className="card">
                        <div className="card-body">
                            <i className="bi bi-briefcase-fill"></i>
                            <h5 className="card-title bg-light text-danger" >Design</h5>
                            <p className='bg-light text-danger'>235 jobs available</p>
                            <i className="bi bi-arrow-right-short "></i>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <i className="bi bi-briefcase-fill"></i>
                            <h5 className="card-title bg-light text-danger" >Design</h5>
                            <p className='bg-light text-danger'>235 jobs available</p>
                            <i className="bi bi-arrow-right-short "></i>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="card-body">
                            <i className="bi bi-briefcase-fill"></i>
                            <h5 className="card-title bg-light text-danger" >Design</h5>
                            <p className='bg-light text-danger'>235 jobs available</p>
                            <i className="bi bi-arrow-right-short "></i>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <i className="bi bi-briefcase-fill"></i>
                            <h5 className="card-title bg-light text-danger" >Design</h5>
                            <p className='bg-light text-danger'>235 jobs available</p>
                            <i className="bi bi-arrow-right-short "></i>
                        </div>
                    </div><div className="card">
                        <div className="card-body">
                            <i className="bi bi-briefcase-fill"></i>
                            <h5 className="card-title bg-light text-danger" >Design</h5>
                            <p className='bg-light text-danger'>235 jobs available</p>
                            <i className="bi bi-arrow-right-short "></i>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <i className="bi bi-briefcase-fill"></i>
                            <h5 className="card-title bg-light text-danger" >Design</h5>
                            <p className='bg-light text-danger'>235 jobs available</p>
                            <i className="bi bi-arrow-right-short "></i>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
