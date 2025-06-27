import DeleteModal from "@/components/modal/DeleteModal";
import { getUserDataFromStorage, setUserDataToStorage } from "@/utils/localStorageData";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function DeleteUserDetails() {
    const router = useRouter();
    const [userData, setUserData] = useState([]);
    const [open, setOpen] = useState(false);
    const { id } = router.query; 

    useEffect(() => {
        const data = getUserDataFromStorage();
        setUserData(data);
        if(id){
            const foundUser= data.find((user)=>user.id===parseInt(id));
            if(foundUser) setOpen(true);
        }
    }, []);

    const handleDelete = (id) => {
        const updatedData = userData.filter(user => user.id !== id);
        console.log(updatedData, "updatedData");        
        setUserData(updatedData);
        setUserDataToStorage(updatedData);
        alert("User deleted successfully!");
        setOpen(false);
        router.push("/");
    };

    if (!userData) return null;

    return (
        <>
            <DeleteModal
                open={open}
                setOpen={setOpen}
                userData={userData.find(user => user.id === parseInt(id))}
                onDelete={() => handleDelete(parseInt(id))}
                onClose={() => router.push("/")}
            />
        </>
    )
    
}