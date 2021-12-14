import SongListScreen from "./song-list-screen";
import SongsEditorScreen from "./songs-editor-screen";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/list", "/"]} exact={true}>
                    <SongListScreen/>
                </Route>
                <Route path="/edit/:id" exact={true}>
                    <SongsEditorScreen/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
