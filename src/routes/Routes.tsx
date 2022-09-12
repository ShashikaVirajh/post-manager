import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from 'components/notFounds/not-found';
import CreatePost from 'components/post/create-post';
import EditPost from 'components/post/edit-post';
import DetailedPost from 'components/post/detailed-post';
import Profile from 'components/profile/profile';
import Home from 'pages/home/home';
import About from 'pages/about/about';
import Terms from 'pages/terms/terms';
import { COMMON_ROUTES, POST_ROUTES, PROFILE_ROUTES } from 'enums/enums';

const Routers = (): JSX.Element => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path={PROFILE_ROUTES.PROFILE} element={<Profile />} />
        <Route path={POST_ROUTES.DETAILED_POST} element={<DetailedPost />} />
        <Route path={POST_ROUTES.EDIT_POST} element={<EditPost />} />
        <Route path={POST_ROUTES.CREATE_POST} element={<CreatePost />} />
        <Route path={COMMON_ROUTES.NOT_FOUND} element={<NotFound />} />
        <Route path={COMMON_ROUTES.ABOUT_PAGE} element={<About />} />
        <Route path={COMMON_ROUTES.TERM_PAGE} element={<Terms />} />
        <Route path={COMMON_ROUTES.HOME_PAGE} element={<Home />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default Routers;
