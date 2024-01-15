import { Grid, Snackbar, Stack } from "@mui/material";
import FormProvider from "./hook-form/FormProvider";
import { forwardRef, useState } from "react";
import MuiAlert from '@mui/material/Alert';
import { RHFTextField } from "./hook-form";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ContactForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openFailure, setOpenFailure] = useState(false);

    const ContactSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        phone: Yup.string().required("Phone number is required"),
        email: Yup.string()
            .required("Email is required")
            .email("Email must be a valid email address"),
        subject: Yup.string().required("Subject is required"),
        description: Yup.string().required("Description is required")
    });

    const defaultValues = {
        name: "",
        phone: "",
        email: "",
        subject: "",
        description: ""
    };

    const methods = useForm({
        resolver: yupResolver(ContactSchema),
        defaultValues,
    });

    const {
        reset,
        setError,
        handleSubmit,
        formState: { errors },
    } = methods;

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);

            const response = await fetch("/api/send-mail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            console.log(response);

            if (response.ok) {
                setOpenSuccess(true);
            }
            else {
                setOpenFailure(true);
            }
        }
        catch (error) {
            console.error(error);
            reset();
            setError("afterSubmit", {
                ...error,
                message: error.message,
            });
        }
        finally {
            reset();
            setIsLoading(false);
        }
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        reset();
        setOpenSuccess(false);
        setOpenFailure(false);
    };

    return (
        <>
            <Snackbar open={openSuccess}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    Query sent successfully
                </Alert>
            </Snackbar>

            <Snackbar open={openFailure}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert onClose={handleCloseSnackbar} severity="warning" sx={{ width: '100%' }}>
                    Failed to send query at the moment. Try again after sometime.
                </Alert>
            </Snackbar>

            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={4} pt={6}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <Stack spacing={3} mb={4} sx={{ width: '100%' }}>
                        {!!errors.afterSubmit && (
                            <Alert severity="error">{errors.afterSubmit.message}</Alert>
                        )}

                        <RHFTextField
                            name="name"
                            label="Your name"
                        />
                        <Grid container>
                            <Grid item xs={12} sm={12} md={5.75} lg={5.75}>
                                <RHFTextField
                                    name="email"
                                    label="Email address"
                                />
                            </Grid>
                            <Grid item xs={0} sm={0} md={0.5} lg={0.5}></Grid>
                            <Grid item xs={12} sm={12} md={5.75} lg={5.75} sx={{ mt: { sm: 3, xs: 3, md: 0, lg: 0 } }}>
                                <RHFTextField
                                    name="phone"
                                    label="Phone number"
                                />
                            </Grid>
                        </Grid>
                        <RHFTextField
                            name="subject"
                            label="Subject"
                        />
                        <RHFTextField
                            name="description"
                            label="Description"
                            multiline
                            rows={4}
                        />

                    </Stack>

                    <LoadingButton
                        className="btn-default"
                        color="primary"
                        size='large'
                        type="submit"
                        variant="contained"
                        loading={isLoading}
                        sx={{
                            background: "linear-gradient(95deg,#059dff 15%,#6549d5 45%,#e33fa1 75%,#fb5343) 95%/200% 100%",
                            color: (theme) => theme.palette.mode === "light" ? "grey.800" : "common.white",
                            '&:hover': {
                                boxShadow: "0 0 20px 5px rgba(251,83,67,0.2)"
                            },
                        }}
                    >
                        <h3 style={{ marginBottom: '0rem' }}>Sign Up</h3>
                    </LoadingButton>
                </Stack>

            </FormProvider>
        </>
    )
}