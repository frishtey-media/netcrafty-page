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
                    backgroundColor: 'rgba(255,255,255)',
                    color: 'black'
                }}>
                    <Stack
                        direction={"row"}
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Typography variant='h6'>
                            Book your <span className="text-blue fw-bold">FREE</span> Slot right now for consultation
                        </Typography>
                        <IconButton onClick={handleClose}>
                            <XCircle weight='fill' color="black" size={24} />
                        </IconButton>
                    </Stack>
                </DialogTitle>
                <DialogContent sx={{
                    backgroundColor: 'rgba(255,255,255)'
                }}>
                    <ContactForm />
                </DialogContent>
            </Dialog>
        </>
    )
}