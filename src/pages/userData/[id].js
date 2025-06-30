import UserDetails from "@/components/UserDetails";
import { getUserDataFromStorage } from "@/utils/localStorageData";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function UserDataView() {  
  const [singleUser, setSingleUser] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  
  useEffect(() => {
    const userData = getUserDataFromStorage();    
    if (id) {
      const user = userData.find((user) => user.id === parseInt(id));
      setSingleUser(user);
    }
  }, [id]);

  return (   
      <UserDetails user={singleUser} />    
  );
}
