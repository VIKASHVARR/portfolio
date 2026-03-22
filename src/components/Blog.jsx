import { useState } from 'react';

export default function Blog() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="blog">
        <div className="container">
            <h2>Blog</h2>
            <div className="blog-posts" id="blog-posts">
                <article className="blog-item">
                    <h3><a href="https://medium.com/python-in-plain-english/mixpanel-with-django-1234567890" target="_blank" rel="noopener noreferrer">Mixpanel with Django</a></h3>
                    <p>Imagine you are a product manager and we have to check whether a newly implemented feature in your product is consumed efficiently by the…</p>
                    <p>Dec 24, 2023</p>
                </article>
                <article className="blog-item">
                    <h3><a href="https://medium.com/python-in-plain-english/django-database-relationship-mysql-configuration-1234567890" target="_blank" rel="noopener noreferrer">Django-Database relationship(MySQL configuration)</a></h3>
                    <p>While developing a website, we need to store app data and user information in a safe and secure place and it should be easily accessible…</p>
                    <p>Aug 30, 2023</p>
                </article>
                <article className="blog-item">
                    <h3><a href="https://medium.com/aws-tip/data-visualization-using-matplotlib-pandas-django-beginners-level-1234567890" target="_blank" rel="noopener noreferrer">Data visualization using Matplotlib, Pandas-Django(Beginner's level)</a></h3>
                    <p>In this data driven world, Data plays a vital role in analyzing, decision making and solving various real world problems. Passing data in…</p>
                    <p>Aug 26, 2023</p>
                </article>
                
                <article className={`blog-item ${!isExpanded ? 'hidden' : ''}`}>
                    <h3><a href="https://medium.com/aws-tip/create-a-music-player-app-using-django-1234567890" target="_blank" rel="noopener noreferrer">Create A Music Player App using Django</a></h3>
                    <p>While learning a framework, creating fancy real life websites will help us to understand the concepts and architecture of the framework in a…</p>
                    <p>Jul 30, 2023</p>
                </article>
                <article className={`blog-item ${!isExpanded ? 'hidden' : ''}`}>
                    <h3><a href="https://medium.com/aws-tip/django-calculator-app-beginners-friendly-1234567890" target="_blank" rel="noopener noreferrer">Django-Calculator app(Beginner's friendly)</a></h3>
                    <p>Django is a powerful web framework which is used to create amazing websites. While learning a framework, we must do several mini projects in…</p>
                    <p>Jul 18, 2023</p>
                </article>
                <article className={`blog-item ${!isExpanded ? 'hidden' : ''}`}>
                    <h3><a href="https://medium.com/aws-tip/data-visualisation-django-with-django-chartjs-1234567890" target="_blank" rel="noopener noreferrer">Data visualisation-Django with django-chartjs</a></h3>
                    <p>Data visualisation is one of the best ways to suitcase a dataset. Picturizing a data will help us to convey the information in a efficient…</p>
                    <p>Jul 12, 2023</p>
                </article>
                <article className={`blog-item ${!isExpanded ? 'hidden' : ''}`}>
                    <h3><a href="https://medium.com/aws-tip/django-dynamic-html-page-creation-with-image-user-profile-page-1234567890" target="_blank" rel="noopener noreferrer">Django-Dynamic HTML page creation with image(user profile page)</a></h3>
                    <p>In this blog, we are going to create a log-in page for our page and we will create a dynamic html page for displaying user's profile and…</p>
                    <p>Jul 2, 2023</p>
                </article>
                <article className={`blog-item ${!isExpanded ? 'hidden' : ''}`}>
                    <h3><a href="https://medium.com/aws-tip/django-sign-in-page-with-otp-verification-via-email-1234567890" target="_blank" rel="noopener noreferrer">DJANGO-sign in page with otp verification via email</a></h3>
                    <p>While learning a framework, creating mini projects helps us to explore the features of the framework. Now, we are going to create a simple…</p>
                    <p>Jun 27, 2023</p>
                </article>
                <article className={`blog-item ${!isExpanded ? 'hidden' : ''}`}>
                    <h3><a href="https://medium.com/aws-tip/django-templates-configure-html-and-css-heard-of-html-inheritance-1234567890" target="_blank" rel="noopener noreferrer">Django templates(Configure HTML and CSS),heard of html inheritance?</a></h3>
                    <p>We know that, HTML is the user interface of any webpage. User interface will help the user to use the service of the website. Even though…</p>
                    <p>Jun 24, 2023</p>
                </article>
                <article className={`blog-item ${!isExpanded ? 'hidden' : ''}`}>
                    <h3><a href="https://medium.com/aws-tip/build-your-first-app-using-django-1234567890" target="_blank" rel="noopener noreferrer">Build your first app using Django</a></h3>
                    <p>Let's create our first app using Django in a structured manner.</p>
                    <p>Jun 22, 2023</p>
                </article>
            </div>
            <button id="read-more-btn" onClick={toggleExpanded}>
                {isExpanded ? 'Show Less' : 'Read More'}
            </button>
        </div>
    </section>
  );
}
