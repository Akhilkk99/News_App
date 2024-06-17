import { addDoc, collection, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, database } from '../../Firebase/setup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Comments = (props) => {
    const [comments, setComments] = useState("");
    const [newsComments, setNewsComments] = useState([]);

    const addComments = async () => {
        const newsDoc = doc(database, "News", `${props.url.substr(-10, 10)}`);
        const commentsRef = collection(newsDoc, "Comments");

        if (!auth.currentUser) {
            toast.warning("Please login");
            return;
        }

        try {
            await addDoc(commentsRef, {
                comments: comments,
                name: auth.currentUser.displayName,
                profileImage: auth.currentUser.photoURL
            });
            setComments("");
            showComments();
            toast.success("comment added")
        } catch (error) {
            console.error("Error adding comment: ", error);
        }
    };

    const showComments = async () => {
        const newsDoc = doc(database, "News", `${props.url.substr(-10, 10)}`);
        const commentsRef = collection(newsDoc, "Comments");
        try {
            const data = await getDocs(commentsRef);
            const filterData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }));
            setNewsComments(filterData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        showComments();
    }, []); 

    return (
        <div className='grid grid-rows-2'>
            <div className='p-5'>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add comments</label>
                <div className='flex'>
                    <input
                        onChange={(e) => setComments(e.target.value)}
                        value={comments}
                        type="text"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Comments"
                        required
                    />
                    <button
                        onClick={addComments}
                        type="button"
                        className="ml-2 focus:outline-none text-gray-900 bg-gray-50 hover:bg-slate-400 border border-gray-300 font-medium rounded-r-lg text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-full"
                    >
                        Add
                    </button>
                </div>
            </div>
            <div className='p-4'>
                {newsComments.map((data) => {
                    return (
                        <div key={data.id} className="flex items-center mb-4">
                            <img src={data.profileImage} className='rounded-full w-8 h-8 mr-3' alt={data.name} />
                            <div>
                                <h4 className="font-semibold text-sm font-semibold text-slate-500">{data.name}</h4>
                                <p className="text-sm">{data.comments}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <ToastContainer autoClose={3000} />
        </div>
    );
}

export default Comments;
