import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from "next/head";

function MeetupDetails(props) {
  return (
    <>
    <Head>
      <title>{props.MeetupDeta.title}</title>
      <meta name="description" content={props.MeetupDeta.description} />
    </Head>
      <MeetupDetail
        image={props.MeetupDeta.image}
        title={props.MeetupDeta.title}
        address={props.MeetupDeta.address}
        description={props.MeetupDeta.description} // Corrected typo here from 'discription' to 'description'
      />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://erinyanis88:I0UKGrQgupZ7KH63@cluster0.xqqqasz.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://erinyanis88:I0UKGrQgupZ7KH63@cluster0.xqqqasz.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  // Corrected the ObjectId instantiation
  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      MeetupDeta: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.data.title,
        address: selectedMeetup.data.address,
        image: selectedMeetup.data.image,
        description: selectedMeetup.data.description,
      },
    },
  };
}

export default MeetupDetails;
