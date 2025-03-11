export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Art of Minimalist Design',
    excerpt: 'Discover how less can truly be more in interior design',
    content: `Minimalist design is more than just a trend—it's a philosophy that emphasizes the beauty of simplicity and functionality. In this article, we explore the key principles of minimalist interior design and how to implement them in your space.

    The core principles of minimalist design include:
    - Clean lines and simple forms
    - A neutral color palette
    - Quality over quantity
    - Purposeful furniture placement
    - Emphasis on natural light
    
    When executed properly, minimalist design creates spaces that are both beautiful and functional, promoting a sense of calm and order in our increasingly chaotic world.`,
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1517097908492-5f1398d9d0c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Color Psychology in Interior Design',
    excerpt: 'How different colors affect mood and atmosphere',
    content: `Colors have a profound impact on our emotions and behavior. Understanding color psychology is crucial for creating spaces that not only look beautiful but also feel right. This guide explores how different colors can influence the atmosphere of a room and the mood of its occupants.

    Key color associations:
    - Blue: Calm, trust, and stability
    - Green: Growth, harmony, and nature
    - Yellow: Energy, optimism, and creativity
    - Red: Passion, excitement, and warmth
    
    Learn how to use these colors effectively to create the perfect atmosphere for any room in your home.`,
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Sustainable Design Trends',
    excerpt: 'Eco-friendly approaches to modern interior design',
    content: `Sustainable design is no longer just a trend—it's a necessity. This article explores how to create beautiful, environmentally conscious spaces that don't compromise on style or functionality.

    Key aspects of sustainable design:
    - Use of renewable materials
    - Energy-efficient lighting and appliances
    - Recycled and upcycled furniture
    - Natural ventilation systems
    - Low-VOC paints and finishes
    
    Discover how to make your home both beautiful and environmentally responsible.`,
    date: 'March 5, 2024',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Small Space Solutions',
    excerpt: 'Maximizing functionality in compact living spaces',
    content: `Living in a small space doesn't mean sacrificing style or comfort. Learn innovative ways to maximize every square foot while creating a beautiful and functional home.

    Essential tips for small spaces:
    - Multi-functional furniture
    - Vertical storage solutions
    - Strategic lighting
    - Space-saving layouts
    - Visual tricks to create depth
    
    Transform your compact space into a comfortable and stylish haven.`,
    date: 'March 1, 2024',
    image: 'https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'Mixing Patterns and Textures',
    excerpt: 'Creating visual interest through layered design',
    content: `The art of mixing patterns and textures is essential for creating rich, dynamic interiors. This guide shows you how to combine different elements while maintaining harmony and balance.

    Learn about:
    - Pattern scaling and proportion
    - Texture combinations
    - Color coordination
    - Balance and rhythm
    - Common mixing mistakes to avoid
    
    Master the art of layering to create sophisticated and interesting spaces.`,
    date: 'February 25, 2024',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'Lighting Design Fundamentals',
    excerpt: 'The impact of proper lighting in interior design',
    content: `Lighting is one of the most crucial elements in interior design, affecting everything from functionality to mood. This comprehensive guide covers the essentials of lighting design.

    Key lighting concepts:
    - Layered lighting approach
    - Task vs. ambient lighting
    - Natural light optimization
    - Fixture selection
    - Color temperature
    
    Transform your space with proper lighting techniques and choices.`,
    date: 'February 20, 2024',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];