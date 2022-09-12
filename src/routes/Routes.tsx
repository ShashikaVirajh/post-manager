import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from 'components/notFounds/NotFound';
import CreatePost from 'components/post/CreatePost';
import About from 'pages/about/About';
import Home from 'pages/home/Home';
import Terms from 'pages/terms/Terms';
import ViewSingalPost from 'components/post/ViewSingalPost';
import EditPost from 'components/post/EditPost';
import Profile from 'components/profile/Profile';

const Routers = (): JSX.Element => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/profile/:username/*" element={<Profile />} />
        <Route path="/post/:id" element={<ViewSingalPost />} />
        <Route path="/post/:id/edit" element={<EditPost />} />
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default Routers;
