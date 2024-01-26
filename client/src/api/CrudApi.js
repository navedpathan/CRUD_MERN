import axios from 'axios';

// const apiKey = 'http://localhost:9900';
const apiKey = 'https://crud-react-js-api.vercel.app';

// adduser api
export const addUser = async(data) => {
    try{
        console.log(data);
    //    return await axios.post(`http://localhost:9900/adduser`,data);
       return await axios.post(`${apiKey}/adduser`,data);
    }
    catch(err){
        console.log("Error occurs while running adduser function",err);
    }
};

// view  user api
export const getUser = async(id) => {
    // id can be null if we need to view all user
    id = id || '';
    try{
    //    return await axios.get(`http://localhost:9900/alluser/${id}`);
          return await axios.get(`${apiKey}/alluser/${id}`);
        }
        catch(err){
            console.log("Error occurs while running getUser function",err);
        }
        console.log(apiKey)
};

// update user api
export const updateUser = async(data,id) => {
    try{
    //    return await axios.put(`http://localhost:9900/updateuser/${id}`,data);
       return await axios.put(`${apiKey}/updateuser/${id}`,data);
    }
    catch(err){
        console.log("Error occurs while running updateUser function");
    }
};

// delete user api
export const deleteUser = async(id) => {
    try{
    //    return await axios.delete(`http://localhost:9900/${id}`);
       return await axios.delete(`${apiKey}/${id}`);
    }
    catch(err){
        console.log("Error occurs while running deleteUser function");
    }
};
