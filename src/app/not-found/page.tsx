import { NextPage } from "next";
import GlobalErrorComponent from "../components/shared/GlobalErrorComponent";

const NotFoundPage: NextPage = () => {
    return <GlobalErrorComponent statusCode={"404"} message={"Post Not found"} />
}

export default NotFoundPage;