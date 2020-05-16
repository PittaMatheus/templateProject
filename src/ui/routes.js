import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { Layout } from 'antd';

import Home from './pages/home'
import Teste from './pages/teste'
import ConfLayout from './pages/confLayout'
import LayoutHeader from "./components/layoutHeader";
import Loading from "./components/loading";

import LayoutBread from "./components/layoutBread";
import LayoutFooter from "./components/layoutFooter";

const Login = lazy(() => import('./pages/login'));


const { Content } = Layout;


class Routes extends Component {
  render() {
    return <section className="content">
      <Layout>
        <LayoutHeader colorBackGround={"#00474f"} />
        <Content className="site-layout" style={{ padding: '0 15px', marginTop: 64 }}>
          <LayoutBread />
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <Suspense fallback={<Loading loading />}>
              <Switch>
                <Redirect from="/" exact to="/home" />
                <Route path="/home" exact component={Home} />
                <Route path="/teste" exact component={Teste} />
                <Route path="/conf" exact component={ConfLayout} />
                <Route path="/login" exact component={Login} />

                {/* <Route component={NoMatch} /> */}
              </Switch>
            </Suspense>
          </div>
        </Content>
        <LayoutFooter text={"exemplo Footer"} />
      </Layout>
    </section>
  }
}
export default withRouter(Routes);

