import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Watchpage from './components/Watchpage';

function App() {

  const appRouter = createBrowserRouter([{

    path:"/",
    element: <Body/>,
    children: [

      {
        path:"/",
        element: <MainContainer/>
      },

      {
        path: "/watch",
        element: <Watchpage/>
      }
    ]

  }])


  return (

    <Provider store={store}>
    <div className="App">
      <div>
      <Header/>
      <RouterProvider router={appRouter}/> 
      </div>
      {/**
         *
         * Head
         * Body
         *  Sidebar
         *    MenuItems
         *  MainContainer
         *    ButtonsList
         *    VideoContainer
         *      VideoCard
         *
         *
         */}
    </div>
    </Provider>
  );
}
export default App;
