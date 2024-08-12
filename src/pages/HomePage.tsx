const HomePage = () => {
  return (
    <>
      <header role="none" className="main header-global ">
        <div
          id="promo-banner"
          className="promo-banner"
          role="complementary"
          aria-label="Current promotion"
        >
          <div className="wrapper">
            <a
              href="https://tophat.com/events/summer-camp-2024/"
              rel="nofollow"
              target="_blank"
              aria-label="Learn from acclaimed experts and faculty presenters | Summer Camp webinar | July 25, opens in a new tab"
            >
              Learn from acclaimed experts and faculty presenters | Summer Camp
              webinar | July 25
            </a>
          </div>
        </div>
        <div
          id="mobile-search-overlay"
          role="search"
          aria-label="Mobile Header Top Hat Website"
        >
          <form action="/" method="get">
            <label htmlFor="search" style={{ display: "none" }}>
              Search in https://tophat.com/
            </label>
            <input
              type="text"
              name="s"
              id="mobile-search"
              placeholder="Search for anything"
              defaultValue=""
            />
            <button type="submit" value="Search">
              Search
            </button>
          </form>
          <button type="button" className="close-btn" aria-label="Close Search">
            <span className="fas fa-times" aria-hidden="true" />
          </button>
        </div>
        {/*.search-overlay*/}
        <div
          id="search-overlay"
          role="search"
          aria-label="Header Top Hat Website"
        >
          <form action="/" method="get">
            <label htmlFor="search" style={{ display: "none" }}>
              Search in https://tophat.com/
            </label>
            <input
              type="text"
              name="s"
              id="search"
              placeholder="Search for anything"
              defaultValue=""
            />
            <button type="submit" value="Search">
              Search
            </button>
          </form>
          <button type="button" className="close-btn" aria-label="Close Search">
            <span className="fas fa-times" aria-hidden="true" />
          </button>
        </div>
        {/*.search-overlay*/}
        <div className="menu-bar" role="banner" aria-label="Main Header">
          <div className="wrapper">
            <div className="header-logo">
              <a
                href="/"
                className="top-hat-logo"
                aria-label="Top Hat, Homepage"
              >
                <img
                  className="logo-small"
                  src="https://tophat.com/wp-content/themes/TOPHAT01/build/images/logo.svg"
                  alt="Top Hat"
                />
                {/* <img class="logo-full" src="https://tophat.com/wp-content/themes/TOPHAT01/build/images/logo-full.svg" alt="Top Hat"> */}
              </a>
            </div>
            {/*.header-logo*/}
            <nav className="desktop-menu nav-primary" aria-label="Primary">
              <ul className="menu" role="menubar" aria-label="Primary">
                <li className="menu-item dropdown" role="none">
                  <button
                    id="educatorsMenuItem"
                    type="button"
                    className="nav-link"
                    role="menuitem"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-controls="educatorsSubmenu"
                  >
                    Educators
                    <img
                      className="arrow"
                      src="https://tophat.com/wp-content/themes/TOPHAT01/build/images/triangle-arrow-purple.svg"
                      alt="arrow"
                    />
                  </button>
                  <div
                    id="educatorsSubmenu"
                    role="menu"
                    aria-labelledby="educatorsMenuItem"
                    className="submenu"
                  >
                    <ul>
                      <li className="parent features">
                        <a
                          type="button"
                          className="parent-a dropdown-item-sub"
                          aria-expanded="false"
                          href="https://tophat.com/features/"
                        >
                          Features
                          <img
                            className="arrow"
                            src="https://tophat.com/wp-content/themes/TOPHAT01/build/images/triangle-arrow-purple.svg"
                            alt="arrow"
                          />
                        </a>
                        <ul className="child">
                          <li>
                            <a
                              href="/features/whats-new/"
                              className="first-li btm-border"
                            >
                              See What's New
                            </a>
                          </li>
                          <li className="dropdown-heading">AI-Powered Tools</li>
                          <li>
                            <a href="/features/ace-ai/" className="btm-border">
                              Ace: AI Assistant for <br />
                              Educators &amp; Students
                            </a>
                          </li>
                          <li className="dropdown-heading">
                            Student Response &amp; Assessment
                          </li>
                          <li>
                            <a
                              href="/features/discussion-tools/"
                              className="btm-border"
                            >
                              Discussions
                            </a>
                          </li>
                          <li>
                            <a
                              href="/features/polls-and-quizzes/"
                              className="btm-border"
                            >
                              Polls &amp; Quizzes
                            </a>
                          </li>
                          <li>
                            <a
                              href="/features/assignments/"
                              className="btm-border"
                            >
                              Assignments &amp; Exams
                            </a>
                          </li>
                          <li>
                            <a
                              href="/features/attendance-software/"
                              className="btm-border"
                            >
                              Automatic Attendance
                            </a>
                          </li>
                          <li className="dropdown-heading">
                            Personalizable Content
                          </li>
                          <li>
                            <a href="/features/pages/" className="btm-border">
                              Pages Content Editor
                            </a>
                          </li>
                          <li>
                            <a
                              href="/features/interactive-textbooks/"
                              className="btm-border"
                            >
                              Customizable, Dynamic eTexts
                            </a>
                          </li>
                          <li>
                            <a
                              href="/features/digital-labs/"
                              className="btm-border"
                            >
                              Interactive Labs
                            </a>
                          </li>
                          <li className="dropdown-heading">
                            Educator Tools &amp; Insights
                          </li>
                          <li>
                            <a
                              href="/features/insights/"
                              className="btm-border"
                            >
                              Real-Time Data
                            </a>
                          </li>
                          <li>
                            <a
                              href="/company/legal/accessibility-top-hat/"
                              className="btm-border"
                            >
                              Accessibility
                            </a>
                          </li>
                          <li>
                            <a
                              href="/features/integrations/"
                              className="last-li"
                            >
                              LMS Integration
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="parent success-stories">
                        <a
                          type="button"
                          className="parent-a dropdown-item-sub"
                          aria-expanded="false"
                        >
                          Success Stories
                          <img
                            className="arrow"
                            src="https://tophat.com/wp-content/themes/TOPHAT01/build/images/triangle-arrow-purple.svg"
                            alt="arrow"
                          />
                        </a>
                        <ul className="child">
                          <li>
                            <a
                              href="https://tophat.com/educator-stories/"
                              className="btm-border first-li"
                            >
                              Educators
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://tophat.com/student-stories/"
                              className="last-li"
                            >
                              Students
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="parent institutions">
                        <a
                          type="button"
                          className="parent-a dropdown-item-sub"
                          aria-expanded="false"
                          href="https://tophat.com/institution-overview/"
                        >
                          Institutions
                          <img
                            className="arrow"
                            src="https://tophat.com/wp-content/themes/TOPHAT01/build/images/triangle-arrow-purple.svg"
                            alt="arrow"
                          />
                        </a>
                        <ul className="child">
                          <li>
                            <a
                              href="https://tophat.com/roi-calculator/"
                              className="btm-border first-li"
                            >
                              ROI Calculator
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://tophat.com/research-behind-top-hat/"
                              className="last-li"
                            >
                              Research Behind Top Hat
                            </a>
                          </li>
                        </ul>
                      </li>
                      {/* <li><a href="https://tophat.com/institution-overview/">Institutions</a></li> */}
                      <li>
                        <a
                          className="new-tab"
                          href="https://aktiv.com/"
                          target="_blank"
                        >
                          Aktiv Learning
                          <img
                            src="https://tophat.com/wp-content/themes/TOPHAT01/build/images/Open in new tab.svg"
                            alt="open in a new tab"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                {/*.educators dropdown */}
                <li className="menu-item" role="none">
                  <a
                    href="/students/"
                    rel="nofollow"
                    className="nav-link"
                    role="menuitem"
                    aria-label="Header link: Students page"
                  >
                    Students
                  </a>
                </li>
                <li className="menu-item" role="none">
                  <a
                    href="https://tophat.com/catalog/"
                    rel="nofollow"
                    className="nav-link"
                    role="menuitem"
                    aria-label="Header link: Catalog page"
                  >
                    Catalog
                  </a>
                </li>
                <li
                  className="menu-item dropdown teaching-resources-dropdown"
                  role="none"
                >
                  <a
                    type="button"
                    className="nav-link"
                    aria-expanded="false"
                    href="https://tophat.com/teaching-resources/"
                  >
                    Teaching Resources
                    <img
                      className="arrow"
                      src="https://tophat.com/wp-content/themes/TOPHAT01/build/images/triangle-arrow-purple.svg"
                      alt="arrow"
                    />
                  </a>
                  <div
                    role="menu"
                    aria-labelledby="teachingResourcesMenuItem"
                    className="submenu"
                  >
                    <ul>
                      <li>
                        <a
                          className="parent-a"
                          href="https://tophat.com/teaching-resources/toolkits-and-how-to-guides/"
                        >
                          Toolkits + How-To Guides
                        </a>
                      </li>
                      <li>
                        <a
                          className="parent-a"
                          href="https://tophat.com/teaching-resources/webinars-and-videos/"
                        >
                          Webinars
                        </a>
                      </li>
                      <li>
                        <a
                          className="parent-a"
                          href="https://tophat.com/teaching-resources/teaching-templates/"
                        >
                          Teaching Templates
                        </a>
                      </li>
                      <li>
                        <a
                          className="parent-a"
                          href="https://tophat.com/teaching-resources/trends-insights-and-infographics/"
                        >
                          Trends + Infographics
                        </a>
                      </li>
                      <li>
                        <a className="parent-a" href="https://tophat.com/blog/">
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                {/*.teaching-resources dropdown*/}
                <li className="menu-item" role="none">
                  <a
                    href="/pricing/"
                    rel="nofollow"
                    className="nav-link"
                    role="menuitem"
                    aria-label="Header link: Pricing page"
                  >
                    Pricing
                  </a>
                </li>
                <li className="menu-item" role="none">
                  <a
                    href="/events/"
                    rel="nofollow"
                    className="nav-link"
                    role="menuitem"
                    aria-label="Header link: Events page"
                  >
                    Events
                  </a>
                </li>
              </ul>
              {/*.menu*/}
            </nav>
            {/*.nav-primary*/}
            <nav
              className="call-to-action nav-secondary"
              aria-label="Create Your Account or Login"
            >
              <ul>
                <li>
                  <a
                    className="nav-signup btn btn-light"
                    href="/register"
                    rel="nofollow"
                  >
                    Create Your Account
                  </a>
                </li>
                <li>
                  <a
                    className="nav-login btn btn-dark"
                    href="/login"
                    rel="nofollow"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </nav>
            {/*.call-to-action*/}
            <div className="mobile-menu">
              <div id="menu-btn">
                <button
                  type="button"
                  aria-label="Toggle Menu, opens in a new pop-up"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="menu-label">Menu</span>
                  <span className="menu-icon fas fa-bars" aria-hidden="true" />
                </button>
              </div>
              <nav
                id="mobile-menu"
                className="mobile-menu__dropdown"
                aria-label="Primary Mobile"
              >
                <div className="wrapper">
                  <ul className="secondary-nav">
                    <li className="secondary-cta">
                      <a
                        href="/register"
                        className="nav-mobile-signup btn light-btn"
                      >
                        Create Your Account
                      </a>
                    </li>
                    <li className="secondary-cta">
                      <a
                        href="/login"
                        className="nav-mobile-login btn btn-dark"
                      >
                        Login
                      </a>
                    </li>
                  </ul>
                  <ul className="primary-nav">
                    <li className="primary-nav__item">
                      <button
                        type="button"
                        className="dropdown-item"
                        aria-expanded="false"
                      >
                        <h3>Educators</h3>
                        <img
                          className="arrow arrow-purple"
                          src="https://tophat.com/wp-content/themes/TOPHAT01/build/images/triangle-arrow-purple.svg"
                          alt="arrow"
                        />
                        <img
                          className="arrow arrow-white"
                          src="https://tophat.com/wp-content/themes/TOPHAT01/build/images/triangle-arrow-white.svg"
                          alt="arrow"
                        />
                      </button>
                      <ul className="dropdown">
                        <li className="parent parent-li">
                          <button
                            type="button"
                            className="dropdown-item-sub features-btn"
                            aria-expanded="false"
                          >
                            <a
                              className="parent-a a-with-arrow"
                              href="https://tophat.com/features/"
                            >
                              Features
                            </a>
                            <img
                              className="arrow"
                              src="https://tophat.com/wp-content/themes/TOPHAT01/build/images/triangle-arrow-purple.svg"
                              alt="arrow"
                            />
                          </button>
                          <ul className="child">
                            <li className="btm-border last-li">
                              <a
                                href="/features/whats-new/"
                                className="first-li"
                              >
                                See What's New
                              </a>
                            </li>
                            <li className="dropdown-heading">
                              AI-Powered Tools
                            </li>
                            <li className="btm-border last-li">
                              <a href="/features/ace-ai/">
                                Ace: AI Assistant for <br />
                                Educators &amp; Students
                              </a>
                            </li>
                            <li className="dropdown-heading">
                              STUDENT RESPONSE &amp; ASSESSMENT
                            </li>
                            <li className="btm-border">
                              <a href="/features/discussion-tools/">
                                Discussions
                              </a>
                            </li>
                            <li className="btm-border">
                              <a href="/features/polls-and-quizzes/">
                                Polls &amp; Quizzes
                              </a>
                            </li>
                            <li className="btm-border">
                              <a href="/features/assignments/">
                                Assignments &amp; Exams
                              </a>
                            </li>
                            <li className="btm-border last-li">
                              <a href="/features/attendance-software/">
                                Automatic Attendance
                              </a>
                            </li>
                            <li className="dropdown-heading">
                              PERSONALIZABLE CONTENT
                            </li>
                            <li className="btm-border">
                              <a href="/features/pages/">
                                Pages Content Editor
                              </a>
                            </li>
                            <li className="btm-border">
                              <a href="/features/interactive-textbooks/">
                                Customizable, Dynamic eTexts
                              </a>
                            </li>
                            <li className="btm-border last-li">
                              <a href="/features/digital-labs/">
                                Interactive Labs
                              </a>
                            </li>
                            <li className="dropdown-heading">
                              EDUCATOR TOOLS &amp; INSIGHTS
                            </li>
                            <li className="btm-border">
                              <a href="/features/insights/">Real-Time Data</a>
                            </li>
                            <li className="btm-border">
                              <a href="/company/legal/accessibility-top-hat/">
                                Accessibility
                              </a>
                            </li>
                            <li className="btm-border last-li">
                              <a href="/features/integrations/">
                                LMS Integration
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="parent parent-li">
                          <button
                            type="button"
                            className="dropdown-item-sub success-stories-btn"
                            aria-expanded="false"
                          >
                            <a
                              className="parent-a a-with-arrow"
                              href="javascript:void(0)"
                            >
                              Success Stories
                            </a>
                            <img
                              className="arrow"
                              src="https://tophat.com/wp-content/themes/TOPHAT01/build/images/triangle-arrow-purple.svg"
                              alt="arrow"
                            />
                          </button>
                          <ul className="child">
                            <li className="btm-border">
                              <a href="https://tophat.com/educator-stories/">
                                Educators
                              </a>
                            </li>
                            <li>
                              <a href="https://tophat.com/student-stories/">
                                Students
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="parent parent-li">
                          <button
                            type="button"
                            className="dropdown-item-sub success-stories-btn"
                            aria-expanded="false"
                          >
                            <a
                              className="parent-a a-with-arrow"
                              href="https://tophat.com/institution-overview/"
                            >
                              Institutions
                            </a>
                            <img
                              className="arrow"
                              src="https://tophat.com/wp-content/themes/TOPHAT01/build/images/triangle-arrow-purple.svg"
                              alt="arrow"
                            />
                          </button>
                          <ul className="child">
                            <li className="btm-border">
                              <a href="https://tophat.com/roi-calculator/">
                                ROI Calculator
                              </a>
                            </li>
                            <li>
                              <a href="https://tophat.com/research-behind-top-hat/">
                                Research Behind Top Hat
                              </a>
                            </li>
                          </ul>
                        </li>
                        {/* <li class="parent-li"><a class="parent-a" href="https://tophat.com/institution-overview/">Institutions</a></li> */}
                        <li className="parent-li">
                          <a
                            className="new-tab"
                            href="https://aktiv.com/"
                            target="_blank"
                          >
                            Aktiv Learning
                            <img
                              src="https://tophat.com/wp-content/themes/TOPHAT01/build/images/Open in new tab.svg"
                              alt="open in a new tab"
                            />
                          </a>
                        </li>
                        {/* <li><a href="https://tophat.com//tour-top-hat/">Virtual Tour</a></li> */}
                      </ul>
                    </li>
                    <li className="primary-nav__item">
                      <h3>
                        <a href="/students/">Students</a>
                      </h3>
                    </li>
                    <li className="primary-nav__item">
                      <h3>
                        <a href="https://tophat.com/catalog/">Catalog</a>
                      </h3>
                    </li>
                    <li className="primary-nav__item parent-li">
                      <button
                        type="button"
                        className="dropdown-item"
                        aria-expanded="false"
                      >
                        <a
                          className="parent-a a-with-arrow"
                          href="https://tophat.com/teaching-resources/"
                        >
                          <h3>Teaching Resources</h3>
                        </a>
                        <img
                          className="arrow arrow-purple"
                          src="https://tophat.com/wp-content/themes/TOPHAT01/build/images/triangle-arrow-purple.svg"
                          alt="arrow"
                        />
                        <img
                          className="arrow arrow-white"
                          src="https://tophat.com/wp-content/themes/TOPHAT01/build/images/triangle-arrow-white.svg"
                          alt="arrow"
                        />
                      </button>
                      <ul className="dropdown teaching-resources-dropdown">
                        <li className="parent-li btm-border">
                          <a href="https://tophat.com/teaching-resources/toolkits-and-how-to-guides/">
                            Toolkits + How-To Guides
                          </a>
                        </li>
                        <li className="parent-li btm-border">
                          <a href="https://tophat.com/teaching-resources/webinars-and-videos/">
                            Webinars
                          </a>
                        </li>
                        <li className="parent-li btm-border">
                          <a href="https://tophat.com/teaching-resources/teaching-templates/">
                            Teaching Templates
                          </a>
                        </li>
                        <li className="parent-li btm-border">
                          <a href="https://tophat.com/teaching-resources/trends-insights-and-infographics/">
                            Trends + Infographics
                          </a>
                        </li>
                        <li className="parent-li btm-border">
                          <a href="https://tophat.com/blog/">Blog</a>
                        </li>
                      </ul>
                    </li>
                    <li className="primary-nav__item">
                      <h3>
                        <a href="/pricing/">Pricing</a>
                      </h3>
                    </li>
                    <li className="primary-nav__item">
                      <h3>
                        <a href="/events/">Events</a>
                      </h3>
                    </li>
                  </ul>
                </div>
              </nav>
              {/*.mobile-menu*/}
            </div>
          </div>
          {/*.wrapper*/}
        </div>
        {/* .menu-bar */}
      </header>
      {/*.header-global*/}
      <main
        className="top-hat-homepage defaults2020 home2020"
        style={{ paddingTop: "97.1875px" }}
      >
        <section className="home-header">
          <div className="container">
            <h1>
              The human-centered learning platform <em>enhanced</em> by AI.
            </h1>
          </div>
          <div className="video-wrapper">
            <video
              controls={true}
              muted={true}
              autoPlay={true}
              loop={true}
              playsInline={true}
            >
              <source
                src="https://tophat.com/wp-content/themes/TOPHAT01/build/images/home/videos/top_hat_ace_homepage_companion_version (720p).mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="bg-wrapper">
            <div className="container">
              <div className="flex-container">
                <div className="header-copy">
                  <p>
                    <b>
                      Top Hat's dynamic courseware with AI-enhanced features
                    </b>{" "}
                    empowers educators to give students a personalized,
                    relevant, and equitable education.
                  </p>
                </div>
                <div className="buttons-container">
                  <a
                    href="/register"
                    className="btn btn-dark"
                  >
                    Create Your Account
                  </a>
                  <button
                    type="button"
                    className="btn btn-light"
                    data-remodal-target="modal"
                  >
                    Book a Demo
                  </button>
                </div>
              </div>
              <span className="fas fa-chevron-down" aria-hidden="true" />
            </div>
          </div>
        </section>
        <section className="home-counters fade-in move-up animation js-animate animate">
          <div className="bg-wrapper">
            <div className="container">
              <div className="wrap">
                <h3 className="home-counters__title">
                  Across campus, students will <em>respond</em> to our dynamic
                  courseware.
                </h3>
                <div className="home-counters__grid" id="homeCountersGrid">
                  <div className="grid-wrapper">
                    <svg viewBox="0 0 36 36" className="circular-chart">
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#e5166b" />
                          <stop offset="100%" stopColor="#934af4" />
                        </linearGradient>
                      </defs>
                      <path
                        className="circle circle-default"
                        strokeDasharray="100, 100"
                        d="M18 2.0845
                                  a 15.9155 15.9155 0 0 1 0 31.831
                                  a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="circle circle-percentage"
                        id="circlePercentage1"
                        strokeDasharray="86, 100"
                        d="M18 2.0845
                                  a 15.9155 15.9155 0 0 1 0 31.831
                                  a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="text">
                      <span className="percent">86%</span>
                      <span className="description">
                        say Top Hat is
                        <br />
                        more engaging
                      </span>
                    </div>
                  </div>
                  <div className="gap" />
                  <div className="grid-wrapper">
                    <svg viewBox="0 0 36 36" className="circular-chart">
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#e5166b" />
                          <stop offset="100%" stopColor="#934af4" />
                        </linearGradient>
                      </defs>
                      <path
                        className="circle circle-default"
                        strokeDasharray="100, 100"
                        d="M18 2.0845
                                  a 15.9155 15.9155 0 0 1 0 31.831
                                  a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="circle circle-percentage"
                        id="circlePercentage2"
                        strokeDasharray="94, 100"
                        d="M18 2.0845
                                  a 15.9155 15.9155 0 0 1 0 31.831
                                  a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="text">
                      <span className="percent">94%</span>
                      <span className="description">
                        agree it's
                        <br />
                        easy to use
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="in-class-features">
          <div className="container">
            <h3 className="in-class-features__title">
              Best in-class features bring out <em>the best</em> in yours.
            </h3>
            <div className="feature-wrap">
              <div className="text">
                <h4>Top Hat Pages</h4>
                <p>
                  The easy-to-use content personalization tool for delivering
                  dynamic learning.
                </p>
                <a className="learn-more" href="/features/pages/">
                  Learn more
                </a>
              </div>
              <video
                className="video-1"
                controls={true}
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
              >
                <source
                  src="https://tophat.com/wp-content/themes/TOPHAT01/build/images/home/2022/video-1.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="feature-wrap">
              <div className="text">
                <h4>Interactive Response Tools</h4>
                <p>
                  A wide range of best-in-class response tools keep your
                  students focused.
                </p>
                <a className="learn-more" href="/features/polls-and-quizzes/">
                  Learn more
                </a>
              </div>
              <video
                className="video-2-mobile"
                controls={true}
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
              >
                <source
                  src="https://tophat.com/wp-content/themes/TOPHAT01/build/images/home/2022/video-2-mobile.mp4"
                  type="video/mp4"
                />
              </video>
              <video
                className="video-2-desktop"
                controls={true}
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
              >
                <source
                  src="https://tophat.com/wp-content/themes/TOPHAT01/build/images/home/2022/video-2.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="feature-wrap">
              <div className="text">
                <h4>Customizable Textbooks</h4>
                <p>
                  From national titles to OER, we have hundreds of fully
                  editable textbooks for your course.
                </p>
                <a className="learn-more" href="/catalog/">
                  Learn more
                </a>
              </div>
              <video
                className="video-3"
                controls={true}
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
              >
                <source
                  src="https://tophat.com/wp-content/themes/TOPHAT01/build/images/home/2022/video-3.mp4"
                  type="video/mp4"
                />
              </video>
              <a className="btn btn-light" href="/features/">
                View all features
              </a>
            </div>
          </div>
        </section>
        <section className="solutions">
          <div className="container">
            <div className="wrap">
              <h3 className="solutions__title">
                Solutions for one course or <em>the whole</em> campus.
              </h3>
              <ul>
                <li>
                  <img
                    src="https://tophat.com/wp-content/themes/TOPHAT01/build/images/home/2022/educator.png"
                    alt="Illustration of an educator teaching"
                  />
                  <div className="info">
                    <div>
                      <h4>Educators</h4>
                      <p>
                        From in-class response to teaching with AI, our dynamic
                        courseware offers more flexibility to educators—so you
                        can deliver personalized learning experiences.
                      </p>
                    </div>
                    <a className="btn btn-light" href="/features/">
                      See Educator Features
                    </a>
                  </div>
                </li>
                <li>
                  <img
                    src="https://tophat.com/wp-content/themes/TOPHAT01/build/images/home/2022/campus.png"
                    alt="Illustration of a school campus"
                  />
                  <div className="info">
                    <div>
                      <h4>Institutional Administrators</h4>
                      <p>
                        You want to help your educators feel prepared to give
                        the best learning experiences possible. We help them to
                        do just that.
                      </p>
                    </div>
                    <a className="btn btn-light" href="/institution-overview/">
                      See Institution Features
                    </a>
                  </div>
                </li>
                <li>
                  <img
                    src="https://tophat.com/wp-content/themes/TOPHAT01/build/images/home/2022/student.png"
                    alt="Illustration of a student studying"
                  />
                  <div className="info">
                    <div>
                      <h4>Students</h4>
                      <p>
                        No two minds think alike. That’s why we offer
                        personalized, engaging experiences to help students that
                        learn in different ways.
                      </p>
                    </div>
                    <a className="btn btn-light" href="/students/">
                      See Student Features
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="educators fade-in move-up animation js-animate">
          <div className="container">
            <h1 className="educators__title">
              Why educators{" "}
              <span className="br">
                and students <em>love</em>{" "}
              </span>
              Top Hat.
            </h1>
            <div className="educators__carousel">
              <div
                id="educatorsBox1"
                className="educators__box"
                aria-hidden="true"
              >
                <h3 className="educators__box-quote">
                  “I use Top Hat to assign online homework and create in-class
                  interactive activities. Overall, Top Hat lowered the DFW rates
                  and improved student performance in my course.”
                </h3>
                <div className="educators__info">
                  <img
                    src="https://tophat.com/wp-content/themes/TOPHAT01/build/images/home/2022/virginia-commonwealth-university.png"
                    alt="Virginia Commonwealth University Logo"
                  />
                  <div>
                    <h2 className="educators__box-title">Sherif Moussa</h2>
                    <p className="educators__box-text">
                      Professor, Virginia Commonwealth University
                    </p>
                  </div>
                </div>
              </div>
              <div
                id="educatorsBox2"
                className="educators__box"
                aria-hidden="true"
              >
                <h3 className="educators__box-quote">
                  “Top Hat makes me feel more confident that what I am teaching
                  is working well. It definitely keeps students engaged; they
                  are less likely to wander away from the lecture.”
                </h3>
                <div className="educators__info">
                  <img
                    src="https://tophat.com/wp-content/themes/TOPHAT01/build/images/home/2022/baruch-college.jpg"
                    alt="Baruch College Logo"
                  />
                  <div>
                    <h2 className="educators__box-title">Curtis Izen</h2>
                    <p className="educators__box-text">
                      Professor, Baruch College
                    </p>
                  </div>
                </div>
              </div>
              <div
                id="educatorsBox3"
                className="educators__box"
                aria-hidden="true"
              >
                <h3 className="educators__box-quote">
                  “The entire platform was extremely user friendly; I wish that
                  my entire university used this platform rather than just this
                  one teacher.”
                </h3>
                <div className="educators__info">
                  <img
                    src="https://tophat.com/wp-content/themes/TOPHAT01/build/images/home/2022/university-of-southern-maine.jpg"
                    alt="University of Southern Maine Logo"
                  />
                  <div>
                    <h2 className="educators__box-title">Jay Hyssong</h2>
                    <p className="educators__box-text">
                      Student, University of Southern Maine
                    </p>
                  </div>
                </div>
              </div>
              <div className="educators__slider">
                <img
                  id="sliderPrev"
                  src="https://tophat.com/wp-content/themes/TOPHAT01/build/images/home/2022/arrow-left.svg"
                  alt="Previous"
                />
                <div className="counter">
                  <span id="current">01</span>
                  <span className="slash">/</span>
                  <span>03</span>
                </div>
                <img
                  id="sliderNext"
                  src="https://tophat.com/wp-content/themes/TOPHAT01/build/images/home/2022/arrow-right.svg"
                  alt="Next"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="remodal-bg remodal-is-closed" />
      <footer className="footer-global" role="none">
        <div className="wrapper" role="contentinfo" aria-label="Footer">
          {/* Don't show footer menu and logo  */}
          <div className="footer-logo">
            <a href="https://tophat.com/" aria-label="Top Hat, Homepage">
              <img
                src="https://tophat.com/wp-content/themes/TOPHAT01/build/images/logo-full-white-new.svg"
                alt="Top Hat"
              />
            </a>
          </div>
          <h2 className="sr-only">Footer Navigation</h2>
          <ul className="footer-menu" role="menubar" aria-label="Footer">
            <li role="menuitem">
              <h3
                className="display-small-caps footer-title"
                aria-label="Products Links"
              >
                <a
                  href="https://tophat.com/features/"
                  aria-label="Top Hat Product page"
                >
                  Product
                </a>
              </h3>
              <ul>
                <li>
                  <a
                    href="https://tophat.com/features/"
                    rel="nofollow"
                    aria-label="Product overview"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="https://tophat.com/pricing/"
                    rel="nofollow"
                    aria-label="Pricing page"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/catalog/" aria-label="Top Hat Textbook Catalog">
                    Catalog
                  </a>
                </li>
                <li>
                  <a
                    href="https://tophat.com/support/"
                    rel="nofollow"
                    aria-label="Support page"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="https://tophat.com/company/legal/accessibility-top-hat/"
                    rel="nofollow"
                    aria-label="Accessibility page"
                  >
                    Accessibility
                  </a>
                </li>
              </ul>
            </li>
            <li role="menuitem">
              <h3
                className="display-small-caps footer-title"
                aria-label="Links to Resources"
              >
                <a
                  href="https://tophat.com/teaching-resources/"
                  aria-label="Resources page"
                >
                  Resources
                </a>
              </h3>
              <ul>
                <li>
                  <a
                    href="https://tophat.com/teaching-resources/"
                    aria-label="Teaching Resources page"
                  >
                    Teaching Resources
                  </a>
                </li>
                <li>
                  <a href="https://tophat.com/blog/" aria-label="Blog page">
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://tophat.com/educator-stories/"
                    rel="nofollow"
                    aria-label="Educator Stories page"
                  >
                    Educator Stories
                  </a>
                </li>
                <li>
                  <a
                    href="https://tophat.com/glossary/"
                    aria-label="Glossary of Higher Ed page"
                  >
                    Glossary of Higher Ed
                  </a>
                </li>
                {/* <li><a href="/textbook-affordability-calculator.html" rel="nofollow" aria-label="Calculate Textbook Savings page">Textbook Savings Calculator</a></li> */}
              </ul>
            </li>
            <li role="menuitem">
              <h3
                className="display-small-caps footer-title"
                aria-label="Company Links"
              >
                <a
                  href="https://tophat.com/company/top-hat-story/"
                  aria-label="Company page"
                >
                  Company
                </a>
              </h3>
              <ul>
                <li>
                  <a
                    href="https://tophat.com/company/top-hat-story/"
                    rel="nofollow"
                    aria-label="The Top Hat Story page"
                  >
                    The Top Hat Story
                  </a>
                </li>
                <li>
                  <a
                    href="https://tophat.com/company/meet-the-team/"
                    rel="nofollow"
                    aria-label="Meet the Team page"
                  >
                    Meet the Team
                  </a>
                </li>
                <li>
                  <a
                    href="https://tophat.com/company/news/"
                    rel="nofollow"
                    aria-label="Newsroom page"
                  >
                    Newsroom
                  </a>
                </li>
                <li>
                  <a
                    href="https://tophat.com/company/legal/"
                    rel="nofollow"
                    aria-label="Terms and Conditions page"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="https://tophat.com/company/security/"
                    rel="nofollow"
                    aria-label="Security page"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="https://tophat.com/company/legal/privacy-policy/"
                    rel="nofollow"
                    aria-label="Privacy Policy page"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://tophat.com/company/contact-us/"
                    rel="nofollow"
                    aria-label="Contact Us page"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://tophat.com/company/work-with-us/"
                    rel="nofollow"
                    aria-label="Careers page"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </li>
            <li role="menuitem">
              <h3
                className="display-small-caps footer-title"
                aria-label="More Top Hat Links"
              >
                <span className="menu-title">More</span>
              </h3>
              <ul>
                <li>
                  <a
                    href="https://tophat.com/publishers/"
                    rel="nofollow"
                    aria-label="Publisher Partnership page"
                  >
                    Publisher Partnership
                  </a>
                </li>
                <li>
                  <a
                    href="https://tophat.com/bookstore-services/"
                    rel="nofollow"
                    aria-label="Bookstore page"
                  >
                    Bookstore Services
                  </a>
                </li>
                <li>
                  <a
                    href="https://tophat.com/vs/"
                    aria-label="Compare Top Hat page"
                  >
                    Compare Top Hat
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <hr />
          <div className="footer-bottom">
            <div className="footer-social">
              <ul>
                <li>
                  <a
                    href="https://www.youtube.com/TopHatHQ?sub_confirmation=1"
                    target="_blank"
                    aria-label="Top Hat on YouTube, opens in a new tab"
                    rel="nofollow"
                  >
                    <span className="fab fa-youtube" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/TopHatHQ"
                    target="_blank"
                    aria-label="Top Hat on Facebook, opens in a new tab"
                    rel="nofollow"
                  >
                    <span className="fab fa-facebook-f" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/tophat"
                    target="_blank"
                    aria-label="Top Hat on Twitter, opens in a new tab"
                    rel="nofollow"
                    className="x-twitter"
                  >
                    <span
                      className="fa-brands fa-x-twitter"
                      aria-hidden="true"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/925855"
                    target="_blank"
                    aria-label="Top Hat on Linkedin, opens in a new tab"
                    rel="nofollow"
                  >
                    <span className="fab fa-linkedin-in" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-copyright">
              <p>©2024 Tophatmonocle Corp.</p>
            </div>
          </div>
          {/*.footer-bottom*/}
        </div>
        {/*.wrapper*/}
      </footer>
      {/* .footer-global */}
      <div
        className="remodal-overlay remodal-is-closed"
        style={{ display: "none" }}
      />
      <div
        className="remodal-wrapper remodal-is-closed"
        style={{ display: "none" }}
      >
        <div
          role="dialog"
          aria-labelledby="demoModalTitle"
          className="remodal demo-modal remodal-is-initialized remodal-is-closed"
          data-remodal-id="modal"
          data-remodal-options="hashTracking: false"
          tabIndex={-1}
        >
          <button
            type="button"
            className="remodal-close"
            data-remodal-action="close"
            aria-label="Close Modal"
          />
          <div id="demoModalTitle" className="modal-title">
            Book a Demo
          </div>
          <p className="modal-intro">
            Explore Top Hat’s dynamic courseware. We’re your partner in
            transforming student engagement—wherever and whenever learning takes
            place.
          </p>{" "}
          <div className="form-container">
            <form className="th-form">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder=""
                maxLength={255}
                required={true}
                defaultValue=""
              />
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder=""
                maxLength={255}
                required={true}
                defaultValue=""
              />
              <label htmlFor="emailAddress">Email</label>
              <input
                type="email"
                name="emailAddress"
                placeholder=""
                maxLength={255}
                required={true}
                defaultValue=""
              />
              <label htmlFor="institution">Institution</label>
              <input
                type="text"
                name="institution"
                placeholder=""
                maxLength={255}
                required={true}
                defaultValue=""
              />
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                placeholder=""
                maxLength={255}
                required={true}
                defaultValue=""
              />
              <label htmlFor="jobFunction">My job function is...</label>
              <select name="jobFunction" required={true} className="">
                <option value="">Select...</option>
                <option value="Adjunct">Adjunct</option>
                <option value="Administrative Assistant">
                  Administrative Assistant
                </option>
                <option value="Bookstore Manager">Bookstore Manager</option>
                <option value="Chancellor">Chancellor</option>
                <option value="Corporate">Corporate</option>
                <option value="Course Coordinator">Course Coordinator</option>
                <option value="Dean">Dean</option>
                <option value="Department Chair">Department Chair</option>
                <option value="Instructional Designer">
                  Instructional Designer
                </option>
                <option value="Instructor">Instructor</option>
                <option value="K12">K12</option>
                <option value="Lab Coordinator">Lab Coordinator</option>
                <option value="Professor">Professor</option>
                <option value="Provost">Provost</option>
                <option value="School Admin">School Admin</option>
                <option value="Student">Student</option>
                <option value="Teaching Assistant">Teaching Assistant</option>
                <option value="Other">Other</option>
              </select>
              <label htmlFor="courseName">What course do you teach?</label>
              <input
                type="text"
                name="courseName"
                placeholder=""
                maxLength={255}
                defaultValue=""
              />
              <label htmlFor="classSize">
                How many students do you teach per term?
              </label>
              <input
                type="number"
                name="classSize"
                placeholder="Type the number of students"
                maxLength={255}
                defaultValue=""
              />
              <div className="inline-form-control">
                <label htmlFor="currentCourseUserCheckbox">
                  I currently use Top Hat for my course
                </label>
                <input
                  type="checkbox"
                  name="currentCourseUserCheckbox"
                  className="undefined"
                  defaultValue="false"
                />
                <input
                  name="currentCourseUser"
                  type="hidden"
                  defaultValue="false"
                />
              </div>
              <input
                type="submit"
                name="submit"
                placeholder="Submit"
                defaultValue="Submit"
                id="submit"
              />
              <input
                type="hidden"
                name="formName"
                required={true}
                defaultValue="Request a Demo"
                id="formName"
              />
              <input
                type="hidden"
                name="template"
                required={true}
                defaultValue="demoRequest"
                id="template"
              />
              <input
                type="hidden"
                name="formID"
                required={true}
                defaultValue={1581}
                id="formID"
              />
              <input
                type="hidden"
                name="referrerURL"
                defaultValue="https://tophat.com/"
                id="referrerURL"
              />
              <input
                type="hidden"
                name="GA_Client_ID__c"
                defaultValue="undefined"
                id="GA_Client_ID__c"
              />
              <input
                type="hidden"
                name="fc_campaign__c"
                defaultValue="undefined"
                id="fc_campaign__c"
              />
              <input
                type="hidden"
                name="fc_channel__c"
                defaultValue="undefined"
                id="fc_channel__c"
              />
              <input
                type="hidden"
                name="fc_content__c"
                defaultValue="undefined"
                id="fc_content__c"
              />
              <input
                type="hidden"
                name="fc_landing__c"
                defaultValue="undefined"
                id="fc_landing__c"
              />
              <input
                type="hidden"
                name="fc_medium__c"
                defaultValue="undefined"
                id="fc_medium__c"
              />
              <input
                type="hidden"
                name="fc_referrer__c"
                defaultValue="undefined"
                id="fc_referrer__c"
              />
              <input
                type="hidden"
                name="fc_term__c"
                defaultValue="undefined"
                id="fc_term__c"
              />
              <input
                type="hidden"
                name="fc_source__c"
                defaultValue="undefined"
                id="fc_source__c"
              />
              <input
                type="hidden"
                name="lc_campaign__c"
                defaultValue="undefined"
                id="lc_campaign__c"
              />
              <input
                type="hidden"
                name="lc_channel__c"
                defaultValue="undefined"
                id="lc_channel__c"
              />
              <input
                type="hidden"
                name="lc_content__c"
                defaultValue="undefined"
                id="lc_content__c"
              />
              <input
                type="hidden"
                name="lc_landing__c"
                defaultValue="undefined"
                id="lc_landing__c"
              />
              <input
                type="hidden"
                name="lc_medium__c"
                defaultValue="undefined"
                id="lc_medium__c"
              />
              <input
                type="hidden"
                name="lc_referrer__c"
                defaultValue="undefined"
                id="lc_referrer__c"
              />
              <input
                type="hidden"
                name="lc_term__c"
                defaultValue="undefined"
                id="lc_term__c"
              />
              <input
                type="hidden"
                name="lc_source__c"
                defaultValue="undefined"
                id="lc_source__c"
              />
              <input
                type="hidden"
                name="country__c"
                defaultValue="undefined"
                id="country__c"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
