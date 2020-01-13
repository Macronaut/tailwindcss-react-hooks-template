import {useRoutes} from 'hookrouter';
import routes from './routes/routes';

export default function App() {
  const routeResult = useRoutes(routes);
  return routeResult;
}