import '../App.css';
import '../css/Home.css'
import homeData from "./../data";

function Home() {
  console.log(homeData.highlighter);
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top proxima-font">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">Navbar</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ">Contact</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>


      <div className="container-fluid">
        <div className="container text-center App">
          <div className="row">
            <div className='text-allign-vertical'>

              <div className='hometitle' dangerouslySetInnerHTML={{ __html: homeData.homeTitle }}>
              </div>


              <div class="content mt-5">
                <div class="content__container">

                  <ul class="content__container__list">
                    <li class="content__container__list__item  text-center">👋</li>
                    <li class="content__container__list__item  text-center">👀</li>
                    <li class="content__container__list__item  text-center">👇</li>
                    <li class="content__container__list__item  text-center">💭</li>
                  </ul>
                </div>
                <p className='hometitle mt-3'>projects</p>
              </div>
            </div>


          </div>
        </div>


        {
          homeData.projects.map(project=>{
            return (<div className="container text-center App mt-5" >
            <div className="row">
              <div className="col-md-5">
                <div className='projects-text-title mt-5' dangerouslySetInnerHTML={{ __html: project.title }}>
                </div>
                <p className='projects-text-subtitle highlighter mt-3' dangerouslySetInnerHTML={{ __html: project.subtitle }}>
                </p>
                <p className='projects-text-tags mt-0' dangerouslySetInnerHTML={{ __html: project.tags }}>
                </p>
              </div>
  
              <div className="col-md-1">
                <hr className='project-hr' />
              </div>
  
              <div className="col-md-6">
                <img src={project.image} alt="dummyImage" />
              </div>
            </div>
          </div>)
          })
        }



        {/* // Footer starts here */}
        <div className="container-fluid sticky-bottom">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  ">
            <div className="col-md-8 d-flex align-items-center">
              <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                <svg className="bi" width="30" height="24"><use href="#bootstrap"></use></svg>
              </a>
              <span className="mb-3 mb-md-0 text-muted">© Garima Gatne 2023 | Designer | garimagatne@gmail.com </span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li className="ms-3"><a className="text-muted" href="#"><i class="bi bi-medium"></i></a></li>
              <li className="ms-3"><a className="text-muted" href="#"><i class="bi bi-behance"></i></a></li>
              <li className="ms-3"><a className="text-muted" href="#"><i class="bi bi-linkedin"></i></a></li>
              <li className="ms-3"><a className="text-muted" href="#"><i class="bi bi-envelope"></i></a></li>
            </ul>
          </footer>
        </div>

      </div>
      <style jsx>
        {`
          .highlighter{
            color : ${homeData.highlighter};
          }
          .project-hr{
            color : ${homeData.highlighter};
            margin-top: 8em;
            border-bottom: 4px solid ${homeData.highlighter};
          }
        `}
      </style>
    </>

  );
}

export default Home;


