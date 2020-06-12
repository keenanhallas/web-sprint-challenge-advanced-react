// write your custom hook here to control your checkout form
import { useState } from "react";

export const useForm = (initialState) => {
    const [formState, setFormState] = useState(initialState);

    const handleChanges = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        console.log(formState);
      };

    return [formState, handleChanges];
}
