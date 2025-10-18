import { Spinner } from "../ui/spinner";

export default function MainSkeleton() {
    return (
        <div className="w-full relative h-[40vh] flex  justify-center items-center ">
            {/* <Skeleton className=" rounded-2xl bg-slate-400/30 max-h-[80vh] h-full object-contain shadow-lg" /> */}
            <Spinner />
        </div>
    );
}
