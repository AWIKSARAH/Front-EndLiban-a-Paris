import React from 'react'
import "./about.css";
export default function About() {
  return (
    <div>About</div>
  )
}
// import * as React from "react";
// import { useState } from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
// import IconButton from "@mui/material/IconButton";
// import EditIcon from "@mui/icons-material/Edit";
// import Grid from "@mui/material/Grid";
// import TextField from "@mui/material/TextField";
// import axios from "axios";
// import { toast } from "react-toastify";
// import classes from "./card.module.css";

// // import date fields from mui
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "1px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// export default function ProjectEditCard(props) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const [updatedData, setUpdatedData] = useState({
//     title: props.title,
//     description: props.description,
//     serviceName: props.serviceName,
//   });
//   const [selectedFile, setSelectedFile] = useState(null);

//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleFormChange = (event) => {
//     const { name, value } = event.target;
//     setUpdatedData((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleFileInputChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);
//   };

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const handleEdit = (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append("title", updatedData.title);
//     formData.append("description", updatedData.description);
//     formData.append("due", selectedDate);
//     formData.append("image", selectedFile);

//     axios
//       .patch(
//         `${process.env.REACT_APP_URL}project/edit/${props.rowId}`,
//         formData
//       )
//       .then(async (response) => {
//         console.log(response);
//         setUpdatedData({
//           title: props.title,
//           description: props.description,
//           serviceName: props.serviceName,
//         });
//         setOpen(false);
//         await props.regetData();
//         toast.success("Project edited successfully");
//       })
//       .catch((error) => {
//         console.log("Error editing project", error);
//         toast.error(error.response.data.err);
//       });
//   };

//   return (
//     <>
//       <div>
//         <IconButton onClick={handleOpen}>
//           <EditIcon />
//         </IconButton>
//         <Modal
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//         >
//           <Box sx={style}>
//             <Typography id="modal-modal-title" variant="h6" component="h2">
//               Edit Project
//             </Typography>
//             <form>
//               <Grid container spacing={1}>
//                 <Grid xs={12} sm={12} item>
//                   <TextField
//                     placeholder="Enter a project title"
//                     name="title"
//                     value={updatedData.title}
//                     label="Title"
//                     onChange={handleFormChange}
//                     variant="outlined"
//                     fullWidth
//                     required
//                   />
//                 </Grid>
//                 <Grid xs={12} sm={12} item>
//                   <TextField
//                     placeholder="Enter a project description"
//                     name="description"
//                     value={updatedData.description}
//                     label="Description"
//                     onChange={handleFormChange}
//                     variant="outlined"
//                     fullWidth
//                     required
//                   />
//                 </Grid>
//                 <Grid xs={12} sm={12} item>
//                   <LocalizationProvider dateAdapter={AdapterDayjs}>
//                     <DemoContainer components={["DatePicker"]}>
//                       <DatePicker
//                         label="Enter a due date"
//                         onChange={handleDateChange}
//                         renderInput={(params) => <TextField {...params} />}
//                       />
//                     </DemoContainer>
//                   </LocalizationProvider>
//                 </Grid>
//                 <Grid xs={12} sm={12} item>
//                   <label htmlFor="myfile">Select a file:</label>
//                   <input
//                     type="file"
//                     id="image"
//                     name="image"
//                     onChange={handleFileInputChange}
//                     className={classes.filesInput}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={12}>
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     color="primary"
//                     onClick={handleEdit}
//                     className={classes.addButton}
//                   >
//                     Edit Project
//                   </Button>
//                 </Grid>
//               </Grid>
//             </form>
//           </Box>
//         </Modal>
//       </div>
//     </>
//   );
// }