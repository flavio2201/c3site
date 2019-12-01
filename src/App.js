import React, { useEffect, useState } from 'react';
import $ from 'jquery'
import './App.css';


function App() {
  const [loaded1, error] = useScript(
    'https://c3toronto.com/wp-includes/js/jquery/jquery.js?ver=1.12.4-wp'
  );

  const [loaded2, error2] = useScript(
    'https://c3toronto.com/wp-content/themes/c3toronto/js/stickyfill.min.js?ver=1.1'
  );

  const [loaded3, error3] = useScript(
    'https://c3toronto.com/wp-content/themes/c3toronto/js/c3_custom.js?ver=1.1'
  );

  return (
    <div className="App">
      <div className="site-container">
        <header className="site-header">
          <div className="wrap">
            <div className="title-area">
              <p className="site-title">
                <span className="screen-reader-text">
                  C3 Toronto
                  </span>
                <a
                  href="https://c3toronto.com/" className="custom-logo-link" rel="home" itemProp="url"><img
                    width="300" height="116"
                    src="https://c3toronto.com/wp-content/uploads/2018/07/cropped-c3_to_logo-1.png"
                    className="custom-logo style-svg" alt="" itemProp="logo" />
                </a>
              </p>
            </div>
          </div>
        </header>
        <div className="breadcrumbs_nav_wrap">
          <div className="wrap"></div>
        </div>
        <div className="site-inner">
          <section className="landing" data-tilt-perspective="300" data-tilt-speed="400" data-tilt-max="25">
            <div id="video-container">
              <video playsInline autoPlay muted loop id="welcome-home">
                <source src="https://www.c3toronto.com/wp-content/uploads/2018/03/WEB-HOME-V3.mp4"
                  type="video/mp4" />
              </video>
            </div>
            <div className="text-overlay">
              <h1>Welcome Home Version 2</h1>

            </div>
          </section>
          <div className="content-sidebar-wrap">
            <main className="content" id="genesis-content">
              <section className="section content_section top_reg bottom_reg colour" id="home_boxes"
                style={{
                  backgroundColor: '#ffffff',
                  color: '#0f0f0f',
                  paddingTop: '5%',
                  paddingBottom: '5%',
                }}>
                <div className="row columns_3">
                  < div className="wrap">
                    <div className="column_1">
                      <div className="image_link">
                        <a href="https://www.c3toronto.com/campus-locations/"
                          style={{ backgroundImage: "url(https://c3toronto.com/wp-content/uploads/2018/06/TimeLocations.jpg)" }}>
                          <h4>TIMES + LOCATIONS</h4>
                        </a>
                      </div>
                    </div>
                    <div className="column_2">
                      <div className="image_link">
                        <a href="https://itunes.apple.com/ca/podcast/c3-church-toronto-podcast/id916505893?mt=2"
                          target="_blank"
                          style={{ backgroundImage: "url(https://c3toronto.com/wp-content/uploads/2019/04/podcasts-april2019-crop.jpg)" }}>
                          <h4>PODCASTS</h4>
                        </a>
                      </div>
                    </div>
                    <div className="column_3">
                      <div className="image_link">
                        <a href="https://c3toronto.com/about/love-day/"
                          style={{ backgroundImage: "url(https://c3toronto.com/wp-content/uploads/2019/09/Love-Weekend-Website-Image.jpg)" }}>
                          <h4>LOVE DAY</h4>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row columns_3">
                  <div className="wrap">
                    <div className="column_1">
                      <div className="image_link">
                        <a href="https://www.c3toronto.com/connect/next-steps/"
                          style={{ backgroundImage: "url(https://c3toronto.com/wp-content/uploads/2019/07/next-steps-july2019-crop.jpg)" }}>
                          <h4>NEXT STEPS</h4>
                        </a>
                      </div>
                    </div>
                    <div className="column_2">
                      <div className="image_link">
                        <a href="https://c3toronto.com/connect/events/"
                          style={{ backgroundImage: "url(https://c3toronto.com/wp-content/uploads/2019/05/lr-crop.jpg)" }}>
                          <h4>COMING UP</h4>
                        </a>
                      </div>
                    </div>
                    <div className="column_3">
                      <div className="image_link">
                        <a
                          href="https://give.c3toronto.com/"
                          target="_blank"
                          style={{ backgroundImage: 'url(https://c3toronto.com/wp-content/uploads/2019/04/give-april2019.jpg)' }}>
                          <h4>GIVE ONLINE</h4>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row columns_1">
                  <div className="wrap">
                    <div className="column_1"> </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
        <div className="footer-widgets" id="genesis-footer-widgets">
          <h2 className="genesis-sidebar-title screen-reader-text">Footer</h2>
          <div className="wrap">
            <div className="widget-area footer-widgets-1 footer-widget-area">
              <section id="black-studio-tinymce-2" className="widget widget_black_studio_tinymce">
                <div className="widget-wrap">
                  <h5 className="widget-title widgettitle">Join Us This Sunday</h5>
                  <div className="textwidget">
                    <strong style={{ marginBottom: '1rem', display: 'block' }}>
                      <a href='https://www.google.com/maps/dir//Central+Technical+School,+725+Bathurst+St,+Toronto,+ON+M5S+2R5/@43.6626783,-79.4136309,15.81z/data=!4m9!4m8!1m0!1m5!1m1!1s0x882b34934036b2ad:0x58460824944fdd87!2m2!1d-79.4087556!2d43.6639967!3e3'
                        target="_blank"
                        rel="noopener">
                        West Campus
                        </a>
                    </strong>
                    <p>
                      <i className="far fa-clock"></i> 9.00am + 10.30am + 12.00pm<br />
                      <i className="fas fa-map-marker-alt"></i> 725 Bathurst St<br />
                      <a
                        href="https://www.google.com/maps/dir//Central+Technical+School,+725+Bathurst+St,+Toronto,+ON+M5S+2R5/@43.6626783,-79.4136309,15.81z/data=!4m9!4m8!1m0!1m5!1m1!1s0x882b34934036b2ad:0x58460824944fdd87!2m2!1d-79.4087556!2d43.6639967!3e3">
                        Get Directions
                        </a>
                      <br />
                      <br />
                    </p>
                    <strong style={{ marginBottom: '1rem', display: 'block' }}>
                      <a href="https://www.google.com/maps/dir//Monarch+Park+Collegiate+Institute,+1+Hanson+St,+Toronto,+ON+M4J+1G6/@43.67955,-79.3248417,17z/data=!4m16!1m6!3m5!1s0x89d4cc70885ba77f:0x5fcd576d80edaf1c!2sMonarch+Park+Collegiate+Institute!8m2!3d43.67955!4d-79.322653!4m8!1m0!1m5!1m1!1s0x89d4cc70885ba77f:0x5fcd576d80edaf1c!2m2!1d-79.322653!2d43.67955!3e3"
                        target="_blank" rel="noopener">
                        East Campus
                        </a>
                    </strong>
                    <p>
                      <i className="far fa-clock"></i> 10.30am<br />
                      <i className="fas fa-map-marker-alt"></i> 1 Hanson St<br />
                      <a href="https://www.google.com/maps/dir//Monarch+Park+Collegiate+Institute,+1+Hanson+St,+Toronto,+ON+M4J+1G6/@43.67955,-79.3248417,17z/data=!4m16!1m6!3m5!1s0x89d4cc70885ba77f:0x5fcd576d80edaf1c!2sMonarch+Park+Collegiate+Institute!8m2!3d43.67955!4d-79.322653!4m8!1m0!1m5!1m1!1s0x89d4cc70885ba77f:0x5fcd576d80edaf1c!2m2!1d-79.322653!2d43.67955!3e3"
                        target="_blank" rel="noopener">Get Directions</a>
                      <br />
                      <br />
                    </p>
                    <strong style={{ marginBottom: '1rem', display: 'block' }}>
                      <a href="https://goo.gl/maps/3XV6X2HtC9RA4Ha68" target="_blank" rel="noopener">
                        North Campus
                        </a>
                    </strong>
                    <p>
                      <i className="far fa-clock"></i> 10:30am<br />
                      <i className="fas fa-map-marker-alt"></i> Cardinal Carter Academy for the Arts<br />
                      <a href="https://goo.gl/maps/3XV6X2HtC9RA4Ha68" target="_blank" rel="noopener">
                        Get Directions
                        </a>
                    </p>
                  </div>
                </div>
              </section>
            </div>
            <div className="widget-area footer-widgets-2 footer-widget-area">
              <section id="black-studio-tinymce-3" className="widget widget_black_studio_tinymce">
                <div className="widget-wrap">
                  <h5 className="widget-title widgettitle">Coming Up</h5>
                  <div className="textwidget">
                    <strong style={{ marginBottom: '1rem', display: 'block' }}>
                      <a
                        href="https://c3toronto.com/connect/events/love-day/">Love Day
                        </a>
                    </strong>
                    <p><i className="fas fa-calendar-alt"></i>
                      <span
                        style={{ marginRight: '1rem', display: 'inline-block' }}>
                        Dec 7
                        </span>
                      <br />
                      <a
                        href="https://c3toronto.com/connect/events/love-day/">
                        View Event
                        </a>
                    </p>
                    <strong
                      style={{ marginBottom: '1rem', display: 'block' }}>
                      <a
                        href='https://c3toronto.com/connect/events/the-vollys/'>
                        The Vollys
                        </a>
                    </strong>
                    <p><i className="fas fa-calendar-alt"></i>
                      <span
                        style={{ marginRight: '1rem', display: 'inline-block' }}>
                        Dec 14
                        </span>
                      <i className="far fa-clock"></i>
                      6:00 pm - 9:00 pm<br /><i className="fas fa-map-marker-alt"></i> West Campus<br />
                      <a
                        href="https://c3toronto.com/connect/events/the-vollys/">View Event</a></p>
                  </div>
                </div>
              </section>
            </div>
            <div className="widget-area footer-widgets-3 footer-widget-area">
              <section id="black-studio-tinymce-4" className="widget widget_black_studio_tinymce">
                <div className="widget-wrap">
                  <h5 className="widget-title widgettitle">Connect With Us</h5>
                  <div className="textwidget">
                    <h5><a href="mailto:contact@c3toronto.com">contact@c3toronto.com</a><br />
                      416 832 4344<br />
                      1655 Dupont St. Box 9, Unit 110<br />
                      Toronto M6P3S9</h5>
                  </div>
                </div>
              </section>
              <section id="custom_html-2" className="widget_text widget widget_custom_html">
                <div className="widget_text widget-wrap">
                  <div className="textwidget custom-html-widget">
                    <div className="social_media" style={{ marginTop: '-1em', fontSize: '150%' }}>
                      <a
                        href="https://www.facebook.com/C3ChurchToronto/" target="_blank"
                        style={{
                          display: 'inline-block',
                          marginRight: '1em'
                        }}
                        rel='noopener noreferrer'
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/c3toronto/?hl=en" target="_blank"
                        style={{ display: 'inline-block', marginRight: '1em' }}
                        rel="noopener noreferrer"><i
                          className="fab fa-instagram"></i>
                      </a>
                      <a
                        href="https://www.youtube.com/channel/UCCZ_5DvQZbsTVgTFbusBgfA" target="_blank"
                        style={{ display: 'inline-block', marginRight: '1em' }}
                        rel="noopener noreferrer"><i
                          className="fab fa-youtube"></i>
                      </a>
                      <a
                        href="https://itunes.apple.com/ca/podcast/c3-church-toronto-podcast/id916505893?mt=2"
                        target="_blank" style={{ display: 'inline-block' }}
                        rel="noopener noreferrer"><i
                          className="fas fa-podcast"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <footer className="site-footer">
          <div className="wrap">
            <h5>&#x000A9;&nbsp;2019 C3 Toronto</h5>
          </div>
        </footer>
      </div>
      <div id="video-view">
        <div className="overlay"></div>
        <span className="close-video"></span>
      </div>
      <div>
        <div>
          <b>{loaded1}</b>
          <b>{loaded2}</b>
          <b>{loaded3}</b>
        </div>
      </div>
    </div >
  );
}
export default App;
// Hook
let cachedScripts = [];
function useScript(src) {
  // Keeping track of script loaded and error state
  const [state, setState] = useState({
    loaded: false,
    error: false
  });

  useEffect(
    () => {
      // If cachedScripts array already includes src that means another instance ...
      // ... of this hook already loaded this script, so no need to load again.
      if (cachedScripts.includes(src)) {
        setState({
          loaded: true,
          error: false
        });
      } else {
        cachedScripts.push(src);

        // Create script
        let script = document.createElement('script');
        script.src = src;
        script.async = false;

        // Script event listener callbacks for load and error
        const onScriptLoad = () => {
          setState({
            loaded: true,
            error: false
          });
        };

        const onScriptError = () => {
          // Remove from cachedScripts we can try loading again
          const index = cachedScripts.indexOf(src);
          if (index >= 0) cachedScripts.splice(index, 1);
          script.remove();

          setState({
            loaded: true,
            error: true
          });
        };

        script.addEventListener('load', onScriptLoad);
        script.addEventListener('error', onScriptError);

        // Add script to document body
        document.body.appendChild(script);

        // Remove event listeners on cleanup
        return () => {
          script.removeEventListener('load', onScriptLoad);
          script.removeEventListener('error', onScriptError);
        };
      }
    },
    [src] // Only re-run effect if script src changes
  );

  return [state.loaded, state.error];
}