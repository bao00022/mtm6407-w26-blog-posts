export const postData = [
  {
    id: 1,
    author: 'Ethan Caldwell',
    publishedAt: '2025-01-08T10:22:00.000Z',
    title: 'How Browsers Render a Web Page',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: `
      <h2>The Rendering Process</h2>
      <p>When a user enters a URL, the browser sends a request to a server and receives HTML in response.</p>
      <p>The browser parses the HTML to build the DOM tree and processes CSS to construct the CSSOM.</p>
      <p>These structures combine to form the render tree, which is then painted to the screen.</p>
      <h2>Why It Matters</h2>
      <p>Understanding rendering helps developers write faster and more efficient web applications.</p>
    `
  },
  {
    id: 2,
    author: 'Maya Thompson',
    publishedAt: '2025-02-11T14:47:00.000Z',
    title: 'The Importance of Responsive Design',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: `
      <h2>Designing for All Devices</h2>
      <p>Users access websites from phones, tablets, and desktops with different screen sizes.</p>
      <p>Responsive design ensures layouts adapt fluidly to varying viewport widths.</p>
      <h2>Improving User Experience</h2>
      <p>A responsive interface reduces friction and increases engagement.</p>
      <p>Modern CSS features make building flexible layouts easier than ever.</p>
    `
  },
  {
    id: 3,
    author: 'Lucas Bennett',
    publishedAt: '2025-03-19T09:05:00.000Z',
    title: 'Understanding Web Security Basics',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: `
      <h2>Common Threats</h2>
      <p>Web applications face threats such as cross-site scripting and injection attacks.</p>
      <p>Developers must validate input and sanitize data before rendering it to users.</p>
      <h2>Secure Connections</h2>
      <p>HTTPS encrypts data transmitted between the client and the server.</p>
      <p>Security should be considered at every stage of development.</p>
    `
  },
  {
    id: 4,
    author: 'Naomi Fischer',
    publishedAt: '2025-04-27T17:30:00.000Z',
    title: 'The Evolution of JavaScript Frameworks',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: `
      <h2>From Vanilla JS to Frameworks</h2>
      <p>Early websites relied heavily on simple scripts and minimal interactivity.</p>
      <p>As applications grew more complex, frameworks emerged to manage state and UI updates.</p>
      <h2>Modern Development</h2>
      <p>Today’s frameworks emphasize component architecture and performance optimization.</p>
      <p>This shift has transformed how developers build scalable web applications.</p>
    `
  },
  {
    id: 5,
    author: 'Oliver Grant',
    publishedAt: '2025-05-16T12:40:00.000Z',
    title: 'Why Web Performance Impacts SEO',
    image: 'https://images.unsplash.com/photo-1638482856830-16b0e15fcf2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
    content: `
      <h2>Speed as a Ranking Factor</h2>
      <p>Search engines consider page load speed when ranking websites.</p>
      <p>Slow websites often experience higher bounce rates and lower conversions.</p>
      <h2>Optimization Techniques</h2>
      <p>Reducing unused code and optimizing assets can dramatically improve load times.</p>
      <p>Performance improvements benefit both users and search visibility.</p>
    `
  }
];