import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ReaderList } from "./reader/ReaderList";
import { ReaderCreate } from "./reader/ReaderCreate";
import { ReaderEdit } from "./reader/ReaderEdit";
import { ReaderShow } from "./reader/ReaderShow";
import { PostAnalyticsList } from "./postAnalytics/PostAnalyticsList";
import { PostAnalyticsCreate } from "./postAnalytics/PostAnalyticsCreate";
import { PostAnalyticsEdit } from "./postAnalytics/PostAnalyticsEdit";
import { PostAnalyticsShow } from "./postAnalytics/PostAnalyticsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"BlogAnalyticsService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Reader"
          list={ReaderList}
          edit={ReaderEdit}
          create={ReaderCreate}
          show={ReaderShow}
        />
        <Resource
          name="PostAnalytics"
          list={PostAnalyticsList}
          edit={PostAnalyticsEdit}
          create={PostAnalyticsCreate}
          show={PostAnalyticsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
