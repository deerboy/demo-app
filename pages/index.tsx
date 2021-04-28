import firebase from 'firebase/app';
import { useUser } from '../context/userContext';
import admin from '../firebase/node';

const Home = ({ monsters }) => {
  const { user, loadingUser } = useUser();

  const login = () => {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };

  const setMonster = () => {
    const id = firebase.firestore().collection('_').doc().id;
    firebase.firestore().doc(`monsters/${id}`).set({
      id,
      name: 'モンスターA',
    });
  };

  return (
    <>
      <p>ログイン</p>
      {loadingUser && <p>ローディング</p>}
      {user && <p>{user.displayName}がログイン中</p>}
      <button onClick={login}>Googleでログイン</button>
      <button onClick={setMonster}>モンスターを追加</button>

      <h2>モンスター一覧</h2>
      {monsters?.map((monster) => {
        return <p>{monster.name}</p>;
      })}
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const monsters = (
    await admin.firestore().collection('monsters').get()
  ).docs.map((doc) => doc.data());
  return {
    props: {
      monsters,
    },
    revalidate: 60,
  };
};
