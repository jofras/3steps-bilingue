// src/app/contact/page.js

// 1. Import the actual UI component from the pages directory
import Contact from '../../../pages/Contact';

// 2. Export the default function that renders the component
// This is the component Next.js executes when a user visits /contact
export default function ContactRoute() {
  return (
    <Contact />
  );
}