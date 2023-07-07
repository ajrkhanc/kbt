import Link from "next/link";
import Head from "next/head";
import Slider from "react-slick";

export default function ThanYouLP() {

    var settings2 = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <>
            <Head>
                <title>Fostering Diversity and Inclusion | Blanchard International</title>
                <meta name="description" content="Gain understanding of how to foster diversity, equity, and inclusion in the workplace with the help of Blanchard’s programs." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="bredkums2 colortheme4bg pbb-100 border-bottom-left-radius-70">
                <div className="container-fluid poss">
                    <div className="row">
                        <div className="col-sm-12 ptt-25 pbb-50">
                            <ul>
                                <li className="brdlifirst"><a href="/">HOME</a></li>
                                <li className="brdlifirst"><a href="/our-content">OUR CONTENT</a></li>
                                <li className="brdlifirst"><a href="/our-content/challenges">CHALLENGES</a></li>
                                <li><a><span>DIVERSITY & INCLUSION</span></a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12">
                            <div className="innerbedkms text-center">
                                <h1>Diversity & Inclusion</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ptt-60 pbb-60 uncommonapproach rightimgc">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h2 className="sectionh">
                            Leadership agility helps organizations adapt to change successfully
                            </h2>
                            <p className="headingp">
                            A successful organization requires managing change, adapting to market changes, and fostering innovation. Effective leaders who enable change management success have the following abilities:
                            </p>
                            <ul className="ptt-20">
                                <li>Align the vision and strategy for change with the organization's goals and values</li>
                                <li>Establish an adaptive culture by leading by example, encouraging experimentation, and taking calculated risks</li>
                                <li>Encourage learning from failure and a collaborative team environment</li>
                                <li>Maintain long-term goals by identifying and responding quickly to environmental changes</li>
                                <li>Allow employees to make quick decisions and take action</li>                               
                            </ul>
                        </div>
                        <div className="col-sm-6 pa0000">
                            <div className="mimg100 pll-90">
                                <img className="" src="/assets/img/kbnew/Leadership-agility-helps.jpg" alt="Images" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='Innovativelearning'>
                <div className='container-fluid ptt-90 pbb-60 borderedus0 colortheme2bg'>
                    <div className='row align-items-center'>
                        <div className='col-sm-6 pa0000'>
                            <div className='prr-90'>
                                <img src="/assets/img/kbnew/Navigating-change-requires-agile-leadership-skills.jpg" alt="Images" />
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div>
                                <h2>
                                Agile leadership is essential for navigating change
                                </h2>
                                <p className="pbb-0">
                                Change is a constant in any business. Leaders must be able to adapt. Organizations—and their leaders—must be willing to experiment, try new things, and be open to new ideas. Through Blanchard change and agility programs, your leaders learn how to:
                                </p>
                                <h4 className="hforh">Promote innovation throughout the organization</h4>
                                <p className="pbb-0">
                                Innovation doesn’t belong to a specific role or department. Blanchard believes leaders should encourage all team members to think creatively and develop new and innovative solutions that move the company forward.
                                </p>
                                <h4 className="hforh">Develop a culture of continuous learning</h4>
                                <p className="pbb-0">
                                Mix formal training programs with one-to-one feedback and coaching, peer-to-peer learning, and stretch assignments.
                                </p>
                                <h4 className="hforh">Change quickly</h4>
                                <p className="pbb-0">
                                Regardless of how changes will affect your business, it's important not to leave your organizational response to the last minute. Effective leaders have a plan for managing change and remain open to new ideas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            


            <section className='ExperiencesCourses pbb-60 ptt-50'>
                <div className='container'>
                    <div className='row'>
                      
                        <div className='col-sm-12'>
                            <div className='row'>
                                <div className='col-sm-8'>
                                    <h2 className='pbb-50'>Recommended Solutions</h2>
                                </div>
                                <div className='col-sm-4 viewall'>
                                    <a href='#'>Explore Additional Solutions <i class="bx bx-right-arrow-alt"></i></a>
                                </div>
                            </div>
                        </div>





                        <div className='col-sm-12'>
                            <Slider {...settings2}>
                                <div className='slxpd30'>
                                    <div className='slbox greenboxc forwhitec'>
                                        <div className='slboxheader'>
                                            <div className='slboxfigure'>
                                                <div className='slboximg1'></div>
                                            </div>
                                        </div>
                                        <div className='slboxbottom'>
                                            <div className="slboxheight">
                                                <span className='sltype'>Program</span>
                                                <h3>SLII® Powering Inspired Leaders™</h3>
                                                <p>Only situational leaders can motivate their workers to rise to the challenge.</p>
                                            </div>
                                            <a href='#' className='kbbtn kbbtn--orange'>Learn More</a></div>
                                    </div>
                                </div>

                                <div className='slxpd30'>
                                    <div className='slbox darkblueboxc forwhitec'>
                                        <div className='slboxheader'>
                                            <div className='slboxfigure'>
                                                <div className='slboximg2'></div>
                                            </div>
                                        </div>
                                        <div className='slboxbottom'>
                                        <div className="slboxheight">
                                            <span className='sltype'>Program</span>
                                            <h3>Coaching Essentials®</h3>
                                            <p>Essential coaching abilities for managers and leaders</p>
                                            </div>
                                            <a href='#' className='kbbtn kbbtn--orange'>Learn More</a></div>
                                    </div>
                                </div>

                                <div className='slxpd30'>
                                    <div className='slbox darkwhiteboxc forwhitec'>
                                        <div className='slboxheader'>
                                            <div className='slboxfigure'>
                                                <div className='slboximg3'></div>
                                            </div>
                                        </div>
                                        <div className='slboxbottom'>
                                        <div className="slboxheight">
                                            <span className='sltype'>Webinar</span>
                                            <h3 className='colortheme'>Essential Motivators™</h3>
                                            <p className='colorblack'>Enhance collaboration by knowing yourself and others</p>
                                            </div>
                                            <a href='#' className='kbbtn kbbtn--orange'>Learn More</a></div>
                                    </div>
                                </div>
                            </Slider>
                        </div>


                    </div>
                </div>
            </section>



            <section className="ptt-60 pbb-60 ExploreCustom Unleashleadership">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h2 className="sectionh">Change your organization's capacity to adapt</h2>
                            <p className="headingp text-justify pbb-10">
                            Each new workday brings changes that have the potential to drive your company’s growth, provided your leaders can garner your people’s buy-in.  By building a customized learning journey, we can help your leaders become agile managers who can quickly adapt to change.
                            </p>                            
                            <a href='/get-started' className='kbbtn kbbtn--orange mtt-20'>Talk to an Expert</a>
                        </div>
                        
                        <div className="col-sm-6">
                            <div className="mimg100 imgborder pll-90">
                                <img className="" src="/assets/img/kbnew/Increase-your-organization’s-capacity-for-change.jpg" alt="Images" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}