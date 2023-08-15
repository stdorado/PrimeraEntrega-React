import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc, 
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtTp_rZBng2xhEIBXZzt09CeEbItaDLo4",
  authDomain: "proyecto-final-react-34ee9.firebaseapp.com",
  projectId: "proyecto-final-react-34ee9",
  storageBucket: "proyecto-final-react-34ee9.appspot.com",
  messagingSenderId: "957544750465",
  appId: "1:957544750465:web:e6fca059a1746d04175c80",
  measurementId: "G-5BK7BPR7GJ"
};

const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);

async function getProductsByCategory(categoria) {
  const productsRef = collection(db, "productos");
  const q = query(productsRef, where("categorias", "==", categoria));

  const querySnapshot = await getDocs(q);
  const productsData = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return productsData;
}

async function getProductData(id) {
  const productRef = doc(db, "productos", id);
  const productSnapshot = await getDoc(productRef);

  if (productSnapshot.exists()) {
    const productData = { id: productSnapshot.id, ...productSnapshot.data() };
    console.log("Product data:", productData);
    return productData;
  } else {
    throw new Error("No encontramos ese producto.");
  }
}

async function getAllProducts() {
  const productsRef = collection(db, "productos");
  const querySnapshot = await getDocs(productsRef);
  const productsData = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return productsData;
}

async function createOrder(order) {
  try {
    const ordersRef = collection(db, "orders");
    const docRef = await addDoc(ordersRef, order);
    return docRef.id;
  } catch (error) {
    console.error("Error al crear la orden en Firebase:", error);
    return { error: "No se pudo crear la orden en Firebase" };
  }
}

export {
  getProductsByCategory,
  getProductData,
  getAllProducts,
  createOrder
};