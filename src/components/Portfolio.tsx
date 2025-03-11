import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Modern Minimalist Living Room',
    description: 'A clean, contemporary space focused on functionality and style',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 2,
    title: 'Luxurious Master Bedroom',
    description: 'Elegant and comfortable bedroom design with custom furnishings',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 3,
    title: 'Contemporary Kitchen Design',
    description: 'Modern kitchen with high-end appliances and custom cabinetry',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of thoughtfully designed spaces that reflect our commitment to beauty and functionality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-serif text-white mb-2">{project.title}</h3>
                  <p className="text-gray-200 text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/allprojects"
            className="inline-block px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-md hover:bg-gray-900 hover:text-white transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;