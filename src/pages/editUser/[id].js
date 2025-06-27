
import { useRouter } from "next/router";
import {  useEffect, useState } from "react";
import AddEditModal from "@/components/modal/AddEditModal";
import { getUserDataFromStorage} from "@/utils/localStorageData";
export default function EditUserDetails() {
  const [singleUser, setSingleUser] = useState([]);
  const [userData, setUserData] = useState([]);
  const router = useRouter();
  const { id } = router.query; 
  useEffect(() => {
    const data = getUserDataFromStorage();
    setUserData(data);
    if (id) {
      const foundUser = data.find((user) => user.id === parseInt(id));
      if (foundUser) setSingleUser(foundUser);
    }
  }, [id]);

  if (!singleUser) return null;
  
  
  return (
    <>
      <AddEditModal
     id={id}    
     open={true}
     userData={singleUser}
     setUserData={setUserData}
     onClose={() => router.push("/")}
     title="Edit User Details"
        />
    </>
  );
}
