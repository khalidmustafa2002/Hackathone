import React, { useState, useEffect } from 'react';
import { collection, deleteDoc, doc, getDocs, setDoc } from 'firebase/firestore/lite';
import { firestore } from '../../../config/firebase';

export default function About() {
    const [users, setUsers] = useState([]);
    const [userForEdit, setUserForEdit] = useState({});
    const handleUserForEdit = (e) => {
        setUserForEdit({ ...userForEdit, [e.target.name]: e.target.value })
    }
    const handleEdit = (users) => {
        setUserForEdit(users)
    }
    const handleUpdate = async (user) => {
        await setDoc(doc(firestore, "userData", user.id), user, { merge: true });
        let newUser = users.map((todo) => {
            if (todo.id === user.id)
                return user;
                return todo;
        })
        setUsers(newUser);
        setUserForEdit({});
    }
    const handleDelete=async(user)=>{
        await deleteDoc(doc(firestore, "userData", user.id));
        let newUser=users.filter((olduser)=>{
            return user.id!==olduser.id;
        })
        setUsers(newUser);
    }
    const fetchData = async () => {
        let array = [];
        const querySnapshot = await getDocs(collection(firestore, "userData"));
        querySnapshot.forEach((doc) => {
            let data = doc.data();
            data.id = doc.id;
            array.push(data);
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", data);
        })
        setUsers(array);
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            <h1 className='text-center'>Event Planner</h1>
            {users.map((todo, i) => {
                return <div className="container">
                    <div className="row">
                        <div className="col">
                            <div class="card mb-3 w-50 mx-auto" style={{ maxwidth: "540px" }}>
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src="https://source.unsplash.com/600x800/?event" class="img-fluid rounded-start" style={{ width: "100%", height: "100%" }} alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <p class="card-text">Title : <span>{todo.title}</span></p>
                                            <p class="card-text">Location : <span>{todo.location}</span></p>
                                            <p class="card-text">Description : <span>{todo.description}</span></p>
                                            <div>
                                                <button className='btn btn-success me-1 rounded-0' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { handleEdit(todo) }}>Edit</button>
                                                <button className='btn btn-danger rounded-0' onClick={()=>{handleDelete(todo)}}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })}
            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Event Edited</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="row">
                                <input type="text" name='title' placeholder='Title' value={userForEdit.title} onChange={handleUserForEdit} className='form-control' />
                                <input type="text" name='location' placeholder='Location' value={userForEdit.location} onChange={handleUserForEdit} className='form-control my-2' />
                                <input type="text" name='description' placeholder='Description' value={userForEdit.description} onChange={handleUserForEdit} className='form-control' />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => { handleUpdate(userForEdit) }}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
