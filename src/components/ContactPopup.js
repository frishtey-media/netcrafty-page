import { Dialog, DialogContent, DialogTitle, IconButton, Stack, Typography, Zoom } from "@mui/material";
import { XCircle } from "phosphor-react";
import { forwardRef } from "react";
import ContactForm from "./ContactForm";

const Transition = forwardRef(function Transition(props, ref) {
    return <Zoom direction="up" ref={ref} {...props} />;
});

export default function ContactPopup({ open, handleClose }) {
    return (
        <>
            <Dialog fullWidth maxWidth="sm"
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
            >
                <DialogTitle sx={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    color: 'white'
                }}>
                    <Stack
                        direction={"row"}
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Typography variant='h6'>{"Let's get to know each other"}</Typography>
                        <IconButton onClick={handleClose}>
                            <XCircle weight='fill' color="white" size={24} />
                        </IconButton>
                    </Stack>
                </DialogTitle>
                <DialogContent sx={{
                    backgroundColor: 'rgba(0,0,0,0.5)'
                }}>
                    <ContactForm />
                </DialogContent>
            </Dialog>
        </>
    )
}