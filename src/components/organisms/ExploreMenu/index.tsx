import {
  Button,
  Grid,
  Icon,
  Modal,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

type tabPanel = {
  children: any;
  value: any;
  index: any;
};

type Category = {
  name: string;
  icon: string;
};
const Explore: React.FC = () => {
  const [allCategories, setAllCategories] = React.useState<Category[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [mostPopularTitles, setMostPopularTitles] = useState<Category[]>([]);
  const [recentlyAddedTitle, setRecentlyAddedTitle] = useState<Category[]>([]);
  function TabPanel(props: tabPanel) {
    const { children, value, index } = props;
    return <>{value === index && <h1>{children}</h1>}</>;
  }
  useEffect(() => {
    setAllCategories([]);
  }, []);
  let exploreByCategory =
    allCategories.length > 0 ? (
      allCategories.map((category) => {
        <Grid item>
          <div>
            <Icon image={category.icon} />
            <Typography>{category.name}</Typography>
          </div>
        </Grid>;
      })
    ) : (
      <></>
    );
  let recentTitles =
    mostPopularTitles.length > 0 ? (
      mostPopularTitles.map((category) => {
        <Grid item>
          <div>
            <Icon image={category.icon} />
            <Typography>{category.name}</Typography>
          </div>
        </Grid>;
      })
    ) : (
      <></>
    );
  let mostPopularTitle =
    recentTitles.length > 0 ? (
      recentTitles.map((category) => {
        <Grid item>
          <div>
            <Icon image={category.icon} />
            <Typography>{category.name}</Typography>
          </div>
        </Grid>;
      })
    ) : (
      <></>
    );

  return (
    <div>
      <Grid item xs={6}>
        <Button title="Explore"> </Button>
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon onClick={handleOpen} />}
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <div>
          <Tabs>
            <Tab></Tab>
            <Tab></Tab>
            <Tab></Tab>
          </Tabs>
          <TabPanel value={0} index={0}>
            {exploreByCategory}
          </TabPanel>
          <TabPanel value={0} index={0}>
            {recentTitles}
          </TabPanel>
          <TabPanel value={0} index={0}>
            {mostPopularTitle}
          </TabPanel>
        </div>
      </Modal>
    </div>
  );
};
export default Explore;
