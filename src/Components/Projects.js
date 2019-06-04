import React from 'react'
class Projects extends React.Component{
    render(){
        return(
            <section id="realizations" className="realizations">
            <div className="realizations__wrapper">
              <div className="section-header">
                <div className="section-header__title  section-header__title--realizations">Portfolio...</div>
                <div className="section-header__subtitle">Selected projects that I had the pleasure to work on</div>
              </div>
              <div className="showcase">
                <div className="showcase__thumbnails-wrapper">
                  {/* normal */}
                  <img data-project="p1" className="showcase__thumb  showcase__thumb--first  showcase__thumb--active" src="content/project01_thumb.jpg" />
                  <img data-project="p2" className="showcase__thumb" src="content/project_placeholder_thumb.jpg" />
                  <img data-project="p3" className="showcase__thumb" src="content/project_placeholder_thumb.jpg" />
                  <img data-project="p4" className="showcase__thumb" src="content/project_placeholder_thumb.jpg" />
                  <img data-project="p5" className="showcase__thumb" src="content/project_placeholder_thumb.jpg" />
                  {/* blank template
                                  <div data-project="p5" class="showcase__thumb  showcase__thumb--blank">&nbsp;</div>
                                   */}
                </div>
                <div className="showcase__stage-wrapper">
                  {/* project 1 */}
                  <div data-project="p1" className="showcase__stage  showcase__stage--active">
                    <div className="showcase__slider">
                      <ul className="rslides">
                        <li>
                          <a href="content/project01_slide01.jpg" target="_blank">
                            <img src="content/project01_slide01.jpg" />
                          </a>
                        </li>
                        <li>
                          <a href="content/project01_slide02.jpg" target="_blank">
                            <img src="content/project01_slide02.jpg" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="showcase__infos-wrapper">
                      <div className="showcase__title">
                        Enboard
                        <div className="showcase__title-description">Personal Project</div>
                      </div>
                      <div className="showcase__point">
                        <div className="showcase__point-title">My Responsibilites</div>
                        <div className="showcase__point-description">
                          UX Design, Front-end and Back-End Development.
                        </div>
                      </div>
                      <div className="showcase__point">
                        <div className="showcase__point-title">Technologies Used</div>
                        <div className="showcase__point-description">
                          Python, Django, PostgreSQL, HTML5, CSS3, SASS, JavaScript, jQuery.
                        </div>
                      </div>
                      <div className="showcase__point">
                        <div className="showcase__point-title">Details</div>
                        <div className="showcase__point-details-excerpt">
                          Enboard lets you create and follow boards filled with lists containing links, notes and checkboxes organized through categories. {/*<span class="showcase__ellipsis"></span>*/}<span className="showcase__readmore">more</span>
                        </div>
                        <div className="showcase__point-details-full">
                          Perfect for gathering and sharing informations on some subject, browser start page, personal notes, link bookmarking, simple project management, todo list, and many more. Possibilites are endless. <span className="showcase__readless">less</span>
                        </div>
                      </div>
                      <a target="_blank" href="http://enboard.co/" className="showcase__button  ghost-button  ghost-button--realizations">Visit Website</a>
                    </div>
                  </div>
                  {/* project 2 */}
                  <div data-project="p2" className="showcase__stage">
                    <div className="showcase__slider">
                      <ul className="rslides">
                        <li>
                          <a href="content/project_placeholder_slide.jpg" target="_blank">
                            <img src="content/project_placeholder_slide.jpg" />
                          </a>
                        </li>
                        <li>
                          <a href="content/project_placeholder_slide.jpg" target="_blank">
                            <img src="content/project_placeholder_slide.jpg" />
                          </a>
                        </li>
                        <li>
                          <a href="content/project_placeholder_slide.jpg" target="_blank">
                            <img src="content/project_placeholder_slide.jpg" />
                          </a>
                        </li>
                        <li>
                          <a href="content/project_placeholder_slide.jpg" target="_blank">
                            <img src="content/project_placeholder_slide.jpg" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="showcase__infos-wrapper">
                      <div className="showcase__title">Second Project</div>
                      <div className="showcase__point">
                        <div className="showcase__point-title">Section Title</div>
                        <div className="showcase__point-description">
                          Section Content
                        </div>
                      </div>
                      <div className="showcase__point">
                        <div className="showcase__point-title">Section Title</div>
                        <div className="showcase__point-description">
                          HTML, CSS, SASS, JavaScript, jQuery, WordPress, Google Maps Api v3
                        </div>
                      </div>
                      <div className="showcase__point">
                        <div className="showcase__point-title">Section Title</div>
                        <div className="showcase__point-details-excerpt">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip<span className="showcase__ellipsis">...</span>
                          <span className="showcase__readmore">more</span>
                        </div>
                        <div className="showcase__point-details-full">
                          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          <span className="showcase__readless">less</span>
                        </div>
                      </div>
                      <a target="_blank" href="//example.com" className="showcase__button  ghost-button  ghost-button--realizations">Visit Website</a>
                    </div>
                  </div>
                  {/* project 3 */}
                  <div data-project="p3" className="showcase__stage">
                    <div className="showcase__slider">
                      <ul className="rslides">
                        <li><img src="content/project_placeholder_slide.jpg" /></li>
                      </ul>
                    </div>
                    <div className="showcase__infos-wrapper">
                      <div className="showcase__title">Third Project</div>
                      <div className="showcase__point">
                        <div className="showcase__point-title">Section Title</div>
                        <div className="showcase__point-description">
                          Design and Development
                        </div>
                      </div>
                      <div className="showcase__point">
                        <div className="showcase__point-title">Section Title</div>
                        <div className="showcase__point-description">
                          HTML, CSS, SASS, JavaScript, jQuery
                        </div>
                      </div>
                      <div className="showcase__point">
                        <div className="showcase__point-title">Section Title</div>
                        <div className="showcase__point-details-excerpt">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip<span className="showcase__ellipsis">...</span>
                          <span className="showcase__readmore">more</span>
                        </div>
                        <div className="showcase__point-details-full">
                          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          <span className="showcase__readless">less</span>
                        </div>
                      </div>
                      <a target="_blank" href="//example.com" className="showcase__button  ghost-button  ghost-button--realizations">Visit Website</a>
                    </div>
                  </div>
                  {/* project 4 */}
                  <div data-project="p4" className="showcase__stage">
                    <div className="showcase__slider">
                      <ul className="rslides">
                        <li><img src="content/project_placeholder_slide.jpg" /></li>
                        <li><img src="content/project_placeholder_slide.jpg" /></li>
                        <li><img src="content/project_placeholder_slide.jpg" /></li>
                        <li><img src="content/project_placeholder_slide.jpg" /></li>
                      </ul>
                    </div>
                    <div className="showcase__infos-wrapper">
                      <div className="showcase__title">Fourth Project</div>
                      <div className="showcase__point">
                        <div className="showcase__point-title">Section Title</div>
                        <div className="showcase__point-description">
                          Design and Front-End Development
                        </div>
                      </div>
                      <div className="showcase__point">
                        <div className="showcase__point-title">Section Title</div>
                        <div className="showcase__point-description">
                          HTML, CSS, SASS, JavaScript, jQuery
                        </div>
                      </div>
                      <div className="showcase__point">
                        <div className="showcase__point-title">Section Title</div>
                        <div className="showcase__point-details-excerpt">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip<span className="showcase__ellipsis">...</span>
                          <span className="showcase__readmore">more</span>
                        </div>
                        <div className="showcase__point-details-full">
                          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          <span className="showcase__readless">less</span>
                        </div>
                      </div>
                      <a target="_blank" href="//example.com" className="showcase__button  ghost-button  ghost-button--realizations">Visit Website</a>
                    </div>
                  </div>
                  {/* project 5 */}
                  <div data-project="p5" className="showcase__stage">
                    <div className="showcase__slider">
                      <ul className="rslides">
                        <li><img src="content/project_placeholder_slide.jpg" /></li>
                        <li><img src="content/project_placeholder_slide.jpg" /></li>
                        <li><img src="content/project_placeholder_slide.jpg" /></li>
                        <li><img src="content/project_placeholder_slide.jpg" /></li>
                      </ul>
                    </div>
                    <div className="showcase__infos-wrapper">
                      <div className="showcase__title">Fifth Project</div>
                      <div className="showcase__point">
                        <div className="showcase__point-title">Section Title</div>
                        <div className="showcase__point-description">
                          Design and Front-End Development
                        </div>
                      </div>
                      <div className="showcase__point">
                        <div className="showcase__point-title">Section Title</div>
                        <div className="showcase__point-description">
                          HTML, CSS, SASS, JavaScript, jQuery
                        </div>
                      </div>
                      <div className="showcase__point">
                        <div className="showcase__point-title">Section Title</div>
                        <div className="showcase__point-details-excerpt">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip<span className="showcase__ellipsis">...</span>
                          <span className="showcase__readmore">more</span>
                        </div>
                        <div className="showcase__point-details-full">
                          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          <span className="showcase__readless">less</span>
                        </div>
                      </div>
                      <a target="_blank" href="//example.com" className="showcase__button  ghost-button  ghost-button--realizations">Visit Website</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
}
export default Projects;