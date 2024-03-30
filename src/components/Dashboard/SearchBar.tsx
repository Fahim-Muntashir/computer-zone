import React from "react";
import { Input } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export function SearchBar() {
    const [email, setEmail] = React.useState("");
    const onChange = ({ target }) => setEmail(target.value);

    return (
        <div className="relative my-2 flex w-full max-w-full">
            <Input
                type="email"
                label="Search "
                value={email}
                onChange={onChange}
                className="pr-20 rounded-xl !border-gray-200"
                containerProps={{
                    className: "min-w-0",
                }}
            />

            <MagnifyingGlassIcon className="cursor-pointer h-8 me-0 !absolute right-1 top-1 rounded-lg"></MagnifyingGlassIcon>
        </div >
    );
}