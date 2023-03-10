import { useState } from "react"
import { useGetIdentity } from "@pankod/refine-core"
import { FieldValue, useForm } from "@pankod/refine-react-hook-form"
import { useNavigate } from "@pankod/refine-react-router-v6"
import Form from "components/common/Form"

const CreateProperty = () => {
    const navigate = useNavigate();
    const { data: user } = useGetIdentity();
    const [propertyImage, setPropertyImage] = useState({ name: '', url: '' });
    const { refineCore: { onFinish, formLoading }, register, handleSubmit } = useForm();

    const handleImageChange = () => { };
    const onFinishHandler = () => { };

    return (
        <Form
            type="Create"
            onFinish={onFinish}
            formLoading={formLoading}
            register={register}
            handleSubmit={handleSubmit}
            handleImageChange={handleImageChange}
            onFinishHandler={onFinishHandler}
            propertyImage={propertyImage}
        />
    )
}

export default CreateProperty