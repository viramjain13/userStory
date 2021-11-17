import { Tab, Tabs } from "@material-ui/core";
import React from "react";

type tabPanel = {
  children: any;
  value: any;
  index: any;
};
export const index = () => {
  function TabPanel(props: tabPanel) {
    const { children, value, index } = props;
    return <>{value === index && <h1>{children}</h1>}</>;
  }

  let exploreByCategory=<></>
  let recentTitles=<></>
  let mostPopularTitle=<></>
  
  return (
    <div>
      <Tabs>
        <Tab></Tab>
        <Tab></Tab>
        <Tab></Tab>
      </Tabs>
      <TabPanel value={0} index={0}>{exploreByCategory}</TabPanel>
      <TabPanel value={0} index={0}>{recentTitles}</TabPanel>
      <TabPanel value={0} index={0}>{mostPopularTitle}</TabPanel>
    </div>
  );
};
