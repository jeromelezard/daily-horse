import ErrorLayout from "@/components/error";

export default function PageNotFound() {
    return <ErrorLayout action="home" errorCode="404" errorText="Couldn't find page :(" />;
}
