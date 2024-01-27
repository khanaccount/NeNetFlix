import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import ArrowRight from "../../../public/assets/header/arrowRight.svg";
import s from "./index.module.scss";
import Error from "../../../public/assets/header/error.svg";

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Неверный формат электронной почты"),
});

export function SubscribeForm() {
    const handleSubmit = (values: any, { setSubmitting }: any) => {
        if (!values.email) {
            alert("Введите Email");
        } else {
            alert(`${values.email} ваш запрос успешно отправлен`);
        }
        setSubmitting(false);
    };

    return (
        <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <div className={s.inputContainer}>
                    <Field
                        type="text"
                        name="email"
                        placeholder="Ваша почта"
                        className={s.input}
                        maxLength={255}
                        required
                    />
                    <button className={s.submitEmail} type="submit">
                        Начать
                        <Image
                            src={ArrowRight}
                            alt="arrowRight"
                            width={25}
                            height={25}
                        />
                    </button>
                </div>
                <ErrorMessage
                    name="email"
                    render={(msg) => (
                        <div className={s.errorMessage}>
                            <Image
                                src={Error}
                                alt="errorText"
                                width={20}
                                height={20}
                            />
                            <p className={s.errorText}>{msg}</p>
                        </div>
                    )}
                />
            </Form>
        </Formik>
    );
}

export default SubscribeForm;
