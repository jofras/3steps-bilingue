// src/app/[locale]/multimedia/page.js

// 1. Import the actual UI component from the pages directory
import Multimedia from '../../../pageComponents/Multimedia';

// 2. Export the default function that renders the component
// This is the component Next.js executes when a user visits /contact
export default function MultimediaRoute() {
  return (
    <Multimedia />
  );
}