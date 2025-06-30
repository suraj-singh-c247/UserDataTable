import DeleteModal from "@/components/modal/DeleteModal";
import {
  getUserDataFromStorage,
  setUserDataToStorage,
} from "@/utils/localStorageData";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function DeleteUserDetails() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { id } = router.query;
  const data = getUserDataFromStorage();

  useEffect(() => {
    if (id) {
      const foundUser = data.find((user) => user.id === parseInt(id));
      if (foundUser) setOpen(true);
    }
  }, []);

  const handleDelete = (e, id) => {
    e.preventDefault();
    const updatedData = data.filter((user) => user.id !== id);
    setUserDataToStorage(updatedData);
    toast.success("User deleted successfully!");
    setOpen(false);
    router.push("/");
  };

  return (
    <DeleteModal
      open={open}
      setOpen={setOpen}
      title="Delete User"
      message="Are you sure you want to delete this user?"
      onDelete={(e) => handleDelete(e, parseInt(id))}
      onClose={() => router.push("/")}
    />
  );
}
