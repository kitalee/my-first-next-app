import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://wilstar.com/wp-content/uploads/2020/12/new-years-eve-1953253_640.jpg",
    address: "test address1",
    description: "test desc1",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://wilstar.com/wp-content/uploads/2020/12/new-years-eve-1953253_640.jpg",
    address: "test address2",
    description: "test desc2",
  },
  {
    id: "m3",
    title: "A third meetup",
    image:
      "https://wilstar.com/wp-content/uploads/2020/12/new-years-eve-1953253_640.jpg",
    address: "test address33",
    description: "test desc3",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
