import { FC } from "react";
import Header from "../shared/Header";
import { Button } from "@/components/ui/button";

const LoginComponent: FC = () => {
    return (
        <>
            <Header text="Login" />
            <div className="flex justify-center align-top mt-5">
                <Button variant={"default"}>
                    Login here
                </Button>
            </div>
        </>
    )
}

export default LoginComponent;