import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import EditPost from './EditPost';
import SearchPost from './About';
import Missing from './Missing';
import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import useAxiosFetch from './hooks/useAxiosFetch';
import { useStoreActions } from 'easy-peasy';


function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts);

  const { data, fetchError, isLoading } = useAxiosFetch('  https://jsonplaceholder.typicode.com/posts/');

  useEffect(() => {
    setPosts(data);
  }, [data, setPosts])

  return (
    <div className="App">
      <Header title="React API" />
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home
            isLoading={isLoading}
            fetchError={fetchError}
          />
        </Route>
        <Route exact path="/post" component={NewPost} />
        <Route path="/edit/:id" component={EditPost} />
      <Route path="/post/:id" component={PostPage} />
        <Route path="/searchpost" component={SearchPost} />
        <Route path="*" component={Missing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
