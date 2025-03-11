import { Home, PenTool, Palette, Camera } from 'lucide-react';

const services = [
  {
    icon: <Home className="w-6 h-6" />,
    title: 'Interior Design',
    description: 'Full-service interior design from concept to completion'
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: 'Space Planning',
    description: 'Optimal layout solutions for both residential and commercial spaces'
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Color Consultation',
    description: 'Expert color schemes that reflect your style and personality'
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: '3D Visualization',
    description: 'Realistic 3D renderings to visualize your space before implementation'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive interior design services tailored to your unique style and needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-gray-900 mb-4">{service.icon}</div>
              <h3 className="text-xl font-serif text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;