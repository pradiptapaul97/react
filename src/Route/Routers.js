import React from 'react' 
import {Switch,Route,Redirect,BrowserRouter as Router} from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
import Navbarr from '../Component/Navbarr'
import Products from '../Products/Products'
import productDetails from '../Products/ProductDetails'
import SubDetails from '../Products/SubDetails'
import Team from '../Team/Team'
function Routers(){
    return(
        <>
            <Router>
                <Navbarr></Navbarr>
                
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/" component={Home} />
                    {/* <Route exact path="/">
                        <Redirect to=""/>
                    </Route> */}
                    <Route exact path="/about" component={About} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/team" component={Team} />
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/products/:detail" component={productDetails} />
                    <Route exact path="/products/:det/:subdetail" component={SubDetails} />



                    <Route render={() => <h1>404: page not found</h1>} />
                </Switch>
            </Router>
        </>
    )
}

export default Routers