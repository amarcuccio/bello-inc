import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSun, faMoon, faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faSun, faMoon, faEnvelope);

const MenuItems = [
  { id: 'about', display: 'About Us', url: '/about' },
  { id: 'services', display: 'Services', url: '/services' },
  { id: 'projects', display: 'Projects', url: '/projects' },
  { id: 'contact', display: 'Contact Us', url: '/contact' },
];
const SocialSites = [
  {
    id: 'facebook',
    icon: 'facebook-f',
    url: 'https://www.facebook.com/BelloCoInc',
  },
  {
    id: 'linkedin',
    icon: 'linkedin-in',
    url: 'https://www.linkedin.com/company/bellocoinc/',
  },
  { id: 'email', icon: 'envelope', url: 'mailto:inquiry@belloco.ca' },
];

export { MenuItems, SocialSites };
