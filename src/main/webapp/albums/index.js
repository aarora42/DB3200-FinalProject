import AlbumListScreen from "./album-list-screen";
import AlbumsEditorScreen from "./albums-editor-screen";
import OneToManyListScreen from "./one-to-many-list-screen";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/list", "/", "/:table/list"]} exact={true}>
                    <AlbumListScreen/>
                </Route>
                <Route path={["/edit/:id", "/:table/edit/:id"]} exact={true}>
                    <AlbumsEditorScreen/>
                </Route>
                <Route path={["/:oneTable/:id/:manyTable"]} exact={true}>
                    <OneToManyListScreen/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
