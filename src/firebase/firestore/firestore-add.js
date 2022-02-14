import {
  collection,
  addDoc,
  db,
  deleteDoc,
  getDoc,
  getDocs,
  doc,
  onSnapshot,
  query,
  where,
  orderBy,
  // updateDoc,
} from '../configuraciones.js';

// import {query, getDocs} from '../configuraciones.js';

export const savePost = (date, description, like, name, photo, user) => {
  return addDoc(collection(db, 'post'), {
    date,
    description,
    like,
    name,
    photo,
    user,
  });
};

export const getPosts = () => {
  const posts = collection(db, 'post');
  return getDocs(posts, orderBy('date', 'desc'));
};

export const getPost = (id) => {
  return getDoc(doc(db, 'post', id));
};

export const onGetPosts = (callback) => {
  return onSnapshot(collection(db, 'post'), callback);
};

export const deletePost = (id) => {
  return deleteDoc(doc(db, 'post', id));
};

export const getPostByUser = () => {
  const posts = collection(db, 'post');
  return query(posts, where('date', '==', true));
};

export const saveUser = (displayname, email, name) => {
  return addDoc(collection(db, 'users'), {
    displayname,
    email,
    name,
  });
};

export const onGetUser = (callback) => {
  return onSnapshot(collection(db, 'users'), callback);
};

export const getUser = (id) => {
  return getDoc(doc(db, 'users', id));
};
