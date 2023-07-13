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
                <title>Increasing Personal Effectiveness | Blanchard International</title>
                <meta name="description" content="Learn how to be an effective individual contributor and increase your personal effectiveness in your role with Blanchard’s training programs."/>
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
                                <li><a><span>PERSONAL EFFECTIVENESS</span></a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12">
                            <div className="innerbedkms text-center">
                                <h1>Personal Effectiveness</h1>
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
                            Individual skills that set people up for success in the workplace
                            </h2>
                            <p className="headingp">
                            Today's work environment is characterized by a combination of skills, behaviors, and attitudes that enable individuals to perform well in their jobs and contribute to the success of the organization as a whole. Personal effectiveness includes honing abilities such as:
                            </p>
                            <ul className="ptt-20">
                                <li>
                                Manage time effectively by prioritizing tasks, setting goals, and deadlines
                                </li>
                                <li>
                                Adapt to new situations, changes in work processes, or new technologies
                                </li>
                                <li>
                                Identify one's strengths, weaknesses, motivations, and emotions
                                </li>
                                <li>
                                Maintain a positive attitude despite setbacks, mistakes, and failures
                                </li>
                                <li>
                                Improve one's skills, knowledge, and competencies continuously</li>                               
                            </ul>
                        </div>
                        <div className="col-sm-6 pa0000">
                            <div className="mimg100 pll-90">
                                <img className="" src="/assets/img/kbnew/Critical-individual-skills-that.jpg" alt="Images" />
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
                                <img src="/assets/img/kbnew/Become-more-intentional-and-productive.jpg" alt="Images" />
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div>
                                <h2>
                                Become more productive and intentional
                                </h2>
                                <p className="pbb-0">
                                As Blanchard believes, workers can become more productive by prioritizing their tasks, focusing on the most critical and urgent tasks, and eliminating distractions.
                                </p>
                                <p className="pbb-0">
                                The Blanchard programs teach skills necessary to succeed in today's changing marketplace, including:
                                </p>
                                <h4 className="hforh">
                                Navigate unclear expectations
                                </h4>
                                <p className="pbb-0">
                                Clarify expectations and align work with the organization's objectives.
                                </p>
                                <h4 className="hforh">Effective Time management</h4>
                                <p className="pbb-0">
                                It is important to manage time effectively when faced with a large workload and multiple competing priorities.
                                </p>
                                <h4 className="hforh">Maximize limited resources</h4>
                                <p className="pbb-0">
                                Limitations in resources and support can make completing work effectively and efficiently difficult.
                                </p>

                                <h4 className="hforh">Stress management</h4>
                                <p className="pbb-0">
                                Worker pressure to perform and meet or exceed expectations can lead to high-stress levels and burnout, negatively impacting productivity.
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
                            <h2 className="sectionh">Give every employee the tools for individual success</h2>
                            <p className="headingp text-justify pbb-10">
                            A successful organization is the byproduct of a workplace culture where everyone has the tools and training to do their job and grow as a business professional. We can help everyone in your company become more effective in the work they do every day by designing a customized learning journey.
                            </p>                            
                            <a href='/get-started' className='kbbtn kbbtn--orange mtt-20'>Talk to an Expert</a>
                        </div>
                        
                        <div className="col-sm-6">
                            <div className="mimg100 imgborder pll-90">
                                <img className="" src="/assets/img/kbnew/Give-every-employee-the-tools-for-individual.jpg" alt="Images" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}