import ArtistListScreen from "./artist-list-screen";
import ArtistsEditorScreen from "./artists-editor-screen";
import OneToManyListScreen from "./one-to-many-list-screen";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/list", "/", "/:table/list"]} exact={true}>
                    <ArtistListScreen/>
                </Route>
                <Route path={["/edit/:id", "/:table/edit/:id"]} exact={true}>
                    <ArtistsEditorScreen/>
                </Route>
                <Route path={["/:oneTable/:id/:manyTable"]} exact={true}>
                    <OneToManyListScreen/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
