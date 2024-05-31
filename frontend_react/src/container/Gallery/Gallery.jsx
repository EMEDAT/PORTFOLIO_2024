import React, { useState, useEffect } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import './Gallery.scss';

const Gallery = () => {
  const [certifications, setCertifications] = useState([]);
  const [conferences, setConferences] = useState([]);
  const [mentorships, setMentorships] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [blogs, setBlogs] = useState([]);


  const [activeConferenceIndex, setActiveConferenceIndex] = useState(0);
  const [activeMentorshipIndex, setActiveMentorshipIndex] = useState(0);
  const [activeBlogIndex, setActiveBlogIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const handleConferenceClick = (newIndex) => {
    setActiveConferenceIndex(newIndex);
  };
  
  const handleMentorshipClick = (newerIndex) => {
    setActiveMentorshipIndex(newerIndex);
  };

  const handleBlogClick = () => {
    setActiveBlogIndex((prev) => (prev === blogs.length - 1 ? 0 : prev + 1));
  };



  useEffect(() => {
    const certQuery = '*[_type == "certifications"]';
    const confQuery = '*[_type == "conferences"]';
    const mentorshipQuery = '*[_type == "mentorships"]';
    const blogQuery = '*[_type == "blog"]';

    client.fetch(certQuery).then((data) => {
      setCertifications(data);
    });

    client.fetch(confQuery).then((data) => {
      setConferences(data);
    });

    client.fetch(mentorshipQuery).then((data) => {
      setMentorships(data);
    });

    client.fetch(blogQuery).then((data) => {
        setBlogs(data);
      });

  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === certifications.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? certifications.length - 1 : prev - 1));
  };

  const nextSlide1 = () => {
    setActiveConferenceIndex((prev) => (prev === conferences.length - 1 ? 0 : prev + 1));
  };

  const prevSlide1 = () => {
    setActiveConferenceIndex((prev) => (prev === 0 ? conferences.length - 1 : prev - 1));
  };

  const nextSlide2 = () => {
    setActiveMentorshipIndex((prev) => (prev === mentorships.length - 1 ? 0 : prev + 1));
  };

  const prevSlide2 = () => {
    setActiveMentorshipIndex((prev) => (prev === 0 ? mentorships.length - 1 : prev - 1));
  };

  const nextSlide3 = () => {
    setActiveBlogIndex((prev) => (prev === blogs.length - 1 ? 0 : prev + 1));
  };
  const prevSlide3 = () => {
    setActiveBlogIndex((prev) => (prev === 0 ? blogs.length - 1 : prev - 1));
  };




  return (
    <div className='landlord'>
        <h2 className="newHead head-text">Gallery</h2>
        <div className='oga'>
        <div className='section1'>
        <div className="Certifications">
        {certifications[activeIndex] && (
        <div className="card">
        <h2>Certifications</h2>
        <img src={urlFor(certifications[activeIndex].image).url()} alt={certifications[activeIndex].name} />
        <p className='main'>{certifications[activeIndex].title}</p>
        <p className="description">{certifications[activeIndex].description}</p>
        </div>
        )}
        </div>
        <div className="bReduce app__testimonial-btns2 app__flex">
            <div className="app__flex" onClick={() => handleClick(activeIndex === 0 ? certifications.length - 1 : activeIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(activeIndex === certifications.length - 1 ? 0 : activeIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </div>

        <div className="section2">
        <div className="Conferences">
        {conferences[activeConferenceIndex] && (
        <div className="card">
        <h2>Conferences</h2>
      <img src={urlFor(conferences[activeConferenceIndex].image).url()} alt={conferences[activeConferenceIndex].name} />
      <p className='main'>{conferences[activeConferenceIndex].title}</p>
      <p className="description">{conferences[activeConferenceIndex].description}</p>
        </div>
        )}
        </div>
        <div className="bReduce app__testimonial-btns2 app__flex">
        <div className="app__flex" onClick={() => handleConferenceClick(activeConferenceIndex === 0 ? conferences.length - 1 : activeConferenceIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleConferenceClick(activeConferenceIndex === conferences.length - 1 ? 0 : activeConferenceIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </div>
  
    <div className="section3">
    <div className="Mentorships">
    {mentorships[activeMentorshipIndex] && (
    <div className="card">
        <h2>Mentorships</h2>
      <img src={urlFor(mentorships[activeMentorshipIndex].image).url()} alt={mentorships[activeMentorshipIndex].name} />
      <p className='main'>{mentorships[activeMentorshipIndex].title}</p>
      <p className="description">{mentorships[activeMentorshipIndex].description}</p>
      <a href={mentorships[activeMentorshipIndex].externalLink} target="_blank" rel="noopener noreferrer">Sign Up</a>
    </div>
    )}
    </div>
    <div className="bReduce app__testimonial-btns2 app__flex">
        <div className="app__flex" onClick={() => handleMentorshipClick(activeMentorshipIndex === 0 ? mentorships.length - 1 : activeMentorshipIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleMentorshipClick(activeMentorshipIndex === mentorships.length - 1 ? 0 : activeMentorshipIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
    </div>

        <div className="section4">
            <div className="blog">
            {blogs[activeBlogIndex] && (
            <div className="card">
            <h2>Blog Posts</h2>
            <img src={urlFor(blogs[activeBlogIndex].image).url()} alt={blogs[activeBlogIndex].name} />
            <p className='main'>{blogs[activeBlogIndex].title}</p>
            <p className="description">{blogs[activeBlogIndex].description}</p>
            <a href={blogs[activeBlogIndex].externalLink} target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
        )}
        </div>
        
        <div className="bReduce app__testimonial-btns2 app__flex">
        <div className="app__flex" onClick={() => handleBlogClick(activeBlogIndex === 0 ? blogs.length - 1 : activeBlogIndex - 1)}>
            <HiChevronLeft />
        </div>

        <div className="app__flex" onClick={() => handleBlogClick(activeBlogIndex === blogs.length - 1 ? 0 : activeBlogIndex + 1)}>
            <HiChevronRight />
        </div>
        </div>
        </div>
    </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Gallery, 'app__gallery'), 'gallery', 'app__whitebg');