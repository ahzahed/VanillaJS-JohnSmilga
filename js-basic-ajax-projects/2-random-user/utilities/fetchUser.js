const URL = 'https://randomuser.me/api/';
const getUser = async()=>{
    const userFromOnline = await fetch(URL);
    const person = await userFromOnline.json();
    const user = person.results[0];
    const {phone} = user;
    const {email} = user;
    const {first, last}=user.name;
    const {password} = user.login;
    const {dob:{age}} = user;
    const {name, number} = user.location.street;
    const {large:img} = user.picture;
    return{
        name: `${first} ${last}`,
        email,
        phone,
        password,
        age,
        street:`${number} ${name}`,
        img
    }
}
export default getUser;