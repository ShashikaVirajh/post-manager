import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from 'components/not-founds/not-found.component';
import { CreatePost } from 'components/post/create-post.component';
import EditPost from 'components/post/edit-post.component';
import DetailedPost from 'components/post/detailed-post.component';
import { Profile } from 'components/profile/profile.component';
import Home from 'pages/home/home.page';
import { About } from 'pages/about/about.page';
import { Terms } from 'pages/terms/terms.page';
import { COMMON_ROUTES, POST_ROUTES, PROFILE_ROUTES } from 'enums/routes.enums';
import { HomeGuest } from 'pages/home-guest/home-guest.page';

const Routers = (): JSX.Element => {
  const loggedIn = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PROFILE_ROUTES.PROFILE} element={<Profile />} />
        <Route path={POST_ROUTES.DETAILED_POST} element={<DetailedPost />} />
        <Route path={POST_ROUTES.EDIT_POST} element={<EditPost />} />
        <Route path={POST_ROUTES.CREATE_POST} element={<CreatePost />} />
        <Route path={COMMON_ROUTES.NOT_FOUND} element={<NotFound />} />
        <Route path={COMMON_ROUTES.ABOUT_PAGE} element={<About />} />
        <Route path={COMMON_ROUTES.TERM_PAGE} element={<Terms />} />
        <Route path={COMMON_ROUTES.HOME_PAGE} element={loggedIn ? <Home /> : <HomeGuest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
