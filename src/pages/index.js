import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import { Box, Container, Paper, Typography } from "@mui/material";
// user utils
import { data } from "@/utils/data.js";
import { userColumns } from "@/utils/column.js";
import Search from "@/components/Search";
import {
  getUserDataFromStorage,
  setUserDataToStorage,
} from "@/utils/localStorageData";
// react hooks
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// custom modal
import AddEditModal from "@/components/modal/AddEditModal";
import DataTable from "@/components/DataTable";
import CustomButton from "@/components/CustomButton";

// Icons
import AddIcon from "@mui/icons-material/Add";
// this for styles
import styles from "@/styles/Home.module.css";
import btnStyles from "@/styles/Button.module.css";
import searchStyles from "@/styles/Search.module.css";
import ViewModal from "@/components/modal/ViewModal";
import DeleteModal from "@/components/modal/DeleteModal";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();
  const pathname = router.pathname.replace(/^\//, "");

  const { search = "", page = "1", rowPerPage = "10" } = router.query;
  //state
  const [addOpen, setAddOpen] = useState(false);
  const [userData, setUserData] = useState(data);
  const [singleUser, setSingleUser] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [customPage, setCustomPage] = useState(Number(page) - 1);
  const [customRowsPerPage, setCustomRowsPerPage] = useState(
    Number(rowPerPage)
  );
  const [viewModal, setViewModal] = useState({ id: null, open: false });
  const [deleteModal, setDeleteModal] = useState({ id: null, open: false });
  const [editModal, setEditModal] = useState({ id: null, open: false });
  // useEffect to initialize user data from local storage or default data
  // and set it to state

  useEffect(() => {
    if (!router.isReady) return;
    const storedData = getUserDataFromStorage();
    if (storedData && storedData.length > 0) {
      setUserData(storedData);
    } else {
      setUserData(data);
      setUserDataToStorage(data);
    }
  }, [router.isReady, editModal.id, deleteModal.id]);

  useEffect(() => {
    const storedData = getUserDataFromStorage();
    if (!search && !search.trim() === "") {
      setUserData(storedData);
      setSearchText("");
      return;
    }
    const filteredData = storedData.filter((user) => {
      return (
        user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        user.email.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        user.role.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        user.phoneNumber
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase()) ||
        user.status.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    });

    setUserData(filteredData);
    setSearchText(search);
    if (search.length === 0) {
      router.push({
        pathname: pathname,
        query: {},
      });
    }
  }, [search]);
  // It's use for edit
  useEffect(() => {
    const data = getUserDataFromStorage();
    if (editModal?.id) {
      const foundUser = data.find(
        (user) => user.id === parseInt(editModal?.id)
      );
      if (foundUser) setSingleUser(foundUser);
    }
  }, [editModal?.id]);

  if (!singleUser) return null;

  // useEffect for pagination
  useEffect(() => {
    setCustomPage(Number(customPage));
    setCustomRowsPerPage(Number(customRowsPerPage));
  }, [customPage, customRowsPerPage]);

  // Function to handle search input
  const handleSearch = (searchTerm) => {
    if (searchTerm.length > 3) {
      setSearchText(searchTerm);
    }

    router.push({
      pathname: pathname,
      query: { search: searchTerm },
    });
  };
  // Function to clear search input and reset user data
  const handleClear = () => {
    setSearchText("");
    router.push({
      pathname: pathname,
      query: {},
    });
    const storedData = getUserDataFromStorage();
    setUserData(storedData);
  };

  // Function to handle page change
  const handlePageChange = (event, newPage) => {
    setCustomPage(newPage);
    router.push({
      pathname: pathname,
      query: {
        ...router.query,
        page: customPage + 1,
        rowPerPage: customRowsPerPage,
      },
    });
  };

  const handleRowPerPageChange = (event) => {
    const newRowPerPage = parseInt(event.target.value, 10);
    setCustomRowsPerPage(newRowPerPage);
    setCustomPage(1);
    router.push({
      pathname: pathname,
      query: { ...router.query, page: 1, rowPerPage: newRowPerPage },
    });
  };

  // delete user
  const handleDelete = (id) => {
    const updatedData = userData.filter((user) => user.id !== id);
    setUserData(updatedData);
    setUserDataToStorage(updatedData);
  };

  return (
    <>
      <Head>
        <title>Data Table Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box className={`${geistSans.variable} ${geistMono.variable}`}>
        <main className={styles.main}>
          <Container maxWidth="xl" className={styles.container}>
            <Paper className={styles.paper}>
              <Typography variant="h4" className={styles.title}>
                User Data
              </Typography>

              <Box className={searchStyles.searchContainer}>
                <Search
                  type={"text"}
                  searchTerm={searchText}
                  setSearchTerm={setSearchText}
                  handleSearch={handleSearch}
                  handleClear={handleClear}
                />
                <Box className={btnStyles.buttonContainer}>
                  <CustomButton
                    variant="contained"
                    label="Add User"
                    startIcon={<AddIcon />}
                    onClick={() => setAddOpen(true)}
                    className={btnStyles.btn}
                  />
                </Box>
              </Box>
              <DataTable
                page={customPage}
                rowsPerPage={customRowsPerPage}
                count={userData.length}
                userData={userData.slice(
                  customPage * customRowsPerPage,
                  customPage * customRowsPerPage + customRowsPerPage
                )}
                onPageChange={handlePageChange}
                onRowChange={handleRowPerPageChange}
                columns={userColumns}
                setViewModal={setViewModal}
                setEditModal={setEditModal}
                setDeleteModal={setDeleteModal}
              />
            </Paper>
          </Container>
        </main>
      </Box>
      {/* This modal for add user */}
      <AddEditModal
        open={addOpen || editModal.open}
        id={editModal?.id}
        userData={editModal?.id ? singleUser : userData}
        setUserData={editModal?.id ? setSingleUser : setUserData}
        onClose={() => {
          editModal.id ? setEditModal({ open: false }) : setAddOpen(false);
        }}
        title={editModal.open ? "Edit User Details" : "Add User Details"}
      />
      <ViewModal
        title={"User Details"}
        open={viewModal.open}
        id={viewModal?.id}
        onClose={() => setViewModal({ open: false })}
        userData={userData}
        setUserData={setUserData}
      />
      <DeleteModal
        open={deleteModal.open}
        id={deleteModal?.id}
        userData={userData}
        onDelete={handleDelete}
        setDeleteModal={setDeleteModal}
        title="Delete User"
        message="Are you sure you want to delete this user?"
        onClose={() => setDeleteModal({ open: false })}
      />
    </>
  );
}
