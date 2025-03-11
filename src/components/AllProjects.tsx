import { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import ProjectModal from './ProjectModal';

const projectsperload = 6; // Number of projects to load each time

export interface allProjects {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

// Extended project data
const allProjects: allProjects[]  = [
  {
    id: 1,
    title: 'Modern Minimalist Living Room',
    description: 'A clean, contemporary space focused on functionality and style',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    category: 'Residential'
  },
  {
    id: 2,
    title: 'Luxurious Master Bedroom',
    description: 'Elegant and comfortable bedroom design with custom furnishings',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    category: 'Residential'
  },
  {
    id: 3,
    title: 'Contemporary Kitchen Design',
    description: 'Modern kitchen with high-end appliances and custom cabinetry',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    category: 'Residential'
  },
  {
    id: 4,
    title: 'Boutique Hotel Lobby',
    description: 'Sophisticated hotel lobby design with luxurious finishes',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    category: 'Hospitality'
  },
  {
    id: 5,
    title: 'Modern Office Space',
    description: 'Contemporary office design promoting productivity and collaboration',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    category: 'Commercial'
  },
  {
    id: 6,
    title: 'Luxury Retail Store',
    description: 'High-end retail space designed for optimal customer experience',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    category: 'Retail'
  },
  {
    id: 7,
    title: 'Urban Apartment',
    description: 'Smart space utilization in a modern city apartment',
    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    category: 'Residential'
  },
  {
    id: 8,
    title: 'Restaurant Interior',
    description: 'Atmospheric dining space with custom lighting and furniture',
    image: 'https://images.unsplash.com/photo-1537226972163-4ce3c7f02682?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    category: 'Hospitality'
  },
  {
    id: 9,
    title: 'Corporate Headquarters',
    description: 'Modern office design emphasizing brand identity and culture',
    image: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    category: 'Commercial'
  }
];

const categories = ['All', 'Residential', 'Commercial', 'Hospitality', 'Retail'];

const AllProjects = () => {
  const [selectedProject, setselectedproject] = useState<allProjects | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(projectsperload);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  // Filter projects based on category and search query
  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
    project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  //show only the number of projects that should be visible
  const displayProjects = filteredProjects.slice(0, currentPage);

  // Load more projects when scrolling to the bottom
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCurrentPage((prev) => prev + projectsperload);
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [currentPage]);

 // Reset projects when filters change
 useEffect(() => {
  setCurrentPage(projectsperload);
}, [activeCategory, searchQuery]);

  return (
    <div className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif text-gray-900 mb-4">Our Projects</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our latest interior design works.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === category
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h3 className="text-xl font-serif mb-2">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                  <button
                  onClick={() => setselectedproject(project)} 
                  className="mt-4 px-6 py-2 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors rounded-md">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {selectedProject && (
        <ProjectModal post={selectedProject} onClose={() => setselectedproject(null)} />
        )}

        {/* Loader (Infinite Scroll Trigger) */}
        <div ref={loaderRef} className="h-10 mt-10 flex justify-center">
        </div>
      </div>
    </div>
  );
};

export default AllProjects;