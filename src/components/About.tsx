const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="Interior Designer at work"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif text-gray-900 mb-6">About Our Studio</h2>
            <p className="text-gray-600 mb-6">
              With over a decade of experience in interior design, we've built our reputation on creating
              spaces that are both beautiful and functional. Our approach combines timeless design
              principles with contemporary trends to create interiors that stand the test of time.
            </p>
            <p className="text-gray-600 mb-8">
              We believe that every space tells a story, and we're here to help you tell yours. Our
              team of experienced designers works closely with each client to understand their vision,
              lifestyle, and needs, ensuring that every project is uniquely tailored to them.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-serif text-gray-900 mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-gray-900 mb-2">200+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-gray-900 mb-2">50+</div>
                <div className="text-gray-600">Design Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;