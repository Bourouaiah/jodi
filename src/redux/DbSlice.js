import { createSlice } from '@reduxjs/toolkit'
import { deleteDoc, doc } from 'firebase/firestore';
import { getStorage, ref, deleteObject } from "firebase/storage";

import { db } from '../firebase/firebaseConfig';
// import { firebase } from 'firebase';

const initialState = {
    products: [],
    videos: [],
    loader: false
}

const DbSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getProducts: (state, action) => {
            state.products = action.payload.data
            state.loader = action.payload.loader
            console.log(state.products, 'products')

        },
        getVideos: (state, action) => {
            state.videos = action.payload.videos
            state.loader = action.payload.loader
            localStorage.setItem('videos', JSON.stringify(state.videos))

            console.log(state.videos, 'videos')
            console.log(state.products, 'products')
        },
        deleteItem: (state, action) => {
            state.products = state.products.filter(item => item.id !== action.payload)
            
        }, addProductsToFirestore: (state, action) => {
            const deleteFile = async (filePath) => {

                const storage = getStorage();

                // Create a reference to the file to delete
                const desertRef = ref(storage, filePath);

                // Delete the file
                deleteObject(desertRef).then(() => {
                  // File deleted successfully
                }).catch((error) => {
                    // Uh-oh, an error occurred!
                    console.log(error) // File deleted successfully
                });
            };
            async function addToDb() {
                const collectionRef = doc(db, action.payload.colName, action.payload.id);
                await deleteDoc(collectionRef)
                    .then(() => {
                        console.log("Document successfully updated.");
                    })
                    .catch((error) => {
                        console.error("Error updating document: ", error);
                    });
            }
            addToDb()
            if (action.payload.colName === 'products') {

                deleteFile(action.payload.path)
            } else if (action.payload.colName === 'videos') {
                action.payload.path.forEach((item) => {
                    deleteFile(item)
                })
            }
        }
    }
});

export const { getProducts, getVideos, deleteItem, addProductsToFirestore } = DbSlice.actions

export default DbSlice.reducer
