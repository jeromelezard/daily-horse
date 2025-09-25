import ErrorLayout from "@/components/error";

export default function PageNotFound() {
  return (
    <ErrorLayout
      action="refresh"
      errorCode="404"
      errorText="Something went wrong fetching the animal, please contact Jerome."
    />
  );
}
