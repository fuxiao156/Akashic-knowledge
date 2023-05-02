import ReactDOM from 'react-dom/client';
import { bootstrap } from '@modern-js/runtime';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';

export default (App: React.ComponentType) => {
  // do something before bootstrap...
  bootstrap(App, 'root', undefined, ReactDOM);
};
